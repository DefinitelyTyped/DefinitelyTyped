import { Readable, Writable } from "lazystream";
import { createReadStream, createWriteStream } from "node:fs";
import { Stream, TransformOptions } from "readable-stream";

new Readable(() => new Stream());
new Readable(() => createReadStream("foo.txt"));
// @ts-expect-error Options are not passed and so are not available
new Readable((options: TransformOptions) => createReadStream("foo.txt"));
new Readable((options: TransformOptions) => createReadStream("foo.txt"), {});

new Writable(() => new Stream());
new Writable(() => createWriteStream("foo.txt"));
// @ts-expect-error Options are not passed and so are not available
new Writable((options: TransformOptions) => createWriteStream("foo.txt"));
new Writable((options: TransformOptions) => createWriteStream("foo.txt"), {});
