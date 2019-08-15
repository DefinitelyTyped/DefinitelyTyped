// Type definitions for Mousetrap 1.6.x
// Project: http://craig.is/killing/mice
// Definitions by: Dániel Tar <https://github.com/qcz>, Alan Choi <https://github.com/alanhchoi>, Nic Barker <https://github.com/nicbarker>, Mitsuka Hanakura a.k.a ragg <https://github.com/ra-gg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

interface ExtendedKeyboardEvent extends KeyboardEvent {
    returnValue: boolean; // IE returnValue
}

interface MousetrapStatic {
    (el: Element): MousetrapInstance;
    new (el?: Element): MousetrapInstance;
    addKeycodes(keycodes: { [key: number]: string }): void;
    stopCallback: (e: ExtendedKeyboardEvent, element: Element, combo: string) => boolean;
    bind(keys: string|string[], callback: (e: ExtendedKeyboardEvent, combo: string) => any, action?: string): MousetrapInstance;
    unbind(keys: string|string[], action?: string): MousetrapInstance;
    trigger(keys: string, action?: string): MousetrapInstance;
    reset(): MousetrapInstance;

    /** https://craig.is/killing/mice#extensions.global */
    bindGlobal(keyArray: string|string[], callback: (e: ExtendedKeyboardEvent, combo: string) => any, action?: string): void;
}

interface MousetrapInstance {
    stopCallback: (e: ExtendedKeyboardEvent, element: Element, combo: string) => boolean;
    bind(keys: string|string[], callback: (e: ExtendedKeyboardEvent, combo: string) => any, action?: string): this;
    unbind(keys: string|string[], action?: string): this;
    trigger(keys: string, action?: string): this;
    handleKey(character: string, modifiers: string[], e: ExtendedKeyboardEvent): void;
    reset(): this;
}

declare var Mousetrap: MousetrapStatic;

declare module "mousetrap" {
    export = Mousetrap;
}
