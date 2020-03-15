import Primus = require('primus');

const primus = Primus.createServer({
    transformer: 'websockets',
});

primus.on('connection', function connection(spark) {
    spark.on('data', function received(data) {
        spark.write(data);
    });
});

const Socket = Primus.createSocket();
const client = new Socket('ws://www.example.com');

client.on('open', () => {
    client.write('foo');
});
