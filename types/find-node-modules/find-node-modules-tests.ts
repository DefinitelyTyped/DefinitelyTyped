import findNodeModules = require('find-node-modules');

// $ExpectType string[]
findNodeModules();

// $ExpectType string[]
findNodeModules('./someDir');

// $ExpectType string[]
findNodeModules({ cwd: './someDir', relative: false });

// @ts-expect-error
findNodeModules(123);
