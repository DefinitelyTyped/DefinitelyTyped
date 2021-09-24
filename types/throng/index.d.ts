// Type definitions for throng 5.0
// Project: https://github.com/hunterloftis/throng
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
//                 Tate Thurston <https://github.com/tatethurston>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function throng(startOrOptions: throng.ProcessCallback | throng.Options): Promise<void>;
declare function throng(workers: throng.WorkerCount, start: throng.ProcessCallback): Promise<void>;
declare namespace throng {
    type WorkerCount = number | string;
    type ProcessCallback = (id: number) => any;

    type Options = {
        signals?: string[] | undefined;
        grace?: number | undefined;
        lifetime?: number | undefined;
        master?: ProcessCallback | undefined;
        count?: number | undefined;
        workers?: WorkerCount | undefined;
    } & ({start: ProcessCallback} | {worker: ProcessCallback});
}

export = throng;
export as namespace throng;
