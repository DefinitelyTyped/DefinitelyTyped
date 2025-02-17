import download = require('download-package-tarball');

// $ExpectType Promise<void>
download({
    url: 'https://api.github.com/repos/kesla/node-snappy/tarball/master',
    dir: '/dir/where/file/will/be/downloaded',
    gotOpts: {
        headers: {
            beep: 'boop'
        }
    }
}).then(() => {
    console.log('file is now downloaded!');
}).catch(err => {
    console.log('oh crap the file could not be downloaded properly');
    console.log(err);
});
