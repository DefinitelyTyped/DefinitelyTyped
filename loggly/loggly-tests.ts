/// <reference path='./loggly.d.ts' />
import loggly  = require("loggly");

var options: loggly.LogglyOptions  = {
    token: "YOUR_TOKEN",
    subdomain: "YOUR_DOMAIN",
    tags: ["NodeJS"],
    json: true
};

var client: loggly.Loggly  = loggly.createClient(options)
client.log('hello world');
