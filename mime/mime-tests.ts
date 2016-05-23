
import * as mime from "mime";

var str: string;
var obj: Object;

str = mime.lookup(str);
str = mime.extension(str);
mime.load(str);
mime.define(obj);

str = mime.charsets.lookup(str);
