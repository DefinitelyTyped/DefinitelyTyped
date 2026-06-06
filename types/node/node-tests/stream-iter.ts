import { FileHandle, open } from "node:fs/promises";
import { bytes, from, fromSync, pipeTo, pull, pullSync, text, textSync } from "node:stream/iter";
import { setTimeout } from "node:timers/promises";
import { compressGzip, compressGzipSync, decompressGzip, decompressGzipSync } from "node:zlib/iter";

// Async round-trip
void async function() {
    const compressed: Uint8Array = await bytes(pull(from("hello"), compressGzip()));
    const original: string = await text(pull(from(compressed), decompressGzip()));
};

// Sync round-trip
{
    const compressed: Iterable<Uint8Array[]> = pullSync(fromSync("hello"), compressGzipSync());
    const original: string = textSync(pullSync(compressed, decompressGzipSync()));
}

// Read a file, compress, write to another file
void async function() {
    const src: FileHandle = await open("input.txt", "r");
    const dst: FileHandle = await open("output.gz", "w");
    const bytesWritten: number = await pipeTo(src.pull(), compressGzip(), dst.writer({ autoClose: true }));
    await src.close();

    // Read it back
    const gz: FileHandle = await open("output.gz", "r");
    const result: string = await text(gz.pull(decompressGzip(), { autoClose: true }));
};

void async function() {
    const fh: FileHandle = await open("file");
    using syncDispose = fh.writer();
    await using asyncDispose = fh.writer();
};

void async function() {
    pull("hello", async (chunk: Uint8Array[] | null) => {
        await setTimeout(1000);
        return chunk;
    });
};
