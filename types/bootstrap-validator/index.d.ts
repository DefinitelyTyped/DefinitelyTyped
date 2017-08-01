// Type definitions for bootstrap-validator 0.11
// Project: https://github.com/1000hz/bootstrap-validator
// Definitions by: Brady Liles <https://github.com/BradyLiles/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

interface ValidatorOptions {
    delay?: number;
    html?: boolean;
    disable?: boolean;
    focus?: boolean;
    feedback?: any;
    custom?: any;
}

interface JQuery {
    validator(options?: ValidatorOptions): JQuery;
    validator(command: string): JQuery;
}
