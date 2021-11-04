// Project: https://github.com/Kagami/ffmpeg.js
// Definitions by: Vladimir Grenaderov <https://github.com/VladimirGrenaderov>,
//                 Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Worker {
    interface Data {
        type: string;
        data: string;
    }

    interface PostMessageOptions {
        type: string;
        arguments: string[];
    }

    interface OnMessageOptions {
        data: Data;
    }
}

declare class Worker {
    constructor(someParam?: string);

    onmessage(opts: Worker.OnMessageOptions): void;
    postMessage(opts: Worker.PostMessageOptions): void;
    terminate(): void;
}

export = Worker;
