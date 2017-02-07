// Type definitions for revalidator 0.3.1
// Project: https://github.com/flatiron/revalidator
// Definitions by: Jason Turner <https://github.com/brewsoftware>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module Revalidator {

    interface IOptions {
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
        validate<T>(object: T, schema: JSONSchema<T>, options?: IOptions): IReturnMessage;
    }

    type Types = 'string' | 'number' | 'integer' | 'array' | 'boolean' | 'object' | 'null' | 'any';
    type Formats = 'url' | 'email' | 'ip-address' | 'ipv6' | 'date-time' | 'date' | 'time' | 'color' | 'host-name' | 'utc-millisec' | 'regex';

    interface IErrrorProperty {
        property: string;
        message: string;
    }

    interface IReturnMessage {
        valid: boolean;
        errors: IErrrorProperty[];
    }

    interface JSONSchema<T> {
        properties?: ISchemas<T>;
    }

    interface ISchemas<T> {
        [index: string]: ISchema<T>|JSONSchema<T>;
    }

    interface ISchema<T> {
        /**The type of value should be equal to the expected value */
        type: Types|Types[];
        /**If true, the value should not be undefined */
        required?: boolean;
        /**The expected value regex needs to be satisfied by the value */
        pattern?: RegExp|string;
        /**The length of value must be greater than or equal to expected value */
        maxLength?: number;
        /**Description for this object */
        description?: string;
        /**The length of value must be lesser than or equal to expected value */
        minLength?: number;
        /**Value must be greater than or equal to the expected value */
        minimum?: number;
        /**Value must be lesser than or equal to the expected value */
        maximum?: number;
        /**If false, the value must not be an empty string */
        allowEmpty?: boolean;
        /**Value must be greater than expected value */
        exclusiveMinimum?: number;
        /**Value must be lesser than expected value */
        exclusiveMaximum?: number;
        /**Value must be divisible by expected value */
        divisibleBy?: number;
        /**Value must contain more than expected number of items */
        minItems?: number;
        /**Value must contain fewer than expected number of items */
        maxItems?: number;
        /**Value must hold a unique set of values */
        uniqueItems?: boolean;
        /**Value must be present in the array of expected values */
        enum?: any[];
        /**Custom messages for different constraints */
        message?: string;
        /**Custom messages for different constraints */
        messages?: {[index: string]: string};
        /**Default value */
        default?: any;
        /**Value must be a valid format */
        format?: Formats;
        /**Value must conform to constraint denoted by expected value */
        conform?: (value: any, data?: T) => boolean;
        /**Value is valid only if the dependent value is valid */
        dependencies?: string;
    }
}

declare var revalidator: Revalidator.RevalidatorStatic;

declare module "revalidator" {
    export = revalidator;
}