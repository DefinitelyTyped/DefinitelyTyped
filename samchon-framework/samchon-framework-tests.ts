/// <reference path="samchon-framework.d.ts" />

import samchon = require("samchon-framework");

let xml = new samchon.library.XML();
xml.setTag("font");
xml.setProperty("fontSize", "13");

console.log(xml.toString());