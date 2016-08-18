/// <reference path="../node/node.d.ts"/>
/// <reference path="./alexa-sdk.d.ts" />

import * as Alexa from "alexa-sdk";

exports.handler = function(event: Alexa.RequestBody, context: Alexa.Context, callback: Function) {
    let alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

let handlers: Alexa.Handlers = {
    'LaunchRequest': function () {
        var self: Alexa.Handler = this;
        self.emit('SayHello');
    },
    'HelloWorldIntent': function () {
        var self: Alexa.Handler = this;
        self.emit('SayHello');
    },
    'SayHello': function () {
        var self: Alexa.Handler = this;
        self.emit(':tell', 'Hello World!');
    }
};
