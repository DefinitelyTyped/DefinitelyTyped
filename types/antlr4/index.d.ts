// Type definitions for antlr4 4.7
// Project: https://github.com/antlr/antlr4
// Definitions by: Marlon Chatman <https://github.com/mcchatman8009>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
export * from './Lexer';
export * from './Parser';
export * from './Recognizer';
export * from './ParserRuleContext';
export * from './IntervalSet';
export * from './CommonTokenStream';
export * from './InputStream';
export * from './Token';
import { ParserRuleContext } from './ParserRuleContext';

export type AntlrRule = ParserRuleContext;
