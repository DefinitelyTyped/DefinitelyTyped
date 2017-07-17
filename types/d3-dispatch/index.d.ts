// Type definitions for D3JS d3-dispatch module 1.0
// Project: https://github.com/d3/d3-dispatch/
// Definitions by: Tom Wanzek <https://github.com/tomwanzek>, Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Last module patch version validated against: 1.0.1

export interface Dispatch<T extends EventTarget> {
    apply(type: string, that?: T, args?: any[]): void;
    call(type: string, that?: T, ...args: any[]): void;
    copy(): Dispatch<T>;

    on(typenames: string): (this: T, ...args: any[]) => void;
    on(typenames: string, callback: null): this;
    on(typenames: string, callback: (this: T, ...args: any[]) => void): this;
}

export function dispatch<T extends EventTarget>(...types: string[]): Dispatch<T>;
