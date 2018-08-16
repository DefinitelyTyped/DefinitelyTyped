import cpy = require('cpy');

cpy(['src/*.png', '!src/goat.png'], 'dist').then(() => {});
cpy('foo.js', 'destination', {
    rename: basename => `prefix-${basename}`,
    cwd: '/',
    parents: true,
    stat: true,
    overwrite: false,
});
cpy('foo.js', 'destination')
    .on('progress', progress => {
        let num: number;
        num = progress.completedFiles;
        num = progress.totalFiles;
        num = progress.completedSize;
    })
    .then(() => {});
