import express = require('express');
import xmlparser = require('express-xml-bodyparser');

const app: express.Express = express();

app.use(xmlparser());

app.post("/auth", xmlparser({explicitArray: false}), (req, res, next) => {
    res.send("Success!");
});
