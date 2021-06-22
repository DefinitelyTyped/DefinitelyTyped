import SDC = require('statsd-client');

let sdc = new SDC({ host: 'statsd.example.com' });

const timer = new Date();
sdc.increment('some.counter'); // Increment by one.
sdc.gauge('some.gauge', 10); // Set gauge to 10
sdc.timing('some.timer', timer); // Calculates time diff

sdc.close(); // Optional - stop NOW

// Initialization
const tags: SDC.Tags = { foo: 'bar' };
const udpOptions: SDC.UdpOptions = { host: 'statsd.example.com', port: 8124, debug: true, tags };
const tcpOptions: SDC.TcpOptions = { host: 'statsd.example.com', port: 8124, debug: true, tags, socketTimeoutsToClose: 1 };
const httpOptions: SDC.HttpOptions = {
    host: 'statsd.example.com',
    headers: { 'x-foo': 'bar' },
    method: 'get',
    debug: true,
    tags,
};
sdc = new SDC(udpOptions);
sdc = new SDC(tcpOptions);
sdc = new SDC(httpOptions);

// Counting stuff
sdc.increment('systemname.subsystem.value'); // Increment by one
sdc.decrement('systemname.subsystem.value', -10); // Decrement by 10
sdc.counter('systemname.subsystem.value', 100); // Increment by 100
sdc.increment('systemname.subsystem.value.tagged', 1, { biz: 'baz' }); // Increment tagged metric by one
sdc.decrement('systemname.subsystem.value.tagged', -10, { biz: 'baz' }); // Decrement tagged metric  by 10
sdc.counter('systemname.subsystem.value.tagged', 100, { biz: 'baz' }); // Increment tagged metric  by 100

// Gauges
sdc.gauge('what.you.gauge', 100);
sdc.gaugeDelta('what.you.gauge', 20); // Will now count 120
sdc.gaugeDelta('what.you.gauge', -70); // Will now count 50
sdc.gauge('what.you.gauge', 10); // Will now count 10

sdc.gauge('what.you.gauge.tagged', 100, { biz: 'baz' });
sdc.gaugeDelta('what.you.gauge.tagged', 20, { biz: 'baz' }); // Will now count 120
sdc.gaugeDelta('what.you.gauge.tagged', -70, { biz: 'baz' }); // Will now count 50
sdc.gauge('what.you.gauge.tagged', 10, { biz: 'baz' }); // Will now count 10

// Set
sdc.set('your.set', 200);
sdc.set('your.set.tagged', 200, { biz: 'baz' });

// Timeouts
let start = new Date();
setTimeout(function () {
    sdc.timing('random.timeout', start);
}, 100 * Math.random());

setTimeout(function () {
    sdc.timing('random.timeout.tagged', start, { biz: 'baz' });
}, 100 * Math.random());

// Histogram
sdc.histogram('histogram.stuff', 40);
sdc.histogram('histogram.stuff', 44, { biz: 'baz' });

// Raw string output
sdc.raw('my.metric:123|g');

// Internal tags formatting
sdc.formatTags({ biz: 'baz' });

// Stopping gracefully
start = new Date();
setTimeout(function () {
    sdc.timing('random.timeout', start); // 2 - implicitly re-creates socket.
    sdc.close(); // 3 - Closes socket after last use.
}, 100 * Math.random());
sdc.close(); // 1 - Closes socket early.

// Prefix magic
// Create generic client
sdc = new SDC({ host: 'statsd.example.com', prefix: 'systemname' });
sdc.increment('foo'); // Increments 'systemname.foo'
// ... do great stuff ...

// Subsystem A
const sdcA = sdc.getChildClient('a');
sdcA.increment('foo'); // Increments 'systemname.a.foo'

// Subsystem B
const sdcB = sdc.getChildClient('b');
sdcB.increment('foo'); // Increments 'systemname.b.foo'

// Express middleware helper
sdc.helpers.getExpressMiddleware('express.metrics', { timeByUrl: true }); // Returns an express handler
