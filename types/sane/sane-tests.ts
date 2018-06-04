import sane = require('sane');

const watcher = sane('path/to/dir', {glob: ['**/*.js', '**/*.css']});
sane('path/to/dir', {glob: '**/*.js'});
sane('path/to/dir', {poll: true});
sane('path/to/dir', {watchman: true});
sane('path/to/dir', {fsevents: true});
sane('path/to/dir', {watcher: ''});
sane('path/to/dir', {dot: true});
sane('path/to/dir', {ignored: ['', /./, (str) => true]});
sane('path/to/dir', {ignored: ''});
sane('path/to/dir', {ignored: /./});
sane('path/to/dir', {ignored(str) { return true; }});
// $ExpectType SaneWatcher
watcher;

watcher.globs; // $ExpectType string[]
watcher.dot; // $ExpectType boolean
watcher.ignored; // $ExpectType string | RegExp | ((...testStrings: string[]) => boolean) | AnymatchMatcher[]
watcher.hasIgnore; // $ExpectType boolean
watcher.root; // $ExpectType string

watcher.on('ready', () => {});
watcher.on('all', (eventType, filePath, root, stat) => {
    eventType; // $ExpectType AllEventType
    filePath; // $ExpectType string
    root; // $ExpectType string
    stat; // $ExpectType Stats | undefined
});
watcher.on('change', (filePath, root, stat) => {
    filePath; // $ExpectType string
    root; // $ExpectType string
    stat; // $ExpectType Stats
});
watcher.on('add', (filePath, root, stat) => {
    filePath; // $ExpectType string
    root; // $ExpectType string
    stat; // $ExpectType Stats
});
watcher.on('delete', (filePath, root) => {
    filePath; // $ExpectType string
    root; // $ExpectType string
});
watcher.on('error', (error) => {
    error; // $ExpectType Error
});
watcher.close();
