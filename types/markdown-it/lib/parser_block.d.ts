import MarkdownIt = require(".");
import Token = require("./token");

export = ParserBlock;

declare class ParserBlock {
    parse(src: string, md: MarkdownIt, env: any, outTokens: Token[]): void;
    ruler: MarkdownIt.RulerBlock;
}
