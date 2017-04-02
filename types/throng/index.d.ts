// Type definitions for throng 4.0.0
// Project: https://github.com/hunterloftis/throng
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "throng" {
    namespace throng {
        type WorkerCallback = (id: number) => void;

        export interface Options {
            grace?: number;
            lifetime?: number;
            master: () => void;
            start: WorkerCallback;
            workers: number;
        }
    }

    function throng(options: throng.WorkerCallback | throng.Options | number, startFunction?: throng.WorkerCallback): never;
    export = throng;
}
