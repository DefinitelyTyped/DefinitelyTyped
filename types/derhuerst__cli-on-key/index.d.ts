/// <reference types="node" />

declare namespace listen {
    interface Key {
        name?: string | undefined;
        ctrl: boolean;
        meta: boolean;
        shift: boolean;
        sequence: string;
        code?: string | undefined; // ansi code leaving out leading \x1b's
        raw: string;
    }

    type Callback = (key: Key) => void;
    type OffKeyPress = (key: Key) => void;
}

declare function listen(
    stream: NodeJS.ReadStream,
    callback: listen.Callback,
): listen.OffKeyPress;

export = listen;
