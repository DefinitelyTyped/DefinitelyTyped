declare namespace OO {
    /**
     * Namespace for all classes, static methods and static properties.
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui
     */
    namespace ui {
        let theme: Theme;

        enum Keys {
            UNDEFINED = 0,
            BACKSPACE = 8,
            DELETE = 46,
            LEFT = 37,
            RIGHT = 39,
            UP = 38,
            DOWN = 40,
            ENTER = 13,
            END = 35,
            HOME = 36,
            TAB = 9,
            PAGEUP = 33,
            PAGEDOWN = 34,
            ESCAPE = 27,
            SHIFT = 16,
            SPACE = 32,
        }

        /**
         * Constants for {@link MouseEvent.which}
         */
        enum MouseButtons {
            LEFT = 1,
            MIDDLE = 2,
            RIGHT = 3,
        }

        /**
         * Generate a unique ID for element
         *
         * @return ID
         */
        function generateElementId(): string;

        /**
         * Check if an element is focusable.
         * Inspired by :focusable in jQueryUI v1.11.4 - 2015-04-14
         *
         * @param $element Element to test
         * @return Element is focusable
         */
        function isFocusableElement($element: JQuery): boolean;

        /**
         * Find a focusable child.
         *
         * @param $container Container to search in
         * @param backwards Search backwards
         * @return Focusable child, or an empty jQuery object if none found
         */
        function findFocusable($container: JQuery, backwards?: boolean): JQuery;

        /**
         * Get the user's language and any fallback languages.
         *
         * These language codes are used to localize user interface elements in the user's language.
         *
         * In environments that provide a localization system, this function should be overridden to
         * return the user's language(s). The default implementation returns English (en) only.
         *
         * @return Language codes, in descending order of priority
         */
        function getUserLanguages(): string[];

        /**
         * Get a value in an object keyed by language code.
         *
         * @param obj Object keyed by language code
         * @param lang Language code, if omitted or null defaults to any user language
         * @param fallback Fallback code, used if no matching language can be found
         * @return Local value
         */
        function getLocalValue<T extends Record<string, any>, K1 extends string | null, K2 extends string>(
            obj: T,
            lang?: K1,
            fallback?: K2,
        ): K1 extends keyof T ? T[K1] : K2 extends keyof T ? T[K2] : T[keyof T] | undefined;

        /**
         * Check if a node is contained within another node.
         *
         * Similar to {@link JQueryStatic.contains $.contains} except a list of containers can be
         * supplied and a boolean argument allows you to include the container in the match list
         *
         * @param containers Container node(s) to search in
         * @param contained Node to find
         * @param matchContainers Include the container(s) in the list of nodes to match,
         *  otherwise only match descendants
         * @return The node is in the list of target nodes
         */
        function contains(
            containers: HTMLElement | HTMLElement[],
            contained: HTMLElement,
            matchContainers?: boolean,
        ): boolean;

        /**
         * Return a function, that, as long as it continues to be invoked, will not
         * be triggered. The function will be called after it stops being called for
         * N milliseconds. If `immediate` is passed, trigger the function on the
         * leading edge, instead of the trailing.
         *
         * Ported from: http://underscorejs.org/underscore.js
         *
         * @param func Function to debounce
         * @param wait Wait period in milliseconds
         * @param immediate Trigger on leading edge
         * @return Debounced function
         */
        function debounce<T extends (...args: any[]) => any>(func: T, wait?: number, immediate?: boolean): T;

        /**
         * Puts a console warning with provided message.
         *
         * @param message Message
         */
        function warnDeprecation(message: string): void;

        /**
         * Returns a function, that, when invoked, will only be triggered at most once
         * during a given window of time. If called again during that window, it will
         * wait until the window ends and then trigger itself again.
         *
         * As it's not knowable to the caller whether the function will actually run
         * when the wrapper is called, return values from the function are entirely
         * discarded.
         *
         * @param func Function to throttle
         * @param wait Throttle window length, in milliseconds
         * @return Throttled function
         */
        function throttle<T extends (...args: any[]) => any>(func: T, wait: number): T;

        /**
         * Reconstitute a JavaScript object corresponding to a widget created by
         * the PHP implementation.
         *
         * This is an alias for {@link OO.ui.Element.static.infuse()}.
         *
         * @param node A single node for the widget to infuse.
         * @param config Configuration options
         * @return
         *   The `OO.ui.Element` corresponding to this (infusible) document node.
         */
        function infuse(node: HTMLElement | JQuery, config?: object): Element;

        /**
         * @deprecated
         *
         * Reconstitute a JavaScript object corresponding to a widget created by
         * the PHP implementation.
         *
         * This is an alias for {@link OO.ui.Element.static.infuse()}.
         *
         * @param node A selector (deprecated).
         * @param config Configuration options
         * @return
         *   The `OO.ui.Element` corresponding to this (infusible) document node.
         */
        // To mark this as deprecated
        // tslint:disable-next-line:unified-signatures
        function infuse(node: string, config?: object): Element;

        /**
         * Get a localized message.
         *
         * After the message key, message parameters may optionally be passed. In the default
         * implementation, any occurrences of $1 are replaced with the first parameter, $2 with the
         * second parameter, etc.
         * Alternative implementations of OO.ui.msg may use any substitution system they like, as long
         * as they support unnamed, ordered message parameters.
         *
         * In environments that provide a localization system, this function should be overridden to
         * return the message translated in the user's language. The default implementation always
         * returns English messages. An example of doing this with
         * [jQuery.i18n](https://github.com/wikimedia/jquery.i18n) follows.
         *
         *     var messagePath = 'oojs-ui/dist/i18n/',
         *         languages = [ $.i18n().locale, 'ur', 'en' ],
         *         languageMap = {};
         *
         *     for ( var i = 0, iLen = languages.length; i < iLen; i++ ) {
         *         languageMap[ languages[ i ] ] = messagePath + languages[ i ].toLowerCase() + '.json';
         *     }
         *
         *     $.i18n().load( languageMap ).done( function() {
         *         // Replace the built-in `msg` only once we've loaded the internationalization.
         *         // OOUI uses `OO.ui.deferMsg` for all initially-loaded messages. So long as
         *         // you put off creating any widgets until this promise is complete, no English
         *         // will be displayed.
         *         OO.ui.msg = $.i18n;
         *
         *         // A button displaying "OK" in the default locale
         *         var button = new OO.ui.ButtonWidget( {
         *             label: OO.ui.msg( 'ooui-dialog-message-accept' ),
         *             icon: 'check'
         *         } );
         *         $( document.body ).append( button.$element );
         *
         *         // A button displaying "OK" in Urdu
         *         $.i18n().locale = 'ur';
         *         button = new OO.ui.ButtonWidget( {
         *             label: OO.ui.msg( 'ooui-dialog-message-accept' ),
         *             icon: 'check'
         *         } );
         *         $( document.body ).append( button.$element );
         *     } );
         *
         * @param key Message key
         * @param params Message parameters
         * @return Translated message with parameters substituted
         */
        function msg(key: string, ...params: any[]): string;

        /**
         * Package a message and arguments for deferred resolution.
         *
         * Use this when you are statically specifying a message and the message may not yet be
         * present.
         *
         * @param key Message key
         * @param params Message parameters
         * @return Function that returns the resolved message when executed
         */
        function deferMsg(key: string, ...params: any[]): () => string;

        /**
         * Resolve a message.
         *
         * If the message is a function it will be executed, otherwise it will pass through directly.
         *
         * @param msg
         * @return Resolved message when there was something to resolve, pass through
         *  otherwise
         */
        function resolveMsg(msg: () => string): string;

        /**
         * Resolve a message.
         *
         * If the message is a function it will be executed, otherwise it will pass through directly.
         *
         * @param msg
         * @return Resolved message when there was something to resolve, pass through
         *  otherwise
         */
        function resolveMsg<T>(msg: T): T;

        /**
         * @param url
         * @return
         */
        function isSafeUrl(url: string): boolean;

        /**
         * Check if the user has a 'mobile' device.
         *
         * For our purposes this means the user is primarily using an
         * on-screen keyboard, touch input instead of a mouse and may
         * have a physically small display.
         *
         * It is left up to implementors to decide how to compute this
         * so the default implementation always returns false.
         *
         * @return User is on a mobile device
         */
        function isMobile(): boolean;

        /**
         * Get the additional spacing that should be taken into account when displaying elements that
         * are clipped to the viewport, e.g. dropdown menus and popups. This is meant to be overridden
         * to avoid such menus overlapping any fixed headers/toolbars/navigation used by the site.
         *
         * @return Object with the properties 'top', 'right', 'bottom', 'left', each representing
         *  the extra spacing from that edge of viewport (in pixels)
         */
        function getViewportSpacing(): Rectangle;

        /**
         * Get the element where elements that are positioned outside of normal flow are inserted,
         * for example dialogs and dropdown menus.
         *
         * This is meant to be overridden if the site needs to style this element in some way
         * (e.g. setting font size), and doesn't want to style the whole document.
         */
        function getTeleportTarget(): HTMLElement;

        /**
         * Get the default overlay, which is used by various widgets when they are passed
         * `$overlay: true`.
         * See <https://www.mediawiki.org/wiki/OOUI/Concepts#Overlays>.
         *
         * @return Default overlay node
         */
        function getDefaultOverlay(): JQuery<HTMLDivElement>;

        /**
         * Display a quick modal alert dialog, using a OO.ui.MessageDialog. While the dialog is open,
         * the rest of the page will be dimmed out and the user won't be able to interact with it.
         * The dialog has only one action button, labelled "OK", clicking it will simply close the
         * dialog.
         *
         * A window manager is created automatically when this function is called for the first time.
         *
         *     OO.ui.alert( 'Something happened!' ).done( function () {
         *         console.log( 'User closed the dialog.' );
         *     } );
         *
         *     OO.ui.alert( 'Something larger happened!', { size: 'large' } );
         *
         * ResourceLoader module: `oojs-ui-windows`
         *
         * @param text Message text to display
         * @param options Additional options, see {@link OO.ui.MessageDialog.getSetupProcess}
         * @return Promise resolved when the user closes the dialog
         */
        function alert(text: JQuery | string, options?: MessageDialog.SetupDataMap): JQuery.Promise<void>;

        /**
         * Display a quick modal confirmation dialog, using a OO.ui.MessageDialog. While the dialog
         * is open, the rest of the page will be dimmed out and the user won't be able to interact
         * with it. The dialog has two action buttons, one to confirm an operation (labelled "OK")
         * and one to cancel it (labelled "Cancel").
         *
         * A window manager is created automatically when this function is called for the first time.
         *
         *     OO.ui.confirm( 'Are you sure?' ).done( function ( confirmed ) {
         *         if ( confirmed ) {
         *             console.log( 'User clicked "OK"!' );
         *         } else {
         *             console.log( 'User clicked "Cancel" or closed the dialog.' );
         *         }
         *     } );
         *
         * ResourceLoader module: `oojs-ui-windows`
         *
         * @param text Message text to display
         * @param options Additional options, see {@link OO.ui.MessageDialog.getSetupProcess}
         * @return Promise resolved when the user closes the dialog. If the user chose to
         *  confirm, the promise will resolve to boolean `true`; otherwise, it will resolve to
         *  boolean `false`.
         */
        function confirm(text: JQuery | string, options?: MessageDialog.SetupDataMap): JQuery.Promise<boolean>;

        interface PromptOptions extends MessageDialog.SetupDataMap {
            /** Additional options for text input widget, see {@link OO.ui.TextInputWidget} */
            textInput?: TextInputWidget.ConfigOptions;
        }

        /**
         * Display a quick modal prompt dialog, using a OO.ui.MessageDialog. While the dialog is open,
         * the rest of the page will be dimmed out and the user won't be able to interact with it.
         * The dialog has a text input widget and two action buttons, one to confirm an operation
         * (labelled "OK") and one to cancel it (labelled "Cancel").
         *
         * A window manager is created automatically when this function is called for the first time.
         *
         *     OO.ui.prompt( 'Choose a line to go to', {
         *         textInput: { placeholder: 'Line number' }
         *     } ).done( function ( result ) {
         *         if ( result !== null ) {
         *             console.log( 'User typed "' + result + '" then clicked "OK".' );
         *         } else {
         *             console.log( 'User clicked "Cancel" or closed the dialog.' );
         *         }
         *     } );
         *
         * ResourceLoader module: `oojs-ui-windows`
         *
         * @param text Message text to display
         * @param options Additional options, see {@link OO.ui.MessageDialog.getSetupProcess}
         * @return Promise resolved when the user closes the dialog. If the user chose to
         *  confirm, the promise will resolve with the value of the text input widget; otherwise,
         *  it will resolve to `null`.
         */
        function prompt(text: JQuery | string, options?: PromptOptions): JQuery.Promise<string | null>;
    }
}
