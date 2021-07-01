import fileExists = require('file-exists');

fileExists('/index.html', (err, exists) => {
    err; // $ExpectType Error | null
    exists; // $ExpectType boolean
});

// $ExpectType void
fileExists('/index.html', { root: '' }, (err, exists) => {
    err; // $ExpectType Error | null
    exists; // $ExpectType boolean
});

fileExists('/index.html'); // $ExpectType Promise<boolean>
fileExists('/index.html', { root: '' }); // $ExpectType Promise<boolean>

fileExists(Buffer.from('/index.html')); // $ExpectType Promise<boolean>
fileExists(new URL('file:///etc/fstab')); // $ExpectType Promise<boolean>

// $ExpectType boolean
fileExists.sync('/index.html');
fileExists.sync('/index.html', { root: '' });
