import express = require("express");
import query = require("qs-middleware");

const app = express();

app.use(query());
app.use(query({}));
app.use(
    query({
        delimiter: "string",
        depth: 123,
        decoder: str => str.toLowerCase(),
        arrayLimit: 123,
        parseArrays: true,
        allowDots: true,
        plainObjects: true,
        allowPrototypes: true,
        parameterLimit: 123,
        strictNullHandling: true,
        ignoreQueryPrefix: true
    })
);
app.use(query({ delimiter: /regexp/ }));
