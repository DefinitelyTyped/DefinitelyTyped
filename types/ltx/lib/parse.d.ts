import Element = require("./Element.js");
import Parser = require("./Parser.js");

declare function parse(data: string, options?: Parser.ParserOptions | typeof Parser): Element;
export = parse;
