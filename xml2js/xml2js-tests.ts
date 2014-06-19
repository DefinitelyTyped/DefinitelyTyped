/// <reference path="xml2js.d.ts" />

import xml2js = require('xml2js');

xml2js.parseString("<root>Hello xml2js!</root>", (err: any, result: any) => { });

xml2js.parseString("<root>Hello xml2js!</root>", {trim: true}, (err: any, result: any) => { });
