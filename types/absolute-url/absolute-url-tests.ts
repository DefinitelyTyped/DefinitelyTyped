import express = require("express");
import * as absoluteUrl from "absolute-url";

const app = express();

app.use(absoluteUrl.middleware());

app.get("/", (req) => {
    const direct: URL = absoluteUrl.default(req);
    const url: URL = req.absoluteUrl();
});
