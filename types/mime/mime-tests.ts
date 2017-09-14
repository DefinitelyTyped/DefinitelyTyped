import * as mime from "mime";

let str: string;
const obj: {} = {};
const fallback = '';

str = mime.getType(str, fallback);
str = mime.getExtension(str);
mime.define(obj);
