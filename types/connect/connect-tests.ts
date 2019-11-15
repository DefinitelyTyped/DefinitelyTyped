// npm i --no-save connect
// tsc --noEmit false && node connect-tests.js

import * as http from "http";
import connect = require("connect");

const app = connect();

// log all requests
function logReq(req: connect.Request, res: http.ServerResponse, next: connect.NextFunction) {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
}

// Stop on errors
function stopOnErr(err: any, req: connect.Request, res: http.ServerResponse, next: connect.NextFunction) {
    if (err) {
        res.statusCode = +err || 500;
        return res.end(`ERROR at ${req.url}: ${err}`);
    }
    next();
}

app.use(logReq);

// "Throw" a number
app.use("/403", (req: connect.Request, res: http.ServerResponse, next: connect.NextFunction) => {
    next(403);
});

// Use legacy `Function` for `next` parameter.
app.use((req: connect.Request, res: http.ServerResponse, next: Function) => {
    next();
});

// respond to all requests
app.use((req: connect.Request, res: http.ServerResponse) => {
    res.end("Hello from Connect!\n");
});

app.use(stopOnErr);

//create node.js http server and listen on port
http.createServer(app).listen(3000);
console.log("http://localhost:3000/");


const app2 = connect();

app2.use(logReq);

// "Throw" an Error
app2.use("/err", (req: http.IncomingMessage, res: http.ServerResponse, next: connect.NextFunction) => {
    next(new Error("Something went wrong!"));
});

// Catch only on specific route
app2.use("/err/catch", stopOnErr);

//create node.js http server and listen on port using connect shortcut
app2.listen(3001);
console.log("http://localhost:3001/");
