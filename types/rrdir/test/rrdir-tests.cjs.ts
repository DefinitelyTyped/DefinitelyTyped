
import rrdir = require("rrdir");

async function exercise(): Promise<void> {
    // string version
    for await (const entry of rrdir.rrdir("dir")) {
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
    for await (const entry of rrdir.rrdir(Buffer.from("dir"))) {
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
    await rrdir.rrdirAsync("dir");

    // $ExpectType Entry<Uint8Array>[]
    await rrdir.rrdirAsync(Buffer.from("dir"));
}

// $ExpectType Entry<string>[]
rrdir.rrdirSync("dir");

// $ExpectType Entry<Uint8Array>[]
rrdir.rrdirSync(Buffer.from("dir"));
