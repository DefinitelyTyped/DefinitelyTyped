// Type definitions for throng 4.0
// Project: https://github.com/hunterloftis/throng
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function throng(options: throng.WorkerCallback | throng.Options | number, startFunction?: throng.WorkerCallback): void;
declare namespace throng {
    type WorkerCallback = (id: number) => void;

    interface Options {
        grace?: number;
        lifetime?: number;
        master(): void;
        start: WorkerCallback;
        workers: number;
    }
}

export = throng;
export as namespace throng;
