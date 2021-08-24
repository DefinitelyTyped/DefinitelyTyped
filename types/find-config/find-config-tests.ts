import findConfig = require('find-config');

findConfig();  // $ExpectType string | null
findConfig.obj(); // $ExpectType { cwd: string; dir: string; path: string; } | null
findConfig.read(); // $ExpectType string | null
findConfig.require(); // $ExpectType any
