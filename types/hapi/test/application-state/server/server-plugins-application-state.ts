import { Plugin, Server, ServerRegisterOptions } from "hapi";

interface RequestApplicationState {
    requestProp: {requestValue: string};
}

interface ServerApplicationState {
    serverProp: {serverValue: string};
}

interface Plugin1 {
	one: 1;
}

declare module 'hapi' {
	interface PluginProperties {
		example: {
			other: string;
			key: string;
		};
	}
}

const plugin1: Plugin<Plugin1, ServerApplicationState, RequestApplicationState> = {
    name: 'plugin1',
    register: async (server: Server<ServerApplicationState, RequestApplicationState>, options: Plugin1) => {
        console.log(server.app.serverProp.serverValue);
    },
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
