declare module goog {
    function require(name: 'goog.window'): typeof goog.window;
}

declare module goog.window {

    /**
     * Default height for popup windows
     * @type {number}
     */
    var DEFAULT_POPUP_HEIGHT: number;

    /**
     * Default width for popup windows
     * @type {number}
     */
    var DEFAULT_POPUP_WIDTH: number;

    /**
     * Default target for popup windows
     * @type {string}
     */
    var DEFAULT_POPUP_TARGET: string;

    /**
     * Opens a new window.
     *
     * @param {string|Object} linkRef A string or an object that supports toString,
     *     for example goog.Uri.  If this is an object with a 'href' attribute, such
     *     as HTMLAnchorElement, it will be used instead.
     *
     * @param {Object=} opt_options supports the following options:
     *  'target': (string) target (window name). If null, linkRef.target will
     *          be used.
     *  'width': (number) window width.
     *  'height': (number) window height.
     *  'top': (number) distance from top of screen
     *  'left': (number) distance from left of screen
     *  'toolbar': (boolean) show toolbar
     *  'scrollbars': (boolean) show scrollbars
     *  'location': (boolean) show location
     *  'statusbar': (boolean) show statusbar
     *  'menubar': (boolean) show menubar
     *  'resizable': (boolean) resizable
     *  'noreferrer': (boolean) whether to attempt to remove the referrer header
     *      from the request headers. Does this by opening a blank window that
     *      then redirects to the target url, so users may see some flickering.
     *
     * @param {Window=} opt_parentWin Parent window that should be used to open the
     *                 new window.
     *
     * @return {Window} Returns the window object that was opened. This returns
     *                  null if a popup blocker prevented the window from being
     *                  opened.
     */
    function open(linkRef: string|Object, opt_options?: Object, opt_parentWin?: Window): Window;

    /**
     * Opens a new window without any real content in it.
     *
     * This can be used to get around popup blockers if you need to open a window
     * in response to a user event, but need to do asynchronous work to determine
     * the URL to open, and then set the URL later.
     *
     * Example usage:
     *
     * var newWin = goog.window.openBlank('Loading...');
     * setTimeout(
     *     function() {
     *       newWin.location.href = 'http://www.google.com';
     *     }, 100);
     *
     * @param {string=} opt_message String to show in the new window. This string
     *     will be HTML-escaped to avoid XSS issues.
     * @param {Object=} opt_options Options to open window with.
     *     {@see goog.window.open for exact option semantics}.
     * @param {Window=} opt_parentWin Parent window that should be used to open the
     *                 new window.
     * @return {Window} Returns the window object that was opened. This returns
     *                  null if a popup blocker prevented the window from being
     *                  opened.
     */
    function openBlank(opt_message?: string, opt_options?: Object, opt_parentWin?: Window): Window;

    /**
     * Raise a help popup window, defaulting to "Google standard" size and name.
     *
     * (If your project is using GXPs, consider using {@link PopUpLink.gxp}.)
     *
     * @param {string|Object} linkRef if this is a string, it will be used as the
     * URL of the popped window; otherwise it's assumed to be an HTMLAnchorElement
     * (or some other object with "target" and "href" properties).
     *
     * @param {Object=} opt_options Options to open window with.
     *     {@see goog.window.open for exact option semantics}
     *     Additional wrinkles to the options:
     *     - if 'target' field is null, linkRef.target will be used. If *that's*
     *     null, the default is "google_popup".
     *     - if 'width' field is not specified, the default is 690.
     *     - if 'height' field is not specified, the default is 500.
     *
     * @return {boolean} true if the window was not popped up, false if it was.
     */
    function popup(linkRef: string|Object, opt_options?: Object): boolean;
}
