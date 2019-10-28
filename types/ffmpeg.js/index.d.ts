// Type definitions for ffmpeg.js 3.1
// Project: https://github.com/Kagami/ffmpeg.js
// Definitions by: Vladimir Grenaderov <https://github.com/VladimirGrenaderov>,
//                 Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

declare namespace ffmpeg {
    interface Options {
        arguments: string[];
        MEMFS?: Video[];
        print?(data: any): void;
        printErr?(data: any): void;
        onExit?(code: unknown): void;
        stdin?(data: any): void;
        mounts?: Mount[];
    }

    interface Opts {
        root: string;
    }

    interface Mount {
        type: string;
        opts: Opts;
        mountpoint: string;
    }

    interface Result {
        MEMFS: Video[];
    }

    interface Video {
        data: Uint8Array;
        name: string;
    }
}

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

declare module 'ffmpeg.js/ffmpeg-mp4' {
    function ffmpeg(opts: ffmpeg.Options): ffmpeg.Result;
    export = ffmpeg;
}

declare module 'ffmpeg.js/ffmpeg-webm' {
    class Worker {
        constructor(someParam?: string);

        onmessage(opts: Worker.OnMessageOptions): void;
        postMessage(opts: Worker.PostMessageOptions): void;
        terminate(): void;
    }

    export = Worker;
}

declare module 'ffmpeg.js/ffmpeg-worker-mp4' {
    function ffmpeg(opts: ffmpeg.Options): ffmpeg.Result;
    export = ffmpeg;
}

declare module 'ffmpeg.js/ffmpeg-worker-webm' {
    class Worker {
        constructor(someParam?: string);

        onmessage(opts: Worker.OnMessageOptions): void;
        postMessage(opts: Worker.PostMessageOptions): void;
        terminate(): void;
    }

    export = Worker;
}

declare module 'ffmpeg-mp4' {
    function ffmpeg(opts: ffmpeg.Options): ffmpeg.Result;
    export = ffmpeg;
}

declare module 'ffmpeg-webm' {
    class Worker {
        constructor(someParam?: string);

        onmessage(opts: Worker.OnMessageOptions): void;
        postMessage(opts: Worker.PostMessageOptions): void;
        terminate(): void;
    }

    export = Worker;
}

declare module 'ffmpeg-worker-mp4' {
    function ffmpeg(opts: ffmpeg.Options): ffmpeg.Result;
    export = ffmpeg;
}

declare module 'ffmpeg-worker-webm' {
    class Worker {
        constructor(someParam?: string);

        onmessage(opts: Worker.OnMessageOptions): void;
        postMessage(opts: Worker.PostMessageOptions): void;
        terminate(): void;
    }

    export = Worker;
}
