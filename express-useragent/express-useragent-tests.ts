
/// <reference path="../express/express.d.ts" />
/// <reference path="./express-useragent.d.ts" />

import express = require("express");
import useragent = require("express-useragent");

var app = express();
app.use(useragent.express());
app.get("/", function(req, res) {
    var userAgentString =
        "isMobile:" + req.useragent.isMobile + "," +
        "isDesktop:" + req.useragent.isDesktop + "," +
        "isBot:" + req.useragent.isDesktop + "," +
        "browser:" + req.useragent.isDesktop + "," +
        "version:" + req.useragent.isDesktop + "," +
        "os:" + req.useragent.isDesktop + "," +
        "platform:" + req.useragent.isDesktop + "," +
        "source :" + req.useragent.isDesktop;

    res.end(userAgentString);
});
