import decompress = require('decompress');
import * as path from "path";

decompress('unicorn.zip', 'dist').then((files: decompress.File[]) => {
    console.log('done!');
});

decompress('unicorn.zip', 'dist', {
    filter: file => path.extname(file.path) !== '.exe'
}).then((files: decompress.File[]) => {
    console.log('done!');
});

decompress('unicorn.zip', 'dist', {
    map: file => {
        file.path = `unicorn-${file.path}`;
        return file;
    }
}).then((files: decompress.File[]) => {
    console.log('done!');
});

// Test decompress with no output to filesystem
decompress('unicorn.zip')
    .then(
        (files: decompress.File[]) => {
            console.log(`Decompressed ${files.length} files with no write to filesystem`);
        }
    );

// Test decompress with DecompressOptions as second argument
decompress(
    'unicorn.zip',
    {
        filter: file => path.extname(file.path) !== '.exe'
    }
)
    .then(
        (files: decompress.File[]) => {
            console.log(`Decompressed ${files.length} files with filter options`);
        }
    );
