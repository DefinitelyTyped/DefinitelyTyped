import nsqjs = require('nsqjs');

// Reader
const reader = new nsqjs.Reader('sample_topic', 'test_channel', {
    nsqdTCPAddresses: '127.0.0.1:4150'
});

reader.connect();
reader.pause();
reader.unpause();
reader.isPaused();
reader.close();

reader.on('ready', () => {});
reader.on('not_ready', () => {});
reader.on('nsqd_connected', (host, port) => {});
reader.on('nsqd_closed', (host, port) => {});
reader.on('error', error => {});
reader.on('discard', message => {});

reader.on('message', message => {
    console.log('Received message [%s]', message.id);

    message.body.toString();
    message.json();

    message.requeue();
    message.requeue(100);
    message.requeue(100, false);

    message.finish();

    message.on('backoff', () => {});
    message.on('respond', (responseType, wireData) => {});
});

// Writer
const writer = new nsqjs.Writer('127.0.0.1', 4150);

writer.connect();

writer.on('closed', () => {});
writer.on('error', error => {});

writer.on('ready', () => {
    writer.publish('sample_topic', 'message');
    writer.publish('sample_topic', ['message 1', 'message 2']);
    writer.publish('sample_topic', 'message', error => {
        if (error) { return; }
        writer.close();
    });

    writer.deferPublish('sample_topic', 'message', 100);
    writer.deferPublish('sample_topic', ['message 1', 'message 2'], 100);
    writer.deferPublish('sample_topic', 'message', 1000, error => {
        if (error) { return; }
        writer.close();
    });
});
