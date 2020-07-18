import * as AWS from "aws-sdk";
import { Client } from "elasticsearch";
import HttpAmazonESConnector = require("http-aws-es");

new Client({
    awsConfig: new AWS.Config({
        accessKeyId: "AKID",
        region: "us-east-1",
        secretAccessKey: "secret",
    }),
    connectionClass: HttpAmazonESConnector,
    host: "https://amazon-es-host.us-east-1.es.amazonaws.com",
});

new Client({
    awsConfig: new AWS.Config({
        accessKeyId: "AKID",
        region: "us-east-1",
        secretAccessKey: "secret",
    }),
    connectionClass: require("http-aws-es"),
    host: "https://amazon-es-host.us-east-1.es.amazonaws.com",
});

const myCredentials = new AWS.EnvironmentCredentials("AWS");

new Client({
    awsConfig: new AWS.Config({
        credentials: myCredentials,
        region: "us-east-1",
    }),
    connectionClass: HttpAmazonESConnector,
    host: "https://amazon-es-host.us-east-1.es.amazonaws.com",
});

new Client({
    awsConfig: new AWS.Config({
        credentials: myCredentials,
        region: "us-east-1",
    }),
    connectionClass: require("http-aws-es"),
    host: "https://amazon-es-host.us-east-1.es.amazonaws.com",
});
