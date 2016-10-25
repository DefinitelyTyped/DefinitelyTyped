// Type definitions for Tiny Validator tv4 1.2.5
// Project: https://github.com/geraintluff/tv4
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>, Peter Snider <https://github.com/psnider>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace tv4 {

    // Note that every top-level property is optional in json-schema
    export interface JsonSchema {
        [key: string]: any;
        title?: string;          // used for humans only, and not used for computation
        description?: string;    // used for humans only, and not used for computation
        id?: string;
        $schema?: string;
        type?: string;
        items?: any;
        properties?: any;
        patternProperties?: any;
        additionalProperties?: boolean;
        required?: string[];
        definitions?: any;
        default?: any;
    }

    export type SchemaMap = {[uri: string]: JsonSchema;};
    // maps error codes/names to human readable error description for a single language
    export type ErrorMap  = {[errorCode: string]: string;};


    export interface ErrorCodes {
        [key:string]:number;
    }
    export interface ValidationError {
        code:number;
        message:any;
        dataPath?:string;
        schemaPath?:string;
        subErrors?: ValidationError[];
    }
    export interface ErrorVar extends ValidationError {
        params: any;
        subErrors: any;
        stack: string;
    }
    export interface BaseResult {
        missing:string[];
        valid:boolean;
    }
    export interface SingleResult extends BaseResult {
        error:ValidationError;
    }
    export interface MultiResult extends BaseResult {
        errors:ValidationError[];
    }
    export type FormatValidationFunction = (data: any, schema: JsonSchema) => string;
    // documentation doesnt agree with code in tv4, this type agrees with code
    export type KeywordValidationFunction = (data: any, value: any, schema: JsonSchema, dataPointerPath: string) => string | ValidationError;
    export type AsyncValidationCallback = (isValid: boolean, error: ValidationError) => void;
    export interface TV4 {
        error: ErrorVar;
        missing: string[];
        // primary API
        validate(data: any, schema: JsonSchema, checkRecursive?: boolean): boolean;
        validate(data: any, schema: JsonSchema, checkRecursive: boolean, banUnknownProperties: boolean): boolean;
        validateResult(data: any, schema: JsonSchema, checkRecursive?: boolean): SingleResult;
        validateResult(data: any, schema: JsonSchema, checkRecursive: boolean, banUnknownProperties: boolean): SingleResult;
        validateMultiple(data: any, schema: JsonSchema, checkRecursive?: boolean): MultiResult;
        validateMultiple(data: any, schema: JsonSchema, checkRecursive: boolean, banUnknownProperties: boolean): MultiResult;
        // from including: tv4.async-jquery.js
        validate(data: any, schema: JsonSchema, callback: AsyncValidationCallback, checkRecursive?: boolean): void;
        validate(data: any, schema: JsonSchema, callback: AsyncValidationCallback, checkRecursive: boolean, banUnknownProperties: boolean): void;

        // additional API for more complex cases
        addSchema(schema: JsonSchema): void;
        addSchema(uri:string, schema: JsonSchema): void;
        getSchema(uri:string): JsonSchema;
        getSchemaMap(): SchemaMap;
        getSchemaUris(filter?: RegExp): string[];
        getMissingUris(filter?: RegExp): string[];
        dropSchemas(): void;
        freshApi(): TV4;
        reset(): void;
        setErrorReporter(lang: string): void;
        setErrorReporter(reporter: (error: ValidationError, data: any, schema: JsonSchema) => string): void;
        language(code: string): void;
        addLanguage(code: string, map: ErrorMap): void;
        addFormat(format: string, validationFunction: FormatValidationFunction): void;
        addFormat(formats: {[formatName: string]: FormatValidationFunction;}): void;
        defineKeyword(keyword: string, validationFunction: KeywordValidationFunction): void;
        defineError(codeName: string, codeNumber: number, defaultMessage: string): void;

        // not documented
        normSchema(schema: JsonSchema, baseUri:string):any;
        resolveUrl(base:string, href:string):string;

        errorCodes:ErrorCodes;
    }
}

declare module "tv4" {
    var out: tv4.TV4
    export = out;
}
