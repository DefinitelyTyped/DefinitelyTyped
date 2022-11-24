// Type definitions for non-npm package Apple TV ATVLegacyContentKit for TV Experience 7.7
// Project: n/a (there is no publically available website for the SDK)
// Definitions by: Shea Smith <https://github.com/SheaSmith>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// The rule of thumb is that everything within the atv namespace is accessible by vanilla JavaScript running on the device. Everything else is a utility class which eases development, or in some
// cases (especially in the StoreKit stuff) are identitical to the classes the Apple TV uses internally.

/**
 * Values representing the state of a transaction.
 *
 * See https://developer.apple.com/documentation/storekit/skpaymenttransactionstate for more information.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare enum SKPaymentTransactionState {
    /**
     * A transaction that is being processed by the App Store.
     */
    Purchasing = 0,

    /**
     * A successfully processed transaction.
     */
    Purchased = 1,

    /**
     * A failed transaction.
     */
    Failed = 2,

    /**
     * A transaction that restores content previously purchased by the user.
     */
    Restored = 3,

    /**
     * A transaction that is in the queue, but its final status is pending external action such as Ask to Buy.
     */
    Deferred = 4,
}

// tslint:disable-next-line:strict-export-declare-modifiers
declare namespace atv {
    /**
     * Dumps the current controller stack to the syslog.
     */
    function _debugDumpControllerStack(): void;

    /**
     * This hasn't been extensively tested, but it likely returns a Base64 encoded string with a StoreKit receipt.
     * @returns Likely a StoreKit reciept, Base64 encoded.
     */
    function appStoreReceipt(): any;

    /**
     * Stops a repeating function from running any more times.
     * @param handle The handle returned by setInterval which references the repeating task.
     */
    function clearInterval(handle: string): void;

    /**
     * Stops a delayed function from executing.
     * @param handle The handle returned by setTimeout which references the task.
     */
    function clearTimeout(handle: string): void;

    /**
     * The global configuration for this app.
     */
    let config: ATVJSConfig;

    /**
     * A namespace containing objects to generate various hashes.
     */
    namespace crypto {
        /**
         * Generate a MD5 hash of the data.
         * @param data The data you wish to hash.
         * @returns The hash of the data.
         */
        function MD5(data: any): string;

        /**
         * Generate a SHA1 hash of the data.
         * @param data The data you wish to hash.
         * @returns The hash of the data.
         */
        function SHA1(data: any): string;

        /**
         * Generate a SHA224 hash of the data.
         * @param data The data you wish to hash.
         * @returns The hash of the data.
         */
        function SHA224(data: any): string;

        /**
         * Generate a SHA256 hash of the data.
         * @param data The data you wish to hash.
         * @returns The hash of the data.
         */
        function SHA256(data: any): string;

        /**
         * Generate a SHA384 hash of the data.
         * @param data The data you wish to hash.
         * @returns The hash of the data.
         */
        function SHA384(data: any): string;

        /**
         * Generate a SHA512 hash of the data.
         * @param data The data you wish to hash.
         * @returns The hash of the data.
         */
        function SHA512(data: any): string;
    }

    /**
     * Information about the physical device the app is running on.
     */
    namespace device {
        /**
         * The display name of the device, set by the user.
         */
        const displayName: string;

        /**
         * A UUID that is unique to this combination of device and app.
         */
        const idForVendor: string;

        /**
         * Whether the device is in retail demo mode or not.
         */
        const isInRetailDemoMode: boolean;

        /**
         * The language of the Apple TV, in ISO 639-1 format.
         */
        const language: string;

        /**
         * Which video format the user prefers, set via iTunes settings. This can either be SD (Standard Definition), or HD (either 720p, or 1080p).
         */
        const preferredVideoFormat: 'HD' | 'SD';

        /**
         * Which video format the user prefers for previews, set via iTunes settings. This can either be SD (Standard Definition), or HD.
         */
        const preferredVideoPreviewFormat: 'HD' | 'SD';

        /**
         * The frame of the current screen.
         */
        const screenFrame: ATVFrame;

        /**
         * The version of the Apple TV Software, e.g. 7.7.
         * This is not the same as the underlying iOS version!
         */
        const softwareVersion: string;

        /**
         * A two character country code that is the country the Apple TV is set to, e.g. NZ.
         */
        const storeFrontCountryCode: string;

        /**
         * Get the UDID of the Apple TV.
         */
        const udid: string;
    }

    /**
     * The type shared between Documents and Elements, equivalent to Node in the normal DOM.
     */
    interface Node {
        /**
         * The document that owns this particular node.
         */
        readonly ownerDocument: Document;
    }

    /**
     * The type used for Apple TV documents, equivalent to Document in the normal DOM.
     */
    interface Document extends Node {
        /**
         * Get elements that match the supplied xpath.
         * @param xpath The xpath to query.
         * @param parentNode Optionally, the node that you want the xpath to be limited to (e.g. for descendants queries).
         */
        evaluateXPath(xpath: string, parentNode?: Node): Element;

        /**
         * Get an element by its ID
         * @param id The ID of the element you wish to find.
         */
        getElementById(id: string): Element;

        /**
         * Make a new element with the tag name supplied.
         * @param name The tag name you want to give the new element.
         */
        makeElementNamed(name: string): Element;

        /**
         * The root element of this document.
         */
        readonly rootElement: Element;

        /**
         * Serialize the document to an XML string.
         */
        serializeToString(): string;
    }

    /**
     * The type used for Apple TV elements, equivalent to Element in the normal DOM.
     */
    interface Element extends Node {
        /**
         * Append a child to this element.
         * @param element The element to append.
         */
        appendChild(element: Element): void;

        /**
         * Get the child elements of this element.
         */
        readonly childElements: Element[];

        /**
         * Get an attribute from an element by the name of the attribute.
         * @param attributeName The name of the attribute to retrieve.
         */
        getAttribute(attributeName: string): string;

        /**
         * Get the first direct child element with the tag name specified.
         * @param name The tag name of the element to find.
         */
        getElementByName(name: string): Element;

        /**
         * Get all child elements with the tag name specified. This seems to include closing tags.
         * @param name The tag name of the element to find.
         */
        getElementsByName(name: string): Element[];

        /**
         * Insert a child element after a specified element.
         * @param elementToInsert The element you wish to insert.
         * @param insertAfter The element you wish to insert the other element after.
         */
        insertChildAfter(elementToInsert: Element, insertAfter: Element): void;

        /**
         * Insert a child element before the specified element.
         * @param elementToInsert The element you wish to insert.
         * @param insertBefore The element you wish to insert the other element before.
         */
        insertChildBefore(elementToInsert: Element, insertBefore: Element): void;

        /**
         * Get the parent element of this element.
         */
        readonly parent: Element;

        /**
         * Remove a specific attribute by its name.
         * @param attributeName The name of the attribute to remove.
         */
        removeAttribute(attributeName: string): void;

        /**
         * Remove the element from its parent.
         */
        removeFromParent(): void;

        /**
         * Replace a child element with a different element.
         * @param elementToBeReplaced The element that is going to be replaced.
         * @param elementToReplaceWith The element that has been replaced.
         */
        replaceChild(elementToBeReplaced: Element, elementToReplaceWith: Element): void;

        /**
         * Set an attribute on the element.
         * @param key The key of the attribute.
         * @param value The value of the attribute.
         */
        setAttribute(key: string, value: string): void;

        /**
         * The tag name of this element.
         */
        readonly tagName: string;

        /**
         * The content of the text of this element.
         */
        readonly textContent: string;
    }

    /**
     * A view that allows you to programatically build an Apple TV page, rather than simply just through loading a full document.
     */
    class DOMView {
        /**
         * Load the DOMView into the view stack.
         * @param document The document you wish to load.
         * @param callback A callback for whether the document was successfully loaded. The only parameter is a boolean that is true if the load was successful.
         */
        load(document: Document, callback?: (success: boolean) => void): void;

        /**
         * Unload the DOMView (and return to the previous page).
         */
        unload(): void;

        /**
         * A callback called whenever the DOMView is unloaded.
         */
        onUnload?: () => void;
    }

    /**
     * Exit the app.
     */
    function exitApp(): void;

    /**
     * The full screen media browser is a carousel for photos and videos (although the previews only) that has support for comments and likes.
     */
    class FullScreenMediaBrowser {
        /**
         * Hides the full screen media browser
         */
        hide(): void;

        /**
         * Show the media browser.
         * @param items The list of media browser items to show.
         * @param initialSelectionIndex The index of what the initial image to be displayed should be.
         */
        show(items: Array<(MediaBrowserPhoto | MediaBrowserVideo)>, initialSelectionIndex?: number): void;

        /**
         * Update the metadata of the asset.
         * @param photoId The ID of the photo that you want to update.
         * @param metadata The metadata you wish to set the photo to have.
         */
        updateMetadata(photoId: string, metadata: MediaBrowserMetadata): void;

        /**
         * Update the metadata of the asset. This method is specifically for updating the likes.
         * @param photoId The ID of the photo that you want to update.
         * @param metadata The metadata you wish to set the photo to have.
         */
        updateMetadataLiked(photoId: string, metadata: MediaBrowserMetadata): void;

        /**
         * The callback that is called when the media browser requests metadata.
         */
        onLoadMetadata?: (photoId: string) => void;

        /**
         * The callback that is called when the user selects a photo in the media browser. This may only apply to fullscreen mode.
         */
        onItemSelection?: (photoId: string) => void;

        /**
         * The callback when the media browser considers comments viewed (and so should be dealt with accordingly).
         */
        onMarkCommentsAsViewed?: (photoId: string) => void;

        /**
         * The callback that is called when the photo is liked or unliked.
         */
        onLikeSelection?: (photoId: string, metadata: MediaBrowserMetadata) => void;

        /**
         * The type of this media browser. Default allows switching between fullscreen and comments modes by pressing select. Comments screen only sets the media browser to only have fullscreen
         * and fullscreen only does the same but for fullscreen.
         */
        type: 'commentsScreenOnly' | 'default' | 'fullScreenOnly';
    }

    /**
     * An image that can be displayed in either scriptViews or as an overlay.
     */
    class ImageView extends View {
        /**
         * Loads an image into the ImageView.
         * @param url The URL the image is hosted at.
         */
        loadImageAtURL(url: string): void;
    }

    /**
     * Whether the user is logged in to iTunes or not.
     */
    function isITunesAuthentication(): boolean;

    class View {
        /**
         * The frame for this view. This defines the width, height and position of the view.
         *
         * This doesn't apply for the root view in a scriptView.
         */
        frame: ATVFrame;

        /**
         * The background colour of the view.
         */
        backgroundColor: ATVColor;

        /**
         * Child views of this view. They are displayed on top of the view, in the order specified (e.g. the first being the lowest).
         *
         * The frame for these children views is set as (0, 0) as being at the bottom corner of the parent frame.
         */
        subviews: View[];

        /**
         * Adds an animation to the view.
         * @param animation The animation to add.
         * @param key A unique key for this animation, so that it can be managed later.
         */
        addAnimation(animation: ATVAnimation, key: string): void;

        /**
         * Remove a specific animation from the view.
         * @param key The key of the animation to remove.
         */
        removeAnimation(key: string): void;

        /**
         * Remove all animations from an object.
         */
        removeAllAnimations(): void;
    }

    /**
     * Load and swap (i.e. remove the original page from the controller stack and replace it with this one) the page based on a plist.
     *
     * See https://github.com/SheaSmith/atv.js/wiki/Plist-findings for more information.
     * @param plist The plist to replace the page with.
     */
    function loadAndSwapPlist(plist: string | object): void;

    /**
     * Load and swap (i.e. remove the original page from the controller stack and replace it with this one) the page based on a URL pointing to an XML template.
     *
     * See the XML documentation for more information.
     * @param url The URL of the XML template.
     * @param method The method to use to access the URL.
     * @param headers The headers to include with the request.
     * @param body The body to send with the request (if applicable).
     */
    function loadAndSwapURL(
        url: string,
        method?: string,
        headers?: { [key: string]: string },
        body?: { [key: string]: string } | string,
    ): void;

    /**
     * Load and swap (i.e. remove the original page from the controller stack and replace it with this one) the page based on a parsed XML template, or node.
     *
     * See the XML documentation for more information.
     * @param xml The parent node, containing the XML tree to replace the current page with.
     * @param callback A callback called when the page has been swapped, and if it was successful.
     */
    function loadAndSwapXML(xml: Node, callback?: (success: boolean) => void): void;

    /**
     * Load the specified plist onto the controller stack and view it.
     *
     * See https://github.com/SheaSmith/atv.js/wiki/Plist-findings for more information.
     * @param plist The plist to display.
     */
    function loadPlist(plist: string | object): void;

    /**
     * Load a page based on a URL pointing to an XML template.
     *
     * See the XML documentation for more information.
     * @param url The URL of the XML template.
     * @param method The method to use to access the URL.
     * @param headers The headers to include with the request.
     * @param body The body to send with the request (if applicable).
     */
    function loadURL(
        url: string,
        method?: string,
        headers?: { [key: string]: string },
        body?: { [key: string]: string } | string,
    ): void;

    /**
     * Load a page based on a parsed XML template / Node.
     *
     * See the XML documentation for more information.
     * @param xml The parent node, containing the XML tree to replace the current page with.
     * @param callback A callback called when the page has been swapped, and if it was successful.
     */
    function loadXML(xml: Node, callback?: (success: boolean) => void): void;

    /**
     * Store data for this app that persists across sessions. This is essentially permanent, unless it is cleared.
     */
    const localStorage: ATVStorage;

    /**
     * Format the supplied date into the specified format.
     * @param date The date you wish to format.
     * @param format The format you wish to use. The specification can be found at http://unicode.org/reports/tr35/tr35-6.html#Date_Format_Patterns.
     */
    function localtime(date: Date, format: string): string;

    /**
     * Log the user out, deleting their stored authentication information.
     */
    function logout(): void;

    /**
     * Not sure exactly what these do. They're all subproperties of NSLocale, but NSLocale doesn't appear to be available anywhere in the JS API.
     */
    const NSLocaleIdentifier = 'kCFLocaleIdentifierKey';
    const NSLocaleLanguageCode = 'kCFLocaleLanguageCodeKey';
    const NSLocaleCountryCode = 'kCFLocaleCountryCodeKey';
    const NSLocaleScriptCode = 'kCFLocaleScriptCodeKey';
    const NSLocaleVariantCode = 'kCFLocaleVariantCodeKey';
    const NSLocaleExemplarCharacterSet = 'kCFLocaleExemplarCharacterSetKey';
    const NSLocaleCalendar = 'kCFLocaleCalendarKey';
    const NSLocaleCollationIdentifier = 'collation';
    const NSLocaleUsesMetricSystem = 'kCFLocaleUsesMetricSystemKey';
    const NSLocaleMeasurementSystem = 'kCFLocaleMeasurementSystemKey';
    const NSLocaleDecimalSeparator = 'kCFLocaleDecimalSeparatorKey';
    const NSLocaleGroupingSeparator = 'kCFLocaleGroupingSeparatorKey';
    const NSLocaleCurrencySymbol = 'kCFLocaleCurrencySymbolKey';
    const NSLocaleCurrencyCode = 'currency';
    const NSLocaleCollatorIdentifier = 'kCFLocaleCollatorIdentifierKey';
    const NSLocaleQuotationBeginDelimiterKey = 'kCFLocaleQuotationBeginDelimiterKey';
    const NSLocaleQuotationEndDelimiterKey = 'kCFLocaleQuotationEndDelimiterKey';
    const NSLocaleAlternateQuotationBeginDelimiterKey = 'kCFLocaleAlternateQuotationBeginDelimiterKey';
    const NSLocaleAlternateQuotationEndDelimiterKey = 'kCFLocaleAlternateQuotationEndDelimiterKey';

    /**
     * Functions to do with the currently playing item.
     */
    const nowPlaying: ATVNowPlaying | null;

    /**
     * Called whenever a page is loaded. Page identifier is the ID of the first element in the body.
     */
    let onPageLoad: ((pageIdentifier: string) => void) | null;

    /**
     * Called whenever a page is unloaded. Page identifier is the ID of the first element in the body.
     *
     * If you've got this in an application level JS (i.e. the one defined in bag.plist) and in a page level JS (i.e. the one defined in the head of the page), then this will be called in both of
     * them.
     */
    let onPageUnload: ((pageIdentifier: string) => void) | null;

    /**
     * Called whenever a new page is pushed on top of this page. Page identifier is the ID of the first element in the body.
     *
     * If you've got this in an application level JS (i.e. the one defined in bag.plist) and in a page level JS (i.e. the one defined in the head of the page), then this will be called in both of
     * them.
     */
    let onPageBuried: ((pageIdentifier: string) => void) | null;

    /**
     * Called whenever a page that was previously open is brought on top of the stack again. Page identifier is the ID of the first element in the body.
     *
     * If you've got this in an application level JS (i.e. the one defined in bag.plist) and in a page level JS (i.e. the one defined in the head of the page), then this will be called in both of
     * them.
     */
    let onPageExhumed: ((pageIdentifier: string) => void) | null;

    /**
     * Called when the app is opened. If doesJavaScriptLoadRoot is true then it is reponsible for loading the initial page.
     */
    let onAppEntry: (() => void) | null;

    /**
     * Called when the app is exited. This isn't called when the app is closed by the user, rather the app is exited when another app (including this one) is opened.
     */
    let onAppExit: (() => void) | null;

    /**
     * Called whenever the Apple TV requests some screensavers from the app. It is likely that this needs to be accompanied with the appropriate items in bag.plist.
     * This simply returns a list of available screensavers for this app. This is done via a callback function (atv.setScreensaverPhotosCollection).
     */
    let onScreensaverPhotosSelectionEntry: (() => void) | null;

    /**
     * The user has finished selecting a screensaver.
     */
    let onScreensaverPhotosSelectionExit: (() => void) | null;

    /**
     * This is called every time the Apple TV wants screensavers.
     */
    let onExecuteQuery: ((query: ATVScreenSaverQuery, callback: ATVScreenSaverCallback) => void) | null;

    /**
     * Called when the user is logged out. This can be used to remove any user specific data from local or session storage.
     */
    let onLogout: (() => void) | null;

    /**
     * Get the ITMS link for iTunes Store content. Usually this seems to be in feed-resources, which is then piped into localStorage, so this method would typically return the ITMS URL from
     * localStorage.
     */
    let getItmsLink: (() => string | null) | null;

    /**
     * The callback called when a login attempt needs to happen.
     *
     * This can happen in three situations
     * 1. The user actively tries to login either by signing out and then back in, or on first login.
     * 2. The server returns a 401, so the app tries to silently login again.
     * 3. The stored credentials are invalid and a silent login fails, so the user needs to sign in again.
     *
     * Do not save the username or password. The Apple TV will do this for you.
     *
     * This method should not block. You must notify the Apple TV of *all* results with the callback, or else the login will hang for the user.
     */
    let onAuthenticate: ((username: string, password: string, callback: ATVAuthenticationCallback) => void) | null;

    /**
     * A callback that seems to be related to an unreleased Universal Search feature. This only appears in PBS applications, but is listed in strings files for ATVLegacyContentKit, so seems
     * legitimate.
     *
     * Alternatively, it's a method to allow legacy applications to integrate with the Apple TV 4 search, but it's hard to tell.
     *
     * Essentially, it is for apps to open a page when linked with a normal URL.
     */
    let onOpenURL: ((options: ATVDeepLinkOptions) => void) | null;

    /**
     * The callback called whenever the Apple TV is about to send a request.
     */
    let onGenerateRequest: ((request: ATVHttpRequest) => void) | null;

    /**
     * Parses a Plist into an object. Essentially turning the 'dict' section into a JSON object.
     * @param plist The string of the plist to parse.
     */
    function parsePlist(plist: string): object;

    /**
     * Parses an ATV XML string into a document.
     * @param xml The XML to parse.
     */
    function parseXML(xml: string): Document;

    /**
     * A screen that displays a PIN, and/or allows a user to enter one.
     */
    class PINEntry {
        /**
         * The title of the PIN entry screen.
         */
        title?: string;

        /**
         * A subtitle/prompt for the PIN entry screen.
         */
        prompt?: string;

        /**
         * The initial PIN code for the screen. This defaults to all zeros.
         */
        initialPINCode?: string;

        /**
         * The length of the PIN. This defaults to four.
         */
        numDigits?: number;

        /**
         * Whether the user should be able to edit the PIN or not.
         */
        userEditable?: boolean;

        /**
         * Whether the digits should be hidden as the user enters them.
         */
        hideDigits?: boolean;

        /**
         * If the PIN is submitted, then this method is called, with the PIN as the value parameters.
         */
        onSubmit?: (value: string) => void;

        /**
         * If the user decides to go back, then this method is called.
         */
        onCancel?: () => void;

        /**
         * Show the PIN entry screen.
         */
        show(): void;
    }

    /**
     * Player related callbacks and functions. Please note, this is only available in application level contexts.
     */
    namespace player {
        /**
         * The different states that the player can have.
         */
        enum states {
            /**
             * The player is currently fast forwarding.
             */
            FastForwarding = 'FastForwarding',

            /**
             * The player is currently buffering.
             */
            Loading = 'Loading',

            /**
             * The player is currently paused.
             */
            Paused = 'Paused',

            /**
             * The player is currently playing.
             */
            Playing = 'Playing',

            /**
             * The player is currently rewinding.
             */
            Rewinding = 'Rewinding',

            /**
             * The player is currently stopped.
             */
            Stopped = 'Stopped',
        }

        /**
         * Specific events for the player. Usually triggered by the remote;
         */
        enum events {
            /**
             * A fast forward has been requested.
             */
            FFwd = 'FFwd',

            /**
             * A pause has been requested.
             */
            Pause = 'Pause',

            /**
             * A play has been requested.
             */
            Play = 'Play',

            /**
             * A rewind has been requested.
             */
            Rew = 'Rew',

            /**
             * A skip back has been requested
             */
            SwipBack = 'SkipBack',

            /**
             * A skip forward has been requested.
             */
            SkipFwd = 'SkipFwd',
        }

        /**
         * Called before the playback starts.
         */
        let willStartPlaying: (() => void) | null;

        /**
         * Called when the asset being played changes (e.g. if a song in a playlist ends and the next one begins).
         */
        let currentAssetChanged: (() => void) | null;

        /**
         * Called when the player asks for a new asset (e.g. the next one to be played).
         */
        let loadMoreAssets: ((callback: ATVLoadMoreAssetsCallback) => void) | null;

        /**
         * Called when the player starts buffering. The playhead location is how much of the video has been played in seconds.
         */
        let onStartBuffering: ((playheadLocation: number) => void) | null;

        /**
         * Called when there is enough of the asset buffered to continue playing it.
         */
        let onBufferSufficientToPlay: (() => void) | null;

        /**
         * Called when there is an error with the player. The error is a debug message and should not be shown to the user.
         */
        let onPlaybackError: ((error: string) => void) | null;

        /**
         * Called when there is quality of service report available. Seems to only be logs.
         */
        let onQualityOfServiceReport: ((report: ATVQualityOfServiceReport) => void) | null;

        /**
         * Called when the state of the player changes. The state is the new state of the player and the playhead location is how much of the asset has been viewed in seconds.
         */
        let playerStateChanged: ((state: states, playheadLocation: number) => void) | null;

        /**
         * Called when the player is seeking to a specific time in seconds. This method should return the time the player should seek to. If you want to use the one set by the user, just return
         * the time supplied.
         */
        let playerWillSeekToTime: ((time: number) => number) | null;

        /**
         * Whether the player should handle an event. The event parameter describes what event is being requested and the playhead location is how much of the asset has been viewed in seconds.
         */
        let playerShouldHandleEvent: ((event: events, playheadLocation: number) => boolean) | null;

        /**
         * The current date has changed. This basically just reports the passage of time every second or so.
         */
        let playerDateDidChange: ((date: Date) => void) | null;

        /**
         * The playhead location has changed. This either happens when it has been specifically moved by the user (e.g. skipping, fast forward or rewinding) or regularly as the asset is played.
         */
        let playerTimeDidChange: ((playheadLocation: number) => void) | null;

        /**
         * Called when the player has been stopped.
         */
        let didStopPlaying: (() => void) | null;

        /**
         * The video controls (e.g. the progress bar) are going to be displayed. Animation duration is the length of the animation to fade in the controls.
         */
        let onTransportControlsDisplayed: ((animationDuration: number) => void) | null;

        /**
         * The video controls (e.g. the progress bar) are going to be hidden. Animation duration is the length of the animation to fade out the controls.
         */
        let onTransportControlsHidden: ((animationDuration: number) => void) | null;

        /**
         * The user has selected an audio track. The language is the short string associated with the language choice (e.g. en).
         */
        let didSelectAudioTrack: ((language: string) => void) | null;

        /**
         * The user has selected a subtitle track. The subtitle parameter is an object describing their chosen subtitle.
         */
        let didSelectSubtitleTrack: ((subtitle: ATVSubtitle) => void) | null;

        /**
         * The ID3 metadata for this video has changed.
         */
        let onTimedMetdataChanged: ((metadata: AVMetadataItem) => void) | null;

        /**
         * The player has asked for related content to be loaded. If there is already an item queued, it is supplied as the upNextAsset parameter.
         */
        let loadRelatedContent: ((upNextAsset: Element, callback: ATVLoadMoreAssetsCallback) => void) | null;

        /**
         * The currently playing asset.
         */
        const asset: Element | null;

        /**
         * Change the currently playing asset.
         * @param newAsset An element containing the new asset to play.
         */
        function changeToAsset(newAsset: Element): void;

        /**
         * Convert from gross time to net time. Essentially the gross time is the total time watched of the clip, including interstitials, but net time is the time watched minus any time taken by
         * the interstitials.
         * @param grossTime The gross time you want to convert.
         */
        function convertGrossToNetTime(grossTime: number): number;

        /**
         * Convert from net time to gross time.  Essentially the gross time is the total time watched of the clip, including interstitials, but net time is the time watched minus any time taken by
         * the interstitials.
         * @param netTime The net time you want to convert.
         */
        function convertNetToGrossTime(netTime: number): number;

        /**
         * Get information about the current item playing.
         *
         * This appears to be a special property solely used by the Apple TV+ app. Some properties can be used for quick access to things that might otherwise need queried out, but in general most
         * of the child items are specific to that app.
         */
        const currentItem: ATVPlayerItem | null;

        /**
         * The current playback date.
         */
        const currentPlaybackDate: Date | null;

        /**
         * The rate of playback. This is 0 for paused, 1 for normal playback, 2 for single fast forward, etc.
         */
        const currentPlaybackRate: number | null;

        /**
         * A list of the event groups. The elements list contains a list of elements parsed from the supplied event groups files, so all elements will be of type eventGroup.
         *
         * These display on the player as a series of lines. Additionally, the first part of the transport controls, usually where the time watched appears will display the event group title (if
         * supplied). Skipping between events will show the information about the event as a popup.
         */
        const eventGroups: Element[] | null;

        /**
         * A list of the interstitials. These are similar to event groups in how they are defined, but essentially, they display as
         */
        const interstitials: Element[] | null;

        /**
         * Unclear what this does. Possibly instructs the player to send onTimedMetadataChanged updates.
         */
        function observeTimedMetadataKeys(): void;

        /**
         * Start playing the asset.
         */
        function play(): void;

        /**
         * Stop the player and return to the previous screen.
         */
        function stop(): void;

        /**
         * Stops the player, but shows the user an error screen with the reasons.
         * @param title The title of the error to show.
         * @param subtitle The subtitle of the error to show.
         */
        function stopWithReason(title: string, subtitle: string): void;
    }

    /**
     * A menu that pops up over the current content.
     */
    class PopupMenu {
        /**
         * Load and show the menu.
         * @param menu The element containing the pop up menu. This should be a normal popUpMenu element, wrapped in an atv and body tag.
         * @param callback Called when the menu is processed. The success boolean indicates whether the menu was shown or not.
         */
        load(menu: Document, callback?: (success: boolean) => void): void;

        /**
         * Close the popup menu.
         */
        cancel(): void;
    }

    /**
     * A class that allows you to show a loader while doing work in the background, and eventually replacing it with a page.
     */
    class ProxyDocument {
        /**
         * Called when the user cancels the ProxyDocument by clicking back.
         */
        onCancel?: () => void;

        /**
         * Cancel the proxy document and return back to the previous screen. This calls the onCancel callback.
         */
        cancel(): void;

        /**
         * Shows the proxy document.
         */
        show(): void;

        /**
         * Load the specified plist onto the controller stack and replace the proxy document.
         *
         * See https://github.com/SheaSmith/atv.js/wiki/Plist-findings for more information.
         * @param plist The plist to display.
         */
        loadPlist(plist: string | object): void;

        /**
         * Load a page based on a URL pointing to an XML template and replace the proxy document..
         *
         * See the XML documentation for more information.
         * @param url The URL of the XML template.
         * @param method The method to use to access the URL.
         * @param headers The headers to include with the request.
         * @param body The body to send with the request (if applicable).
         */
        loadURL(
            url: string,
            method?: string,
            headers?: { [key: string]: string },
            body?: { [key: string]: string } | string,
        ): void;

        /**
         * Load a page based on a parsed XML template / Node and replace the proxy document..
         *
         * See the XML documentation for more information.
         * @param xml The parent node, containing the XML tree to replace the current page with.
         * @param callback A callback called when the page has been swapped, and if it was successful.
         */
        loadXML(xml: Node, callback?: (success: boolean) => void): void;
    }

    /**
     * A dialog that allows the user to rate a media item.
     */
    class RatingControl {
        /**
         * The rating to have initially. Must be between 0 and 1.
         */
        rating: number;

        /**
         * The title of the media item.
         */
        title: string;

        /**
         * Whether the user has set the rating previously or not. Basically this changes the stars from white (false) to gold (true) initially. They are always set to gold when the user adjusts
         * them.
         */
        hasUserSetRating: boolean;

        /**
         * Called when the user selects a rating. Selected rating is a number between 0 and 1.
         */
        onRate?: (selectedRating: number) => void;

        /**
         * Called when the user exists the dialog without selecting a rating.
         */
        onCancel?: () => void;

        /**
         * Shows the dialog.
         */
        show(): void;
    }

    /**
     * The credentials saved at the last login.
     */
    const sharedCredentials: ATVSavedCredentials | null;

    /**
     * Several listeners for dealing with FairPlay encrypted content.
     */
    const secureKeyDelivery: ATVSecureKeyDelivery | null;

    /**
     * Store data for this app that persists only in the current app session, so is cleared on exit.
     */
    const sessionStorage: ATVStorage;

    /**
     * Start a repeating task.
     * @param callback The function called when the task repeats.
     * @param ms How long you want between tasks.
     * @param args Arguments you wish to supply to the callback.
     */
    function setInterval<TArgs extends any[]>(callback: (...args: TArgs) => void, ms?: number, ...args: TArgs): string;

    /**
     * Set the screensaver collection that is shown in settings.
     * @param collection The collection to set.
     */
    function setScreensaverPhotosCollection(collection: ATVScreenSaverCollection): void;

    /**
     * Run a function after a specified amount of time.
     * @param callback The function called when the time is up.
     * @param ms How long you wish to delay.
     * @param args Arguments you wish to pass to the function.
     */
    function setTimeout<TArgs extends any[]>(callback: (...args: TArgs) => void, ms: number, ...args: TArgs): string;

    /**
     * Scrolls the user down to the bottom shelf on an item detail page. Will throw an exception if used elsewhere.
     */
    function showMoreInfo(): void;

    /**
     * An object that can retrieve localized information from the App Store about a specified list of products.
     *
     * See https://developer.apple.com/documentation/storekit/skproductsrequest for more information.
     */
    class SKProductsRequest {
        /**
         * Initializes the request with the set of product identifiers.
         * @param productIdentifiers The list of product identifiers for the products you wish to retrieve descriptions of.
         */
        constructor(productIdentifiers: string[]);

        /**
         * Accepts the App Store response that contains the app-requested product information.
         */
        onProductsRequestDidReceiveResponse?: (response: SKProductsResponse) => void;

        /**
         * Sends the request to the Apple App Store.
         */
        start(): void;

        /**
         * Cancels a previously started request.
         */
        cancel(): void;

        /**
         * Tells the delegate that the request failed to execute.
         */
        onRequestDidFailWithError?: (error: SKError) => void;

        /**
         * Tells the delegate that the request has completed.
         */
        onRequestDidFinish?: () => void;
    }

    /**
     * A queue of payment transactions to be processed by the App Store.
     *
     * See https://developer.apple.com/documentation/storekit/skpaymentqueue for more information.
     */
    namespace SKDefaultPaymentQueue {
        /**
         * Indicates whether the user is allowed to make payments.
         */
        const canMakePayments: boolean;

        /**
         * Adds a payment request to the queue.
         * @param payment A payment request.
         */
        function addPayment(payment: SKPayment): void;

        /**
         * Adds an observer to the payment queue.
         * @param observer The observer to add to the queue.
         */
        function addTransactionObserver(observer: SKPaymentTransactionObserver): void;

        /**
         * Removes an observer from the payment queue.
         * @param observer The observer to remove.
         */
        function removeTransactionObserver(observer: SKPaymentTransactionObserver): void;

        /**
         * Notifies the App Store that the app finished processing the transaction.
         * @param transaction The transaction to finish.
         */
        function finishTransaction(transaction: SKPaymentTransaction): void;

        /**
         * Asks the payment queue to restore previously completed purchases.
         */
        function restoreCompletedTransactions(): void;

        /**
         * Asks the payment queue to restore previously completed purchases, providing an opaque identifier for the user’s account.
         * @param username An opaque identifier for the user’s account on your system.
         */
        function restoreCompletedTransactionsWithApplicationUsername(username?: string | null): void;

        /**
         * Returns an array of pending transactions.
         */
        const transactions: SKPaymentTransaction[] | null;
    }

    /**
     * A copy of the constants for SKPaymentTransactionState, so they match the actual ATV JS values, but while still using the enum.
     */
    const SKPaymentTransactionStateDeferred = SKPaymentTransactionState.Deferred;
    const SKPaymentTransactionStateFailed = SKPaymentTransactionState.Failed;
    const SKPaymentTransactionStatePurchased = SKPaymentTransactionState.Purchased;
    const SKPaymentTransactionStatePurchasing = SKPaymentTransactionState.Purchasing;
    const SKPaymentTransactionStateRestored = SKPaymentTransactionState.Restored;

    /**
     * The constants for some SKError types. These don't appear to be used by anything (especially since they don't cover all of the possible subsets of SKError).
     */

    /**
     * Error code indicating that an unknown or unexpected error occurred.
     *
     * See https://developer.apple.com/documentation/storekit/skerror/code/unknown for more information.
     */
    const SKErrorUnknown = 0;

    /**
     * Error code indicating that the client is not allowed to perform the attempted action.
     *
     * See https://developer.apple.com/documentation/storekit/skerror/code/clientinvalid for more information.
     */
    const SKErrorClientInvalid = 1;

    /**
     * Error code indicating that the user canceled a payment request.
     *
     * See https://developer.apple.com/documentation/storekit/skerror/code/paymentcancelled for more information.
     */
    const SKErrorPaymentCancelled = 2;

    /**
     * Error code indicating that one of the payment parameters wasn’t recognized by the App Store.
     *
     * See https://developer.apple.com/documentation/storekit/skerror/code/paymentinvalid for more information.
     */
    const SKErrorPaymentInvalid = 3;

    /**
     * Error code indicating that the user is not allowed to authorize payments.
     *
     * See https://developer.apple.com/documentation/storekit/skerror/code/paymentnotallowed for more information.
     */
    const SKErrorPaymentNotAllowed = 4;

    /**
     * Error code indicating that the requested product is not available in the store.
     *
     * See https://developer.apple.com/documentation/storekit/skerror/code/paymentnotallowed for more information.
     */
    const SKErrorStoreProductNotAvailable = 5;

    /**
     * A request to refresh the receipt, which represents the user's transactions with your app.
     *
     * See https://developer.apple.com/documentation/storekit/skreceiptrefreshrequest for more information.
     */
    class SKReceiptRefreshRequest {
        /**
         * Sends the request to the Apple App Store.
         */
        start(): void;

        /**
         * Cancels a previously started request.
         */
        cancel(): void;

        /**
         * Tells the delegate that the request failed to execute.
         */
        onRequestDidFailWithError?: (error: SKError) => void;

        /**
         * Tells the delegate that the request has completed.
         */
        onRequestDidFinish?: () => void;
        /**
         * Initializes a receipt refresh request with optional properties.
         * @param receiptProperties The properties of the receipt.
         */
        constructor(receiptProperties: { [key: string]: any });
    }

    /**
     * Receipt properties constants
     */

    /**
     * A key whose value indicates whether the receipt is expired.
     *
     * See https://developer.apple.com/documentation/storekit/skreceiptpropertyisexpired?language=objc for more information.
     */
    const SKReceiptPropertyIsExpired = 'expired';

    /**
     * A key whose value indicates whether the receipt has been revoked.
     *
     * See https://developer.apple.com/documentation/storekit/skreceiptpropertyisrevoked?language=objc for more information.
     */
    const SKReceiptPropertyIsRevoked = 'revoked';

    /**
     * A key whose value indicates whether the receipt is a Volume Purchase Plan receipt.
     *
     * See https://developer.apple.com/documentation/storekit/skreceiptpropertyisvolumepurchase?language=objc for more information.
     */
    const SKReceiptPropertyIsVolumePurchase = 'vpp';

    /**
     * A slideshow view for photos and videos.
     */
    const slideShow: ATVJSSlideShow;

    /**
     * Shows a text input field.
     */
    class TextEntry {
        /**
         * The type of the field. Can either be an email address, or a password.
         */
        type: 'emailAddress' | 'password';

        /**
         * A title to display on the page.
         */
        title?: string;

        /**
         * Instructions to display on the page.
         */
        instructions?: string;

        /**
         * A label to display on the input.
         */
        label?: string;

        /**
         * A footnote to show at the bottom of the page.
         */
        footnote?: string;

        /**
         * The default value to set for the input.
         */
        defaultValue?: string;

        /**
         * An image to display on the page.
         */
        image?: string;

        /**
         * Whether the user's Apple ID email should be autofilled on the email address type.
         */
        defaultToAppleID?: boolean;

        /**
         * Called when the user submits the input.
         */
        onSubmit?: (value: string) => void;

        /**
         * Called when the user cancels the input.
         */
        onCancel?: () => void;

        /**
         * Shows the text entry.
         */
        show(): void;
    }

    /**
     * A view that shows a piece of text.
     */
    class TextView extends View {
        /**
         * The string to display, including formatting.
         */
        attributedString: AttributedString;
    }

    /**
     * Unloads the current page.
     */
    function unloadPage(): void;

    /**
     * Generates a UUID.
     */
    function uuid(): string;
}

// tslint:disable-next-line:strict-export-declare-modifiers
declare const document: atv.Document;
// tslint:disable-next-line:strict-export-declare-modifiers
declare const controller: ATVController;
// tslint:disable-next-line:strict-export-declare-modifiers
declare const console: Console;

/**
 * A controller on a scriptView page.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface ATVController {
    view: atv.View;
}

/**
 * A wrapper object that is used to explain the only recognised property of the configuration.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface ATVJSConfig {
    /**
     * Whether atv.onAppEntry loads the first page, or if the first page is loaded based on the root plist (and likely modified by atv.onGenerateRequest)
     */
    doesJavaScriptLoadRoot?: boolean;

    /**
     * Any other arbitary property is allowed here.
     */
    [x: string]: unknown;
}

// tslint:disable-next-line:strict-export-declare-modifiers
declare interface ATVFrame {
    /**
     * The x coordinate of this screen.
     */
    x: number;

    /**
     * The y coordinate of this screen.
     */
    y: number;

    /**
     * The width of this screen.
     */
    width: number;

    /**
     * The height of this screen.
     */
    height: number;
}

/**
 * The generic interface for media browser items. Use MediaBrowserPhoto or MediaBrowserVideo for the specific implementations.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface MediaBrowserItem {
    /**
     * What type of item is being displayed. Either photo or video. They're functionally identitical except the video option has a different name for the assets array, and shows a video play
     * button as an overlay.
     */
    readonly type: 'photo' | 'video';

    /**
     * The ID for this photo, which is passed back by any listeners.
     */
    id: string;

    /**
     * A caption for the photo that is displayed in the comments view.
     */
    caption?: string;

    /**
     * Any badges that need attached. This is limited to a comments badge only.
     */
    badges?: MediaBrowserBadge[];
}

/**
 * A photo to be displayed in the media browser.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface MediaBrowserPhoto extends MediaBrowserItem {
    /**
     * A list of assets for this photo (i.e. the images themselves). It's unclear why multiple of these are allowed, but it could be so that you can have multiple sizes and it picks the best one.
     */
    assets: MediaBrowserAsset[];
}

// tslint:disable-next-line:strict-export-declare-modifiers
declare interface MediaBrowserVideo extends MediaBrowserItem {
    /**
     * A list of assets for this video. This should be snapshots of part of the video (i.e. like a thumbnail).
     */
    previewImages: MediaBrowserAsset[];
}

/**
 * An asset to be displayed in the media browser. This is always an image, but can represent a photo or a thumbnail of a video.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface MediaBrowserAsset {
    /**
     * The name of the asset.
     */
    name?: string;

    /**
     * The width of the asset.
     */
    width?: number;

    /**
     * The height of the asset.
     */
    height?: number;

    /**
     * A URL containing the image file.
     */
    src: string;
}

/**
 * A badge to be added to the photo in the comments view.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface MediaBrowserBadge {
    /**
     * The type of the badge. This can only be a comments badge.
     */
    type: 'commentsBadge';

    /**
     * The style of the badge. Either read or unread comment. These look to produce the same output, so the functionality of them is unknown.
     */
    style?: 'readComment' | 'unreadComment';
}

/**
 * The metadata associated with an asset.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface MediaBrowserMetadata {
    /**
     * Whether the photo should be parked as liked or not.
     */
    liked?: boolean;

    /**
     * The description for the liked status. E.g. "You liked this".
     */
    likeStatus?: string;

    /**
     * A list of comments on the asset.
     */
    comments?: MediaBrowserComment[];
}

/**
 * A comment on an asset.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface MediaBrowserComment {
    /**
     * The main body text of the comment
     */
    text: string;

    /**
     * The footer of the comment (e.g. the author, or the date).
     */
    footer?: string;
}

/**
 * The colour class for specifying the colours of programmatic views.
 *
 * This appears to be loosely based on CGColor, but without the ability to use different colour spaces.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface ATVColor {
    /**
     * The brightness of the red component. On a scale of 0 (being no red at all) to 1 (to having 100% red brightness).
     */
    red: number;

    /**
     * The brightness of the green component. On a scale of 0 (being no green at all) to 1 (to having 100% green brightness).
     */
    green: number;

    /**
     * The brightness of the blue component. On a scale of 0 (being no blue at all) to 1 (to having 100% blue brightness).
     */
    blue: number;

    /**
     * The opacity of the object. On a scale of 0 (totally transparent) to 1 (totally opaque).
     */
    alpha?: number;
}

/**
 * An animation for programmatic views. This seems to be confined to CABasicAnimation from Core Animation, so expect the same behavior as that.
 *
 * It's pretty hard to test all of this stuff (as there isn't any validation), so I've mostly copied the same structure as CABasicAnimation. However, some properties may be unsupported, but they
 * will not cause an error, rather they will silently fail.
 *
 * I've also attributed situations where I've borrowed the documentation from Apple's website.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface ATVAnimation {
    /**
     * The type of the animation. It seems this can only be BasicAnimation which seems to basically be CABasicAnimation.
     */
    readonly type: 'BasicAnimation';

    /**
     * Tells the delegate the animation has started.
     *
     * See https://developer.apple.com/documentation/quartzcore/caanimationdelegate/2097265-animationdidstart for more information.
     */
    animationDidStart?: () => void;

    /**
     * Tells the delegate the animation has ended.
     *
     * See https://developer.apple.com/documentation/quartzcore/caanimationdelegate/2097259-animationdidstop for more information.
     */
    animationDidStop?: (finished: boolean) => void;

    /**
     * Determines if the value specified by the animation is added to the current render tree value to produce the new render tree value.
     *
     * See https://developer.apple.com/documentation/quartzcore/capropertyanimation/1412493-additive?language=objc for more information.
     */
    additive?: boolean;

    /**
     * Determines if the receiver plays in the reverse upon completion.
     *
     * See https://developer.apple.com/documentation/quartzcore/camediatiming/1427645-autoreverses?language=objc for more information.
     */
    autoreverses?: boolean;

    /**
     * Specifies the begin time of the receiver in relation to its parent object, if applicable.
     *
     * See https://developer.apple.com/documentation/quartzcore/camediatiming/1427654-begintime?language=objc for more information.
     */
    beginTime?: number;

    /**
     * Defines the value the receiver uses to perform relative interpolation.
     *
     * See https://developer.apple.com/documentation/quartzcore/cabasicanimation/1412445-byvalue?language=objc for more information.
     */
    byValue?: number | number[] | ATVColor;

    /**
     * Determines if the value of the property is the value at the end of the previous repeat cycle, plus the value of the current repeat cycle.
     *
     * See https://developer.apple.com/documentation/quartzcore/capropertyanimation/1412538-cumulative?language=objc for more information.
     */
    cumulative?: boolean;

    /**
     * Specifies the basic duration of the animation, in seconds.
     *
     * See https://developer.apple.com/documentation/quartzcore/camediatiming/1427652-duration?language=objc for more information.
     */
    duration?: number;

    /**
     * The duration for transitioning into the animation’s effect as it begins.
     *
     * See https://developer.apple.com/documentation/quartzcore/caanimation/1523370-fadeinduration?language=objc for more information.
     */
    fadeInDuration?: number;

    /**
     * The duration for transitioning out of the animation’s effect as it ends.
     *
     * See https://developer.apple.com/documentation/quartzcore/caanimation/1522959-fadeoutduration?language=objc for more information.
     */
    fadeOutDuration?: number;

    /**
     * Determines if the receiver’s presentation is frozen or removed once its active duration has completed.
     *
     * See https://developer.apple.com/documentation/quartzcore/camediatiming/fill_modes for more information.
     */
    fillMode?: 'removed' | 'forwards' | 'backwards' | 'both';

    /**
     * Defines the value the receiver uses to start interpolation.
     *
     * See https://developer.apple.com/documentation/quartzcore/cabasicanimation/1412519-fromvalue?language=objc for more information.
     */
    fromValue?: number | number[] | ATVColor;

    /**
     * Specifies the key path the receiver animates.
     *
     * See https://developer.apple.com/documentation/quartzcore/capropertyanimation/1412496-keypath?language=objc for more information.
     */
    keyPath?: string;

    /**
     * Determines if the animation is removed from the target layer’s animations upon completion.
     *
     * See https://developer.apple.com/documentation/quartzcore/caanimation/1412458-removedoncompletion?language=objc for more information.
     */
    removedOnCompletion?: boolean;

    /**
     * Determines the number of times the animation will repeat.
     *
     * See https://developer.apple.com/documentation/quartzcore/camediatiming/1427666-repeatcount?language=objc for more information.
     */
    repeatCount?: number;

    /**
     * Determines how many seconds the animation will repeat for.
     *
     * See https://developer.apple.com/documentation/quartzcore/camediatiming/1427643-repeatduration?language=objc for more information.
     */
    repeatDuration?: number;

    /**
     * Specifies how time is mapped to receiver’s time space from the parent time space.
     *
     * See https://developer.apple.com/documentation/quartzcore/camediatiming/1427647-speed?language=objc for more information.
     */
    speed?: number;

    /**
     * Specifies an additional time offset in active local time.
     *
     * See https://developer.apple.com/documentation/quartzcore/camediatiming/1427650-timeoffset?language=objc for more information.
     */
    timeOffset?: number;

    /**
     * Defines the value the receiver uses to end interpolation.
     *
     * See https://developer.apple.com/documentation/quartzcore/cabasicanimation/1412523-tovalue?language=objc for more information.
     */
    toValue?: number | number[] | ATVColor;
}

/**
 * The type used to define the local and session storage objects.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface ATVStorage {
    /**
     * Deletes all items from the storage object.
     */
    clear(): void;

    /**
     * Get a value from the storage.
     * @param key The key for the value you want to find.
     */
    getItem(key: string): any;

    /**
     * Set a value for a particular key.
     * @param key The key you want this value to be associated with.
     * @param value The value you want to store. This cannot be null or undefined.
     */
    setItem(key: string, value: any): void;

    /**
     * Remove an item from the storage.
     * @param key The key of the item you want to remove.
     */
    removeItem(key: string): void;

    /**
     * Any other arbitary property is allowed here.
     */
    [x: string]: unknown;
}

/**
 * The query supplied when querying screensaver images.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface ATVScreenSaverQuery {
    /**
     * The filter supplied. There are always two of these. See the ATVScreenSaverFilter type for more information.
     */
    filters: ATVScreenSaverFilter[];

    /**
     * Whether to shuffle the images or not. Seems to always be true.
     */
    shuffle: boolean;

    /**
     * How many images should be supplied.
     */
    length: number;
}

/**
 * The filters supplied for the screensaver.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface ATVScreenSaverFilter {
    /**
     * The value to match.
     */
    value: string;

    /**
     * The operation to check the two strings. Seems to always be '=='.
     */
    operation: string;

    /**
     * The property to check. Is is either ID, with value being the ID of the collection you supplied, or type, with the value always being 'photo'.
     */
    property: string;
}

/**
 * A screensaver photo.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface ATVScreenSaverPhoto {
    /**
     * The type of this screensaver entry. This is always photo.
     */
    readonly type: 'photo';

    /**
     * The ID of this photo.
     */
    id: string;

    /**
     * A list of the assets that contain the actual screensaver photo.
     */
    assets: ATVScreenSaverPhotoAsset[];
}

/**
 * An individual screensaver asset.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface ATVScreenSaverPhotoAsset {
    /**
     * The width of the photo.
     */
    width?: number;

    /**
     * The height of the photo.
     */
    height?: number;

    /**
     * The URL of the image.
     */
    src: string;
}

/**
 * A callback for when the app is ready to return the results of a screensaver query.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface ATVScreenSaverCallback {
    /**
     * The photos were successfully queried. Return them to the ATV.
     * @param photos The photos that were queried.
     */
    success(photos: ATVScreenSaverPhoto[]): void;

    /**
     * The photos were not successfully queried. Return an error. The screensaver will just show a default screensaver instead.
     * @param error An error to display in the syslog.
     */
    failure(error: any): void;
}

/**
 * A object describing the available screensaver collection to the Apple TV.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface ATVScreenSaverCollection {
    /**
     * The ID of the screensaver collection. This is passed back on the query.
     */
    id: string;

    /**
     * The name of the collection, as shown to the user.
     */
    name: string;

    /**
     * The type of the collection. This must always be 'collection'.
     */
    type: 'collection';
}

/**
 * The callback used when the app has finished a login request.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface ATVAuthenticationCallback {
    /**
     * The authentication was successful.
     */
    success(): void;

    /**
     * If the login request failed, return an error.
     * @param error The error that is displayed to the user.
     */
    failure(error: string): void;
}

/**
 * The options supplied with onOpenURL. We only know about one parameter, but there is definitely more.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface ATVDeepLinkOptions {
    /**
     * The URL to show the page for.
     */
    openURL: string;
}

// TODO: seperate the one for generate request and the actual one
/**
 * Extend the normal XMLHttpRequest, since you can access the URL directly.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare class XMLHttpRequest {
    /**
     * Aborts the request if it has already been sent.
     */
    abort(): void;

    /**
     * Get all of the headers in the response, in the standard raw header format.
     */
    getAllResponseHeaders(): string | null;

    /**
     * Get a specific header from the response.
     * @param headerName The name of the header to retrieve.
     */
    getResponseHeader(headerName: string): string | null;

    /**
     * Initialises the request.
     * @param method The method to use to retrieve the resource.
     * @param url The URL to hit.
     * @param async Whether this request should be made asynchronously or not.
     */
    open(method: string, url: string, async: boolean): void;

    /**
     * Get the current state of the request.
     */
    readonly readyState: XMLHttpRequestState;

    /**
     * Get the response body as base64.
     */
    responseDataAsBase64: string;

    /**
     * Get the response body as a string;
     */
    responseText: string;

    /**
     * Get the response body as a pre-parsed XML document. This will return an exception if invalid, or the request is not done.
     */
    responseXML?: atv.Document;

    /**
     * Execute the request.
     * @param body A body to post to the server.
     */
    send(body?: any): void;

    /**
     * Set a header on the request. This must be done in the OPEN state.
     * @param key The key of the header to set.
     * @param value The value of the header.
     */
    setRequestHeader(key: string, value: string): void;

    /**
     * The HTTP status code of the request.
     */
    status: number;

    /**
     * The corresponding description for the status code.
     */
    statusText: string;

    /**
     * Called whenever the ready state changes (e.g. when the request is complete).
     */
    onreadystatechange?: () => void;
}

/**
 * The request recieved in onGenerateRequest.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface ATVHttpRequest {
    /**
     * The URL of the request.
     */
    url: string;

    /**
     * Set a request header.
     * @param key The key of the header to set.
     * @param value The value of the header.
     */
    setRequestHeader(key: string, value: string): void;
}

/**
 * The possible values of the XHR ready state.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare enum XMLHttpRequestState {
    /**
     * The client has been created, but not opened.
     */
    UNSENT,

    /**
     * open() has been called.
     */
    OPENED,

    /**
     * The initial part of the request is done, so headers are available.
     */
    HEADERS_RECEIVED,

    /**
     * The request is loading and downloading the response.
     */
    LOADING,

    /**
     * The response is downloaded.
     */
    DONE,
}

/**
 * The callback used when the player asks for more assets.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface ATVLoadMoreAssetsCallback {
    /**
     * The new asset was successfully retrieved.
     * @param element The element containing the new asset. Make this null if the request was successful but there's no new assets.
     */
    success(element: atv.Element | null): void;

    /**
     * The new asset was not able to be retrieved.
     * @param error The error message.
     */
    failure(error?: string): void;
}

/**
 * A collection of logs provided during QoS callbacks.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface ATVQualityOfServiceReport {
    /**
     * The log showing what assets were accessed and when
     */
    accessLog?: string;

    /**
     * The log showing any playback errors.
     */
    errorLog?: string;
}

/**
 * Information about the subtitles returned by the callback.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface ATVSubtitle {
    /**
     * The language code for this subtitle, in the BCP 47 format. For example, 'en' for English.
     */
    bcp47: string;

    /**
     * Unclear, but likely whether the subtitles are considered closed captions or not.
     */
    cc: boolean;

    /**
     * Unclear, but likely whether these subtitles are forced or not.
     */
    forced: boolean;

    /**
     * The name of the subtitle (e.g. English).
     */
    name: string;

    /**
     * Whether the subtitles include non-dialogue audio (e.g. sound effects).
     */
    sdh: boolean;

    /**
     * Whether these subtitles are considered subtitles (vs captions).
     */
    subtitle: boolean;
}

/**
 * Timed metadata object. This basically seems to be the AVMetadataItem from AVFoundation.
 *
 * This definitions leaves out some properties and may also have inaccurate types as it is not trivial to test.
 *
 * See https://developer.apple.com/documentation/avfoundation/avmetadataitem for more information.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface AVMetadataItem {
    value: any;
    extraAttributes: any;
    stringValue?: string;
    numberValue?: number;
    dateValue?: Date;
    dataValue?: string;
    key?: string;
    time?: number;
    startDate?: Date;
    duration?: number;
}

/**
 * Information about the current item in the player. These seem to be entirely designed for, and used by Apple TV+, so have little relevance to other applications.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface ATVPlayerItem {
    /**
     * How much of the asset has been played.
     */
    elapsedTime: number;

    /**
     * Data for metrics.
     */
    metricsData?: ATVPlayerMetricsData;

    /**
     * The duration of the item. Returns NaN if it is a live asset.
     */
    duration: number;

    /**
     * A list of advisory information about the item. This is basically detailed information about why the rating was accorded (e.g. specifying if the show has violance, sex scenes, bad language,
     * etc.).
     *
     * The formats for these are dependant on the country, so may vary. This is written from a New Zealand perspective and their rating systems.
     *
     * Again, this is very dependant on TV+ specific stuff, so isn't likely to be useful elsewhere.
     */
    advisoryInfo?: ATVPlayerAdvisoryInfo[];

    /**
     * Information about the content rating of the item.
     *
     * The formats for this are dependant on the country, so may vary. This is written from a New Zealand perspective and their rating systems.
     *
     * Again, this is very dependant on TV+ specific stuff, so isn't likely to be useful elsewhere.
     */
    ratingsInfo: ATVPlayerRatingInfo;
}

/**
 * Data for metrics reports most likely.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface ATVPlayerMetricsData {
    /**
     * The length of the item. This is likely obtained from the session data ID com.apple.hls.feature.duration.
     */
    featureDuration?: number;

    /**
     * The start time of the item. It's unclear where this is derived from.
     */
    featureStartTime?: number;

    /**
     * The time when the up next item is displayed. This is derived from upNextPresentationTime.
     */
    upNextStartTime?: number;

    /**
     * The time when this item is considiered watched. This seems to be the same as upNextStartTime.
     */
    watchedTime?: number;

    /**
     * Unknown, but appears in the JS for TV+.
     */
    rollInfo?: string;

    /**
     * Unknown, but appears in the JS for TV+.
     */
    skipInfo?: string;
}

/**
 * Advisory information about the item. This is basically detailed information about why the rating was accorded (e.g. specifying if the show has violance, sex scenes, bad language, etc.).
 *
 * The formats for these are dependant on the country, so may vary. This is written from a New Zealand perspective and their rating systems.
 *
 * Again, this class is very dependant on TV+ specific stuff, so isn't likely to be useful elsewhere.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface ATVPlayerAdvisoryInfo {
    /**
     * A human readable description of the advisory (e.g. Use of bad language). This is obtained from com.apple.hls.advisory-info.x.value in the session data of the HLS file, where 'x' is the
     * index of the advisory.
     */
    ratingDescription: string;

    /**
     * A code that belongs to that specific advisory (e.g. L for bad language). This is obtained from com.apple.hls.advisory-info.x.key in the session data of the HLS file, where 'x' is the index
     * of the advisory.
     */
    ratingName: string;
}

/**
 * Information about the content rating of the item.
 *
 * The formats for these are dependant on the country, so may vary. This is written from a New Zealand perspective and their rating systems.
 *
 * Again, this class is very dependant on TV+ specific stuff, so isn't likely to be useful elsewhere.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface ATVPlayerRatingInfo {
    /**
     * The URL for retrieving an image for the particular rating. This is generally localised to the particular location (e.g. NZ ones will be coloured circles, but the US ones will be the
     * standard TV/MPAA icons).
     *
     * This is obtained from the com.apple.hls.rating-image in the session data of the HLS file.
     */
    ratingImageURL?: string;

    /**
     * The tag for this particular rating. Basically just seems to be an internal code (e.g. NZ_TV_M for the NZ TV rating of M).
     *
     * This is obtained from the com.apple.hls.rating-tag in the session data of the HLS file.
     */
    ratingTag?: string;

    /**
     * Whether a rating overlay should be shown.
     *
     * This is likely obtained from the com.apple.hls.display-ratings-overlay in the session data of the HLS file.
     */
    shouldShowRatingOverlay?: boolean;
}

/**
 * The credentials saved by the app.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface ATVSavedCredentials {
    /**
     * The username saved by the last successful login.
     */
    username: string;

    /**
     * The password from that login. May not be present.
     */
    password?: string;
}

/**
 * The callbacks for dealing with FairPlay DRM.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface ATVSecureKeyDelivery {
    /**
     * Called when the player wants to cancel all FairPlay related requests.
     */
    cancelAllRequests?: () => void;

    /**
     * Fetch the asset ID. Usually, the asset ID is parsed from the URI parameter.
     *
     * The 'uri' parameter is a string containing the secure key delivery URI. This is the URI that is contained within the m3u8 in the EXT-X-KEY tag. The URI will begin with "skd://". Usually
     * the asset ID is parsed directly from this (e.g. by removing the skd:// bit).
     * The callback parameter allows you to return the asset ID and indicate whether it is Base64 encoded or not, or to return an error.
     */
    fetchAssetID?: (uri: string, callback: ATVSecureKeyFetchAssetCallback) => void;

    /**
     * Fetch the FairPlay certificate. The certificate must be in the DER format. These are generally shared across an app, so can be cached if desired.
     *
     * The 'uri' parameter is a string containing the secure key delivery URI. This is the URI that is contained within the m3u8 in the EXT-X-KEY tag. The URI will begin with "skd://".
     * The callback parameter allows you to return the certificate. This must be base64 encoded (e.g. by using XMLHttpRequest.responseDataAsBase64).
     */
    fetchCertificate?: (uri: string, callback: ATVSecureKeyGenericCallback) => void;

    /**
     * Fetch the FairPlay keys for this particular asset. These are usually unique to each media item.
     *
     * The 'uri' parameter is a string containing the secure key delivery URI. This is the URI that is contained within the m3u8 in the EXT-X-KEY tag. The URI will begin with "skd://.
     * The 'requestData' parameter is a base64 encoded string of the request data that FairPlay needs to send to the server to decrypt the content. This (generally) can't be decoded before sending,
     * as the XMLHttpRequest will send an empty body. See https://github.com/SheaSmith/atv.js/issues/2 for more information.
     *
     * The callback parameter allows you to return the keys. This must be base64 encoded (e.g. by using XMLHttpRequest.responseDataAsBase64).
     */
    fetchKey?: (uri: string, requestData: string, callback: ATVSecureKeyGenericCallback) => void;
}

/**
 * The callback for the fetch assets request.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface ATVSecureKeyFetchAssetCallback {
    /**
     * The asset ID was successfully extracted, so return it.
     * @param assetID The asset ID.
     * @param needsBase64Decoded If the asset ID needs to be Base64 decoded before it can be used, then this must be true.
     */
    success(assetID: string, needsBase64Decoded: boolean): void;

    /**
     * The asset was was not able to be retrieved, so return an error.
     * @param error The error message to print to the log.
     */
    failure(error: string): void;
}

/**
 * The callback for the get keys and certificate requests.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface ATVSecureKeyGenericCallback {
    /**
     * The asset ID was successfully retrieved, so return it.
     * @param assetID The certificate or the key, in Base64 format.
     */
    success(dataBase64: string): void;

    /**
     * The item was was not able to be retrieved, so return an error.
     * @param error The error message to print to the log.
     */
    failure(error: string): void;
}

/**
 * Information about a product previously registered in App Store Connect.
 *
 * See https://developer.apple.com/documentation/storekit/skproduct for more information. Please note, some fields do not apply to the Apple TV and as such, have been removed.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface SKProduct {
    /**
     * The price of the product, including currency symbols.
     */
    localizedPrice: string;

    /**
     * A description of the product.
     */
    localizedDescription: string;

    /**
     * The name of the product.
     */
    localizedTitle: string;

    /**
     * The cost of the product in the local currency.
     */
    price: number;

    /**
     * The string that identifies the product to the Apple App Store.
     */
    productIdentifier: string;

    /**
     * The locale used to format the price of the product.
     */
    priceLocale: TVLJSNSLocale;
}

/**
 * Information about the users locale.
 *
 * See https://developer.apple.com/documentation/foundation/nslocale for more information.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface TVLJSNSLocale {
    /**
     * The identifier for the locale.
     */
    localeIdentifier: string;
}

/**
 * An App Store response to a request for information about a list of products.
 *
 * See https://developer.apple.com/documentation/storekit/skproductsresponse for more information.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface SKProductsResponse {
    /**
     * A list of products, one product for each valid product identifier provided in the original request.
     */
    products: SKProduct[];

    /**
     * An array of product identifier strings that the App Store doesn’t recognize.
     */
    invalidProductIdentifiers: string[];
}

/**
 * A request to the App Store to process payment for additional functionality offered by your app.
 *
 * See https://developer.apple.com/documentation/storekit/skpayment for more information.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface SKPayment {
    /**
     * The product to purchase.
     */
    product: SKProduct;

    /**
     * The number of items the user wants to purchase.
     */
    quantity: number;

    /**
     * Any other parameters you wish to send.
     */
    requestParameters?: object;
}

/**
 * A set of methods that process transactions, unlock purchased functionality, and continue promoted in-app purchases.
 *
 * See https://developer.apple.com/documentation/storekit/skpaymenttransactionobserver for more information.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface SKPaymentTransactionObserver {
    /**
     * Tells an observer that one or more transactions have been updated.
     */
    updatedTransactions: (transactions: SKPaymentTransaction[]) => void;

    /**
     * Tells an observer that one or more transactions have been removed from the queue.
     */
    removedTransactions?: (transactions: SKPaymentTransaction[]) => void;

    /**
     * Tells an observer that one or more transactions have been removed from the queue.
     */
    restoreCompletedTransactionsFailedWithError?: (error: SKError) => void;

    /**
     * Tells the observer that the payment queue has finished sending restored transactions.
     */
    restoreCompletedTransactionsFinished?: () => void;
}

/**
 * An object in the payment queue.
 *
 * See https://developer.apple.com/documentation/storekit/skpaymenttransaction for more information.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface SKPaymentTransaction {
    /**
     * The payment for the transaction.
     */
    payment: SKPayment;

    /**
     * A string that uniquely identifies a successful payment transaction.
     */
    transactionIdentifier?: string;

    /**
     * The date the transaction was added to the App Store’s payment queue.
     */
    transactionDate?: Date;

    /**
     * The transaction that was restored by the App Store.
     */
    originalTransaction?: SKPaymentTransaction;

    /**
     * The current state of the transaction.
     */
    transactionState: SKPaymentTransactionState;

    /**
     * A signed receipt that records all information about a successful payment transaction.
     */
    transactionReceipt?: object;
}

/**
 * Information about the error.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface SKError {
    /**
     * A unique error code.
     */
    code: string;

    /**
     * The error message.
     */
    message: string;

    /**
     * A description about the actual error.
     */
    error: string;

    /**
     * An association transaction (if applicable).
     */
    transaction?: SKPaymentTransaction;
}

/**
 * A slideshow for photos and video.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface ATVJSSlideShow {
    /**
     * Start the slideshow.
     * @param initialSelection The initial index to use.
     * @param photos The photos to display.
     */
    run(initialSelection: number, photos: Array<MediaBrowserPhoto | MediaBrowserVideo>): void;

    /**
     * Show the settings for the slideshow.
     * @param photos The photos that would be displayed.
     */
    showSettings(photos: Array<MediaBrowserPhoto | MediaBrowserVideo>): void;

    /**
     * Called when the user exists the slideshow. Last photo ID was the ID of the last photo displayed.
     */
    onExit?: (lastPhotoId?: string) => void;
}

/**
 * A string with formatting and styling.
 *
 * See https://developer.apple.com/documentation/foundation/attributedstring for more information.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface AttributedString {
    /**
     * The string to display.
     */
    string: string;

    /**
     * The formatting attributes.
     */
    attributes: AttributeContainer;
}
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface AttributeContainer {
    /**
     * The colour of the text.
     */
    color: ATVColor;

    /**
     * The size of the text.
     */
    pointSize?: number;

    /**
     * The way the text should break.
     */
    breakMode?: 'clip' | 'word-wrap' | 'truncate-head' | 'truncate-tail' | 'truncate-middle';

    /**
     * The weight of the text.
     */
    weight?: 'normal' | 'light' | 'heavy';

    /**
     * The alignment of the text.
     */
    alignment?: 'left' | 'right' | 'center' | 'justify';
}

/**
 * Provides access to the browser's debugging console.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/API/console
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface Console {
    /**
     * `console.assert()` writes a message if `value` is [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) or omitted. It only
     * writes a message and does not otherwise affect execution. The output always
     * starts with `"Assertion failed"`. If provided, `message` is formatted using `util.format()`.
     *
     * If `value` is [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy), nothing happens.
     *
     * ```js
     * console.assert(true, 'does nothing');
     *
     * console.assert(false, 'Whoops %s work', 'didn\'t');
     * // Assertion failed: Whoops didn't work
     *
     * console.assert();
     * // Assertion failed
     * ```
     * @since v0.1.101
     * @param value The value tested for being truthy.
     * @param message All arguments besides `value` are used as error message.
     */
    assert(value: any, message?: string, ...optionalParams: any[]): void;

    /**
     * When `stdout` is a TTY, calling `console.clear()` will attempt to clear the
     * TTY. When `stdout` is not a TTY, this method does nothing.
     *
     * The specific operation of `console.clear()` can vary across operating systems
     * and terminal types. For most Linux operating systems, `console.clear()`operates similarly to the `clear` shell command. On Windows, `console.clear()`will clear only the output in the
     * current terminal viewport for the Node.js
     * binary.
     * @since v8.3.0
     */
    clear(): void;

    /**
     * Maintains an internal counter specific to `label` and outputs to `stdout` the
     * number of times `console.count()` has been called with the given `label`.
     *
     * ```js
     * > console.count()
     * default: 1
     * undefined
     * > console.count('default')
     * default: 2
     * undefined
     * > console.count('abc')
     * abc: 1
     * undefined
     * > console.count('xyz')
     * xyz: 1
     * undefined
     * > console.count('abc')
     * abc: 2
     * undefined
     * > console.count()
     * default: 3
     * undefined
     * >
     * ```
     * @since v8.3.0
     * @param label The display label for the counter.
     */
    count(label?: string): void;

    /**
     * The `console.debug()` function is an alias for {@link log}.
     * @since v8.0.0
     */
    debug(message?: any, ...optionalParams: any[]): void;
    /**
     * Prints to `stderr` the string `'Trace: '`, followed by the `util.format()` formatted message and stack trace to the current position in the code.
     *
     * ```js
     * console.trace('Show me');
     * // Prints: (stack trace will vary based on where trace is called)
     * //  Trace: Show me
     * //    at repl:2:9
     * //    at REPLServer.defaultEval (repl.js:248:27)
     * //    at bound (domain.js:287:14)
     * //    at REPLServer.runBound [as eval] (domain.js:300:12)
     * //    at REPLServer.<anonymous> (repl.js:412:12)
     * //    at emitOne (events.js:82:20)
     * //    at REPLServer.emit (events.js:169:7)
     * //    at REPLServer.Interface._onLine (readline.js:210:10)
     * //    at REPLServer.Interface._line (readline.js:549:8)
     * //    at REPLServer.Interface._ttyWrite (readline.js:826:14)
     * ```
     * @since v0.1.104
     */
    trace(message?: any, ...optionalParams: any[]): void;
    /**
     * The `console.warn()` function is an alias for {@link error}.
     * @since v0.1.100
     */
    warn(message?: any, ...optionalParams: any[]): void;
    /**
     * Uses `util.inspect()` on `obj` and prints the resulting string to `stdout`.
     * This function bypasses any custom `inspect()` function defined on `obj`.
     * @since v0.1.101
     */
    dir(obj: any): void;

    /**
     * This method calls `console.log()` passing it the arguments received.
     * This method does not produce any XML formatting.
     * @since v8.0.0
     */
    dirxml(...data: any[]): void;

    /**
     * Prints to `stderr` with newline. Multiple arguments can be passed, with the
     * first used as the primary message and all additional used as substitution
     * values similar to [`printf(3)`](http://man7.org/linux/man-pages/man3/printf.3.html) (the arguments are all passed to `util.format()`).
     *
     * ```js
     * const code = 5;
     * console.error('error #%d', code);
     * // Prints: error #5, to stderr
     * console.error('error', code);
     * // Prints: error 5, to stderr
     * ```
     *
     * If formatting elements (e.g. `%d`) are not found in the first string then `util.inspect()` is called on each argument and the resulting string
     * values are concatenated. See `util.format()` for more information.
     * @since v0.1.100
     */
    error(message?: any, ...optionalParams: any[]): void;

    /**
     * Increases indentation of subsequent lines by spaces for `groupIndentation`length.
     *
     * If one or more `label`s are provided, those are printed first without the
     * additional indentation.
     * @since v8.5.0
     */
    group(...label: any[]): void;

    /**
     * An alias for {@link group}.
     * @since v8.5.0
     */
    groupCollapsed(...label: any[]): void;

    /**
     * Decreases indentation of subsequent lines by spaces for `groupIndentation`length.
     * @since v8.5.0
     */
    groupEnd(): void;

    /**
     * The `console.info()` function is an alias for {@link log}.
     * @since v0.1.100
     */
    info(message?: any, ...optionalParams: any[]): void;

    /**
     * Prints to `stdout` with newline. Multiple arguments can be passed, with the
     * first used as the primary message and all additional used as substitution
     * values similar to [`printf(3)`](http://man7.org/linux/man-pages/man3/printf.3.html) (the arguments are all passed to `util.format()`).
     *
     * ```js
     * const count = 5;
     * console.log('count: %d', count);
     * // Prints: count: 5, to stdout
     * console.log('count:', count);
     * // Prints: count: 5, to stdout
     * ```
     *
     * See `util.format()` for more information.
     * @since v0.1.100
     */
    log(message?: any, ...optionalParams: any[]): void;

    /**
     * Try to construct a table with the columns of the properties of `tabularData`(or use `properties`) and rows of `tabularData` and log it. Falls back to just
     * logging the argument if it can’t be parsed as tabular.
     *
     * ```js
     * // These can't be parsed as tabular data
     * console.table(Symbol());
     * // Symbol()
     *
     * console.table(undefined);
     * // undefined
     *
     * console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);
     * // ┌─────────┬─────┬─────┐
     * // │ (index) │  a  │  b  │
     * // ├─────────┼─────┼─────┤
     * // │    0    │  1  │ 'Y' │
     * // │    1    │ 'Z' │  2  │
     * // └─────────┴─────┴─────┘
     *
     * console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }], ['a']);
     * // ┌─────────┬─────┐
     * // │ (index) │  a  │
     * // ├─────────┼─────┤
     * // │    0    │  1  │
     * // │    1    │ 'Z' │
     * // └─────────┴─────┘
     * ```
     * @since v10.0.0
     * @param properties Alternate properties for constructing the table.
     */
    table(tabularData: any, properties?: ReadonlyArray<string>): void;

    /**
     * Starts a timer that can be used to compute the duration of an operation. Timers
     * are identified by a unique `label`. Use the same `label` when calling {@link timeEnd} to stop the timer and output the elapsed time in
     * suitable time units to `stdout`. For example, if the elapsed
     * time is 3869ms, `console.timeEnd()` displays "3.869s".
     * @since v0.1.104
     */
    time(label?: string): void;

    /**
     * Stops a timer that was previously started by calling {@link time} and
     * prints the result to `stdout`:
     *
     * ```js
     * console.time('100-elements');
     * for (let i = 0; i < 100; i++) {}
     * console.timeEnd('100-elements');
     * // prints 100-elements: 225.438ms
     * ```
     * @since v0.1.104
     */
    timeEnd(label?: string): void;
}

/**
 * Functions to do with the currently playing item.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface ATVNowPlaying {
    /**
     * Get the element containing the currently playing asset.
     * @param callback The callback containing the element as an argument.
     */
    currentAsset(callback: (element: atv.Element) => void): void;

    /**
     * Return to the player view for the currently played item if it has been closed.
     */
    showNowPlaying(): void;
}

/**
 * The event type used for onNavigate and onRefresh.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface ATVNavigateEvent {
    /**
     * The ID of the navigation item to navigate to.
     */
    navigationItemId: string;

    /**
     * The loading of the page to navigate to was successful, so load it.
     * @param document The document to load.
     */
    success(document: atv.Document): void;

    /**
     * Loading the page failed, so show an error message to the user.
     * @param errorMessage The error message to show to the user.
     */
    failure(errorMessage: string): void;
}

/**
 * The event type used for onVolatileReload.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare interface ATVVolatileReloadEvent {
    /**
     * Cancel the reload. Otherwise a blank screen with be displayed until the page is loaded.
     */
    cancel(): void;
}
