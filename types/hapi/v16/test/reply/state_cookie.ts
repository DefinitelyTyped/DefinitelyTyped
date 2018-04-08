
// from https://hapijs.com/tutorials/cookies?lang=en_US

import * as Hapi from '../../';

const server = new Hapi.Server();
server.connection({ port: 80 });

server.state('data', {
    ttl: null,
    isSecure: true,
    isHttpOnly: true,
    encoding: 'base64json',
    clearInvalid: false, // remove invalid cookies
    strictHeader: true // don't allow violations of RFC 6265
});

server.route({
  method: 'GET',
  path: '/say-hello',
  config: {
      state: {
          parse: true, // parse and store in request.state
          failAction: 'error' // may also be 'ignore' or 'log'
      }
  },
  handler: function(request, reply) {
    // TODO test this
    reply('Hello').state('data', { firstVisit: false });
  }
})


