import gs = require('glob-stream');

var read: NodeJS.ReadableStream;

// Types
var strPredicate: gs.UniqueByStringPredicate = 'base';
var fnPredicate: gs.UniqueByFunctionPredicate = (entry) => entry.path;

// Base cases
read = gs('xx');
read = gs('xx', {});
read = gs(['xx'], {});

// Package options
read = gs(['xx'], { allowEmpty: true });
read = gs(['xx'], { base: 'xx' });
read = gs(['xx'], { cwdbase: true });
read = gs(['xx'], { uniqueBy: 'path' });
read = gs(['xx'], { uniqueBy: 'base' });
read = gs(['xx'], { uniqueBy: 'cwd' });
read = gs(['xx'], { uniqueBy: (entry: gs.Entry) => entry.path });

// Glob options
read = gs(['xx'], { root: 'root' });
read = gs(['xx'], { debug: true });
