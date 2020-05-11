import { attach } from 'scc-broker-client';
import SCBroker = require('sc-broker/scbroker');

const scBroker = new SCBroker();

const clusterBrokerClient = attach(scBroker, {
    stateServerHost: 'localhost',
    stateServerPort: 8000,
    mappingEngine: 'simple',
    clientPoolSize: 100,
    authKey: 'secret-key',
    stateServerConnectTimeout: 10000,
    stateServerAckTimeout: 1000,
    stateServerReconnectRandomness: 100,
});

(async () => {
    // tslint:disable-next-line: await-promise Bug in tslint: https://github.com/palantir/tslint/issues/3997
    for await (const { error } of clusterBrokerClient.listener('error')) {
        // $ExpectType Error
        error;
    }

    // tslint:disable-next-line: await-promise Bug in tslint: https://github.com/palantir/tslint/issues/3997
    for await (const { channel, poolIndex, targetURI } of clusterBrokerClient.listener('subscribe')) {
        // $ExpectType string
        channel;

        // $ExpectType number
        poolIndex;

        // $ExpectType string
        targetURI;
    }

    // tslint:disable-next-line: await-promise Bug in tslint: https://github.com/palantir/tslint/issues/3997
    for await (const { channel, poolIndex, targetURI, error } of clusterBrokerClient.listener('subscribeFail')) {
        // $ExpectType string
        channel;

        // $ExpectType number
        poolIndex;

        // $ExpectType string
        targetURI;

        // $ExpectType Error
        error;
    }

    // tslint:disable-next-line: await-promise Bug in tslint: https://github.com/palantir/tslint/issues/3997
    for await (const { targetURI, poolIndex, channel, data } of clusterBrokerClient.listener('publish')) {
        // $ExpectType string
        targetURI;

        // $ExpectType number
        poolIndex;

        // $ExpectType string
        channel;

        // $ExpectType any
        data;
    }

    // tslint:disable-next-line: await-promise Bug in tslint: https://github.com/palantir/tslint/issues/3997
    for await (const { targetURI, poolIndex, channel, error } of clusterBrokerClient.listener('publishFail')) {
        // $ExpectType string
        targetURI;

        // $ExpectType number
        poolIndex;

        // $ExpectType string
        channel;

        // $ExpectType Error
        error;
    }

    // tslint:disable-next-line: await-promise Bug in tslint: https://github.com/palantir/tslint/issues/3997
    for await (const { channelName, packet } of clusterBrokerClient.listener('message')) {
        // $ExpectType string
        channelName;

        // $ExpectType any
        packet;
    }
})();

clusterBrokerClient.subscribe('test-channel');
clusterBrokerClient.invokePublish('test-channel', 'lalala');

// $ExpectType string[]
clusterBrokerClient.getAllSubscriptions();

clusterBrokerClient.unsubscribe('test-channel');
