import DatadogWinston = require("datadog-winston");

const options: DatadogWinston.DatadogTransportOptions = {
    apiKey: "<key>",
    ddsource: "node.js",
    ddtags: "key:value",
    hostname: "hostname",
    level: "error",
    service: "service",
    intakeRegion: "eu",
};

const logger = new DatadogWinston(options);
