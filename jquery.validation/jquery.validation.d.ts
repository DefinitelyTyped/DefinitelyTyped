// Type definitions for jquery.validation 1.10
// Project: http://bassistance.de/jquery-plugins/jquery-plugin-validation/
// Definitions by: https://github.com/fdecampredon
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts"/>

interface ValidationOptions {
    debug?: bool;
    submitHandler?: Function;
    invalidHandler?: Function;
    ignore?: any;
    rules?: any;
    messages?: any;
    groups?: any;
    onsubmit?: bool;
    onfocusout?: bool;
    onkeyup?: bool;
    onclick?: bool;
    focusInvalid?: bool;
    focusCleanup?: bool;
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
    ignoreTitle?: bool;
}

interface Validator {
    format(template: string, ...arguments: string[]): string;
    form(): bool;
    element(element: any): bool;
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
    valid(): bool;
    rules(): any;
    rules(methodName: string): any;
    rules(methodName: string, rules: any): any;
    removeAttrs(attributes: string): any;
}

interface JQueryStatic {
    format(template: string, ...arguments: string[]): string;
    validator: Validator;
}