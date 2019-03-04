import GlobEntriesPlugin = require('webpack-watched-glob-entries-plugin');

new GlobEntriesPlugin(); // $ExpectType WebpackWatchedGlobEntries

GlobEntriesPlugin.getEntries(['']); // $ExpectType EntryFunc

// $ExpectType EntryFunc
GlobEntriesPlugin.getEntries([''], {
    ignore: ''
});

// $ExpectType EntryFunc
GlobEntriesPlugin.getEntries([''], {
    ignore: '',
}, {
    basename_as_entry_name: true,
});

GlobEntriesPlugin.getFiles(''); // $ExpectType Record<string, string>

// $ExpectType Record<string, string>
GlobEntriesPlugin.getFiles('', {
    ignore: '',
});

// $ExpectType Record<string, string>
GlobEntriesPlugin.getFiles('', {
    ignore: '',
}, true);
