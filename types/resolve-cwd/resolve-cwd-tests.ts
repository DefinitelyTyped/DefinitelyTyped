import resolveCwd = require('resolve-cwd');

// $ExpectType string
resolveCwd('./foo');

// $ExpectType string | null
resolveCwd.silent('./foo');
