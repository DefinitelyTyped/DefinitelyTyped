// Type definitions for better-curry
// Project: https://github.com/pocesar/js-bettercurry
// Definitions by: Paulo Cesar <https://github.com/pocesar>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare var BetterCurry: BetterCurryModule.BetterCurry;

declare module BetterCurryModule {

    export interface DelegateOptions {
        as?: string;
        len?: number;
        args?: any[];
        name?: string;
    }

    export class Delegate<T> {
        proto: T;
        target: string;
        methods: any[];
        getters: any[];
        setters: any[];
        all: (skip?: string[]) => void;
        method: (name: string|DelegateOptions) => Delegate<T>;
        getter: (name: string|DelegateOptions) => Delegate<T>;
        setter: (name: string|DelegateOptions) => Delegate<T>;
        access: (name: string|DelegateOptions) => Delegate<T>;
        revoke: (name: string) => Delegate<T>;
        constructor(proto: T, target: string);
    }

    export interface OriginalFunctionReminder<T> extends Function {
        __length: number;
    }

    export interface BetterCurry {
        predefine: <T extends Function>(fn: T, args: any[], context?: Object, len?: number, checkArguments?: boolean) => OriginalFunctionReminder<T>;
        wrap: <T extends Function>(fn: T, context?: Object, len?: number, checkArguments?: boolean) => OriginalFunctionReminder<T>;
        flatten: (...args: Array<Array<any>|any>) => any[];
        delegate: <T>(proto: T, target: string) => Delegate<T>;
        MAX_OPTIMIZED: number;
    }

}

declare module 'better-curry' {
    var bc: BetterCurryModule.BetterCurry;

    export = bc;
}