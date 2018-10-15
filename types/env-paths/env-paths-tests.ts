import envPaths = require('env-paths');

// $ExpectType Paths
envPaths('./');
// $ExpectType Paths
envPaths('./', {suffix: 'test'});
// $ExpectType Paths
envPaths('./', {suffix: false});
// $ExpectType Paths
envPaths('./', {suffix: true});
