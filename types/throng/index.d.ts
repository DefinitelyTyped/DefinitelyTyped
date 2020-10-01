// Type definitions for throng 5.0
// Project: https://github.com/hunterloftis/throng
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
//                 Tate Thurston <https://github.com/tatethurston>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function throng(startOrOptions: throng.ProcessCallback | throng.Options): void;
declare function throng(workers: throng.WorkerCount, start: throng.ProcessCallback): void;
declare namespace throng {
    type WorkerCount = number | string;
    type ProcessCallback = (id: number) => any;

    type Options = {
        signals?: string[];
        grace?: number;
        lifetime?: number;
        master?: ProcessCallback;
        count?: number;
        workers?: WorkerCount;
    } & ({start: ProcessCallback} | {worker: ProcessCallback});
}

export = throng;
export as namespace throng;
