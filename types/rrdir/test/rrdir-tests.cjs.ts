import rrdir = require("rrdir");

async function exercise(): Promise<void> {
    // string version
    for await (const entry of rrdir("dir")) {
        // $ExpectType StringEntry
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
        // $ExpectType BufferEntry
        entry;
        // $ExpectType Buffer
        entry.path;
        // $ExpectType boolean | undefined
        entry.directory;
        // $ExpectType boolean | undefined
        entry.symlink;
    }

    // $ExpectType StringEntry[]
    await rrdir.async("dir");

    // $ExpectType BufferEntry[]
    await rrdir.async(Buffer.from("dir"));
}

// $ExpectType StringEntry[]
rrdir.sync("dir");

// $ExpectType BufferEntry[]
rrdir.sync(Buffer.from("dir"));
