import '../../';

declare module '../../' {
    /**
     * Runs a CodeMirror mode over text without opening an editor instance.
     *
     * @param text   The document to run through the highlighter.
     * @param mode   The mode to use (must be loaded as normal).
     * @param callback If this is a function, it will be called for each token with
     *               five arguments, the token's text, the token's style class (may be null for unstyled tokens),
     *               the number of row of the token, the column position of token and the state of mode.
     *               If it is a DOM node, the tokens will be converted to span elements as in an editor,
     *               and inserted into the node (through innerHTML).
     */
    function runMode(
        text: string,
        mode: string | ModeSpec<unknown>,
        callback:
            | HTMLElement
            | ((text: string, style?: string | null, row?: number, column?: number, state?: any) => void),
        options?: { tabSize?: number; state?: any },
    ): void;
}
