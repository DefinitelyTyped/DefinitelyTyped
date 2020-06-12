import scBroker = require('sc-broker');
import SCBroker = require('sc-broker/scbroker');

// From the README

// $ExpectType SCBrokerServer
scBroker.createServer({ port: 9000, secretKey: 'mySecretKey' });

const conf = { port: 9000 };
const server = scBroker.createServer(conf);

server.on('ready', () => {
    console.log('Server ready, create client');
    const client = scBroker.createClient(conf);

    // $ExpectType boolean
    client.isConnected();
});

server.destroy();

const dataClient = scBroker.createClient({ port: 9000, secretKey: 'mySecretKey' });

dataClient.set(['this', 'is', 'a', 'deep', 'key'], 'Hello world');

dataClient.get(['this', 'is', 'a'], (err, val) => {
    if (!err) console.log(val);
});

dataClient.add(['this', 'is', 'a'], 'foo');

dataClient.get(['this', 'is', 'a', 0], (err, val) => {
    if (!err) console.log(val);
});

////////////////////////////////////////////////////
/// SCBroker tests
////////////////////////////////////////////////////

const run = () => {
    console.log('run called!');
};

let broker = new SCBroker();
broker = new SCBroker({ run });
broker.options = { environment: 'prod' };

// $ExpectType number
broker.id;

// $ExpectType number
broker.instanceId;

// $ExpectType FlexiMap
broker.dataMap;

// $ExpectType ExpiryManager
broker.dataExpirer;

const subscriptions = broker.subscriptions;

// $ExpectType ComSocket
subscriptions[1]['test'];

broker
    .on('subscribe', channel => {
        // $ExpectType string
        channel;
    })
    .on('unsubscribe', channel => {
        // $ExpectType string
        channel;
    })
    .on('publish', (channel, data) => {
        // $ExpectType string
        channel;

        // $ExpectType any
        data;
    })
    .on('masterMessage', (data, masterMessageResponse) => {
        // $ExpectType any
        data;

        masterMessageResponse(null, 'test');
        masterMessageResponse(new Error(), null);
    });

broker.publish('testChannel', 123);

broker.exec(dataMap => {
    dataMap.set(['main', 'message'], 'Message');
    return dataMap.get(['main']);
});

broker.sendToMaster('data');
broker.sendToMaster(123, (err, response) => {
    if (!err) {
        // $ExpectType any
        response;
    }
});

class MyBroker extends SCBroker {
    run() {
        this.on('subscribe', channel => {});
    }
}

new MyBroker();
