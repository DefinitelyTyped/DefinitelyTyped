import json2xls = require("json2xls");
import express = require("express");
const json = {
    foo: "bar",
    qux: "moo",
    poo: 123,
    stux: new Date(),
};
// @ExpectType Buffer
json2xls(json, {
    fields: { "poo": "string" },
});
const app = express();
app.use(json2xls.middleware);
