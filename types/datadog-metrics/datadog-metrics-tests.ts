import metrics = require('datadog-metrics');
metrics.init({ host: 'myhost', prefix: 'myapp.' });
metrics.gauge('mygauge', 42);
metrics.gauge('mykey', 11, ['a', 'b', 'c'], Date.now());
metrics.increment('test.requests_served');
metrics.increment('test.awesomeness_factor', 10);
metrics.increment('test.service_time', 0.248);
metrics.histogram('mykey', 11, ['a', 'b', 'c'], Date.now());
metrics.histogram('mykey', 11, ['a', 'b', 'c'], Date.now());
metrics.flush();
metrics.flush(() => {});
metrics.flush(() => {}, err => {});

const metricsLogger = new metrics.BufferedMetricsLogger({
    apiKey: 'TESTKEY',
    host: 'myhost',
    prefix: 'myapp.',
    flushIntervalSeconds: 15,
    defaultTags: ['env:staging', 'region:us-east-1']
});
metricsLogger.gauge('mygauge', 42);
metricsLogger.gauge('mykey', 11, ['a', 'b', 'c'], Date.now());
metricsLogger.increment('test.requests_served');
metricsLogger.increment('test.awesomeness_factor', 10);
metricsLogger.increment('mykey', 11, ['a', 'b', 'c'], Date.now());
metricsLogger.histogram('test.service_time', 0.248);
metricsLogger.histogram('mykey', 11, ['a', 'b', 'c'], Date.now());
metricsLogger.flush();
metricsLogger.flush(() => {});
metricsLogger.flush(() => {}, err => {});
