// https://github.com/hapijs/hapi/blob/master/API.md#-serverplugins
import { Plugin, Server, ServerRegisterOptions } from "hapi";

interface Plugin1 {
	one: 1;
}

interface Plugin2 {
	two: 2;
}

interface Plugin3 {
	three: 3;
}

const plugin1: Plugin<Plugin1> = {
    name: 'plugin1',
    register: async (server: Server, options: Plugin1) => {
        server.expose('key', 'value');
        server.plugins.example.other = 'other';
        console.log(server.plugins.example.key);      // 'value'
        console.log(server.plugins.example.other);    // 'other'
    }
};

const plugin2: Plugin<Plugin2> = {
	name: 'plugin2',
	register: async (server: Server, options: Plugin2) => {}
};

const plugin3: Plugin<Plugin3> = {
	name: 'plugin3',
	register: async (server: Server, options: Plugin3) => {}
};

const server = new Server({
    port: 8000,
});

server.start();
server.register(plugin1);

server.register({
	plugin: plugin1,
	options: {one: 1}
});

server.register([
	{
		plugin: plugin2,
		options: {two: 2}
	},
	{
		plugin: plugin3,
		options: {three: 3}
	},
	{
		plugin: plugin1,
		options: {one: 1}
	},
	{
		plugin: plugin2,
		options: {two: 2}
	},
	{
		plugin: plugin3,
		options: {three: 3}
	},
	{
		plugin: plugin1,
		options: {one: 1}
	},
	{
		plugin: plugin2,
		options: {two: 2}
	},
	{
		plugin: plugin3,
		options: {three: 3}
	},
	{
		plugin: plugin1,
		options: {one: 1}
	}
]);
