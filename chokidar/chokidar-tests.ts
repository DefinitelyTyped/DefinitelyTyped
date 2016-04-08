/// <reference path="chokidar.d.ts" />

import fs = require('fs');
import chokidar = require('chokidar');

var watcher = chokidar.watch('file, dir, or glob', {
    ignored: /[\/\\]\./, persistent: true
});

var log = console.log.bind(console);

watcher
    .on('add', function(path:string) { log('File', path, 'has been added'); })
    .on('addDir', function(path:string) { log('Directory', path, 'has been added'); })
    .on('change', function(path:string) { log('File', path, 'has been changed'); })
    .on('unlink', function(path:string) { log('File', path, 'has been removed'); })
    .on('unlinkDir', function(path:string) { log('Directory', path, 'has been removed'); })
    .on('error', function(error:any) { log('Error happened', error); })
    .on('ready', function() { log('Initial scan complete. Ready for changes.'); })
    .on('raw', function(event:Event, path:string, details:any) { log('Raw event info:', event, path, details); })

// 'add', 'addDir' and 'change' events also receive stat() results as second
// argument when available: http://nodejs.org/api/fs.html#fs_class_fs_stats
watcher.on('change', function(path:string, stats:fs.Stats) {
    if (stats) console.log('File', path, 'changed size to', stats.size);
});

// Watch new files.
watcher.add('new-file');
watcher.add(['new-file-2', 'new-file-3', '**/other-file*']);

// Un-watch some files.
watcher.unwatch('new-file*');

// Only needed if watching is `persistent: true`.
watcher.close();

// One-liner
require('chokidar').watch('.', {ignored: /[\/\\]\./}).on('all', function(event:string, path:string) {
    console.log(event, path);
});