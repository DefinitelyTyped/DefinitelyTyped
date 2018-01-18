import fs = require('fs');

import re = require('readdir-enhanced');

const reFs: re.FileSystem = {
    stat: fs.stat,
    lstat: fs.lstat,
    readdir: fs.readdir
};

const reOptions: re.Options = {
    basePath: '',
    fs: reFs,
    sep: '/'
};

reOptions.deep = true;
reOptions.deep = 2;
reOptions.deep = /regexp/;
reOptions.deep = () => true;

reOptions.deep = () => 0; // $ExpectError
reOptions.deep = ''; // $ExpectError

reOptions.filter = '';
reOptions.filter = /regexp/;
reOptions.filter = () => true;

reOptions.filter = () => 0; // $ExpectError
reOptions.filter = 1; // $ExpectError

const callbackString: re.CallbackString = (err, result) => { };
const callbackEntry: re.CallbackEntry = (err, result) => { };

re('root', callbackString); // $ExpectType void
re('root', reOptions, callbackString); // $ExpectType void
re('root'); // $ExpectType Promise<string[]>
re('root', reOptions); // $ExpectType Promise<string[]>

re.stat('root', callbackEntry); // $ExpectType void
re.stat('root', reOptions, callbackEntry); // $ExpectType void
re.stat('root'); // $ExpectType Promise<Entry[]>
re.stat('root', reOptions); // $ExpectType Promise<Entry[]>

re.readdirAsyncStat('root', callbackEntry); // $ExpectType void
re.readdirAsyncStat('root', reOptions, callbackEntry); // $ExpectType void
re.readdirAsyncStat('root'); // $ExpectType Promise<Entry[]>
re.readdirAsyncStat('root', reOptions); // $ExpectType Promise<Entry[]>

re.async('root', callbackString); // $ExpectType void
re.async('root', reOptions, callbackString); // $ExpectType void
re.async('root'); // $ExpectType Promise<string[]>
re.async('root', reOptions); // $ExpectType Promise<string[]>

re.async.stat('root', callbackEntry); // $ExpectType void
re.async.stat('root', reOptions, callbackEntry); // $ExpectType void
re.async.stat('root'); // $ExpectType Promise<Entry[]>
re.async.stat('root', reOptions); // $ExpectType Promise<Entry[]>

re.stream('root'); // $ExpectType ReadableStream
re.stream('root', reOptions); // $ExpectType ReadableStream

re.stream.stat('root'); // $ExpectType ReadableStream
re.stream.stat('root', reOptions); // $ExpectType ReadableStream

re.readdirStreamStat('root'); // $ExpectType ReadableStream
re.readdirStreamStat('root', reOptions); // $ExpectType ReadableStream

re.sync('root'); // $ExpectType string[]
re.sync('root', reOptions); // $ExpectType string[]

re.sync.stat('root'); // $ExpectType Entry[]
re.sync.stat('root', reOptions); // $ExpectType Entry[]

re.readdirSyncStat('root'); // $ExpectType Entry[]
re.readdirSyncStat('root', reOptions); // $ExpectType Entry[]

// Entry
re.sync('root'); // $ExpectType string[]

const entries = re.sync.stat('root'); // $ExpectType Entry[]

entries[0]; // $ExpectType Entry
entries[0].path; // $ExpectType string
entries[0].depth; // $ExpectType number
