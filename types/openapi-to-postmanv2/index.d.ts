// Type definitions for openapi-to-postman 3.2
// Project: https://github.com/postmanlabs/openapi-to-postman/
// Definitions by: detachhead <https://github.com/detachhead>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export {};

import { CollectionDefinition } from 'postman-collection';

export interface Input {
    type: 'file' | 'string' | 'json';
    data: string;
}

export interface Options {
    schemaFaker?: boolean | undefined;
    requestNameSource?: 'fallback' | 'url' | undefined;
    indentCharacter?: string | undefined;
}

export interface SuccessfulValidationResult {
    result: true;
}
export interface UnsuccessfulValidationResult {
    result: false;
    reason: string;
}

export type ValidateResult = SuccessfulValidationResult | UnsuccessfulValidationResult;

type Result<T> =
    | (SuccessfulValidationResult & {
    output: ReadonlyArray<{ type: 'collection' } & T>
})
    | UnsuccessfulValidationResult;

export type ConvertResult = Result<{ data: CollectionDefinition }>;

export type MetadataResult = Result<{ name: string }>;

export type Callback<Result> = (err: unknown, result: Result) => void;

interface OptionsBase {
    external?: boolean | undefined;
    usage: ReadonlyArray<'CONVERSION' | 'VALIDATION'>;
}
export type OptionsVersion = '3.0' | '3.1';

export interface OptionsCriteria extends OptionsBase {
    version?: OptionsVersion | undefined;
}

interface OptionsTypes {
    boolean: boolean;
    enum: string;
    string: string;
    integer: number;
    array: ReadonlyArray<unknown>;
}

export interface OptionsDocument<T extends keyof OptionsTypes = keyof OptionsTypes>
    extends OptionsBase {
    name: string;
    id: string;
    type: T;
    default: Array<OptionsTypes[T]>;
    description: string;
    supportedIn: OptionsVersion[];
}

type OptionsUse = Record<string, OptionsTypes[keyof OptionsTypes]>;

export class SchemaPack {
    constructor(input: Input, options?: Options)

    convert(cb: Callback<ConvertResult>): void;

    getMetaData(cb: Callback<MetadataResult>): void;

    mergeAndValidate(cb: Callback<ValidateResult>): void;

    validate(): ValidateResult;

    validateTransaction(
        transaction: unknown,
        cb: Callback<{ requests: unknown; missingEndpoints: unknown }>,
    ): void;

    static getOptions(mode: 'document', criteria: OptionsCriteria): OptionsDocument;
    static getOptions(mode: 'use', criteria: OptionsCriteria): OptionsUse;
}

export function convert(
    input: Input,
    options: Options | undefined,
    cb: Callback<ConvertResult>,
): void;

export function getMetaData(input: Input, cb: Callback<MetadataResult>): void;

export function getOptions(mode: 'document', criteria: OptionsCriteria): OptionsDocument;
export function getOptions(mode: 'use', criteria: OptionsCriteria): OptionsUse;

export function mergeAndValidate(input: Input, cb: Callback<ValidateResult>): void;

export function validate(input: Input): ValidateResult;
