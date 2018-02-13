import * as http from "http";
import connect = require("connect");

const app = connect();

// log all requests
app.use((req: http.IncomingMessage, res: http.ServerResponse, next: Function) => {
    console.log(req, res);
    next();
});

// Stop on errors
app.use((err: Error, req: http.IncomingMessage, res: http.ServerResponse, next: Function) => {
    if (err) {
        return res.end(`Error: ${err}`);
    }

    next();
});

// respond to all requests
app.use((req: http.IncomingMessage, res: http.ServerResponse) => {
    res.end("Hello from Connect!\n");
});

//create node.js http server and listen on port
http.createServer(app).listen(3000);

//create node.js http server and listen on port using connect shortcut
app.listen(3000);
