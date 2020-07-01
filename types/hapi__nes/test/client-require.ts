// from https://github.com/hapijs/nes/#browser-client
// When you require('nes') it loads the full module and adds a lot of extra code
// that is not needed for the browser. The browser will only need the nes client.
// If you are using CommonJS you can load the client with require('nes/client').

import NesClient = require('@hapi/nes/lib/client');

const options: NesClient.Client.ClientConnectOptions = {
    delay: 3
}

const client: NesClient.Client = new NesClient.Client('ws://localhost', options);
client.onDisconnect = (willReconnect) => {}
