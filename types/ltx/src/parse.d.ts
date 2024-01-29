import Element from "./Element";
import Parser, { ParserOptions } from "./Parser";

export default function parse(data: string, options?: ParserOptions | typeof Parser): Element;
