import metrics = require('datadog-metrics');
metrics.init({ host: 'myhost', prefix: 'myapp.' });
metrics.gauge('mygauge', 42);
metrics.increment('test.requests_served');
metrics.increment('test.awesomeness_factor', 10);
metrics.histogram('test.service_time', 0.248);
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
metricsLogger.increment('test.requests_served');
metricsLogger.increment('test.awesomeness_factor', 10);
metricsLogger.histogram('test.service_time', 0.248);
metricsLogger.flush();
metricsLogger.flush(() => {});
metricsLogger.flush(() => {}, err => {});
