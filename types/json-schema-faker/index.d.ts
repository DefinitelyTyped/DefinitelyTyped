// Type definitions for json-schema-faker 3.7
// Project: https://github.com/json-schema-faker
// Definitions by: Charles Desbiens <https://github.com/baremaximum>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

/// <reference types="node" />

import { JSONSchema4, JSONSchema6, JSONSchema7 } from 'json-schema';

export as namespace jsf;

export const version: string;
export function format(nameOrFormatMap?: NameOrFormatMap, callback?: (schema?: Schema) => void): any;
export function extend(name: string, cb: () => void): any;
export function define(name: string, cb: () => void): any;
export function reset(name: string): any;
export function locate(name: string): any;
export function generate<T>(schema: Schema, refs?: string | Schema[]): T[];
export function resolve<T>(schema: Schema, refs?: string | Schema[], cwd?: string): Promise<T[]>;
export function option(option: string | OptionInputObject, value?: any): any;

// jsf.random
export namespace random {
    export function randexp(value: string): string | number;
    export function pick<T>(collection: T[]): T;
    export function date(step: string): Date;
    export function shuffle<T>(collection: T[]): T[];
    export function number(
        min?: number,
        max?: number,
        defMin?: number,
        defMax?: number,
        hasPrecision?: boolean,
    ): number;
}

// Type must be cast on parameters.
export type Schema = JSONSchema4 | JSONSchema6 | JSONSchema7;
export type OptionInputObject = Partial<
    {
        [option in jsfOptions]: any;
    }
>;
declare type NameOrFormatMap = string | { name: string; callback: (schema?: Schema) => void };

// List of all valid registerable options.
declare type jsfOptions =
    | 'defaultInvalidTypeProduct'
    | 'defaultRandExpMax'
    | 'ignoreProperties'
    | 'ignoreMissingRefs'
    | 'failOnInvalidTypes'
    | 'failOnInvalidFormat'
    | 'alwaysFakeOptionals'
    | 'optionalsProbability'
    | 'fixedProbabilities'
    | 'useExamplesValue'
    | 'useDefaultValue'
    | 'requiredOnly'
    | 'minItems'
    | 'maxItems'
    | 'minLength'
    | 'maxLength'
    | 'refDepthMin'
    | 'refDepthMax'
    | 'resolveJsonPath'
    | 'reuseProperties'
    | 'fillProperties'
    | 'random'
    | 'replaceEmptyByRandomValue';
