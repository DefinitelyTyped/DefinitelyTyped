import etag = require("etag");
import * as fs from "fs";

// $ExpectType string
etag("str");
etag("str", { weak: true });
etag(Buffer.from(""));
etag(new Uint8Array([1, 2, 3]));
etag({
    ctime: new Date(),
    mtime: new Date(),
    ino: 1,
    size: 1,
});

// minimal StatsLike with only required mtime and size
etag({
    mtime: new Date(),
    size: 1024,
});

// BigIntStats test with bigint size and ino
const fakeBigIntStats = {
    mtime: new Date(),
    size: BigInt(1024),
    ino: BigInt(42),
};
etag(fakeBigIntStats);

// fs.Stats
const stats = fs.statSync(process.cwd());
etag(stats);

