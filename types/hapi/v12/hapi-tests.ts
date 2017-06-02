// Copied directly from 918608a5e007d925f4f60a275881057f07c12619 which seems to
// be the last author to work on v12.0


import * as Hapi from 'hapi';

// Create a server with a host and port
var server = new Hapi.Server();
server.connection(<Hapi.IServerConnectionOptions>{
    host: "localhost",
    port: 8000
});

// Add plugins
var plugin: any = {
    register: function (plugin: Object, options: Object, next: Function) {
        next();
    }
};

plugin.register.attributes = {
    name: "test",
    version: "1.0.0"
};

// optional options parameter
server.register({}, function (err) {});

// optional options.routes.vhost parameter
server.register({}, { select: 'api', routes: { prefix: '/prefix' } }, function (err) {});

//server.pack.register(plugin, (err: Object) => {
//    if (err) { throw err; }
//});

//server.pack.register([plugin], (err: Object) => {
//    if (err) { throw err; }
//});

// Add server method
var add = function (a: number, b: number, next: (err: any, result?: any, ttl?: number) => void) {
    next(null, a + b);
};

server.method("sum", add);//, { cache: { expiresIn: 2000 } });

server.methods["sum"](4, 5, (err: any, result: any) => {
    console.log(result);
});

var addArray = function (array: Array<number>, next: (err: any, result?: any, ttl?: number) => void) {
    var sum: number = 0;
    array.forEach((item: number) => {
        sum += item;
    });
    next(null, sum);
};

server.method("sumObj", addArray, {
    //cache: { expiresIn: 2000 },
    generateKey: (array: Array<number>) => {
        return array.join(',');
    }
});

server.methods["sumObj"]([5, 6], (err: any, result: any) => {
    console.log(result);
});

// Add the route
server.route({
    method: 'GET',
    path: '/hello',
    handler: function (request: Hapi.Request, reply: Function) {
        reply('hello world');
    }
});

server.route([{
    method: 'GET',
    path: '/hello2',
    handler: function (request: Hapi.Request, reply: Function) {
        reply('hello world2');
    }
}]);

// config.validate parameters should be optional
server.route([{
    method: 'GET',
    path: '/hello2',
    handler: function(request: Hapi.Request, reply: Function) {
        reply('hello world2');
    },
    config: {
        validate: {
        }
    }
}]);

// Should be able to chain reply options
server.route([{
    method: 'GET',
    path: '/chained-notation',
    handler: function(request: Hapi.Request, reply: Hapi.IReply) {
        reply('chained-notation')
            .bytes(16)
            .code(200)
            .type('text/plain')
            .header('X-Custom', 'some-value');
    }
}]);

// Start the server
server.start();
