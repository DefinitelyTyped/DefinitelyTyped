// Type definitions for is-my-json-valid
// Project: https://github.com/mafintosh/is-my-json-valid
// Definitions by: kruncher <https://github.com/kruncher/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped



interface ValidationError {
    field: string;
    message: string;
    value: any;
    type: string;
}

interface ValidateFunction {
    (data: any): boolean;

    errors: ValidationError[];
}

interface Validator {
    (schema: any, options?: any): ValidateFunction;

    filter(schema: any): any;
}

declare var validator: Validator;
export = validator;
