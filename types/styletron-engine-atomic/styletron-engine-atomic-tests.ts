import {
    Client,
    Server
} from 'styletron-engine-atomic';

const validOptions = {
    prefix: 'test-prefix__'
};

const invalidOptions = {
    hydrate: 'erroneous hydration'
};

new Client(validOptions);
new Client(invalidOptions); // $ExpectError

new Server({prefix: 1234}); // $ExpectError
const myServer = new Server(validOptions);
myServer.getCss(); // $ExpectType string
myServer.getStylesheetsHtml(); // $ExpectType string
