// Type definitions for revalidator 0.3.1
// Project: https://github.com/flatiron/revalidator
// Definitions by: Jason Turner <https://github.com/brewsoftware>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module Revalidator {

    interface IOptions {
        /** Enforce format constraints (default true) */
        validateFormats?: boolean | undefined;
        /** When validateFormats is true treat unrecognized formats as validation errors (default false) */
        validateFormatsStrict?: boolean | undefined;
        /** When validateFormats is true also validate formats defined in validate.formatExtensions (default true) */
        validateFormatExtensions?: boolean | undefined;
        /** When additionalProperties is true allow additional unvisited properties on the object. (default true) */
        additionalProperties?: boolean | undefined;
        /** Enforce casting of some types (for integers/numbers are only supported) when it's possible, e.g. "42" => 42, but "forty2" => "forty2" for the integer type. */
        cast?: boolean | undefined;
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
        type?: 'object' | undefined;
        properties?: ISchemas<T> | undefined;
        patternProperties?: ISchemas<T> | undefined;
    }

    interface ISchemas<T> {
        [index: string]: ISchema<T>|JSONSchema<T>;
    }

    interface ISchema<T> {
        /**The type of value should be equal to the expected value */
        type: Types|Types[];
        /**If true, the value should not be undefined */
        required?: boolean | undefined;
        /**The expected value regex needs to be satisfied by the value */
        pattern?: RegExp|string | undefined;
        /**The length of value must be greater than or equal to expected value */
        maxLength?: number | undefined;
        /**Description for this object */
        description?: string | undefined;
        /**The length of value must be lesser than or equal to expected value */
        minLength?: number | undefined;
        /**Value must be greater than or equal to the expected value */
        minimum?: number | undefined;
        /**Value must be lesser than or equal to the expected value */
        maximum?: number | undefined;
        /**If false, the value must not be an empty string */
        allowEmpty?: boolean | undefined;
        /**Value must be greater than expected value */
        exclusiveMinimum?: number | undefined;
        /**Value must be lesser than expected value */
        exclusiveMaximum?: number | undefined;
        /**Value must be divisible by expected value */
        divisibleBy?: number | undefined;
        /**Value must contain more than expected number of items */
        minItems?: number | undefined;
        /**Value must contain fewer than expected number of items */
        maxItems?: number | undefined;
        /**Value must hold a unique set of values */
        uniqueItems?: boolean | undefined;
        /**Value must be present in the array of expected values */
        enum?: any[] | undefined;
        /**Custom messages for different constraints */
        message?: string | undefined;
        /**Custom messages for different constraints */
        messages?: {[index: string]: string} | undefined;
        /**Default value */
        default?: any;
        /**Value must be a valid format */
        format?: Formats | undefined;
        /**Value must conform to constraint denoted by expected value */
        conform?: ((value: any, data?: T) => boolean) | undefined;
        /**Value is valid only if the dependent value is valid */
        dependencies?: string | undefined;
        /**Property to describe items for type: 'array' */
        items?: ISchema<T>|JSONSchema<T> | undefined
    }
}

declare var revalidator: Revalidator.RevalidatorStatic;

declare module "revalidator" {
    export = revalidator;
}
