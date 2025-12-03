import download = require('download-git-repo');

// $ExpectType void
download(
    'gitlab:mygitlab.com:flippidippi/download-git-repo-fixture#my-branch',
    'test/tmp',
    {
        clone: true,
        headers: {
            'PRIVATE-TOKEN': '1234'
        }
    },
    err => {
        console.log(err ? 'Error' : 'Success');
    }
);
