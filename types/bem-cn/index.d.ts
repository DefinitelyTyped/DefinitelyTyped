// Type definitions for bem-cn 2.1
// Project: https://github.com/albburtsev/bem-cn
// Definitions by: Vitaly Selkin <https://github.com/selkinvitaly>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type StateFn = (states: { [key: string]: boolean }) => Inner;

interface Modifications {
    [key: string]: (string | boolean);
}

interface Block {
    (name: string): Inner;

    reset(): void;
    setup(settings?: Settings): void;
}

interface Inner {
    (elem: string | Modifications): Inner;
    (elem: string, mods: Modifications): Inner;
    (): string;

    mix(mixes: string | string[]): Inner;
    has: StateFn;
    state: StateFn;
    is: StateFn;
    toString(): string;
    split(separator: string, limit?: number): string[];
}

interface Settings {
    ns?: string;
    el?: string;
    mod?: string;
    modValue?: string;
    classMap?: { [className: string]: string } | null;
}

declare const block: Block;
export = block;
