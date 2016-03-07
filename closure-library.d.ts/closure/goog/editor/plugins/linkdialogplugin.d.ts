declare module goog {
    function require(name: 'goog.editor.plugins.LinkDialogPlugin'): typeof goog.editor.plugins.LinkDialogPlugin;
}

declare module goog.editor.plugins {

    /**
     * A plugin that opens the link dialog.
     * @constructor
     * @extends {goog.editor.plugins.AbstractDialogPlugin}
     */
    class LinkDialogPlugin extends goog.editor.plugins.AbstractDialogPlugin {
        constructor();
        
        /**
         * Link object that the dialog is editing.
         * @type {goog.editor.Link}
         * @protected
         */
        currentLink_: goog.editor.Link;
        
        /**
         * Tells the plugin whether to block URLs with schemes not in the whitelist.
         * If blocking is enabled, this plugin will stop the 'Test Link' popup
         * window from being created. Blocking doesn't affect link creation--if the
         * user clicks the 'OK' button with an unsafe URL, the link will still be
         * created as normal.
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
         * Tells the dialog to show a checkbox where the user can choose to have the
         * link open in a new window.
         * @param {boolean} startChecked Whether to check the checkbox the first
         *     time the dialog is shown. Subesquent times the checkbox will remember its
         *     previous state.
         */
        showOpenLinkInNewWindow(startChecked: boolean): void;
        
        /**
         * Tells the dialog to show a checkbox where the user can choose to have
         * 'rel=nofollow' attribute added to the link.
         */
        showRelNoFollow(): void;
        
        /**
         * Returns whether the"open link in new window" checkbox was checked last time
         * the dialog was closed.
         * @return {boolean} Whether the"open link in new window" checkbox was checked
         *     last time the dialog was closed.
         */
        getOpenLinkInNewWindowCheckedState(): boolean;
        
        /**
         * Tells the plugin to stop leaking the page's url via the referrer header when
         * the "test this link" link is clicked. When the user clicks on a link, the
         * browser makes a request for the link url, passing the url of the current page
         * in the request headers. If the user wants the current url to be kept secret
         * (e.g. an unpublished document), the owner of the url that was clicked will
         * see the secret url in the request headers, and it will no longer be a secret.
         * Calling this method will not send a referrer header in the request, just as
         * if the user had opened a blank window and typed the url in themselves.
         */
        stopReferrerLeaks(): void;
        
        /**
         * Sets the warning message to show to users about including email addresses on
         * public web pages.
         * @param {!goog.html.SafeHtml} emailWarning Warning message to show users about
         *     including email addresses on the web.
         */
        setEmailWarning(emailWarning: goog.html.SafeHtml): void;
        
        /**
         * Handles execCommand by opening the dialog.
         * @param {string} command The command to execute.
         * @param {*=} opt_arg {@link A goog.editor.Link} object representing the link
         *     being edited.
         * @return {*} Always returns true, indicating the dialog was shown.
         * @protected
         * @override
         */
        execCommandInternal(command: string, opt_arg?: any): any;
        
        /**
         * Handles when the dialog closes.
         * @param {goog.events.Event} e The AFTER_HIDE event object.
         * @override
         * @protected
         */
        handleAfterHide(e: goog.events.Event): void;
        
        /**
         * @return {goog.events.EventHandler<T>} The event handler.
         * @protected
         * @this T
         * @template T
         */
        getEventHandler<T>(): goog.events.EventHandler<T>;
        
        /**
         * @return {goog.editor.Link} The link being edited.
         * @protected
         */
        getCurrentLink(): goog.editor.Link;
        
        /**
         * Creates a new instance of the dialog and registers for the relevant events.
         * @param {goog.dom.DomHelper} dialogDomHelper The dom helper to be used to
         *     create the dialog.
         * @param {*=} opt_link The target link (should be a goog.editor.Link).
         * @return {!goog.ui.editor.LinkDialog} The dialog.
         * @override
         * @protected
         */
        createDialog(dialogDomHelper: goog.dom.DomHelper, opt_link?: any): goog.ui.editor.LinkDialog;
        
        /**
         * Handles the OK event from the dialog by updating the link in the field.
         * @param {goog.ui.editor.LinkDialog.OkEvent} e OK event object.
         * @protected
         */
        handleOk(e: goog.ui.editor.LinkDialog.OkEvent): void;
        
        /**
         * Handles the BeforeTestLink event fired when the 'test' link is clicked.
         * @param {goog.ui.editor.LinkDialog.BeforeTestLinkEvent} e BeforeTestLink event
         *     object.
         * @protected
         */
        handleBeforeTestLink(e: goog.ui.editor.LinkDialog.BeforeTestLinkEvent): void;
        
        /**
         * Checks whether the plugin should open the given url in a new window.
         * @param {string} url The url to check.
         * @return {boolean} If the plugin should open the given url in a new window.
         * @protected
         */
        shouldOpenUrl(url: string): boolean;
    }
}
