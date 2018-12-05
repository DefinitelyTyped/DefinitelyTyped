import locatePath = require('locate-path');

const files = [
    'unicorn.png',
    'rainbow.png', // only this one actually exists on disk
    'pony.png'
];

let path: string | undefined;

locatePath(files).then(foundPath => {
    path = foundPath;
});
locatePath(files, {concurrency: 2, preserveOrder: false, cwd: ''}).then(foundPath => {
    path = foundPath;
});

path = locatePath.sync(files);
path = locatePath.sync(files, {cwd: ''});
