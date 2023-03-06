import minimatchAll = require('minimatch-all');

// $ExpectType boolean
minimatchAll('/dir', ['**', '!/dir']);

// $ExpectType boolean
minimatchAll('/dir', ['**', '!/dir'], { nonegate: true });

// @ts-expect-error
minimatchAll('/dir', 'glob pattern');
