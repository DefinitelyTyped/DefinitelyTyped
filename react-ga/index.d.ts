// Type definitions for react-fa v1.4.1
// Project: https://github.com/react-ga/react-ga
// Definitions by: Tim Aldridge <https://github.com/telshin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace __reactGA {
    export interface EventArgs {
        category: string;
        action: string;
        label?: string;
        value?: number;
        nonInteraction?: boolean;
    }

    export interface InitializeOptions {
        debug?: boolean;
    }

    export interface FieldsObject {
        [i: string]: any;
    }

    export function initialize(trackingCode: string, options?: InitializeOptions): void;
    export function pageview(path: string): void;
    export function modalview(name: string): void;
    export function event(args: EventArgs): void;
    export function set(fieldsObject: FieldsObject): void;
}

declare module 'react-ga' {
    export = __reactGA;
}
