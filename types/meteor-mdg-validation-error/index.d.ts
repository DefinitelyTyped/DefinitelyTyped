/// <reference types="meteor"/>

// eslint-disable-next-line @definitelytyped/no-single-declare-module
declare module "meteor/mdg:validation-error" {
    interface ValidationErrorDetail {
        name: string;
        type: string;
        [name: string]: any;
    }
    class ValidationError extends Meteor.Error {
        /**
         * @param errors The "details" property of the ValidationError must be an array of objects containing at least two properties. The "name" and "type" properties are required.
         */
        constructor(errors: ValidationErrorDetail[], message?: string);
        /** Static method checking if a given Meteor.Error is an instance of ValidationError. */
        static is(err: any): err is ValidationError;
        /**  Universal validation error code to be use in applications and packages. */
        static ERROR_CODE: string;
        /**  Default validation error message that can be changed globally. */
        static DEFAULT_MESSAGE: string;
    }
}
