/// <reference path="../node/node.d.ts" />
/// <reference path="./xmldoc.d.ts" />

import * as xmldoc from "xmldoc";

const doc = new xmldoc.XmlDocument("<poney>magic</poney>");
console.log(doc.toString());