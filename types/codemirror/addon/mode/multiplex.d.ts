import * as CodeMirror from '../../';

export interface MultiplexedInnerMode {
    open: string;
    close: string;
    mode: CodeMirror.Mode<any>;
    parseDelimiters?: boolean | undefined;
    delimStyle?: string | undefined;
    innerStyle?: string | undefined;
}

declare module '../../' {
    /**
     * Mode combinator that can be used to easily 'multiplex' between several modes.
     * When given as first argument a mode object, and as other arguments any number of
     * {open, close, mode [, delimStyle, innerStyle, parseDelimiters]} objects, it will return a mode object that starts parsing
     * using the mode passed as first argument, but will switch to another mode as soon as it encounters a string that occurs in
     * one of the open fields of the passed objects. When in a sub-mode, it will go back to the top mode again when the close
     * string is encountered. Pass "\n" for open or close if you want to switch on a blank line.
     *
     * When delimStyle is specified, it will be the token style returned for the delimiter tokens (as well as [delimStyle]-open on
     * the opening token and [delimStyle]-close on the closing token).
     * When innerStyle is specified, it will be the token style added for each inner mode token.
     * When parseDelimiters is true, the content of the delimiters will also be passed to the inner mode. (And delimStyle is ignored.)
     *
     * The outer mode will not see the content between the delimiters.
     */
    function multiplexingMode(outer: Mode<any>, ...others: MultiplexedInnerMode[]): Mode<any>;
}
