import gcStats = require('prometheus-gc-stats');

const testFunc = gcStats('something');
// $ExpectType void
testFunc();

const testFuncWithConfig = gcStats('something', {
    prefix: 'prefix_',
});
// $ExpectType void
testFuncWithConfig();
