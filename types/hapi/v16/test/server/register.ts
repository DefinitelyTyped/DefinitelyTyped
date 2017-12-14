
// From https://hapijs.com/api/16.1.1#serverregisterplugins-options-callback

import * as Hapi from '../../';

const server = new Hapi.Server();

server.register({
    register: require('plugin_name'),
    options: {
        message: 'hello'
    }
}, (err) => {

    if (err) {
        console.log('Failed loading plugin');
    }
});
