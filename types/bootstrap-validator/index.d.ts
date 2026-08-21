/// <reference types="jquery"/>

interface ValidatorOptions {
    delay?: number | undefined;
    html?: boolean | undefined;
    disable?: boolean | undefined;
    focus?: boolean | undefined;
    feedback?: any;
    custom?: any;
}

interface JQuery {
    validator(options?: ValidatorOptions): JQuery;
    validator(command: string): JQuery;
}
