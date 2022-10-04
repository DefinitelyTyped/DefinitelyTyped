// Type definitions for antlr4 4.7
// Project: https://github.com/antlr/antlr4
// Definitions by: Marlon Chatman <https://github.com/mcchatman8009>
//                 Matteo Mortari <https://github.com/tarilabs>
//                 Jon Gellin <https://github.com/jgellin-sf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
export * from './Lexer';
export * from './Parser';
export * from './Recognizer';
export * from './ParserRuleContext';
export * from './IntervalSet';
export * from './CommonTokenStream';
export * from './InputStream';
export * from './Token';
import * as tree from './tree/Tree';
import { ParserRuleContext } from './ParserRuleContext';

export type AntlrRule = ParserRuleContext;
export { tree };
