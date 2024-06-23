import * as express from "express";
const app = express();

import * as SignalFxCollect from "signalfx-collect";

const config1: SignalFxCollect.Config = {
    accessToken: "MY_ACCESS_TOKEN",
    interval: 1000,
};

const collect1 = new SignalFxCollect(config1);
collect1.start();

// Add a middleware from SignalFxCollect module to collect HTTP metrics
app.use(collect1.getMiddleware("express"));
app.get("/hello", (req, res) => {
    res.send("world");
});

// To authenticate with a client object rather than an org access token, use the following example code:

import * as signalfx from "signalfx";
const client = new signalfx.Ingest("MY_ACCESS_TOKEN");

const config2: SignalFxCollect.Config = {
    signalFxClient: client,
    interval: 1000,
};
const collect2 = new SignalFxCollect(config2);
collect2.start();

// That's all, folks!
