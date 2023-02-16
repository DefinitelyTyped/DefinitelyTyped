import maxApi = require('max-api');

const { MESSAGE_TYPES, POST_LEVELS } = maxApi;
maxApi.outlet('output', 'to', 'outlet');
maxApi.outletBang();
maxApi.post('output to max window');

maxApi.post({ MESSAGE_TYPES, POST_LEVELS });

maxApi.addHandler('myHandler', () => {
    maxApi.post('received myHandler message');
});

maxApi.getDict('abc').then(dict => {
    maxApi.post(dict);
});

const handlers = {
    [MESSAGE_TYPES.BANG]: () => {
        maxApi.post('got a bang');
    },
    [MESSAGE_TYPES.NUMBER]: (n: number) => {
        maxApi.post(`received a number: ${n}`);
    },
    [MESSAGE_TYPES.LIST]: (...elements: [number, ...unknown[]]) => {
        maxApi.post(`received a list: ${elements}`);
    },
    myHandler2: () => {
        maxApi.post('received myHandler2 message');
    },
    myHandlerWithArgs: (arg1: unknown, arg2: unknown) => {
        maxApi.post(`received myHandlerWithArgs message with: ${arg1}, ${arg2}`);
    },
    [MESSAGE_TYPES.ALL]: (handled: string, ...args: unknown[]) => {
        if (handled) return;
        maxApi.post(`unhandled event: ${args}`);
    },
};

maxApi.addHandlers(handlers);
