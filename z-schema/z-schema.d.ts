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
    
        /**
         * Register a custom format.
         *
         * @param name - name of the custom format
         * @param validatorFunction - custom format validator function.
         *   Returns `true` if `value` matches the custom format.
         */
        public static registerFormat(formatName: string, validatorFunction: (value: any) => boolean): void;

        /**
         * Unregister a format.
         *
         * @param name - name of the custom format
         */
        public static unregisterFormat(name: string): void;
        
        /**
         * Get the list of all registered formats.
         *
         * Both the names of the burned-in formats and the custom format names are
         * returned by this function.
         *
         * @returns {string[]} the list of all registered format names.
         */
        public static getRegisteredFormats(): string[];
        
        public static getDefaultOptions(): Options;
    
        constructor(options: Options);

        /**
         * @param schema - JSON object representing schema
         * @returns {boolean} true if schema is valid.
         */
        validateSchema(schema: any): boolean;

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
