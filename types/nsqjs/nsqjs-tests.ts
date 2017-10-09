import nsqjs = require("nsqjs")


/*
 * Enable reader
 */

let reader = new nsqjs.Reader("sample_topic", 'test_channel', {
    nsqdTCPAddresses: '127.0.0.1:4150',
    //lookupdHTTPAddresses: ['127.0.0.1:4161']
})
reader.connect()


reader.on("nsqd_connected", function (host, port) {
    console.log(`reader connected => ${host}:${port}`)
})

reader.on('message', function (msg: nsqjs.Message) {
    console.log('Received message [%s]: %s', msg.id, msg.body.toString());
    msg.finish();
});


/*
 * Enable writer
 */

let writer = new nsqjs.Writer("127.0.0.1", 4150)
writer.connect();

writer.on('ready', function () {
    console.log('writer ready')
    writer.publish('sample_topic', 'it really tied the room together');
    writer.publish('sample_topic', [
        'Uh, excuse me. Mark it zero. Next frame.',
        'Smokey, this is not \'Nam. This is bowling. There are rules.'
    ]);
    writer.publish('sample_topic', 'Wu?', function (err: Error) {
        if (err) {
            return console.error(err.message);
        }
        console.log('Message sent successfully');
        writer.close();
    });
});

writer.on('closed', function () {
    console.log('Writer closed');
});

/*
 * Message
 */

let message: nsqjs.Message = new nsqjs.Message('1', Date.now(), 0, 'body', 90, 50, 100);

message.finish()

message.requeue()
message.requeue(100)
message.requeue(100, false)

message.on('backoff', () => {})
message.on('respond', (responseType, wireData) => {})
