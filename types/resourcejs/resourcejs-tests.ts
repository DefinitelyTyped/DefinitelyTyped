import express = require("express");
import resourcejs = require("resourcejs");
import mongoose = require("mongoose");

const app = express();
const route = "the-route";
const resourceName = "the-resource-name";

const schema = new mongoose.Schema({});
const model = mongoose.model(resourceName, schema);

resourcejs(app, route, resourceName, model)
    .get()
    .post({
        after(req: resourcejs.Request, res: resourcejs.Response, next: express.NextFunction) {
            res.resource.item = {
                foo: "foo",
                bar: "bar",
                baz: "baz",
            };

            next();
        },
    })
    .delete()
    .put()
    .patch()
    .index()
    .rest();
