import express = require('express');
import bodyParser = require('body-parser');
import bodyParserXml = require('body-parser-xml');

const app: express.Express = express();

app.use(xmlparser());

app.post("/auth", xmlparser({explicitArray: false}), (req, res, next) => {
    res.send("Success!");
});
