
// From https://hapijs.com/api/16.1.1#serversettings

import * as Hapi from 'hapi';
const server = new Hapi.Server({
    app: {
        key: 'value'
    }
});

server.settings.app === { key: 'value' };
