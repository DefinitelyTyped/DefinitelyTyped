import { watchPath, PathWatcher, WatcherOptions } from '@atom/watcher';
import watcher = require('@atom/watcher');

// Empty options
watchPath('/var/log', {}, () => {});

const options: WatcherOptions = {
    recursive: true,
};
let w: Promise<PathWatcher>;
w = watcher.watchPath('/var/log', options, events => {
    // $ExpectType Event[]
    events;
    const event = events[0];
    if (event.action === 'renamed') {
        // $ExpectType string
        event.oldPath;
    }
});

w.then(w => {
    // $ExpectType Promise<void>
    w.getStartPromise();
    // $ExpectType string
    w.toString();
    w.onDidError(err => {
        // $ExpectType unknown
        err;
    });

    // $ExpectType void
    w.dispose();
});

// $ExpectType Promise<void>
watcher.configure({
    jsLog: watcher.STDOUT,
    mainLog: watcher.STDERR,
    workerLog: 'worker.log',
    pollingLog: 'polling.log',
    workerCacheSize: 4096,
    pollingThrottle: 1000,
    pollingInterval: 100,
});
