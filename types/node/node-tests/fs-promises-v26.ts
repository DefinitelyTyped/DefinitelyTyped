import { FileHandle, open } from "node:fs/promises";
import { textSync } from "node:stream/iter";
import { compressGzipSync } from "node:zlib/iter";

// FileHandle#pullSync
void async function() {
    const fh: FileHandle = await open("input.txt", "r");
    fh.pullSync(); // $ExpectType SyncByteReadableStream
    fh.pullSync({ autoClose: true, start: 0, limit: 1024, chunkSize: 4096 }); // $ExpectType SyncByteReadableStream
    fh.pullSync(compressGzipSync()); // $ExpectType SyncByteReadableStream
    fh.pullSync(compressGzipSync(), { autoClose: true }); // $ExpectType SyncByteReadableStream
    fh.pullSync((chunk: Uint8Array[] | null) => chunk); // $ExpectType SyncByteReadableStream
    const str: string = textSync(fh.pullSync({ autoClose: true }));
    for (const chunks of fh.pullSync()) {
        const arr: Uint8Array[] = chunks;
    }

    // @ts-expect-error - pullSync does not support AbortSignal
    fh.pullSync({ signal: new AbortController().signal });
};
