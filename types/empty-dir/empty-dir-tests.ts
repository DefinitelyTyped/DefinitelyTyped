import emptyDir = require('empty-dir');

emptyDir('./', (err, isEmpty) => {
    // $ExpectType ErrnoException
    err;
    // $ExpectType boolean
    isEmpty;
});

// $ExpectType boolean
emptyDir.sync(["./test", "./array"]);

emptyDir(['x'], (err, isEmpty) => {
    // $ExpectType ErrnoException
    err;
    // $ExpectType boolean
    isEmpty;
});

// $ExpectType boolean
emptyDir.sync('./test/empty');

function filter(filepath: string) {
    return !/(Thumbs\.db|\.DS_Store)$/i.test(filepath);
}

emptyDir('./', filter, (err, isEmpty) => {
    // $ExpectType ErrnoException
    err;
    // $ExpectType boolean
    isEmpty;
});

// $ExpectType boolean
emptyDir.sync('./test/empty', filter);

// $ExpectType Promise<boolean>
emptyDir('./');

// $ExpectType Promise<boolean>
emptyDir('./', filter);
