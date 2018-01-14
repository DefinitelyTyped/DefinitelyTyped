import fileExists = require('file-exists');

fileExists('/index.html', (err, exists) => {
    err; // $ExpectType Error | null
    exists; // $ExpectType boolean
});

fileExists('/index.html', {root: ''}, (err, exists) => {
    err; // $ExpectType Error | null
    exists; // $ExpectType boolean
});

// $ExpectType boolean
fileExists.sync('/index.html');
fileExists.sync('/index.html', {root: ''});
