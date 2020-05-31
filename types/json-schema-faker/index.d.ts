// Type definitions for json-schema-faker 0.5
// Project: https://github.com/json-schema-faker
// Definitions by: Charles Desbiens <https://github.com/baremaximum>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

/// <reference types="node" />

import { JSONSchema4, JSONSchema6, JSONSchema7 } from 'json-schema';

export as namespace jsf;

declare const version: string;
declare function format(nameOrFormatMap?: NameOrFormatMap, callback?: (schema?: Schema) => void): any;
declare function extend(name: string, cb: () => void): any;
declare function define(name: string, cb: () => void): any;
declare function reset(name: string): any;
declare function locate(name: string): any;
declare function generate(schema: Schema, refs?: string | Schema[]): any[];
declare function resolve(schema: Schema, refs?: string | Schema[], cwd?: string): Promise<any[]>;
declare function option(option: string | OptionInputObject, value?: any): any;

// jsf.random
export namespace random {
    function randexp(value: string): string | number;
    function pick<T>(collection: T[]): T;
    function date(step: string): Date;
    function shuffle<T>(collection: T[]): T[];
    function number(min?: number, max?: number, defMin?: number, defMax?: number, hasPrecision?: boolean): number;
}

// Type must be cast on parameters.
declare type Schema = JSONSchema4 | JSONSchema6 | JSONSchema7;
declare type OptionInputObject = Partial<
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
