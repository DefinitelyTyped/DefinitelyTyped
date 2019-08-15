// Copied and ported from https://github.com/sivy/node-statsd#usage

import { StatsD } from 'node-statsd';

const client = new StatsD({ mock: true });

// Timing: sends a timing command with the specified milliseconds
client.timing('response_time', 42);

// Increment: Increments a stat by a value (default is 1)
client.increment('my_counter');

client.increment('my_counter', 1, ['foo:1', 'bar:abc']);

// Decrement: Decrements a stat by a value (default is -1)
client.decrement('my_counter');

// Histogram: send data for histogram stat
client.histogram('my_histogram', 42);

// Gauge: Gauge a stat by a specified amount
client.gauge('my_gauge', 123.45);

// Set: Counts unique occurrences of a stat (alias of unique)
client.set('my_unique', 'foobar');
client.unique('my_unique', 'foobarbaz');

// Incrementing multiple items
client.increment(['these', 'are', 'different', 'stats']);

// Sampling, this will sample 25% of the time the StatsD Daemon will compensate for sampling
client.increment('my_counter', 1, 0.25);

// Tags, this will add user-defined tags to the data
client.histogram('my_histogram', 42, ['foo', 'bar']);

// Using the callback
client.set(['foo', 'bar'], 42, (error: Error, bytes: Buffer) => {
  // this only gets called once after all messages have been sent
  if (error) {
    console.error('Oh noes! There was an error:', error);
  } else {
    console.log('Successfully sent', bytes, 'bytes');
  }
});

function next() {}

// Sampling, tags and callback are optional and could be used in any combination
client.histogram('my_histogram', 42, 0.25); // 25% Sample Rate
client.histogram('my_histogram', 42, ['tag']); // User-defined tag
client.histogram('my_histogram', 42, next); // Callback
client.histogram('my_histogram', 42, 0.25, ['tag']);
client.histogram('my_histogram', 42, 0.25, next);
client.histogram('my_histogram', 42, ['tag'], next);
client.histogram('my_histogram', 42, 0.25, ['tag'], next);

client.socket.on('error', (error) => {
  console.error("Error in socket: ", error);
});
