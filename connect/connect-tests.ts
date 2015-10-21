/// <reference path="./connect.d.ts" />

import * as http from "http";
import * as connect from "connect";

const app = connect();

// log all requests
app.use((req, res, next) => {
    console.log(req, res);
    next();
});

// Stop on errors
app.use((err, req, res, next) => {
    if (err) {
        return res.end(`Error: ${err}`);
    }
    
    next();
});

// respond to all requests
app.use((req, res) => {
    res.end("Hello from Connect!\n");
});

//create node.js http server and listen on port
http.createServer(app).listen(3000);

//create node.js http server and listen on port using connect shortcut
app.listen(3000);
