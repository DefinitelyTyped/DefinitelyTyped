import * as MarkdownIt from ".";
import * as Token from "./token";

export = ParserBlock;

declare class ParserBlock {
    parse(src: string, md: MarkdownIt, env: any, outTokens: Token[]): void;
    ruler: MarkdownIt.RulerBlock;
}

declare module ParserBlock {}
