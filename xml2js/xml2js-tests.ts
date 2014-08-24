/// <reference path="xml2js.d.ts" />

import xml2js = require('xml2js');

xml2js.parseString("<root>Hello xml2js!</root>", (err: any, result: any) => { });

xml2js.parseString("<root>Hello xml2js!</root>", {trim: true}, (err: any, result: any) => { });

var builder = new xml2js.Builder({
    renderOpts: {
        pretty: false
    }
});

var outString = builder.buildObject({
    'hello': 'xml2js!'
});
