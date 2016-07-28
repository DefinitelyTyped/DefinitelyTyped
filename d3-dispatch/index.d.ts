// Type definitions for D3JS d3-dispatch module 1.0.0
// Project: https://github.com/d3/d3-dispatch/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Tom Wanzek <https://github.com/tomwanzek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Dispatch<T extends EventTarget> {
    apply(type: string, that?: T, args?: any[]): void;
    call(type: string, that?: T, ...args: any[]): void;
    copy(): Dispatch<T>;

    on(typenames: string): (this: T, ...args: any[]) => void;
    on(typenames: string, callback: null): Dispatch<T>;
    on(typenames: string, callback: (this: T, ...args: any[]) => void): Dispatch<T>;
}

export function dispatch<T extends EventTarget>(...types: string[]): Dispatch<T>;
