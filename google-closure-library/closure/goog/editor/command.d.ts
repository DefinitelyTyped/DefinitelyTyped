declare module goog {
    function require(name: 'goog.editor.Command'): typeof goog.editor.Command;
}

declare module goog.editor {

    /**
     * Commands that the editor can excute via execCommand or queryCommandValue.
     * @enum {string}
     */
    type Command = string;
    var Command: {
        UNDO: Command;
        REDO: Command;
        LINK: Command;
        FORMAT_BLOCK: Command;
        INDENT: Command;
        OUTDENT: Command;
        REMOVE_FORMAT: Command;
        STRIKE_THROUGH: Command;
        HORIZONTAL_RULE: Command;
        SUBSCRIPT: Command;
        SUPERSCRIPT: Command;
        UNDERLINE: Command;
        BOLD: Command;
        ITALIC: Command;
        FONT_SIZE: Command;
        FONT_FACE: Command;
        FONT_COLOR: Command;
        EMOTICON: Command;
        EQUATION: Command;
        BACKGROUND_COLOR: Command;
        ORDERED_LIST: Command;
        UNORDERED_LIST: Command;
        TABLE: Command;
        JUSTIFY_CENTER: Command;
        JUSTIFY_FULL: Command;
        JUSTIFY_RIGHT: Command;
        JUSTIFY_LEFT: Command;
        BLOCKQUOTE: Command;
        DIR_LTR: Command;
        DIR_RTL: Command;
        IMAGE: Command;
        EDIT_HTML: Command;
        UPDATE_LINK_BUBBLE: Command;
        DEFAULT_TAG: Command;
        CLEAR_LOREM: Command;
        UPDATE_LOREM: Command;
        USING_LOREM: Command;
        MODAL_LINK_EDITOR: Command;
    };
}
