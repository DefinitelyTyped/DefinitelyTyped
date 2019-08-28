import DatadogWinston = require("datadog-winston");

const logger = new DatadogWinston({
    apiKey: '<key>',
    ddsource: 'node.js',
    ddtags: 'key:value',
    hostname: 'hostname',
    level: 'error',
    service: 'service',
});
