import minimatchAll = require('minimatch-all');

// $ExpectType boolean
minimatchAll('/dir', ['**', '!/dir']);

// $ExpectType boolean
minimatchAll('/dir', ['**', '!/dir'], { nonegate: true });

// $ExpectError
minimatchAll('/dir', 'glob pattern');
