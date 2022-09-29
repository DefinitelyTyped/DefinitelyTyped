import AGSimpleBroker = require('ag-simple-broker');

const brokerEngine = new AGSimpleBroker();

(async () => {
    // tslint:disable-next-line: await-promise Bug in tslint: https://github.com/palantir/tslint/issues/3997
    for await (const { error } of brokerEngine.listener('error')) {
        console.log(error);
    }
})();

if (brokerEngine.isReady) {
    console.log('ready');
} else {
    (async () => {
        await brokerEngine.listener('ready').once();
        console.log('ready');
    })();
}

const exchange = brokerEngine.exchange();

brokerEngine.subscribeSocket(exchange, 'test');

exchange.invokePublish('test', 'dummy');
exchange.invokePublish('test', {});

brokerEngine.unsubscribeSocket(exchange, 'test');

// check the various events
(async () => {
    // $ExpectType {}
    await brokerEngine.listener('ready').once();

    const subscribeResult = await brokerEngine.listener('subscribe').once();

    // $ExpectType string
    subscribeResult.channel;

    const unsubscribeResult = await brokerEngine.listener('unsubscribe').once();

    // $ExpectType string
    unsubscribeResult.channel;

    const errorResult = await brokerEngine.listener('error').once();

    // $ExpectType any
    errorResult.error;

    const publishResult = await brokerEngine.listener('publish').once();

    // $ExpectType string
    publishResult.channel;

    // $ExpectType any
    publishResult.data;
})();
