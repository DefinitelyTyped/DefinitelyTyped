// Type definitions for @derhuerst/cli-on-key 0.1
// Project: https://github.com/derhuerst/cli-on-key
// Definitions by: Rong Shen <https://github.com/jacobbubu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace listen {
    interface Key {
        name?: string;
        ctrl: boolean;
        meta: boolean;
        shift: boolean;
        sequence: string;
        code?: string; // ansi code leaving out leading \x1b's
        raw: string;
    }

    type Callback = (key: Key) => void;
    type OffKeyPress = (key: Key) => void;
}

declare function listen(
    stream: NodeJS.ReadStream,
    callback: listen.Callback
): listen.OffKeyPress;

export = listen;
