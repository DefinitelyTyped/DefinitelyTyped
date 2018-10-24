import * as MarkdownIt from ".";
import * as State from "./rules_core/state_core";
import * as Token from "./token";

export = ParserInline;

declare class ParserInline {
    parse(src: string, md: MarkdownIt, env: any, outTokens: Token[]): void;
    tokenize(state: State): void;
    skipToken(state: State): void;
    ruler: MarkdownIt.RulerInline;
    ruler2: MarkdownIt.RulerInline;
}

declare module ParserInline {}
