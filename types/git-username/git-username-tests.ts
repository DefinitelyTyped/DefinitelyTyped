import username = require('git-username');

username('some/path'); // $ExpectType string | null
username({ cwd: 'some/path' }); // $ExpectType string | null
username({ strict: true }); // $ExpectType string
