import * as scClusterBrokerClient from 'scc-broker-client';
import SCBroker = require('sc-broker/scbroker');

const scBroker = new SCBroker();

const clusterBrokerClient = scClusterBrokerClient
    .attach(scBroker, {
        stateServerHost: 'localhost',
        stateServerPort: 8000,
        mappingEngine: 'simple',
        clientPoolSize: 100,
        authKey: 'secret-key',
        stateServerConnectTimeout: 10000,
        stateServerAckTimeout: 1000,
        stateServerReconnectRandomness: 100,
    })
    .on('error', err => {
        console.log(`Received ${err}`);
    })
    .on('subscribe', data => {
        console.log(`Subscribed to ${data.channel}, ${data.poolIndex}, ${data.targetURI}`);
    })
    .on('subscribeFail', data => {
        console.log(`Error ${data.error} while subscribing to ${data.channel}, ${data.poolIndex}, ${data.targetURI}`);
    })
    .on('publish', data => {
        console.log(`Published ${data.data} to ${data.channel}, ${data.poolIndex}, ${data.targetURI}`);
    })
    .on('publishFail', data => {
        console.log(`Error while publishing ${data.data} to ${data.channel}, ${data.poolIndex}, ${data.targetURI}`);
    })
    .on('message', (channelName, packet) => {
        console.log(`Received ${packet} on channel ${channelName}`);
    });

clusterBrokerClient.subscribe('test-channel');
clusterBrokerClient.publish('test-channel', 'lalala');

// $ExpectType string[]
clusterBrokerClient.getAllSubscriptions();

clusterBrokerClient.unsubscribe('test-channel');
