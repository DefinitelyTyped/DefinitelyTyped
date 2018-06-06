import mkdirp = require('mkdirp');

mkdirp('str', (err, made) => {
    const str: string = made;
});
mkdirp('str', '0777', (err, made) => {});
mkdirp('str', {}, (err, made) => {});
mkdirp('str', { mode: '0777' }, (err, made) => {});

// $ExpectType string
mkdirp.sync('str');
mkdirp.sync('str', '0777');
mkdirp.sync('str', {});
mkdirp.sync('str', { mode: '0777' });

// $ExpectError
mkdirp.sync('str', { mode: '0777', fs: {} });
