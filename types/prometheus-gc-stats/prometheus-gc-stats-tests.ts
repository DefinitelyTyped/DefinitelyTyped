import gcStats = require('prometheus-gc-stats');

const testFunc = gcStats('something');
// $ExpectType void
testFunc();
