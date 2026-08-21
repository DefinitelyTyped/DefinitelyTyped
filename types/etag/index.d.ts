/// <reference types="node" />
export = etag;

declare function etag(entity: string | Buffer | etag.StatsLike, options?: etag.Options): string;

declare namespace etag {
    interface Options {
        weak?: boolean | undefined;
    }

    interface StatsLike {
        ctime: Date;
        mtime: Date;
        ino: number;
        size: number;
    }
}
