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
  handler: (request: Request, h: ResponseToolkit) => {
    return 'ok';
  }
};
var routeConfig: ServerRoute = {
  path: '/signin',
  method: 'PUT',
  handler: (request: Request, h: ResponseToolkit) => {
    return 'ok';
  }
};

const server = new Server(options);
server.route(routeConfig);

// Handler in config
const user: RouteOptions = {
    cache: { expiresIn: 5000 },
    handler: (request: Request, h: ResponseToolkit) => {
        return { name: 'John' };
    }
};

server.route({method: 'GET', path: '/user', options: user });

server.start();
console.log('Server started at: ' + server.info.uri);
