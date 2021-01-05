// Type definitions for mdarea 1.0
// Project: https://github.com/jahudka/mdarea#readme
// Definitions by: Antoine Laffargue <https://github.com/toniopelo>
//                 Dan Kadera <https://github.com/jahudka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
export as namespace MarkdownArea;

interface MarkdownEditorOptions {
    /**
     * @remarks
     * How many spaces to use for indentation.
     * If you specify a string, its length will be used -
     * beware that the tab characterhas a length of 1!
     *
     * @default 4
     */
    indent?: number | string;
    /**
     * @remarks
     * Lets you customize the default key mapping of the editor.
     * The keys of the object are action names, and the values are the key
     * combinations as either comma-separated strings or arrays.
     *
     * Shortcuts in the keyMap are specified as strings (or arrays thereof).
     * Each shortcut is a combination of zero or more modifiers and a single key,
     * separated by +. There are five supported modifiers: Ctrl, Shift, Alt, Meta and Cmd.
     * The Cmd modifier represents the Cmd key on a Mac and the Ctrl key otherwise;
     * the Ctrl modifier always means the Ctrl key and the Meta modifier always means
     * the Windows / Cmd meta key. You'll probably always want to use the Cmd modifier
     * in place of Ctrl or Meta. The key should be one of the known key values
     * (see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values).
     * Note that regular character keys a to z should be specified in lowercase,
     * regardless of the presence or absence of the Shift modifier.
     *
     * See default values here: https://www.npmjs.com/package/mdarea#key-bindings
     */
    keyMap?: {
        /**
         * @remarks
         * This action takes care of smart Enter key handling.
         * Invoked inside of a list item it will insert a new item at the current level,
         * incrementing its number if applicable, or an indented newline within the current
         * item if the Shift key is pressed. If invoked at the start of an empty list item
         * it will remove the current item and place the cursor at the start of the line
         * (exit the list, similarly to visual document editors).
         * If invoked after an opening parenthesis an indented newline is inserted,
         * similarly to common code editors.
         *
         * @default keys: Enter, Shift+Enter
         */
        enter?: string | string[];
        /**
         * @remarks
         * This action inserts smart pairs of inline formatting characters.
         * If the current selection is already surrounded by a formatting character and this
         * action is invoked with the same character, the existing characters are removed
         * (so selecting a word and pressing * will behave as "toggle bold").
         *
         * @default keys: ", ', `, *, _, [, ], (, ), {, }, <, >
         */
        inline?: string | string[];
        /**
         * @remarks
         * This action indents the current line or the currently selected block of text.
         * Note that the default key mapping for this action includes the Tab key,
         * which will prevent navigation between form elements once the editor gains focus.
         *
         * @default keys: Tab, Ctrl+m
         */
        indent?: string | string[];
        /**
         * @remarks
         * This action performs the inverse of indent.
         * The Shift+Tab default mapping will also similarly hamper form navigation.
         *
         * @default keys: Shift+Tab, Ctrl+Shift+m
         */
        outdent?: string | string[];
    };
}

interface MarkdownAreaEditor {
    /**
     * @returns the DOM element the editor instance is attached to
     */
    getElement(): HTMLTextAreaElement;
    /**
     * @remarks
     * Reattaches the editor instance to another textarea element.
     *
     * @param element The new textarea
     */
    setElement(element: HTMLTextAreaElement): void;
    /**
     * @remarks
     * Returns the current contents of the editor. Same as editor.getElement().value
     *
     * @returns current contents of the editor
     */
    getValue(): string;
    /**
     * @remarks
     * Sets the editor contents. Same as editor.getElement().value = value.
     *
     * @param value the new content
     */
    setValue(value: string): void;
    /**
     * @remarks
     * Destroys the editor instance.
     * This will unbind the keydown event handler and nullify all references to objects
     * which might keep the editor in memory including the active textarea element.
     * Remember to clear the reference to the editor instance that you kept until
     * calling the destroy() method - the easiest way to do so is to call destroy() like this:
     *
     * ```
     * editor = editor.destroy();
     * ```
     */
    destroy(): void;
}
interface MarkdownArea {
    /**
     * @remarks
     * Creates a new editor instance for the given element
     */
    new (element: HTMLTextAreaElement, options?: MarkdownEditorOptions): MarkdownAreaEditor;
}

declare const mdArea: MarkdownArea;

export = mdArea;
