import { EnvironmentCredentials } from "aws-sdk/lib/core";
import { Client } from "elasticsearch";
import HttpAmazonESConnector = require("http-aws-es");

new Client({
    amazonES: {
        accessKey: "AKID",
        region: "us-east-1",
        secretKey: "secret",
    },
    connectionClass: HttpAmazonESConnector,
    host: "https://amazon-es-host.us-east-1.es.amazonaws.com",
});

new Client({
    amazonES: {
        accessKey: "AKID",
        region: "us-east-1",
        secretKey: "secret",
    },
    connectionClass: require("http-aws-es"),
    host: "https://amazon-es-host.us-east-1.es.amazonaws.com",
});

const myCredentials = new EnvironmentCredentials("AWS");
new Client({
    amazonES: {
        credentials: myCredentials,
        region: "us-east-1",
    },
    connectionClass: HttpAmazonESConnector,
    host: "https://amazon-es-host.us-east-1.es.amazonaws.com",
});

new Client({
    amazonES: {
        credentials: myCredentials,
        region: "us-east-1",
    },
    connectionClass: require("http-aws-es"),
    host: "https://amazon-es-host.us-east-1.es.amazonaws.com",
});
