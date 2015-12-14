// Type definitions for CodeMirror
// Project: https://github.com/marijnh/CodeMirror
// Definitions by: Joseph Vaughan <https://github.com/Joev->
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_runmode

declare module CodeMirror {

    /**
     * Can be used to run a CodeMirror mode over text without actually opening an editor instance.
     *
     * @param text The document to run through the highlighter.
     * @param mode The mode to use (must be loaded as normal).
     * @param output If this is a function, it will be called for each token with
     *               two arguments, the token's text and the token's style class
     *               (may be null for unstyled tokens). If it is a DOM node, the
     *               tokens will be converted to span elements as in an editor,
     *               and inserted into the node (through innerHTML).
     */
    function runMode(text : string, mode : any, output : any): void;
}
