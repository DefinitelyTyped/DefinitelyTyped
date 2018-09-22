// https://github.com/hapijs/hapi/blob/master/API.md#-serverload
import { Server } from "hapi";

const server = new Server({
    port: 8000,
    load: { sampleInterval: 1000 }
});
server.start();

setTimeout(() => {
    console.log(server.load.rss);
    console.log(server.load.eventLoopDelay);
    console.log(server.load.heapUsed);
}, 5 * 1000);
