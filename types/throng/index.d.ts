// Type definitions for throng 4.0
// Project: https://github.com/hunterloftis/throng
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
//                 Tate Thurston <https://github.com/tatethurston>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function throng(startOrOptions: throng.ProcessCallback | throng.Options): void;
declare function throng(workers: throng.WorkerCount, start: throng.ProcessCallback): void;
declare namespace throng {
    type WorkerCount = number | string;
    type ProcessCallback = (id: number) => any;

    interface Options {
        grace?: number;
        lifetime?: number;
        master?: ProcessCallback;
        start: ProcessCallback;
        workers?: WorkerCount;
    }
}

export = throng;
export as namespace throng;
