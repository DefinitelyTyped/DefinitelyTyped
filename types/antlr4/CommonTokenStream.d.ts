import { BufferedTokenStream } from './BufferedTokenStream';
import { Token } from './Token';
import { Lexer } from './Lexer';

export class CommonTokenStream extends BufferedTokenStream {
    constructor(lexer: Lexer, channel?: any);

    adjustSeekIndex(i: number): any;

    LB(k: number): Token;

    LT(k: number): Token;

    getNumberOfOnChannelTokens(): number;
}
