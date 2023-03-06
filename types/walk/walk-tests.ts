import * as walk from "walk";

const options: walk.WalkOptions = {
    followLinks: true,
    filters: ['.gitignore'],
    listeners: {
        directories: () => { },
        directory: () => { },
        directoryError: () => { },
        end: () => { },
        errors: () => { },
        file: () => { },
        files: () => { },
        names: () => { },
        nodeError: () => { }
    }
};

// $ExpectType Walker
const walker = walk.walk('.', options);
walker.on('directories', (
    // $ExpectType string
    root,
    // $ExpectType WalkStats[]
    statsArray,
    // $ExpectType WalkNext
    next
) => {
    root.trim();
    statsArray.forEach((stats) => `${stats.name} (${stats.type})`);
    next();
});

walker.on('file', (
    // $ExpectType string
    root,
    // $ExpectType WalkStats
    stats,
    // $ExpectType WalkNext
    next
) => {
    // @ts-expect-error
    if (stats.type === 'foo') {
        //
    }

    switch (stats.type) {
        case "blockDevice":
        case "characterDevice":
        case "directory":
        case "FIFO":
        case "file":
        case "socket":
        case "symbolicLink":
            // All good
            break;
    }
});
// @ts-expect-error
walker.on('foo', () => { });
walker.pause();
walker.resume();
