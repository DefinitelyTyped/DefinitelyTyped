// https://github.com/hapijs/hapi/blob/master/API.md#-serversettings
import { Server } from "@hapi/hapi";

declare module '@hapi/hapi' {
	interface ServerOptionsApp {
		key?: string;
	}
}

const server = new Server({
    port: 8000,
    app: {
        key: 'value'
    }
});
server.start();

console.log(server.settings.app);   // { key: 'value' }
