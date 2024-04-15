import { rrdir, rrdirAsync, rrdirSync } from "rrdir";

async function exercise(): Promise<void> {
    // string version
    for await (const entry of rrdir("dir")) {
        // $ExpectType Entry<string>
        entry;
        // $ExpectType string
        entry.path;
        // $ExpectType boolean | undefined
        entry.directory;
        // $ExpectType boolean | undefined
        entry.symlink;
    }

    // Buffer version
    for await (const entry of rrdir(Buffer.from("dir"))) {
        // $ExpectType Entry<Uint8Array>
        entry;
        // $ExpectType Uint8Array
        entry.path;
        // $ExpectType boolean | undefined
        entry.directory;
        // $ExpectType boolean | undefined
        entry.symlink;
    }

    // $ExpectType Entry<string>[]
    await rrdirAsync("dir");

    // $ExpectType Entry<Uint8Array>[]
    await rrdirAsync(Buffer.from("dir"));
}

// $ExpectType Entry<string>[]
rrdirSync("dir");

// $ExpectType Entry<Uint8Array>[]
rrdirSync(Buffer.from("dir"));
