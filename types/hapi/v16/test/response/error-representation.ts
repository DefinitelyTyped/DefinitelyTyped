
// From https://hapijs.com/api/16.1.1#error-transformation

import * as Hapi from '../../';
import Vision from '../../../../vision';
const server = new Hapi.Server();
server.register(Vision, {}, (err) => {
    server.views({
        engines: {
            html: require('../../../../handlebars')
        }
  });
});
server.connection({ port: 80 });

const preResponse: Hapi.ServerExtRequestHandler = function (request, reply) {

    const response = request.response!;
    if (!response.isBoom) {
        return reply.continue();
    }

    // Replace error with friendly HTML

      const error = response;
      const ctx = {
          message: (error.output!.statusCode === 404 ? 'page not found' : 'something went wrong')
      };

      return reply.view('error', ctx);
};

server.ext('onPreResponse', preResponse);
