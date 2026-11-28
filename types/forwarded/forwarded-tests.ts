import forwarded = require("forwarded");
import * as http from "http";

http.createServer((req) => {
    // $ExpectType string[]
    forwarded(req);
});

// plain object with headers and socket
const customReq = {
    headers: {
        "x-forwarded-for": "192.168.0.1, 10.0.0.1",
    },
    socket: {
        remoteAddress: "127.0.0.1",
    },
};
// $ExpectType string[]
forwarded(customReq);
