import rrdir = require('rrdir');

async function exercise(): Promise<void> {
    // string version
    for await (const entry of rrdir('dir')) {
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
    for await (const entry of rrdir(Buffer.from('dir'))) {
        // $ExpectType Entry<Buffer>
        entry;
        // $ExpectType Buffer
        entry.path;
        // $ExpectType boolean | undefined
        entry.directory;
        // $ExpectType boolean | undefined
        entry.symlink;
    }

    // $ExpectType Entry<string>[]
    await rrdir.async('dir');

    // $ExpectType Entry<Buffer>[]
    await rrdir.async(Buffer.from('dir'));
}

// $ExpectType Entry<string>[]
rrdir.sync('dir');

// $ExpectType Entry<Buffer>[]
rrdir.sync(Buffer.from('dir'));
