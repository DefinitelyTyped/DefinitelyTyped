// Type definitions for z-schema v3.16.0
// Project: https://github.com/zaggino/z-schema
// Definitions by: Adam Meadows <https://github.com/job13er>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace ZSchema {

    export interface Options {
        asyncTimeout?: number;
        forceAdditional?: boolean;
        assumeAdditional?: boolean;
        forceItems?: boolean;
        forceMinItems?: boolean;
        forceMaxItems?: boolean;
        forceMinLength?: boolean;
        forceMaxLength?: boolean;
        forceProperties?: boolean;
        ignoreUnresolvableReferences?: boolean;
        noExtraKeywords?: boolean;
        noTypeless?: boolean;
        noEmptyStrings?: boolean;
        noEmptyArrays?: boolean;
        strictUris?: boolean;
        strictMode?: boolean;
        reportPathAsArray?: boolean;
        breakOnFirstError?: boolean;
        pedanticCheck?: boolean;
        ignoreUnknownFormats?: boolean;
    }

    export interface SchemaError {
        code: string;
        description: string;
        message: string;
        params: string[];
        path: string;
    }

    export class Validator {
        constructor(options: Options);

        /**
         * @param json - either a JSON string or a parsed JSON object
         * @param schema - the JSON object representing the schema
         * @returns true if json matches schema
         */
        validate(json: any, schema: any): boolean;

        /**
         * @param json - either a JSON string or a parsed JSON object
         * @param schema - the JSON object representing the schema
         */
        validate(json: any, schema: any, callback: (err: any, valid: boolean) => void): void;

        getLastError(): SchemaError;
        getLastErrors(): SchemaError[];
    }
}

declare module "z-schema" {
    export = ZSchema.Validator;
}
