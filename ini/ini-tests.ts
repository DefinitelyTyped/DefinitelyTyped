/// <reference path="ini.d.ts" />
/// <reference path="../node/node.d.ts" />

import fs = require("fs");
import ini = require("ini");

var ini_content = fs.readFileSync("path_to_file.ini", "utf-8");

var ini_object: any = ini.decode(ini_content);
var ini_rev_string: string = ini.encode(ini_object);