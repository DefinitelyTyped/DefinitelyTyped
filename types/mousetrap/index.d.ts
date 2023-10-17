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
