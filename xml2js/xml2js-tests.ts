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

var parser = new xml2js.Parser();

var v1Defaults = xml2js.defaults['0.1'];
v1Defaults.async = true;

var v2Defaults = xml2js.defaults['0.2'];
v2Defaults.async = false;
v2Defaults.chunkSize = 20000;