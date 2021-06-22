import addRemotePrepare = require('git-add-remote');

const addRemote = addRemotePrepare('foo/bar');

addRemote('foo', 'https://foo.git', (err, stdout, stderr) => {
    err; // $ExpectType ExecException | null
    stdout; // $ExpectType string
    stderr; // $ExpectType string
});

addRemote.sync('foo', 'https://foo.git');
