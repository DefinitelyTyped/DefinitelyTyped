import * as MarkdownIt from ".";
import * as Ruler from "./ruler";
import * as Token from "./token";

export = ParserCore;

declare class ParserCore {
    process(state: any): void;
    ruler: Ruler;
}

declare module ParserCore {}
