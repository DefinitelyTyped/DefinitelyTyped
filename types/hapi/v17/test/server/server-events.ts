// https://github.com/hapijs/hapi/blob/master/API.md#-servereventevents
import { Server, ServerEvents } from "hapi";
import Podium = require('podium');
import 'hapi/definitions/server/server';

declare module 'hapi' {
    interface ServerEvents {
        on(event: 'test', listener: (update: string) => void): this;
    }
}

const server = new Server({
    port: 8000,
});

server.events.on('route', route => {
    console.log(route.path, route.vhost, route.realm, route.method, route.settings, route.fingerprint);
});

server.event('test');
server.events.on('test', (update: any) => console.log(update));
server.events.emit('test', 'hello');

server.start();
