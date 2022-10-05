import Lexer from '../Lexer';
import RecognitionException from './RecognitionException';

export default class LexerNoViableAltException extends RecognitionException {
    readonly startIndex: number;
    readonly deadEndConfigs: any; // ATNConfigSet

    constructor(
        lexer: Lexer,
        input: any, // CharStream
        startIndex: number,
        deadEndConfigs: any, // ATNConfigSet
    );

    toString(): string;
}
