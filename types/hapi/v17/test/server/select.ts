// From https://hapijs.com/api/16.1.1#serverselectlabels
import {Server} from "hapi";

/*
const server = new Hapi.Server();
server.connection({ port: 80, labels: ['a', 'b'] });
server.connection({ port: 8080, labels: ['a', 'c'] });
server.connection({ port: 8081, labels: ['b', 'c'] });

const a = server.select('a');     // 80, 8080
const ac = a.select('c');         // 8080
*/
// TODO How do this with v17?

const server = new Server({
    port: 8000,
});
