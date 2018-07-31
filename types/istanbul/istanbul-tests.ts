
import * as istanbul from 'istanbul';

// Instrument code
var instrumenter = new istanbul.Instrumenter();

var generatedCode = instrumenter.instrumentSync('function meaningOfLife() { return 42; }',
    'filename.js');


// Generate reports given a bunch of coverage JSON objects
var collector = new istanbul.Collector(),
    reporter = new istanbul.Reporter(),
    sync = false;

var obj1 = {},
    obj2 = {};

collector.add(obj1);
collector.add(obj2); //etc.

reporter.add('text');
reporter.addAll([ 'lcov', 'clover' ]);
reporter.write(collector, sync, function () {
    console.log('All reports generated');
});
