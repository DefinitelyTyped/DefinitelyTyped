import graphite = require('graphite');

interface Metrics {
    available: number;
    free: number;
    total: number;
}

interface OptionalMetrics {
    disk?: Metrics;
    memory?: Metrics;
}

const memory: Metrics = {
    available: 30000000,
    free: 25000000,
    total: 40000000,
};

const os: OptionalMetrics = {
    memory,
};

const client = graphite.createClient('plaintext://graphite.example.org:2003/');

// Check metric values
client.write({ foo: 23 });
client.write({ foo: { bar: { qux: 23 } } });
// Check interfaces as metric values
client.write(memory);
// Check interfaces with optional fields as metric values
client.write(os);
// Check nested interfaces as metric values
client.write({ os: { memory } });

// The following metric values should yield compilation errors, but these are
// ignored because of the use of the any keyword as type annotation.
client.write(1);
client.write('foo');
client.write(false);
client.write([]);
client.write({ foo: 'foo' });
client.write({ foo: { baz: 'baz' } });
client.write({ foo: new Date() });
client.write({ foo: [] });

// Check overloaded arguments
client.write({ foo: 23 }, (err: any) => {});
client.write({ foo: 23 }, Date.now(), (err: any) => {});

// Check metric and tag values
client.writeTagged({ foo: 23 }, { foo: 'baz' });
client.writeTagged({ foo: { bar: 23 } }, { foo: { bar: 'qux' } });

// Check overloaded arguments
client.writeTagged({ foo: 23 }, { foo: 'baz' }, (err) => {});
client.writeTagged({ foo: 23 }, { foo: 'baz' }, Date.now(), (err) => {});

// Check utilities

// Graphite metric values should be numeric, but outside the graphite context
// flatten can be used to flatten nested object containing any value.
graphite.flatten({ foo: 23 });
graphite.flatten({ foo: { bar: 1, baz: '2' }, qux: true });
graphite.flatten(memory);

// Check other parameters
graphite.flatten({ foo: 23 }, { baz: 'bar' });
graphite.flatten({ foo: 23 }, { baz: 'bar' }, 'prefix');

graphite.appendTags({ foo: 23 }, { foo: 'foo' });

// Should yield compilation error when a nested object is provided, but won't
// happen when using any as the type annotation.
graphite.appendTags({ foo: { bar: 23 } }, { foo: 'foo' });
