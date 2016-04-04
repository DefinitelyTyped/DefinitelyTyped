// Type definitions for revalidator 0.3.1
// Project: https://github.com/flatiron/revalidator
// Definitions by: Jason Turner <https://github.com/brewsoftware>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module Revalidator {
    interface RevalidatorStatic {
        validate(object: any, schema: ISchema, options: any): IReturnMessage;
    }

    interface IReturnMessage {
        valid: boolean;
        errors: string[];
    }

    interface ISchema {
        required?: boolean;
        type: string;
        pattern?: any;
        maxLength?: number;
        minLength?: number;
        minimum?: number;
        maximum?: number;
        allowEmpty: boolean;
        exclusiveMinimum: number;
        exclusiveMaximum?: number;
        divisibleBy?: number;
        minItems?: number;
        maxItems?: number;
        uniqueItems?: boolean;
        enum?: any;
        format?: string;
        conform?: (data:any) => boolean;
        depdendencies?: string;

    }
}

declare var revalidator: Revalidator.RevalidatorStatic;

declare module "revalidator" {
    export = revalidator;
}
