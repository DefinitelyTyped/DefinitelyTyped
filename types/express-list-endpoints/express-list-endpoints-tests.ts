import express = require("express");
import listEndpoints = require("express-list-endpoints");

const app = express();
app.get("/", (_, res) => {
    res.sendStatus(200);
});

const points = listEndpoints(app);

points[0].path; // $ExpectType string
points[0].methods; // $ExpectType string[]
points[0].middlewares; // $ExpectType string[]
