// Type definitions for Mousetrap 1.5.x
// Project: http://craig.is/killing/mice
// Definitions by: Dániel Tar <https://github.com/qcz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

interface ExtendedKeyboardEvent extends KeyboardEvent {
    returnValue: boolean; // IE returnValue
}

interface MousetrapStatic {
    (el: Element): MousetrapInstance;
    new (el: Element): MousetrapInstance;
    stopCallback: (e: ExtendedKeyboardEvent, element: Element, combo: string) => boolean;
    bind(keys: string|string[], callback: (e: ExtendedKeyboardEvent, combo: string) => any, action?: string): void;
    unbind(keys: string|string[], action?: string): void;
    trigger(keys: string, action?: string): void;
    reset(): void;

    /** https://craig.is/killing/mice#extensions.global */
    bindGlobal(keyArray: string|string[], callback: (e: ExtendedKeyboardEvent, combo: string) => any, action?: string): void;
}

interface MousetrapInstance {
    stopCallback: (e: ExtendedKeyboardEvent, element: Element, combo: string) => boolean;
    bind(keys: string|string[], callback: (e: ExtendedKeyboardEvent, combo: string) => any, action?: string): void;
    unbind(keys: string|string[], action?: string): void;
    trigger(keys: string, action?: string): void;
    reset(): void;
}

declare var Mousetrap: MousetrapStatic;

declare module "mousetrap" {
    export = Mousetrap;
}
