// Type definitions for Mousetrap 1.6
// Project: http://craig.is/killing/mice
// Definitions by: Dániel Tar <https://github.com/qcz>
//                 Alan Choi <https://github.com/alanhchoi>
//                 Nic Barker <https://github.com/nicbarker>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Mousetrap {
    interface ExtendedKeyboardEvent extends KeyboardEvent {
        returnValue: boolean; // IE returnValue
    }

    interface MousetrapStatic {
        (el?: Element): MousetrapInstance;
        new(el?: Element): MousetrapInstance;
        addKeycodes(keycodes: { [key: number]: string }): void;
        stopCallback: (e: ExtendedKeyboardEvent, element: Element, combo: string) => boolean;
        bind(
            keys: string | string[],
            callback: (e: ExtendedKeyboardEvent, combo: string) => boolean | void,
            action?: string,
        ): MousetrapInstance;
        unbind(keys: string | string[], action?: string): MousetrapInstance;
        trigger(keys: string, action?: string): MousetrapInstance;
        reset(): MousetrapInstance;
    }

    interface MousetrapInstance {
        stopCallback: (e: ExtendedKeyboardEvent, element: Element, combo: string) => boolean;
        bind(
            keys: string | string[],
            callback: (e: ExtendedKeyboardEvent, combo: string) => void,
            action?: string,
        ): this;
        unbind(keys: string | string[], action?: string): this;
        trigger(keys: string, action?: string): this;
        handleKey(character: string, modifiers: string[], e: ExtendedKeyboardEvent): void;
        reset(): this;
    }
}

declare const Mousetrap: Mousetrap.MousetrapStatic;

export = Mousetrap;

export as namespace Mousetrap;
