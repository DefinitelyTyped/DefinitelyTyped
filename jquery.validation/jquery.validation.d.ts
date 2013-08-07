// Type definitions for jquery.validation 1.10
// Project: http://bassistance.de/jquery-plugins/jquery-plugin-validation/
// Definitions by: https://github.com/fdecampredon
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts"/>

interface ValidationOptions {
    debug?: boolean;
    submitHandler?: Function;
    invalidHandler?: Function;
    ignore?: any;
    rules?: any;
    messages?: any;
    groups?: any;
    onsubmit?: boolean;
    onfocusout?: boolean;
    onkeyup?: boolean;
    onclick?: boolean;
    focusInvalid?: boolean;
    focusCleanup?: boolean;
    meta?: string;
    errorClass?: string;
    validClass?: string;
    errorElement?: string;
    wrapper?: string;
    errorLabelContainer?: any;
    errorContainer?: any;
    showErrors?: Function;
    errorPlacement?: Function;
    success?: any;
    highlight?: Function;
    unhighlight?: Function;
    ignoreTitle?: boolean;
}

interface Validator {
    format(template: string, ...arguments: string[]): string;
    form(): boolean;
    element(element: any): boolean;
    resetForm(): void;
    showErrors(errors: any): void;
    numberOfInvalids(): number;
    setDefaults(defaults: ValidationOptions): void;
    addMethod(name: string, method: (value: any, element: any, ...params: any[]) => any, message?: any): void;
    addClassRules(rules: any): void;
    addClassRules(name: string, rules: any): void;
}

interface JQuery {
    validate(options?: ValidationOptions): Validator;
    valid(): boolean;
    rules(): any;
    rules(methodName: string): any;
    rules(methodName: string, rules: any): any;
    removeAttrs(attributes: string): any;
}

interface JQueryStatic {
    format(template: string, ...arguments: string[]): string;
    validator: Validator;
}