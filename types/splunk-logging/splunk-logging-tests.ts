import { Logger } from 'splunk-logging';

const config = {
    token: "your-token-here",
    url: "https://splunk.local:8088"
};

const logger = new Logger(config);
logger.requestOptions.strictSSL = true;
logger.eventFormatter = (msg, sev) => ({});
logger.error = (err, context) => { context.message; };
logger.serializedContextQueue[0] = { foo: 'bar' };

const payload = {
    message: {
        temperature: "70F",
        chickenCount: 500
    }
};

logger.send(payload, (err, resp, body) => {
    // If successful, body will be { text: 'Success', code: 0 }
    body.text = 'foo';
    body.code = 0;
});

const fullPayload = {
    message: [ 1, 2, 3 ],
    severity: 'error',
    metadata: {
        host: 'myHost',
        index: 'splunkIndex',
        source: 'source',
        sourcetype: 'sourcetype',
    },
};

logger.send(fullPayload);

const fullConfig = {
    token: 'token',
    name: 'loggerName',
    host: 'splunkHost',
    maxRetries: 1,
    path: 'splunkPath',
    procotol: 'https',
    port: 2,
    level: 'info',
    batchInterval: 3,
    maxBatchSize: 4,
    maxBatchCount: 5,
};

new Logger(fullConfig);
