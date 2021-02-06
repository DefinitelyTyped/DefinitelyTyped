import ini = require("ini");

var ini_content = "";

var ini_object: any = ini.decode(ini_content);
var ini_rev_string: string = ini.encode(ini_object);
