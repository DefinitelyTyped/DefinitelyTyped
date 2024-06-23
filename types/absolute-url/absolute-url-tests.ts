import express = require("express");
import * as absoluteUrl from "absolute-url";

const app = express();

app.use(absoluteUrl.middleware());

app.get("/", (req) => {
    const direct = absoluteUrl.default(req);
    const url: string = req.absoluteUrl();
});
