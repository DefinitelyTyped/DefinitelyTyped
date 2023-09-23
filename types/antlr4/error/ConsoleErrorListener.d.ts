import ErrorListener from "./ErrorListener";

/**
 * This implementation prints messages to stderr containing the
 * values of line, charPositionInLine, and msg using
 * the following format.
 *
 * line _line_:_charPositionInLine_ _msg_
 */
export default class ConsoleErrorListener extends ErrorListener {
    static readonly INSTANCE: ConsoleErrorListener;
}
