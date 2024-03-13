import antlr4 from "antlr4";

export type CasePreference = "LOWER" | "UPPER" | "BOTH";

export interface AutoSuggester {
    autosuggest: (inputText: string) => string[];
}

export interface Constructor<T> {
    new(...args: any[]): T;
}

export function autosuggester(
    lexerCtr: Constructor<antlr4.Lexer>,
    parserCtr: Constructor<antlr4.Parser>,
    casePref?: CasePreference | null,
): AutoSuggester;
