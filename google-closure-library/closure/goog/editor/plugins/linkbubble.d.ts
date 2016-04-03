declare module goog {
    function require(name: 'goog.editor.plugins.LinkBubble'): typeof goog.editor.plugins.LinkBubble;
    function require(name: 'goog.editor.plugins.LinkBubble.Action'): typeof goog.editor.plugins.LinkBubble.Action;
}

declare module goog.editor.plugins {

    /**
     * Property bubble plugin for links.
     * @param {...!goog.editor.plugins.LinkBubble.Action} var_args List of
     *     extra actions supported by the bubble.
     * @constructor
     * @extends {goog.editor.plugins.AbstractBubblePlugin}
     */
    class LinkBubble extends goog.editor.plugins.AbstractBubblePlugin {
        constructor(...var_args: goog.editor.plugins.LinkBubble.Action[]);
        
        /**
         * @desc Text label for link that lets the user click it to see where the link
         *     this bubble is for point to.
         */
        static MSG_LINK_BUBBLE_TEST_LINK: any;
        
        /**
         * @desc Label that pops up a dialog to change the link.
         */
        static MSG_LINK_BUBBLE_CHANGE: any;
        
        /**
         * @desc Label that allow the user to remove this link.
         */
        static MSG_LINK_BUBBLE_REMOVE: any;
        
        /**
         * @desc Message shown in a link bubble when the link is not a valid url.
         */
        static MSG_INVALID_URL_LINK_BUBBLE: any;
        
        /**
         * Tells the plugin to stop leaking the page's url via the referrer header when
         * the link text link is clicked. When the user clicks on a link, the
         * browser makes a request for the link url, passing the url of the current page
         * in the request headers. If the user wants the current url to be kept secret
         * (e.g. an unpublished document), the owner of the url that was clicked will
         * see the secret url in the request headers, and it will no longer be a secret.
         * Calling this method will not send a referrer header in the request, just as
         * if the user had opened a blank window and typed the url in themselves.
         */
        stopReferrerLeaks(): void;
        
        /**
         * Tells the plugin whether to block URLs with schemes not in the whitelist.
         * If blocking is enabled, this plugin will not linkify the link in the bubble
         * popup.
         * @param {boolean} blockOpeningUnsafeSchemes Whether to block non-whitelisted
         *     schemes.
         */
        setBlockOpeningUnsafeSchemes(blockOpeningUnsafeSchemes: boolean): void;
        
        /**
         * Sets a whitelist of allowed URL schemes that are safe to open.
         * Schemes should all be in lowercase. If the plugin is set to block opening
         * unsafe schemes, user-entered URLs will be converted to lowercase and checked
         * against this list. The whitelist has no effect if blocking is not enabled.
         * @param {Array<string>} schemes String array of URL schemes to allow (http,
         *     https, etc.).
         */
        setSafeToOpenSchemes(schemes: Array<string>): void;
        
        /**
         * Set the optional function for getting the "test" link of a url.
         * @param {function(string) : string} func The function to use.
         */
        setTestLinkUrlFn(func: (arg0: string) => string): void;
        
        /**
         * Returns the target element url for the bubble.
         * @return {string} The url href.
         * @protected
         */
        getTargetUrl(): string;
        
        /**
         * Returns the message to display for testing a link.
         * @return {string} The message for testing a link.
         * @protected
         */
        getTestLinkMessage(): string;
        
        /**
         * Tests the link by opening it in a new tab/window. Should be used as the
         * click event handler for the test pseudo-link.
         * @protected
         */
        testLink(): void;
        
        /**
         * Returns whether the URL should be considered invalid.  This always returns
         * false in the base class, and should be overridden by subclasses that wish
         * to impose validity rules on URLs.
         * @param {string} url The url to check.
         * @return {boolean} Whether the URL should be considered invalid.
         */
        isInvalidUrl(url: string): boolean;
        
        /**
         * Checks whether the plugin should open the given url in a new window.
         * @param {string} url The url to check.
         * @return {boolean} If the plugin should open the given url in a new window.
         * @protected
         */
        shouldOpenUrl(url: string): boolean;
    }
}

declare module goog.editor.plugins.LinkBubble {

    /**
     * Constructor for extra actions that can be added to the link bubble.
     * @param {string} spanId The ID for the span showing the action.
     * @param {string} linkId The ID for the link showing the action.
     * @param {string} message The text for the link showing the action.
     * @param {function(string):boolean} toShowFn Test function to determine whether
     *     to show the action for the given URL.
     * @param {function(string):void} actionFn Action function to run when the
     *     action is clicked.  Takes the current target URL as a parameter.
     * @constructor
     * @final
     */
    class Action {
        constructor(spanId: string, linkId: string, message: string, toShowFn: (arg0: string) => boolean, actionFn: (arg0: string) => void);
    }
}
