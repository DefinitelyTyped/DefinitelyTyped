import BailErrorStrategy from "./BailErrorStrategy";
import DefaultErrorStrategy from "./DefaultErrorStrategy";
import DiagnosticErrorListener from "./DiagnosticErrorListener";
import ErrorListener from "./ErrorListener";
import FailedPredicateException from "./FailedPredicateException";
import InputMismatchException from "./InputMismatchException";
import LexerNoViableAltException from "./LexerNoViableAltException";
import NoViableAltException from "./NoViableAltException";
import ParseCancellationException from "./ParseCancellationException";
import RecognitionException from "./RecognitionException";

declare namespace error {
    export { RecognitionException };
    export { NoViableAltException };
    export { LexerNoViableAltException };
    export { InputMismatchException };
    export { FailedPredicateException };
    export { DiagnosticErrorListener };
    export { BailErrorStrategy };
    export { DefaultErrorStrategy };
    export { ErrorListener };
    export { ParseCancellationException };
}
export default error;
