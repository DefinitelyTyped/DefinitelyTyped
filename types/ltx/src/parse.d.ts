import Element from "./Element.js";
import Parser, { ParserOptions } from "./Parser.js";

export default function parse(data: string, options?: ParserOptions | typeof Parser): Element;
