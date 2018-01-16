import Hapi = require("hapi");

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
	host: "localhost",
	port: 8000
});

// Add plugins
const plugin: any = {
	register(plugin: Object, options: Object, next: Function) {
		next();
	}
};

plugin.register.attributes = {
	name: "test",
	version: "1.0.0"
};

// optional options parameter
server.register({}, err => {});
// optional callback function with and without options
server.register({}).then((res: any) => {
	console.log(res);
});
server.register({}, {select: "api", routes: {prefix: "/prefix"}}).then((res: any) => {
	console.log(res);
});

// optional options.routes.vhost parameter
server.register({}, {select: "api", routes: {prefix: "/prefix"}}, err => {});

// server.pack.register(plugin, (err: Object) => {
//   if (err) { throw err; }
// });

// server.pack.register([plugin], (err: Object) => {
//   if (err) { throw err; }
// });

// Add server method
function add(a: number, b: number, next: (err: any, result?: any, ttl?: number) => void) {
	next(null, a + b);
}

server.method("sum", add); // , { cache: { expiresIn: 2000 } });

server.methods["sum"](4, 5, (err: any, result: any) => {
	console.log(result);
});

function addArray(array: number[], next: (err: any, result?: any, ttl?: number) => void) {
	let sum: number = 0;
	array.forEach((item: number) => {
		sum += item;
	});
	next(null, sum);
}

server.method("sumObj", addArray, {
	cache: { expiresIn: 2000 },
	generateKey(array: number[]) {
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
	handler(request: Hapi.Request, reply: Function) {
		request.log('info', { route: '/hello' }, Date.now());
		reply('hello world');
	}
});

server.route([{
	method: 'GET',
	path: '/hello2',
	handler(request: Hapi.Request, reply: Function) {
		reply('hello world2');
	}
}]);

server.route([{
	method: 'GET',
	path: '/hello3',
	handler(request: Hapi.Request, reply: Hapi.IReply) {
		reply('hello world2');
	}
}]);

interface IHello {
	msg: string;
}

server.route([{
	method: 'GET',
	path: '/hello4',
	handler(request: Hapi.Request, reply: Hapi.IStrictReply<IHello>) {
		reply({ msg: 'hello world' });
	}
}]);

// Implict handler
server.route({
	method: 'GET',
	path: '/hello6',
	handler(request: Hapi.Request, reply: Hapi.IReply) {
		request.log('info', { route: '/hello' }, Date.now());
		reply('hello world');
	}
});

// config.validate parameters should be optional
server.route([{
	method: 'GET',
	path: '/hello2',
	handler(request: Hapi.Request, reply: Function) {
		reply('hello world2');
	},
	config: {
		validate: {}
	}
}]);

// Should be able to chain reply options
server.route([{
	method: 'GET',
	path: '/chained-notation',
	handler(request: Hapi.Request, reply: Hapi.IReply) {
		reply.state('cookie_key', 'cookie_value');
		reply('chained-notation')
			.bytes(16)
			.code(200)
			.type('text/plain')
			.unstate('cookie_to_remove')
			.header('X-Custom', 'some-value');
	}
}]);

// Start the server
server.start();

// server startup may now return a promise
server.start()
	.then(() => {
		console.log('Started!');
	});

// inject a request into connection
server.inject({
	method: 'GET',
	url: '/hello'
}).then(response => {
	console.log(response.statusCode);
});

// the same but this time using callback
server.inject({
	method: 'GET',
	url: '/hello'
}, response => {
	console.log(response.statusCode);
});

// tests for server initialization
server.initialize()
	.then(() => {
		console.log('Initialized!');
	});

// and the same but with callback
server.initialize(err => {
	if (err) {
		console.log(err);
	}
});

// server stopping may now return a promise
server.stop()
	.then(() => {
		console.log('Stopped!');
	});

// decorate can take an optional options argument
server.decorate('hello', 'world', () => {
}, {
	apply: true
});

server.decorate('hello2', 'world2', () => {
});
