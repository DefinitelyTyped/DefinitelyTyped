// Type definitions for throng 5.0
// Project: https://github.com/hunterloftis/throng
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
//                 Tate Thurston <https://github.com/tatethurston>
//                 Tom Spencer <https://github.com/fiznool>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function throng(startOrOptions: throng.ProcessCallback | throng.LegacyOptions | throng.WorkerCallback | throng.Options): void;
declare function throng(workers: throng.WorkerCount, start: throng.ProcessCallback): void;

declare namespace throng {
    type WorkerCount = number | string;
    type ProcessCallback = (id: number) => any;
    type WorkerCallback = (id: number, disconnect: () => any) => any;

    interface Options {
      worker: WorkerCallback;
      master?: () => any;
      count?: number;
      lifetime?: number;
      grace?: number;
      signals?: string[];
    }

    interface LegacyOptions {
        grace?: number;
        lifetime?: number;
        master?: ProcessCallback;
        start: ProcessCallback;
        workers?: WorkerCount;
    }
}

export = throng;
export as namespace throng;
