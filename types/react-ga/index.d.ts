// Type definitions for react-ga 1.4
// Project: https://github.com/react-ga/react-ga
// Definitions by: Tim Aldridge <https://github.com/telshin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
