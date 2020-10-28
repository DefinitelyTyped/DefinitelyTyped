#!/usr/bin/env ts-node-script
/// <reference types="node"/>
import path = require('path');
import fs = require('fs');

import { BaseIntrinsic, Override, BASE_INTRINSICS, LEGACY_ALIASES, BASE_INTRINSIC_DATA } from './intrinsics-data';

const OUT_FILE_PATH = path.resolve(__dirname, '..', 'GetIntrinsic.d.ts');

const { getOwnPropertyDescriptor: $gOPD } = Reflect;
const { getOwnPropertyNames: $gOPN } = Object;
const hasOwn = Function.prototype.call.bind(Object.prototype.hasOwnProperty) as typeof import('has');

function isObject(value: unknown): value is object {
    if (value === undefined || value === null) return false;
    return typeof value === 'object' || typeof value === 'function';
}

interface NestedIntrinsic extends PrintOptions {
    isGetter: boolean;
    intrinsicName: string;
    parentPath: string;
    parentType: string;
    parentGetterType?: string;
    value: unknown;
}

const nestedIntrinsics: NestedIntrinsic[] = [];

function appendType(parentType: string, propertyName: string) {
    if (parentType === 'unknown' || parentType === 'any') {
        return parentType;
    }
    if (parentType.startsWith('typeof ') && !parentType.includes('[')) {
        return `${parentType}.${propertyName}`;
    }
    return `${parentType}['${propertyName}']`;
}

interface PrintOptions {
    intrinsicName: string;
    type: string;
    value?: unknown;
    parentPath?: string;
    parentType?: string;
    parentGetterType?: string;
    isGetter?: boolean;
    data?: BaseIntrinsic;
}

enum PropertyKind {
    UNDEFINED = 0,
    DATA = 1,
    ACCESSOR = 2,
    OVERRIDDEN = 3,
}

const GENERATED_MARKER = '// ------------------------ >8 ------------------------';

const fileHead = (() => {
    let fh = fs.readFileSync(OUT_FILE_PATH, { encoding: 'utf-8' });

    const markerIndex = fh.indexOf(`\n${GENERATED_MARKER}`);
    if (markerIndex < 0) {
        throw new Error('Cannot find GENERATED_MARKER in GetIntrinsic.d.ts');
    }

    fh = fh.substring(0, markerIndex);
    return fh;
})();

const outStream = fs.createWriteStream(OUT_FILE_PATH, { encoding: 'utf-8' });
outStream.write(fileHead);

function printIntrinsic(
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
    skipNested: boolean = false,
) {
    const path = parentPath ? `${parentPath}.${intrinsicName}` : intrinsicName;
    const overrides = data?.overrides;
    const get = data?.get;
    const getterType = data?.getterType;

    outStream.write(`\
        '%${path}%': ${isGetter ? `(this: ${parentGetterType || parentType}) => ` : ''}${type};
`);

    // if (hasOwn(LEGACY_ALIASES, `%${path}%`)) return;

    const isObj = isObject(value);
    const propertyNames = isObj && type !== 'any' && type !== 'unknown' ? $gOPN(value) : [];
    for (const intrinsicName of propertyNames) {
        if (intrinsicName === 'constructor') {
            continue;
        }

        if (typeof value === 'function' && (intrinsicName === 'length' || intrinsicName === 'name')) {
            continue;
        }

        if (
            value === RegExp &&
            intrinsicName.startsWith('$')
        ) {
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
            printIntrinsic(nestedIntrinsic);
        }
    }

    let overrideNames: string[];
    if (
        overrides &&
        (overrideNames = $gOPN(overrides).filter((overrideName) => {
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
                printIntrinsic(nestedIntrinsic);
            }
        }
    }
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

outStream.write(`
${GENERATED_MARKER}
// autogenerated by scripts/collect-intrinsics.ts
// do not edit! ${new Date().toISOString()}

// tslint:disable: ban-types
// prettier-ignore
declare namespace GetIntrinsic {
    interface Intrinsics {
`);

for (const intrinsicName of $gOPN(BASE_INTRINSICS)) {
    const alias = LEGACY_ALIASES[intrinsicName];
    let baseName = alias ? alias[0] : intrinsicName.slice(1, -1);
    let data: string | Override | undefined = BASE_INTRINSIC_DATA[baseName];

    let type: string;
    if (typeof data === 'string') {
        type = data;
        data = undefined;
    } else {
        type = data?.type || 'unknown';
    }

    let value = BASE_INTRINSICS[`%${baseName}%`];
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

    printIntrinsic(printOptions, true);
}

outStream.write('    }\n');

if (nestedIntrinsics.length > 0) {
    outStream.write(`
    interface Intrinsics {
`);

    for (const nestedIntrinsic of nestedIntrinsics) {
        printIntrinsic(nestedIntrinsic);
    }

    outStream.write('    }\n');
}

outStream.write('}\n');
outStream.close();
