import * as targz from 'targz';

// $ExpectType void
targz.compress(
    {
        src: 'srcPath',
        dest: 'destPath'
    },
    (err: Error | string | null) => {}
);

// $ExpectType void
targz.decompress(
    {
        src: 'srcPath',
        dest: 'destPath'
    },
    (err: Error | string | null) => {}
);
