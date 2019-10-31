import { Request, ResponseToolkit, RouteOptions, Server, ServerOptions, ServerRoute } from "@hapi/hapi";

const options: ServerOptions = {
    port: 8000,
};

// different methods
const routeConfig: ServerRoute = {
  path: '/signin',
  method: 'PUT',
  vhost: 'site.coms',
};
const routeConfigTest1: ServerRoute = {
  path: '/signin',
  method: '*'
};
const routeConfigTest2: ServerRoute = {
  path: '/signin',
  method: ['OPTIONS', '*']
};

// different handlers
const routeConfigTest3: ServerRoute = {
  path: '/signin',
  method: 'PUT',
  handler(request, h) {
    return 'ok';
  }
};
const routeConfigTest4: ServerRoute = {
  path: '/signin',
  method: 'PUT',
  handler(request, h) {
    return 'ok';
  }
};

const server = new Server(options);
server.route(routeConfig);

// Handler in config
const user: RouteOptions = {
    cache: { expiresIn: 5000 },
    handler(request, h) {
        return { name: 'John' };
    }
};

server.route({method: 'GET', path: '/user', options: user });

server.start();
console.log('Server started at: ' + server.info.uri);
