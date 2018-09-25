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
}

// $ExpectType walk.Walker
const walker = walk.walk('.', options);
walker.on('directories', (root, statsArray, next) => {
    root.trim();
    statsArray.forEach((stats) => `${stats.name} (${stats.type})`);
    next();
});
walker.on('file', (root, stats, next) => {
    // $ExpectError
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
// $ExpectError
walker.on('foo', () => { });
walker.pause();
walker.resume();
