import isexe = require('isexe');

isexe('some-file-name'); // $ExpectType Promise<boolean>
isexe('some-file-name', { ignoreErrors: true }); // $ExpectType Promise<boolean>
isexe('some-file-name', { uid: 123 }); // $ExpectType Promise<boolean>
isexe('some-file-name', { gid: 123 }); // $ExpectType Promise<boolean>
isexe('some-file-name', { pathExt: 'exe;bat' }); // $ExpectType Promise<boolean>
isexe('some-file-name', (err, isExe) => {
    err; // $ExpectType ErrnoException | undefined
    isExe; // $ExpectType boolean
});
isexe('some-file-name', { ignoreErrors: true }, (err, isExe) => {
    err; // $ExpectType ErrnoException | undefined
    isExe; // $ExpectType boolean
});

isexe.sync('some-file-name'); // $ExpectType boolean
isexe.sync('some-file-name', { ignoreErrors: true }); // $ExpectType boolean
