/// <reference path="hapi.d.ts" />

import Hapi = require('hapi');

// Create a server with a host and port
var server = Hapi.createServer('localhost', 8000);

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

// Start the server
server.start();
