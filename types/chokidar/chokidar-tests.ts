import * as fs from 'fs';
import chokidar = require('chokidar');

const watcher = chokidar.watch('file, dir, or glob', {
    ignored: /[\/\\]\./, persistent: true
});

const log = console.log.bind(console);

watcher
    .on('add', (path: string) => {
        log('File', path, 'has been added');
    })
    .on('addDir', (path: string) => {
        log('Directory', path, 'has been added');
    })
    .on('change', (path: string) => {
        log('File', path, 'has been changed');
    })
    .on('unlink', (path: string) => {
        log('File', path, 'has been removed');
    })
    .on('unlinkDir', (path: string) => {
        log('Directory', path, 'has been removed');
    })
    .on('error', (error: any) => {
        log('Error happened', error);
    })
    .on('ready', () => {
        log('Initial scan complete. Ready for changes.');
    })
    .on('raw', (event: string, path: string, details: any) => {
        log('Raw event info:', event, path, details);
    });

// 'add', 'addDir' and 'change' events also receive stat() results as second
// argument when available: http://nodejs.org/api/fs.html#fs_class_fs_stats
watcher.on('change', (path: string, stats: fs.Stats) => {
    if (stats) {
        console.log('File', path, 'changed size to', stats.size);
    }
});

// Watch new files.
watcher.add('new-file');
watcher.add(['new-file-2', 'new-file-3', '**/other-file*']);

// Un-watch some files.
watcher.unwatch('new-file*');

// Only needed if watching is `persistent: true`.
watcher.close();

// One-liner
chokidar.watch('.', { ignored: /[\/\\]\./ }).on('all', (event: string, path: string) => {
    console.log(event, path);
});
