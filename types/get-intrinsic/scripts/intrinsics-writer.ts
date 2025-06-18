/// <reference types="node"/>
import type { WriteStream } from 'fs';
import type { BaseIntrinsic, Override, BASE_INTRINSICS, BASE_INTRINSIC_DATA, LEGACY_ALIASES } from './intrinsics-data';

const { getOwnPropertyDescriptor: $gOPD } = Reflect;
const { getOwnPropertyNames: $gOPN } = Object;
const hasOwn = Function.prototype.call.bind(Object.prototype.hasOwnProperty) as typeof import('has');

function isObject(value: unknown): value is object {
    if (value === undefined || value === null) return false;
    return typeof value === 'object' || typeof value === 'function';
}

function appendType(parentType: string, propertyName: string) {
    if (parentType === 'unknown' || parentType === 'any') {
        return parentType;
    }
    if (parentType.startsWith('typeof ') && !parentType.includes('[')) {
        return `${parentType}.${propertyName}`;
    }
    return `${parentType}['${propertyName}']`;
}

export interface PrintOptions {
    intrinsicName: string;
    type: string;
    value?: unknown;
    parentPath?: string;
    parentType?: string;
    parentGetterType?: string;
    isGetter?: boolean;
    data?: BaseIntrinsic;
}

export interface NestedIntrinsic extends PrintOptions {
    isGetter: boolean;
    intrinsicName: string;
    parentPath: string;
    parentType: string;
    parentGetterType?: string;
    value: unknown;
}

export interface IntrinsicsData {
    readonly baseIntrinsics: typeof BASE_INTRINSICS;
    readonly baseIntrinsicData: typeof BASE_INTRINSIC_DATA;
    readonly legacyAliases: typeof LEGACY_ALIASES;
}

export enum PropertyKind {
    UNDEFINED = 0,
    DATA = 1,
    ACCESSOR = 2,
    OVERRIDDEN = 3,
}

function resolveProperty(
    propertyName: string,
    value: unknown,
    type: string,
    get?: string,
    override?: string | Override,
) {
    let overrideType;
    let propertyType;
    if (typeof override === 'string') {
        overrideType = propertyType = override;
        override = undefined;
    } else {
        propertyType = (overrideType = override?.type) || appendType(get || type, propertyName);
    }

    let propertyValue;
    let propertyKind: PropertyKind | null = overrideType ? PropertyKind.OVERRIDDEN : null;
    if (isObject(value)) {
        const desc = $gOPD(value, propertyName);
        if (desc) {
            const isGetter = 'get' in desc;
            propertyValue = isGetter ? desc.get : desc.value;
            propertyKind ?? (propertyKind = isGetter ? PropertyKind.ACCESSOR : PropertyKind.DATA);
        } else {
            propertyKind ?? (propertyKind = PropertyKind.UNDEFINED);
        }
    }

    return {
        kind: propertyKind,
        type: propertyType,
        value: propertyValue,
        data: override,
    };
}

const indentBase = '    ';
export class IntrinsicsWriter {
    private readonly outStream: WriteStream;
    private readonly nestedIntrinsics: NestedIntrinsic[] = [];

    constructor(stream: WriteStream) {
        this.outStream = stream;
    }

    private printIntrinsic(
        {
            intrinsicName,
            type,
            value,
            parentPath = '',
            parentType = 'unknown',
            parentGetterType = '',
            isGetter = false,
            data,
        }: PrintOptions,
        indent: string,
        legacyAliases: typeof LEGACY_ALIASES | null,
        skipNested = false,
    ) {
        const { nestedIntrinsics, outStream } = this;

        const path = parentPath ? `${parentPath}.${intrinsicName}` : intrinsicName;
        const overrides = data?.overrides;
        const get = data?.get;
        const getterType = data?.getterType;

        outStream.write(`\
${indent}'%${path}%': ${isGetter ? `(this: ${parentGetterType || parentType}) => ` : ''}${type};
`);

        if (legacyAliases !== null && hasOwn(legacyAliases, `%${path}%`)) return;

        const isObj = isObject(value);
        const propertyNames = isObj && type !== 'any' && type !== 'unknown' ? $gOPN(value) : [];
        for (const intrinsicName of propertyNames) {
            if (intrinsicName === 'constructor') {
                continue;
            }

            if (typeof value === 'function' && (intrinsicName === 'length' || intrinsicName === 'name')) {
                continue;
            }

            // tslint:disable-next-line: strict-comparisons
            if (value === RegExp && intrinsicName.startsWith('$')) {
                continue;
            }

            const override = overrides?.[intrinsicName];
            if (override === null) {
                continue;
            }

            const { kind, type: propertyType, value: propertyValue, data } = resolveProperty(
                intrinsicName,
                value,
                type,
                get,
                override,
            );
            if (kind === PropertyKind.UNDEFINED) continue;

            const nestedIntrinsic = {
                intrinsicName,
                type: propertyType,
                value: propertyValue,
                parentPath: path,
                parentType: type,
                parentGetterType: getterType,
                isGetter: kind === PropertyKind.ACCESSOR,
                data,
            };

            if (skipNested) {
                nestedIntrinsics[nestedIntrinsics.length] = nestedIntrinsic;
            } else {
                this.printIntrinsic(nestedIntrinsic, indent, legacyAliases);
            }
        }

        let overrideNames: string[];
        if (
            overrides &&
            (overrideNames = $gOPN(overrides).filter(overrideName => {
                return !propertyNames.includes(overrideName);
            })).length > 0
        ) {
            for (const propertyName of overrideNames) {
                const override = overrides[propertyName];
                if (override === null) {
                    continue;
                }

                const { kind, type: propertyType, value: propertyValue, data } = resolveProperty(
                    propertyName,
                    value,
                    type,
                    get,
                    override,
                );

                const nestedIntrinsic = {
                    intrinsicName: propertyName,
                    type: propertyType,
                    value: propertyValue,
                    parentPath: path,
                    parentType: type,
                    parentGetterType: getterType,
                    isGetter: kind === PropertyKind.ACCESSOR,
                    data,
                };

                if (skipNested) {
                    nestedIntrinsics[nestedIntrinsics.length] = nestedIntrinsic;
                } else {
                    this.printIntrinsic(nestedIntrinsic, indent, legacyAliases);
                }
            }
        }
    }

    printIntrinsics(intrinsicsData: IntrinsicsData, options?: { skipLegacyNested?: boolean, nsWrapper?: string | null }): void;
    printIntrinsics(intrinsicsData: IntrinsicsData, { skipLegacyNested = false, nsWrapper = null } = {}) {
        const { nestedIntrinsics, outStream } = this;
        const { baseIntrinsics, baseIntrinsicData, legacyAliases } = intrinsicsData;
        const skippedLegacyAliases = skipLegacyNested ? legacyAliases : null;

        const indent = indentBase.repeat(nsWrapper ? 2 : 1);
        outStream.write(`
// autogenerated by scripts/collect-intrinsics.ts
// do not edit! ${new Date().toISOString()}

/* eslint-disable @typescript-eslint/no-wrapper-object-types */
${nsWrapper ? `declare namespace ${nsWrapper} {
    ` : 'export '}interface Intrinsics {
`);

        for (const intrinsicName of $gOPN(baseIntrinsics)) {
            const alias = legacyAliases[intrinsicName];
            let baseName = alias ? alias[0] : intrinsicName.slice(1, -1);
            let data: string | Override | undefined = baseIntrinsicData[baseName];

            let type: string;
            if (typeof data === 'string') {
                type = data;
                data = undefined;
            } else {
                type = data?.type || 'unknown';
            }

            let value = baseIntrinsics[`%${baseName}%`];
            let printOptions: PrintOptions = {
                intrinsicName: baseName,
                type,
                value,
                data,
            };

            if (alias) {
                const { length } = alias;
                let parentType;
                let kind;
                for (let i = 1; i < length; i++) {
                    const get = data?.get;
                    const propertyName = alias[i];
                    baseName += `.${propertyName}`;

                    const override = data?.overrides?.[propertyName];
                    if (override === null) {
                        throw new Error("Legacy alias can't point to `null` override");
                    }

                    parentType = type;
                    ({ kind, value, type, data } = resolveProperty(propertyName, value, type, get, override));
                }

                printOptions = {
                    intrinsicName: intrinsicName.slice(1, -1),
                    type,
                    value,
                    parentType,
                    parentGetterType: printOptions.data?.getterType,
                    isGetter: kind === PropertyKind.ACCESSOR,
                    data,
                };
            }

            this.printIntrinsic(printOptions, indent, skippedLegacyAliases, /* skipNested: */ true);
        }

        outStream.write(nsWrapper ? '    }\n' : '}\n');

        if (nestedIntrinsics.length > 0) {
            if (nsWrapper) {
                outStream.write(`
    interface Intrinsics {
`);
            } else {
                outStream.write(`
// prettier-ignore
export interface Intrinsics {
`);
            }

            for (const nestedIntrinsic of nestedIntrinsics) {
                this.printIntrinsic(nestedIntrinsic, indent, skippedLegacyAliases);
            }

            if (nsWrapper) {
                outStream.write('    }\n');
            }
        }

        outStream.write('}\n');
    }
}
