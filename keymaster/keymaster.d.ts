// Type definitions for keymaster v1.6.2
// Project: https://github.com/madrobby/keymaster
// Definitions by: Martin W. Kirst <https://github.com/nitram509>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// A simple micro-library for defining and dispatching keyboard shortcuts. It has no dependencies.

interface KeymasterEvent {
    key: string;
    method: KeyHandler;
    mods: number[];
    scope: string;
    shortcut: string;
}

interface KeyHandler {
    (keyboardEvent: KeyboardEvent, keymasterEvent: KeymasterEvent) : void;
}

interface FilterEvent {
    target?: {
        tagName?: string;
    }
    srcElement?: {
        tagName?: string;
    }
}

interface Keymaster {

    (key: string, callback: KeyHandler): void;
    (key: string, scope: string, callback: KeyHandler): void;

    shift: boolean;
    alt: boolean;
    option: boolean;
    ctrl: boolean;
    control: boolean;
    command: boolean;

    setScope(scopeName: string): void;
    getScope():string;
    deleteScope(scopeName: string): void;

    noConflict(): void;

    unbind(key: string): void;
    unbind(key: string, scopeName: string): void;

    isPressed(keyCode: number): boolean;
    getPressedKeyCodes(): number[];

    filter(event: FilterEvent): void;
}

declare var key: Keymaster;

declare module "keymaster" {
export = key;
}
