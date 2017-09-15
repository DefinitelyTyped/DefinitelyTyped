import express = require("express");
import expressbrute = require("express-brute");
import expressbruteredis = require("express-brute-redis");

let store = new expressbruteredis({
    host: "localhost",
    port: 6379,
    db: "0"
});

let bruteforce = new expressbrute(store, {
    failCallback: (req: express.Request, res: express.Response, next: any, validTime: any) => {
        // Don't send a message back to the user in production
        res.send("You cannot submit a request again until: " + validTime);
    }
});

let app = express();

app.post("/", bruteforce.prevent, (req, res, next) => {
    res.send("Success!");
});
