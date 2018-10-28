import express = require("express");
import timeout = require("connect-timeout");
import bodyParser = require("body-parser");
import cookieParser = require("cookie-parser");

// example of using this top-level; note the use of haltOnTimedout
// after every middleware; it will stop the request flow on a timeout
var app = express();
app.use(timeout("5s", { respond: false }));
app.use(bodyParser());
app.use(haltOnTimedout);
app.use(cookieParser());
app.use(haltOnTimedout);

// Add your routes here, etc.

function haltOnTimedout(req: express.Request, res: express.Response, next: Function) {
    if (!req.timedout) {
        next();
    }
}

app.listen(3000);
