import fsevents = require('fsevents');
const watcher = fsevents(__dirname);

watcher.on('fsevent', (path, flags, id) => {});
watcher.on('change', (path, info) => {});
// $ExpectType Watcher
watcher.start();
// $ExpectType Watcher
watcher.stop();

const nativeWatcher = new fsevents.FSEvents('', (path, flags, id) => {});
// $ExpectType FSEvents
nativeWatcher.start();
// $ExpectType FSEvents
nativeWatcher.stop();

const num: number = fsevents.Constants.kFSEventStreamEventFlagEventIdsWrapped;
