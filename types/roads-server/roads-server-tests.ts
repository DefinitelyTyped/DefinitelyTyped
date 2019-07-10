import { Road, Response } from "roads";
import { Server, Http2Server } from "roads-server";

const road = new Road();
const server = new Server(road, (error: any) => {
    switch (error.code) {
        case 404:
            return new Response("Not Found", 404);
        case 405:
            return new Response("Not Allowed", 405);
        default:
        case 500:
            return new Response(error.message, 500);
    }
});

server.listen(3000, () => {
    console.log("Serve is running in the port 3000");
});

const server2 = new Http2Server(road);

server2.listen(3000, () => {
    console.log("Serve is running in the port 3000");
});
