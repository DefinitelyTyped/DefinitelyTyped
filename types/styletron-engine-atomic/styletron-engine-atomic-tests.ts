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
// @ts-expect-error
new Client(invalidOptions);

// @ts-expect-error
new Server({prefix: 1234});
const myServer = new Server(validOptions);
myServer.getCss(); // $ExpectType string
myServer.getStylesheetsHtml(); // $ExpectType string
