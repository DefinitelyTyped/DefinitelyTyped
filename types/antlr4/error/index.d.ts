import RecognitionException from './RecognitionException';
import NoViableAltException from './NoViableAltException';
import LexerNoViableAltException from './LexerNoViableAltException';
import InputMismatchException from './InputMismatchException';
import FailedPredicateException from './FailedPredicateException';
import DiagnosticErrorListener from './DiagnosticErrorListener';
import BailErrorStrategy from './BailErrorStrategy';
import DefaultErrorStrategy from './DefaultErrorStrategy';
import ErrorListener from './ErrorListener';
import ParseCancellationException from './ParseCancellationException';

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
