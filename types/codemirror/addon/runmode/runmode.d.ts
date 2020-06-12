// Type definitions for codemirror
// Project: https://github.com/marijnh/CodeMirror
// Definitions by: Joseph Vaughan <https://github.com/Joev->
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_runmode

import * as CodeMirror from 'codemirror';

declare module 'codemirror' {
    /**
     * Runs a CodeMirror mode over text without opening an editor instance.
     *
     * @param text   The document to run through the highlighter.
     * @param mode   The mode to use (must be loaded as normal).
     * @param output If this is a function, it will be called for each token with
     *               five arguments, the token's text, the token's style class (may be null for unstyled tokens),
     *               the number of row of the token, the column position of token and the state of mode.
     *               If it is a DOM node, the tokens will be converted to span elements as in an editor,
     *               and inserted into the node (through innerHTML).
     */
    function runMode(
        text: string,
        mode: any,
        callback:
            | HTMLElement
            | ((text: string, style?: string | null, row?: number, column?: number, state?: any) => void),
        options?: { tabSize?: number; state?: any },
    ): void;
}
