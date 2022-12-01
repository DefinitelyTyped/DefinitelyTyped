import { Token, Constants, Options } from '../index';

declare function lexer(expression: string, constants?: Constants, options?: Options): Token[];

export = lexer;
