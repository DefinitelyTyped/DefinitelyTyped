import remotes = require('list-git-remotes');

remotes((err, res, stderr) => {
    err; // $ExpectType ExecException | null
    res; // $ExpectType Remotes
    stderr; // $ExpectType string | undefined
});
remotes('some/project', (err, res, stderr) => {
    err; // $ExpectType ExecException | null
    res; // $ExpectType Remotes
    stderr; // $ExpectType string | undefined
});

remotes.sync(); // $ExpectType Remotes
remotes.sync('some/project'); // $ExpectType Remotes
remotes.sync('some/project', { shell: 'foo' }); // $ExpectType Remotes
remotes.sync({ cwd: 'some/project', shell: 'foo' }); // $ExpectType Remotes
