import { Duplex } from "readable-stream";

declare class PostMessageStream extends Duplex {
    _name: string;
    _target: string;
    _targetWindow: Window;
    _origin: string;
    _init: boolean;
    _haveSyn: boolean;

    constructor(props: {
        name: string;
        target: string;
        targetWindow?: Window | undefined;
    });

    _write(
        data: any,
        _encoding: BufferEncoding,
        cb: () => void,
    ): void;
}

export = PostMessageStream;
