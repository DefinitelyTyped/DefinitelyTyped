declare module goog {
    function require(name: 'goog.editor.plugins.EnterHandler'): typeof goog.editor.plugins.EnterHandler;
}

declare module goog.editor.plugins {

    /**
     * Plugin to handle enter keys. This does all the crazy to normalize (as much as
     * is reasonable) what happens when you hit enter. This also handles the
     * special casing of hitting enter in a blockquote.
     *
     * In IE, Webkit, and Opera, the resulting HTML uses one DIV tag per line. In
     * Firefox, the resulting HTML uses BR tags at the end of each line.
     *
     * @constructor
     * @extends {goog.editor.Plugin}
     */
    class EnterHandler extends goog.editor.Plugin {
        constructor();
        
        /**
         * The type of block level tag to add on enter, for browsers that support
         * specifying the default block-level tag. Can be overriden by subclasses; must
         * be either DIV or P.
         * @type {goog.dom.TagName}
         * @protected
         */
        tag: goog.dom.TagName;
        
        /**
         * If the contents are empty, return the 'default' html for the field.
         * The 'default' contents depend on the enter handling mode, so it
         * makes the most sense in this plugin.
         * @param {string} html The html to prepare.
         * @return {string} The original HTML, or default contents if that
         *    html is empty.
         * @override
         */
        prepareContentsHtml(html: string): string;
        
        /**
         * Gets HTML with no contents that won't collapse, for browsers that
         * collapse the empty string.
         * @return {string} Blank html.
         * @protected
         */
        getNonCollapsingBlankHtml(): string;
        
        /**
         * Internal backspace handler.
         * @param {goog.events.Event} e The keypress event.
         * @param {goog.dom.AbstractRange} range The closure range object.
         * @protected
         */
        handleBackspaceInternal(e: goog.events.Event, range: goog.dom.AbstractRange): void;
        
        /**
         * Fix paragraphs to be the correct type of node.
         * @param {goog.events.Event} e The <enter> key event.
         * @param {boolean} split Whether we already split up a blockquote by
         *     manually inserting elements.
         * @protected
         */
        processParagraphTagsInternal(e: goog.events.Event, split: boolean): void;
        
        /**
         * Determines whether the lowest containing block node is a blockquote.
         * @param {Node} n The node.
         * @return {boolean} Whether the deepest block ancestor of n is a blockquote.
         */
        static isDirectlyInBlockquote(n: Node): boolean;
        
        /**
         * Internal delete key handler.
         * @param {goog.events.Event} e The keypress event.
         * @protected
         */
        handleDeleteGecko(e: goog.events.Event): void;
        
        /**
         * Deletes the element at the cursor if it is a BR node, and if it does, calls
         * e.preventDefault to stop the browser from deleting. Only necessary in Gecko
         * as a workaround for mozilla bug 205350 where deleting a BR that is followed
         * by a block element doesn't work (the BR gets immediately replaced). We also
         * need to account for an ill-formed cursor which occurs from us trying to
         * stop the browser from deleting.
         *
         * @param {goog.events.Event} e The DELETE keypress event.
         * @protected
         */
        deleteBrGecko(e: goog.events.Event): void;
        
        /**
         * Internal handler for keyup events.
         * @param {goog.events.Event} e The key event.
         * @protected
         */
        handleKeyUpInternal(e: goog.events.Event): void;
        
        /**
         * Handle an enter key press in WebKit.
         * @param {goog.events.BrowserEvent} e The key press event.
         * @protected
         */
        handleEnterWebkitInternal(e: goog.events.BrowserEvent): void;
        
        /**
         * Handle an enter key press on collapsed selection.  handleEnterGecko_ ensures
         * the selection is collapsed by deleting its contents if it is not.  The
         * default implementation does nothing.
         * @param {goog.events.BrowserEvent} e The key press event.
         * @param {boolean} wasCollapsed Whether the selection was collapsed before
         *     the key press.  If it was not, code before this function has already
         *     cleared the contents of the selection.
         * @param {goog.dom.AbstractRange} range Object representing the selection.
         * @protected
         */
        handleEnterAtCursorGeckoInternal(e: goog.events.BrowserEvent, wasCollapsed: boolean, range: goog.dom.AbstractRange): void;
        
        /**
         * Whether this is a node that contains a single BR tag and non-nbsp
         * whitespace.
         * @param {Node} node Node to check.
         * @return {boolean} Whether this is an element that only contains a BR.
         * @protected
         */
        static isBrElem(node: Node): boolean;
        
        /**
         * Ensures all text in IE and Opera to be in the given tag in order to control
         * Enter spacing. Call this when Enter is pressed if desired.
         *
         * We want to make sure the user is always inside of a block (or other nodes
         * listed in goog.editor.plugins.EnterHandler.IGNORE_ENSURE_BLOCK_NODES_).  We
         * listen to keypress to force nodes that the user is leaving to turn into
         * blocks, but we also need to listen to keyup to force nodes that the user is
         * entering to turn into blocks.
         * Example:  html is: "<h2>foo[cursor]</h2>", and the user hits enter.  We
         * don't want to format the h2, but we do want to format the P that is
         * created on enter.  The P node is not available until keyup.
         * @param {goog.dom.TagName} tag The tag name to convert to.
         * @param {boolean=} opt_keyUp Whether the function is being called on key up.
         *     When called on key up, the cursor is in the newly created node, so the
         *     semantics for when to change it to a block are different.  Specifically,
         *     if the resulting node contains only a BR, it is converted to <tag>.
         * @protected
         */
        ensureBlockIeOpera(tag: goog.dom.TagName, opt_keyUp?: boolean): void;
    }
}
