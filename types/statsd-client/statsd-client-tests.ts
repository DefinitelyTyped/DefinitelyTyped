
import SDC = require("statsd-client");

var sdc = new SDC( { host: 'statsd.example.com' });

var timer = new Date();
sdc.increment('some.counter'); // Increment by one.
sdc.gauge('some.gauge', 10); // Set gauge to 10
sdc.timing('some.timer', timer); // Calculates time diff

sdc.close(); // Optional - stop NOW

// Initialization
sdc = new SDC({host: 'statsd.example.com', port: 8124, debug: true});

// Counting stuff
sdc.increment('systemname.subsystem.value'); // Increment by one
sdc.decrement('systemname.subsystem.value', -10); // Decrement by 10
sdc.counter('systemname.subsystem.value', 100); // Increment by 100

// Gauges
sdc.gauge('what.you.gauge', 100);
sdc.gaugeDelta('what.you.gauge', 20);  // Will now count 120
sdc.gaugeDelta('what.you.gauge', -70); // Will now count 50
sdc.gauge('what.you.gauge', 10);       // Will now count 10

// Set
sdc.set('your.set', 200);

// Timeouts
var start = new Date();
setTimeout(function () {
    sdc.timing('random.timeout', start);
}, 100 * Math.random());

// Stopping gracefully
var start = new Date();
setTimeout(function () {
    sdc.timing('random.timeout', start); // 2 - implicitly re-creates socket.
    sdc.close(); // 3 - Closes socket after last use.
}, 100 * Math.random());
sdc.close(); // 1 - Closes socket early.

// Prefix magic
// Create generic client
var sdc = new SDC({host: 'statsd.example.com', prefix: 'systemname'});
sdc.increment('foo'); // Increments 'systemname.foo'
// ... do great stuff ...

// Subsystem A
var sdcA = sdc.getChildClient('a');
sdcA.increment('foo'); // Increments 'systemname.a.foo'

// Subsystem B
var sdcB = sdc.getChildClient('b');
sdcB.increment('foo'); // Increments 'systemname.b.foo'
