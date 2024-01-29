import ATNConfigSet from "../atn/ATNConfigSet";
import InputStream from "../InputStream";
import Lexer from "../Lexer";
import RecognitionException from "./RecognitionException";

export default class LexerNoViableAltException extends RecognitionException {
    readonly startIndex: number;
    readonly deadEndConfigs: ATNConfigSet;

    constructor(lexer: Lexer, input: InputStream, startIndex: number, deadEndConfigs: ATNConfigSet);

    toString(): string;
}
