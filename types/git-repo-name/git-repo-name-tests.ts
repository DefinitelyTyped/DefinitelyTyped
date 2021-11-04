import repoName = require('git-repo-name');

repoName('foo'); // $ExpectType Promise<string>
repoName({ cwd: 'foo' }); // $ExpectType Promise<string>
repoName({ path: 'foo' }); // $ExpectType Promise<string>
// $ExpectType void
repoName((err, repoName) => {
    err; // $ExpectType Error | null
    repoName; // $ExpectType string
});
// $ExpectType void
repoName('foo', (err, repoName) => {
    err; // $ExpectType Error | null
    repoName; // $ExpectType string
});
// $ExpectType void
repoName({ cwd: 'foo' }, (err, repoName) => {
    err; // $ExpectType Error | null
    repoName; // $ExpectType string
});

repoName.promise('foo'); // $ExpectType Promise<string>
repoName.promise({ cwd: 'foo' }); // $ExpectType Promise<string>

repoName.sync('foo'); // $ExpectType string
repoName.sync({ cwd: 'foo' }); // $ExpectType string
