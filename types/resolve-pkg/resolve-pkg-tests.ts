import rpkg = require('resolve-pkg');
import resolvePkg = require('resolve-pkg');

// $ExpectType string
rpkg('hello');
rpkg('hello', {});
rpkg('hello', { cwd: true });

const resolvePkgOpts: resolvePkg.Options = {};
