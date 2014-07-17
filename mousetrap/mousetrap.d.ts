// Type definitions for Mousetrap 1.2.2
// Project: http://craig.is/killing/mice
// Definitions by: Dániel Tar <https://github.com/qcz>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface ExtendedKeyboardEvent extends KeyboardEvent {
    returnValue: boolean; // IE returnValue
}

interface MousetrapStatic {
    stopCallback: (e: ExtendedKeyboardEvent, element: Element, combo: string) => boolean;

    bind(keys: string, callback: (e: ExtendedKeyboardEvent, combo: string) => any, action?: string): void;
    bind(keyArray: string[], callback: (e: ExtendedKeyboardEvent, combo: string) => any, action?: string): void;
    unbind(keys: string, action?: string): void;
    unbind(keyArray: string[], action?: string): void;
    trigger(keys: string, action?: string): void;
    reset(): void;
}

declare var Mousetrap: MousetrapStatic;
