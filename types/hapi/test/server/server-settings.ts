// https://github.com/hapijs/hapi/blob/master/API.md#-serversettings
import { Server } from "hapi";

const server = new Server({
    port: 8000,
    app: {
        key: 'value'
    }
});
server.start();

console.log(server.settings.app);   // { key: 'value' }
