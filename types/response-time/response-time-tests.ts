import responseTime = require("response-time");
import express = require("express");
import http = require("http");

{
    const app = express();
    app.use(responseTime());
    app.use(responseTime(3));
    app.use(responseTime({ digits: 3, header: "X-Time", suffix: true }));
}

{
    var _responseTime = responseTime();
    http.createServer(function(req, res) {
        _responseTime(req, res, function(err) {
            if (err) return console.log(err);
            res.setHeader("content-type", "text/plain");
            res.end("hello, world!");
        });
    });
}

{
    const app = express();
    app.use(responseTime((req: express.Request, res: express.Response, time: number) => {
        let num: number = time;
    }));
}
