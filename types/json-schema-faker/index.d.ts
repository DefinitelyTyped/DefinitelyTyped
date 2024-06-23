import { JSONSchema4, JSONSchema6, JSONSchema7 } from "json-schema";

declare namespace jsf {
    const version: string;
    function format(nameOrFormatMap?: NameOrFormatMap, callback?: (schema?: Schema) => void): any;
    function extend(name: string, cb: () => void): any;
    function define(name: string, cb: () => void): any;
    function reset(name: string): any;
    function locate(name: string): any;
    function generate(schema: Schema, refs?: string | Schema[]): any;
    function resolve(schema: Schema, refs?: string | Schema[], cwd?: string): Promise<any[]>;
    function option(option: string | OptionInputObject, value?: any): any;

    // jsf.random
    namespace random {
        function randexp(value: string): string | number;
        function pick<T>(collection: T[]): T;
        function date(step: string): Date;
        function shuffle<T>(collection: T[]): T[];
        function number(min?: number, max?: number, defMin?: number, defMax?: number, hasPrecision?: boolean): number;
    }

    type Schema = JSONSchema4 | JSONSchema6 | JSONSchema7;
    type OptionInputObject = Partial<
        {
            [option in jsfOptions]: any;
        }
    >;
    type NameOrFormatMap = string | { name: string; callback: (schema?: Schema) => void };

    // List of all valid registerable options.
    type jsfOptions =
        | "defaultInvalidTypeProduct"
        | "defaultRandExpMax"
        | "ignoreProperties"
        | "ignoreMissingRefs"
        | "failOnInvalidTypes"
        | "failOnInvalidFormat"
        | "alwaysFakeOptionals"
        | "optionalsProbability"
        | "fixedProbabilities"
        | "useExamplesValue"
        | "useDefaultValue"
        | "requiredOnly"
        | "minItems"
        | "maxItems"
        | "minLength"
        | "maxLength"
        | "refDepthMin"
        | "refDepthMax"
        | "resolveJsonPath"
        | "reuseProperties"
        | "fillProperties"
        | "random"
        | "replaceEmptyByRandomValue";
}

/** @deprecated calling JsonSchemaFaker() is deprecated, call either .generate() or .resolve()' */
declare function jsf(schema: jsf.Schema, refs?: string | jsf.Schema[]): any;
export as namespace jsf;
export = jsf;
