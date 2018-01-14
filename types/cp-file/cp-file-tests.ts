import cpFile = require('cp-file');

cpFile('src/unicorn.png', 'dist/unicorn.png').then(() => {});
cpFile('src/unicorn.png', 'dist/unicorn.png', {overwrite: false}).then(() => {});
cpFile('src/unicorn.png', 'dist/unicorn.png')
    .on('progress', data => {
        let str: string;
        let num: number;

        str = data.src;
        str = data.dest;
        num = data.size;
        num = data.written;
        num = data.percent;
    })
    .then(() => {});

cpFile.sync('src/unicorn.png', 'dist/unicorn.png');
cpFile.sync('src/unicorn.png', 'dist/unicorn.png', {overwrite: false});
