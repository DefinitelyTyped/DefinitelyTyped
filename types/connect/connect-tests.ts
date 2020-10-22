import * as http from "http";
import connect = require("connect");

const app = connect();

// log all requests
app.use((req: connect.IncomingMessage, res: http.ServerResponse, next: connect.NextFunction) => {
    console.log(req, res);
    next();
});

// "Throw" an Error
app.use((req: connect.IncomingMessage, res: http.ServerResponse, next: connect.NextFunction) => {
    next(new Error("Something went wrong!"));
});

// "Throw" a number
app.use((req: connect.IncomingMessage, res: http.ServerResponse, next: connect.NextFunction) => {
    next(404);
});

// Stop on errors
app.use((err: any, req: connect.IncomingMessage, res: http.ServerResponse, next: connect.NextFunction) => {
    if (err) {
        return res.end(`Error: ${err}`);
    }

    next();
});

// Use legacy `Function` for `next` parameter.
app.use((req: connect.IncomingMessage, res: http.ServerResponse, next: Function) => {
    next();
});

// respond to all requests
app.use((req: connect.IncomingMessage, res: http.ServerResponse) => {
    res.end("Hello from Connect!\n");
});

// Allow http.IncomingMessage as the type for req
app.use((req: http.IncomingMessage, res: http.ServerResponse) => {
  console.log(req, res);
  res.end();
});

//create node.js http server and listen on port
http.createServer(app).listen(3000);

//create node.js http server and listen on port using connect shortcut
app.listen(3000);
