import Primus = require('primus');

const primus = Primus.createServer({
    transformer: 'websockets',
    parser: 'JSON',
    plugin: 'mirage'
});

primus.on('connection', function connection(spark) {
    spark.on('data', function received(data) {
        spark.write(data);
    });
    console.log('current connections: ', primus.connected);
});

const Socket = Primus.createSocket({
    transformer: 'websockets',
    parser: 'JSON',
    plugin: 'mirage'
});
const client = new Socket('ws://www.example.com');

client.on('open', () => {
    client.write('foo');
});

client.on('reconnect scheduled', (opts) => {
  console.log('Reconnecting in %d ms', opts.scheduled);
  console.log('This is attempt %d out of %d', opts.attempt, opts.retries);
});
