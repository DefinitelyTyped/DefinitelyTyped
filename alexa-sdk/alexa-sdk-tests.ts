/// <reference path="../node/node.d.ts"/>
/// <reference path="./alexa-sdk.d.ts" />

import Alexa = require("alexa-sdk");

exports.handler = function(event: Alexa.Request, context: Alexa.Context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('SayHello');
    },
    'HelloWorldIntent': function () {
        this.emit('SayHello');
    },
    'SayHello': function () {
        this.emit(':tell', 'Hello World!');
    }
};
