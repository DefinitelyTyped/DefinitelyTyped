import Element = require("./Element.js");
import tagString = require("./tagString.js");

declare function tag(...args: Parameters<typeof tagString>): Element;
export = tag;

