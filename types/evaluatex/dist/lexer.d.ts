import { Constants, Options, Token } from "../index";

declare function lexer(expression: string, constants?: Constants, options?: Options): Token[];

export = lexer;
