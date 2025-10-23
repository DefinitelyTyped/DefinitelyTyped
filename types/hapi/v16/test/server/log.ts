// From https://hapijs.com/api/16.1.1#serverlogtags-data-timestamp

import Hapi = require("hapi");
const server = new Hapi.Server();
server.connection({ port: 80 });

server.on("log", (event, tags) => {
    if (tags.error) {
        console.log(event);
    }
});

server.log(["test", "error"], "Test event");
