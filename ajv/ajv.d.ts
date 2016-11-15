// Type definitions for ajv
// Project: https://github.com/epoberezkin/ajv
// Definitions by: York Yao <https://github.com/plantain-00/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "ajv" {
    class Ajv {
        /**
         * Create Ajv instance.
         */
        constructor(options?: Ajv.AjvOptions);
        /**
         * Generate validating function and cache the compiled schema for future use.
         */
        compile(schema: any): Ajv.AjvValidate;
        /**
         * Asyncronous version of compile method that loads missing remote schemas using asynchronous function in options.loadSchema.
         */
        compileAsync(schema: any, callback: (error: Error, validate: Ajv.AjvValidate) => void): void;
        /**
         * Validate data using passed schema (it will be compiled and cached).
         */
        validate(schema: any, data: any): boolean | PromiseLike<boolean>;
        errors: Ajv.ValidationError[];
        /**
         * Add schema(s) to validator instance.
         */
        addSchema(schema: any, key: string): void;
        /**
         * Adds meta schema(s) that can be used to validate other schemas.
         * That function should be used instead of addSchema because there may be instance options that would compile a meta schema incorrectly (at the moment it is removeAdditional option).
         */
        addMetaSchema(schema: any, key: string): void;
        /**
         * Validates schema.
         * This method should be used to validate schemas rather than validate due to the inconsistency of uri format in JSON-Schema standard.
         */
        validateSchema(schema: any): Boolean;
        /**
         * Retrieve compiled schema previously added with addSchema by the key passed to addSchema or by its full reference (id).
         * Returned validating function has schema property with the reference to the original schema.
         */
        getSchema(key: string): Ajv.AjvValidate;
        /**
         * Remove added/cached schema.
         * Even if schema is referenced by other schemas it can be safely removed as dependent schemas have local references.
         */
        removeSchema(schema: any): void;
        /**
         * Add custom format to validate strings. It can also be used to replace pre-defined formats for Ajv instance.
         */
        addFormat(name: string, format: any): void;
        /**
         * Add custom validation keyword to Ajv instance.
         */
        addKeyword(keyword: string, definition: Ajv.AjxKeywordDefinition): void;
        errorsText(): any;
        static ValidationError: Function;
    }
    namespace Ajv {
        type AjvOptions = {
            v5?: boolean;
            allErrors?: boolean;
            verbose?: boolean;
            jsonPointers?: boolean;
            uniqueItems?: boolean;
            unicode?: boolean;
            format?: string;
            formats?: any;
            schemas?: any;
            missingRefs?: boolean;
            loadSchema?(uri: string, callback: (error: Error, body: any) => void): void;
            removeAdditional?: boolean;
            useDefaults?: boolean;
            coerceTypes?: boolean;
            async?: any;
            transpile?: string;
            meta?: boolean;
            validateSchema?: boolean;
            addUsedSchema?: boolean;
            inlineRefs?: boolean;
            passContext?: boolean;
            loopRequired?: number;
            ownProperties?: boolean;
            multipleOfPrecision?: boolean | number;
            errorDataPath?: string,
            messages?: boolean;
            beautify?: boolean;
            cache?: any;
        }
        type AjvValidate = ((data: any) => boolean | PromiseLike<boolean>) & {
            errors: ValidationError[];
        }
        type AjxKeywordDefinition = {
            async?: boolean;
            type: string;
            compile?: (schema: any, parentsSchema: any) => ((data: any) => boolean | PromiseLike<boolean>);
            validate?: (schema: any, data: any) => boolean;
        }
        type ValidationError = {
            keyword: string;
            dataPath: string;
            schemaPath: string;
            params: any;
            message: string;
            schema: any;
            parentSchema: any;
            data: any;
        }
    }
    export = Ajv;
}
