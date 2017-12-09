import {Request, ResponseToolkit, RouteOptions, Server, ServerOptions, ServerRoute} from "hapi";

const options: ServerOptions = {
    port: 8000,
};


// different methods
var routeConfig: ServerRoute = {
  path: '/signin',
  method: 'PUT',
  vhost: 'site.coms',
};
var routeConfig: ServerRoute = {
  path: '/signin',
  method: '*'
};
var routeConfig: ServerRoute = {
  path: '/signin',
  method: ['OPTIONS', '*']
};

// different handlers
var routeConfig: ServerRoute = {
  path: '/signin',
  method: 'PUT',
  handler: function (request: Request, h: ResponseToolkit) {
    return 'ok';
  }
};
var routeConfig: ServerRoute = {
  path: '/signin',
  method: 'PUT',
  handler: function (request: Request, h: ResponseToolkit) {
    return 'ok';
  }
};

const server = new Server(options);
server.route(routeConfig);

// Handler in config
const user: RouteOptions = {
    cache: { expiresIn: 5000 },
    handler: function (request: Request, h: ResponseToolkit) {
        return { name: 'John' };
    }
};

server.route({method: 'GET', path: '/user', options: user });
//server.route({ method: 'GET', path: '/public/{path*}', options: { cache: { privacy: 'public', expiresIn: 24 * 60 * 60 * 1000 } }, handler: { directory: { path: __dirname, listing: false, index: false } } });

server.start();
console.log('Server started at: ' + server.info.uri);
