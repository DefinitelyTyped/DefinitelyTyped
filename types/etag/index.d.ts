// Type definitions for etag 1.8
// Project: https://github.com/jshttp/etag#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
export = etag;

declare function etag(entity: string | Buffer | etag.StatsLike, options?: etag.Options): string;

declare namespace etag {
    interface Options {
        weak?: boolean;
    }

    interface StatsLike {
        ctime: Date;
        mtime: Date;
        ino: number;
        size: number;
    }
}
