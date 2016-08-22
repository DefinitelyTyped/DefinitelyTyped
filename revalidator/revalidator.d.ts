// Type definitions for revalidator 0.3.1
// Project: https://github.com/flatiron/revalidator
// Definitions by: Jason Turner <https://github.com/brewsoftware>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module Revalidator {

    interface Options {
        /** Enforce format constraints (default true) */
        validateFormats?: boolean;
        /** When validateFormats is true treat unrecognized formats as validation errors (default false) */
        validateFormatsStrict?: boolean;
        /** When validateFormats is true also validate formats defined in validate.formatExtensions (default true) */
        validateFormatExtensions?: boolean;
        /** When additionalProperties is true allow additional unvisited properties on the object. (default true) */
        additionalProperties?: boolean;
        /** Enforce casting of some types (for integers/numbers are only supported) when it's possible, e.g. "42" => 42, but "forty2" => "forty2" for the integer type. */
        cast?: boolean;
    }

    interface RevalidatorStatic {
        validate(object: any, schema: JSONSchema, options?: Options): IReturnMessage;
    }

    type Types = 'string' | 'number' | 'integer' | 'array' | 'boolean' | 'object' | 'null' | 'any';

    interface IErrrorProperty {
        property: string;
        message: string;
    }

    interface IReturnMessage {
        valid: boolean;
        errors: IErrrorProperty[];
    }

    interface JSONSchema {
        properties: {
            [index: string]: ISchema;
        }
    }

    interface ISchema {
        type: Types|Types[];
        required?: boolean;
        pattern?: any;
        maxLength?: number;
        description?: string;
        minLength?: number;
        minimum?: number;
        maximum?: number;
        allowEmpty?: boolean;
        exclusiveMinimum?: number;
        exclusiveMaximum?: number;
        divisibleBy?: number;
        minItems?: number;
        maxItems?: number;
        uniqueItems?: boolean;
        enum?: any;
        message?: string;
        messages?: {[index: string]: string};
        default?: any;
        format?: string;
        conform?: (data:any) => boolean;
        dependencies?: string;
    }
}

declare var revalidator: Revalidator.RevalidatorStatic;

declare module "revalidator" {
    export = revalidator;
}