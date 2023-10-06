import express = require("express");
import delay = require("express-delay-header");

const app = express();
app.use(
    delay({
        headerName: "delay",
        nodeEnv: "development",
        timeoutFunction: setTimeout,
        currentEnv: process.env.NODE_ENV,
    }),
);
app.listen();
