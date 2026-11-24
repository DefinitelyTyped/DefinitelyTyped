import express = require("express");
import methodOverride = require("method-override");
var app = express();

app.use(methodOverride("X-HTTP-Method-Override"));
app.use(methodOverride("X-HTTP-Method-Override", { methods: ["GET", "POST"] }));
app.use(methodOverride((req: express.Request, res: express.Response) => {
    if (req.body && typeof req.body === "object" && "_method" in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

app.use(methodOverride());
app.use(methodOverride({ methods: ["POST", "PATCH"] as const }));
app.use(methodOverride("X-HTTP-Method-Override", {}));
app.use(methodOverride((req: express.Request, res: express.Response) => {
    return req.query._method ? String(req.query._method) : undefined;
}));

