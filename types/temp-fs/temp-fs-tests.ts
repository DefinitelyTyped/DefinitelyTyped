// Copied from https://github.com/jakwings/node-temp-fs/blob/60a4d2586a81a7057bd4a395ec8c00b4100f84fe/README.md
// and slightly modified.
import tempfs = require("temp-fs");


// Create a tempfile in the system-provided tempdir.
tempfs.open(function (err:any, file:tempfs.file) {
    if (err) { throw err; }

    console.log(file.path, file.fd);
    // async
    file.unlink(function () {
        console.log('File delected');
    });
    // sync
    // No problem even if unlink() is called twice.
    file.unlink();
});

// Create a tempdir in current directory.
tempfs.mkdir({
    dir: '.',
    recursive: true,  // It and its content will be remove recursively.
    track: true  // Track this directory.
}, function (err:any, dir:tempfs.dir) {
    if (err) { throw err; }

    console.log(dir.path, dir.recursive);
    dir.unlink();
    throw new Error('Since it is tracked, tempfs will remove it for you.');
});
