import resolveGlobal = require('resolve-global');

// $ExpectType string
resolveGlobal('cat-names');
// $ExpectType string | null
resolveGlobal.silent('cat-names');
