import userName = require('git-user-name');

userName(); // $ExpectType string | null
userName({ cwd: 'foo' }); // $ExpectType string | null
userName({ path: 'foo' }); // $ExpectType string | null
userName({ gitconfig: 'foo' }); // $ExpectType string | null
