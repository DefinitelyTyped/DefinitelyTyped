import * as Alexa from "alexa-sdk";

const handler = (event: Alexa.RequestBody, context: Alexa.Context, callback: () => void) => {
    let alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

let handlers: Alexa.Handlers = {
    'LaunchRequest': function() {
        this.emit('SayHello');
    },
    'HelloWorldIntent': function() {
        this.emit('SayHello');
    },
    'SayHello': function() {
        this.emit(':tell', 'Hello World!');
    }
};
