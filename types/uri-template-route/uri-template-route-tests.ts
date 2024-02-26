import express = require("express");
import uriTemplateRoute = require("uri-template-route");
import { URITemplate } from "uri-templates";

const app = express();

const handler: express.RequestHandler = (req, res, next) => {
    // will be only called if req.url matches the template
    console.log(req.params);
};

app.use(uriTemplateRoute("/my-uri-template{?}", handler));
app.use(uriTemplateRoute(<URITemplate> {}, handler));
