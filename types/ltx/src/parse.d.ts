import Parser, { ParserOptions } from './Parser';
import Element from './Element';

export default function parse(data: string, options?: ParserOptions | typeof Parser): Element;
