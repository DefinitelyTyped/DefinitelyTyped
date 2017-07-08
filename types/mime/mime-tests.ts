import * as mime from "mime";

let str: string;
const obj: {} = {};
const fallback: string = '';

str = mime.lookup(str, fallback);
str = mime.extension(str);
mime.load(str);
mime.define(obj);

str = mime.charsets.lookup(str);
