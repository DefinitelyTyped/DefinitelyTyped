// Type definitions for Mousetrap 1.5.x
// Project: http://craig.is/killing/mice
// Definitions by: Dániel Tar <https://github.com/qcz>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface ExtendedKeyboardEvent extends KeyboardEvent {
    returnValue: boolean; // IE returnValue
}

interface MousetrapStatic {
    (el: Element): MousetrapInstance;
    new (el: Element): MousetrapInstance;
    stopCallback: (e: ExtendedKeyboardEvent, element: Element, combo: string) => boolean;
    bind(keys: string, callback: (e: ExtendedKeyboardEvent, combo: string) => any, action?: string): void;
    bind(keyArray: string[], callback: (e: ExtendedKeyboardEvent, combo: string) => any, action?: string): void;
    unbind(keys: string, action?: string): void;
    unbind(keyArray: string[], action?: string): void;
    trigger(keys: string, action?: string): void;
    reset(): void;
}

interface MousetrapInstance {
    stopCallback: (e: ExtendedKeyboardEvent, element: Element, combo: string) => boolean;
    bind(keys: string, callback: (e: ExtendedKeyboardEvent, combo: string) => any, action?: string): void;
    bind(keyArray: string[], callback: (e: ExtendedKeyboardEvent, combo: string) => any, action?: string): void;
    unbind(keys: string, action?: string): void;
    unbind(keyArray: string[], action?: string): void;
    trigger(keys: string, action?: string): void;
    reset(): void;
}

declare var Mousetrap: MousetrapStatic;

declare module "mousetrap" {
    export = Mousetrap;
}
