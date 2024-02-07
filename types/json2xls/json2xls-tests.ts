import json2xls = require("json2xls");

var json = {
    foo: "bar",
    qux: "moo",
    poo: 123,
    stux: new Date(),
};

var xls: Buffer = json2xls(json, {
    fields: { "poo": "string" },
});
