/// <reference types="node" />

import * as fs from "fs";

export = etag;

declare function etag(
    entity: string | Buffer | Uint8Array | fs.Stats | fs.BigIntStats | etag.StatsLike,
    options?: etag.Options,
): string;

declare namespace etag {
    interface Options {
        /**
         * @default false (for string/Buffer), true (for Stats/StatsLike)
         */
        weak?: boolean | undefined;
    }

    interface StatsLike {
        ctime?: Date | undefined;
        mtime: { getTime(): number } | Date;
        ino?: number | bigint | undefined;
        size: number | bigint;
    }
}
