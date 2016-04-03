declare module goog {
    function require(name: 'goog.editor.Link'): typeof goog.editor.Link;
}

declare module goog.editor {

    /**
     * Wrap an editable link.
     * @param {HTMLAnchorElement} anchor The anchor element.
     * @param {boolean} isNew Whether this is a new link.
     * @constructor
     * @final
     */
    class Link {
        constructor(anchor: HTMLAnchorElement, isNew: boolean);
        
        /**
         * @return {HTMLAnchorElement} The anchor element.
         */
        getAnchor(): HTMLAnchorElement;
        
        /**
         * @return {!Array<HTMLAnchorElement>} The extra anchor elements, if any,
         *     created by the browser from a selection.
         */
        getExtraAnchors(): Array<HTMLAnchorElement>;
        
        /**
         * @return {string} The inner text for the anchor.
         */
        getCurrentText(): string;
        
        /**
         * @return {boolean} Whether the link is new.
         */
        isNew(): boolean;
        
        /**
         * Set the url without affecting the isNew() status of the link.
         * @param {string} url A URL.
         */
        initializeUrl(url: string): void;
        
        /**
         * Removes the link, leaving its contents in the document.  Note that this
         * object will no longer be usable/useful after this call.
         */
        removeLink(): void;
        
        /**
         * Change the link.
         * @param {string} newText New text for the link. If the link contains all its
         *     text in one descendent, newText will only replace the text in that
         *     one node. Otherwise, we'll change the innerHTML of the whole
         *     link to newText.
         * @param {string} newUrl A new URL.
         */
        setTextAndUrl(newText: string, newUrl: string): void;
        
        /**
         * Places the cursor to the right of the anchor.
         * Note that this is different from goog.editor.range's placeCursorNextTo
         * in that it specifically handles the placement of a cursor in browsers
         * that trap you in links, by adding a space when necessary and placing the
         * cursor after that space.
         */
        placeCursorRightOf(): void;
        
        /**
         * @return {string?} The modified string for the link if the link
         *     text appears to be a valid link. Returns null if this is not
         *     a valid link address.
         */
        getValidLinkFromText(): string;
        
        /**
         * After link creation, finish creating the link depending on the type
         * of link being created.
         * @param {goog.editor.Field} field The field where this link is being created.
         */
        finishLinkCreation(field: goog.editor.Field): void;
        
        /**
         * Initialize a new link.
         * @param {HTMLAnchorElement} anchor The anchor element.
         * @param {string} url The initial URL.
         * @param {string=} opt_target The target.
         * @param {Array<HTMLAnchorElement>=} opt_extraAnchors Extra anchors created
         *     by the browser when parsing a selection.
         * @return {!goog.editor.Link} The link.
         */
        static createNewLink(anchor: HTMLAnchorElement, url: string, opt_target?: string, opt_extraAnchors?: Array<HTMLAnchorElement>): goog.editor.Link;
        
        /**
         * Initialize a new link using text in anchor, or empty string if there is no
         * likely url in the anchor.
         * @param {HTMLAnchorElement} anchor The anchor element with likely url content.
         * @param {string=} opt_target The target.
         * @return {!goog.editor.Link} The link.
         */
        static createNewLinkFromText(anchor: HTMLAnchorElement, opt_target?: string): goog.editor.Link;
        
        /**
         * Returns true if str could be a URL, false otherwise
         *
         * Ex: TR_Util.isLikelyUrl_("http://www.google.com") == true
         *     TR_Util.isLikelyUrl_("www.google.com") == true
         *
         * @param {string} str String to check if it looks like a URL.
         * @return {boolean} Whether str could be a URL.
         */
        static isLikelyUrl(str: string): boolean;
        
        /**
         * Returns true if str could be an email address, false otherwise
         *
         * Ex: goog.editor.Link.isLikelyEmailAddress_("some word") == false
         *     goog.editor.Link.isLikelyEmailAddress_("foo@foo.com") == true
         *
         * @param {string} str String to test for being email address.
         * @return {boolean} Whether "str" looks like an email address.
         */
        static isLikelyEmailAddress(str: string): boolean;
        
        /**
         * Determines whether or not a url is an email link.
         * @param {string} url A url.
         * @return {boolean} Whether the url is a mailto link.
         */
        static isMailto(url: string): boolean;
    }
}
