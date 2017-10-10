import express = require("express");
import expressbrute = require("express-brute");
import expressbruteredis = require("express-brute-redis");

const store: expressbruteredis = new expressbruteredis({
    host: "localhost",
    port: 6379,
    db: "0"
});

const bruteforce: expressbrute = new expressbrute(store, {
    failCallback: (req: express.Request, res: express.Response, next: express.NextFunction, validTime: Date) => {
        // Don't send a message back to the user in production
        res.send("You cannot submit a request again until: " + validTime);
    }
});

const app: express.Express = express();

app.post("/", bruteforce.prevent, (req, res, next) => {
    res.send("Success!");
});
