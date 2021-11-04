import username = require('git-username');

// test type exports
type Options = username.Options;
type OptionsWithoutCwd = username.OptionsWithoutCwd;

username(); // $ExpectType string | null
username('some/path'); // $ExpectType string | null
username({ cwd: 'some/path' }); // $ExpectType string | null
username({ strict: true }); // $ExpectType string | null
username('some-path', { strict: true }); // $ExpectType string | null
username('some-path', { cwd: 'some/path' }); // $ExpectError
