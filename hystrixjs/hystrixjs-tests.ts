/// <reference path="hystrixjs.d.ts" />
/// <reference path="../q/Q.d.ts"/>

import hystrixjs = require('hystrixjs');
import q = require('q');

var commandFactory = hystrixjs.commandFactory;

var command = commandFactory
    .getOrCreate('testCommand', 'testGroup')
    .circuitBreakerSleepWindowInMilliseconds(5000)
    .errorHandler((error) => {
        return false;
    })
    .timeout(3000)
    .circuitBreakerRequestVolumeThreshold(10)
    .requestVolumeRejectionThreshold(10)
    .circuitBreakerForceOpened(true)
    .circuitBreakerForceClosed(false)
    .statisticalWindowNumberOfBuckets(10)
    .statisticalWindowLength(10)
    .percentileWindowNumberOfBuckets(10)
    .percentileWindowLength(60)
    .circuitBreakerErrorThresholdPercentage(30)
    .fallbackTo((error) => {
        return q.resolve('fallback');
    })
    .run((args) => {
        return q.resolve(args);
    })
    .build();

command.execute('something').then((result) => {
    console.log(result);
})

commandFactory.resetCache();

var metricsFactory = hystrixjs.metricsFactory;

var metrics = metricsFactory.getOrCreate({
    commandKey: 'metricsKey',
    commandGroup: 'metricsGroup'
})
metrics.markSuccess();
metrics.markFailure();
metrics.markRejected();
metrics.markTimeout();
metrics.incrementExecutionCount();
metrics.decrementExecutionCount();
metrics.getCurrentExecutionCount();
metrics.addExecutionTime(3000);
metrics.getRollingCount("FAILURE");
var healthcounts = metrics.getHealthCounts();
console.log(healthcounts.totalCount);
console.log(healthcounts.errorCount);
console.log(healthcounts.errorPercentage);

metricsFactory.resetCache();

metricsFactory.getAllMetrics().map((metrics) => {
    console.log(metrics.getCurrentExecutionCount());
});

var hystrixConfig = hystrixjs.hystrixConfig;
console.log(hystrixConfig.metricsPercentileWindowBuckets());
console.log(hystrixConfig.circuitBreakerForceClosed());
console.log(hystrixConfig.circuitBreakerForceOpened());
console.log(hystrixConfig.circuitBreakerSleepWindowInMilliseconds());
console.log(hystrixConfig.circuitBreakerErrorThresholdPercentage());
console.log(hystrixConfig.circuitBreakerRequestVolumeThreshold());
console.log(hystrixConfig.circuitBreakerRequestVolumeThresholdForceOverride());
console.log(hystrixConfig.circuitBreakerRequestVolumeThresholdOverride());
console.log(hystrixConfig.executionTimeoutInMilliseconds());
console.log(hystrixConfig.metricsStatisticalWindowBuckets());
console.log(hystrixConfig.metricsStatisticalWindowInMilliseconds());
console.log(hystrixConfig.metricsPercentileWindowInMilliseconds());
console.log(hystrixConfig.requestVolumeRejectionThreshold());
console.log(hystrixConfig.resetProperties());
console.log(hystrixConfig.init({}));

var hystrixSSEStream = hystrixjs.hystrixSSEStream;

hystrixSSEStream.toObservable().subscribe((result) => {
    console.log(result);
})
