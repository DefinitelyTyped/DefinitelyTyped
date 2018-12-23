import { createStream } from 'splunk-bunyan-logger';
import { Config } from 'splunk-logging';
import { createLogger } from 'bunyan';

const config = {
    token: "your-token-here",
    url: "https://splunk.local:8088"
};

const splunkStream = createStream(config);
// Enable SSL certificate validation
splunkStream.stream.logger.requestOptions.strictSSL = true;

splunkStream.on("error", (err, context) => {
    // Handle errors here
    console.log("Error", err, "Context", context);
});

splunkStream.flush((err, resp, body) => {
    // If successful, body will be { text: 'Success', code: 0 }
    console.log("Response from Splunk", body);
});

splunkStream.setEventFormatter((message, severity) => {
    let event = `[${severity}]`;

    if (typeof message === "object") {
        for (const key in message) {
            event += `${key}=${message[key]} `;
        }
    } else {
        event += "message=" + message;
    }

    return event;
});

// Note: splunkStream must be set to an element in the streams array
const Logger = createLogger({
    name: "my logger",
    streams: [
        splunkStream
    ]
});

// Fully-specified config

const fullConfig: Config = {
    token: 'token',
    name: 'loggerName',
    host: 'splunkHost',
    maxRetries: 2,
    path: 'splunkPath',
    protocol: 'https',
    port: 234,
    level: 'info',
    batchInterval: 200,
    maxBatchSize: 300,
    maxBatchCount: 400,
};

createStream(fullConfig);
