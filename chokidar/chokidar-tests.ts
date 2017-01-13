

import fs = require('fs');
import chokidar = require('chokidar');

var watcher = chokidar.watch('file, dir, or glob', {
    ignored: /[\/\\]\./, persistent: true
});

var log = console.log.bind(console);

let str: string;
let any: any;
let stats: fs.Stats;

watcher
    .on('add', path => { str = path; })
    .on('addDir', path => { str = path; })
    .on('change', path => { str = path; })
    .on('unlink', path => { str = path; })
    .on('unlinkDir', path => { str = path; })
    .on('error', (error) => { any = error; })
    .on('ready', () => { })
    .on('raw', (event, path, details) => { str = event; str = path; any = details; })

// 'add', 'addDir' and 'change' events also receive stat() results as second
// argument when available: http://nodejs.org/api/fs.html#fs_class_fs_stats
watcher.on('change', (path, _stats) => {
    str = path;
    stats = _stats;
});

// Watch new files.
watcher.add('new-file');
watcher.add(['new-file-2', 'new-file-3', '**/other-file*']);

// Un-watch some files.
watcher.unwatch('new-file*');

// Only needed if watching is `persistent: true`.
watcher.close();

// One-liner
chokidar.watch('.', {ignored: /[\/\\]\./}).on('all', (event, path) => {
    str = event;
    str = path;
});