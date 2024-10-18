import RecognitionException from "./RecognitionException";

/**
 * This signifies any kind of mismatched input exceptions such as
 * when the current input does not match the expected token.
 */
export default class InputMismatchException extends RecognitionException {}
