interface JQuery {
    popup: SemanticUI.Popup;
}

declare namespace SemanticUI {
    interface Popup {
        settings: PopupSettings;

        /**
         * Shows popup
         */
        (behavior: 'show'): JQuery;
        /**
         * Hides popup
         */
        (behavior: 'hide'): JQuery;
        /**
         * Hides all visible pop ups on the page
         */
        (behavior: 'hide all'): JQuery;
        /**
         * Returns current popup dom element
         */
        (behavior: 'get popup'): JQuery;
        /**
         * Changes current popup content
         */
        (behavior: 'change content', html: string): JQuery;
        /**
         * Toggles visibility of popup
         */
        (behavior: 'toggle'): JQuery;
        /**
         * Returns whether popup is visible
         */
        (behavior: 'is visible'): boolean;
        /**
         * Returns whether popup is hidden
         */
        (behavior: 'is hidden'): boolean;
        /**
         * Returns whether popup is created and inserted into the page
         */
        (behavior: 'exists'): boolean;
        /**
         * Adjusts popup when content size changes (only necessary for centered popups)
         */
        (behavior: 'reposition'): JQuery;
        /**
         * Repositions a popup
         */
        (behavior: 'set position', position: string): JQuery;
        /**
         * Removes popup from the page and removes all events
         */
        (behavior: 'destroy'): JQuery;
        /**
         * Removes popup from the page
         */
        (behavior: 'remove popup'): JQuery;
        <K extends keyof PopupSettings>(behavior: 'setting', name: K, value?: undefined): PopupSettings[K];
        <K extends keyof PopupSettings>(behavior: 'setting', name: K, value: PopupSettings[K]): JQuery;
        (behavior: 'setting', value: PopupSettings.Param): JQuery;
        (settings?: PopupSettings.Param): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/modules/popup.html#/settings}
     */
    interface PopupSettings extends Pick<PopupSettings._Impl, keyof PopupSettings._Impl> { }

    namespace PopupSettings {
        type Param = PopupSettings | object;

        interface _Impl {
            // region Popup Settings

            /**
             * Can specify a DOM element that should be used as the popup. This is useful for including a pre-formatted popup.
             *
             * @default false
             */
            popup: false | string | JQuery;
            /**
             * Whether all other popups should be hidden when this popup is opened
             *
             * @default false
             */
            exclusive: boolean;
            /**
             * Whether to move popup to same offset container as target element when popup already exists on the page.
             * Using a popup inside of an element without overflow:visible, like a sidebar, may require you to set this to false
             *
             * @default true
             */
            movePopup: boolean;
            /**
             * Whether popup should attach mutationObservers to automatically run destroy when the element is removed from the page's DOM.
             *
             * @default true
             */
            observeChanges: boolean;
            /**
             * When the popup surpasses the boundary of this element, it will attempt to find another display position.
             */
            boundary: string | JQuery;
            /**
             * Selector or jquery object specifying where the popup should be created.
             *
             * @default 'body'
             */
            context: string | JQuery;
            /**
             * Will automatically hide a popup on scroll event in this context
             */
            scrollContext: string | JQuery;
            /**
             * Number of pixels that a popup is allowed to appear outside the boundaries of its context.
             * This allows for permissible rounding errors when an element is against the edge of its context.
             *
             * @default 2
             */
            jitter: number;
            /**
             * Position that the popup should appear
             *
             * @default 'top left'
             */
            position: string;
            /**
             * If a popup is inline it will be created next to current element, allowing for local css rules to apply.
             * It will not be removed from the DOM after being hidden.
             * Otherwise popups will appended to body and removed after being hidden.
             *
             * @default false
             */
            inline: boolean;
            /**
             * Whether popup contents should be preserved in the page after being hidden, allowing it to re-appear slightly faster on subsequent loads.
             *
             * @default false
             */
            preserve: boolean;
            /**
             * Can be set to adjacent or opposite to prefer adjacent or opposite position if popup cannot fit on screen
             *
             * @default 'adjacent'
             */
            prefer: 'adjacent' | 'opposite';
            /**
             * When set to false, a popup will not appear and produce an error message if it cannot entirely fit on page.
             * Setting this to a position like, right center forces the popup to use this position as a last resort even if it is partially offstage.
             * Setting this to true will use the last attempted position.
             *
             * @default false
             */
            lastResort: boolean | string;
            /**
             * Event used to trigger popup. Can be either focus, click, hover, or manual. Manual popups must be triggered with $('.element').popup('show');
             *
             * @default 'hover'
             */
            on: 'focus' | 'click' | 'hover' | 'manual';
            /**
             * Delay in milliseconds before showing or hiding a popup on hover or focus
             */
            delay: Popup.DelaySettings;
            /**
             * Named transition to use when animating menu in and out. Fade and slide down are available without including ui transitions
             *
             * @default 'slide down'
             * @see {@link http://semantic-ui.com/modules/transition.html}
             */
            transition: string;
            /**
             * Duration of animation events
             *
             * @default 200
             */
            duration: number;
            /**
             * Whether popup should set fluid popup variation width on load to avoid width: 100% including padding
             *
             * @default true
             */
            setFluidWidth: boolean;
            /**
             * Whether popup should not close on hover (useful for popup navigation menus)
             *
             * @default false
             */
            hoverable: boolean;
            /**
             * When using on: 'click' specifies whether clicking the page should close the popup
             *
             * @default true
             */
            closable: boolean;
            /**
             * When using on: 'hover' whether touchstart events should be added to allow the popup to be triggered
             */
            addTouchEvents: boolean;
            /**
             * Whether popup should hide on scroll or touchmove, auto only hides for popups without on: 'click'.
             * Set this to false to prevent mobile browsers from closing popups when you tap inside input fields.
             *
             * @default 'auto'
             */
            hideOnScroll: 'auto' | false;
            /**
             * If a selector or jQuery object is specified this allows the popup to be positioned relative to that element.
             *
             * @default false
             */
            target: false | string | JQuery;
            /**
             * Offset for distance of popup from element
             *
             * @default 0
             */
            distanceAway: number;
            /**
             * Offset in pixels from calculated position
             *
             * @default 0
             */
            offset: number;
            /**
             * Number of iterations before giving up search for popup position when a popup cannot fit on screen
             *
             * @default 10
             */
            maxSearchDepth: number;

            // endregion

            // region Callbacks

            /**
             * Callback on popup element creation, with created popup
             */
            onCreate(this: JQuery, $module: JQuery): void;
            /**
             * Callback immediately before Popup is removed from DOM
             */
            onRemove(this: JQuery, $module: JQuery): void;
            /**
             * Callback before popup is shown. Returning false from this callback will cancel the popup from showing.
             */
            onShow(this: JQuery, $module: JQuery): false | void;
            /**
             * Callback after popup is shown
             */
            onVisible(this: JQuery, $module: JQuery): void;
            /**
             * Callback before popup is hidden. Returning false from this callback will cancel the popup from hiding.
             */
            onHide(this: JQuery, $module: JQuery): false | void;
            /**
             * Callback after popup is hidden
             */
            onHidden(this: JQuery, $module: JQuery): void;
            /**
             * Callback after popup cannot be placed on screen
             */
            onUnplaceable(this: JQuery, $module: JQuery): void;

            // endregion

            // region Content Settings

            /**
             * Popup variation to use, can use multiple variations with a space delimiter
             */
            variation: string;
            /**
             * Content to display
             */
            content: string;
            /**
             * Title to display alongside content
             */
            title: string;
            /**
             * HTML content to display instead of preformatted title and content
             */
            html: string | JQuery;

            // endregion

            // region DOM Settings

            /**
             * DOM Selectors used internally
             */
            selector: Popup.SelectorSettings;
            /**
             * HTML Data attributes used to store data
             */
            metadata: Popup.MetadataSettings;
            /**
             * Class names used to attach style to state
             */
            className: Popup.ClassNameSettings;

            // endregion

            // region Debug Settings

            error: Popup.ErrorSettings;

            // endregion

            // region Component Settings

            // region DOM Settings

            /**
             * Event namespace. Makes sure module teardown does not effect other events attached to an element.
             */
            namespace: string;

            // endregion

            // region Debug Settings

            /**
             * Name used in log statements
             */
            name: string;
            /**
             * Silences all console output including error messages, regardless of other debug settings.
             */
            silent: boolean;
            /**
             * Debug output to console
             */
            debug: boolean;
            /**
             * Show console.table output with performance metrics
             */
            performance: boolean;
            /**
             * Debug output includes all internal behaviors
             */
            verbose: boolean;

            // endregion

            // endregion
        }
    }

    namespace Popup {
        interface DelaySettings extends Pick<DelaySettings._Impl, keyof DelaySettings._Impl> { }

        namespace DelaySettings {
            type Param = DelaySettings | object;

            interface _Impl {
                show: number;
                hide: number;
            }
        }

        interface SelectorSettings extends Pick<SelectorSettings._Impl, keyof SelectorSettings._Impl> { }

        namespace SelectorSettings {
            type Param = SelectorSettings | object;

            interface _Impl {
                /**
                 * @default '.ui.popup'
                 */
                popup: string;
            }
        }

        interface MetadataSettings extends Pick<MetadataSettings._Impl, keyof MetadataSettings._Impl> { }

        namespace MetadataSettings {
            type Param = MetadataSettings | object;

            interface _Impl {
                /**
                 * @default 'content'
                 */
                content: string;
                /**
                 * @default 'html'
                 */
                html: string;
                /**
                 * @default 'offset'
                 */
                offset: string;
                /**
                 * @default 'position'
                 */
                position: string;
                /**
                 * @default 'title'
                 */
                title: string;
                /**
                 * @default 'variation'
                 */
                variation: string;
            }
        }

        interface ClassNameSettings extends Pick<ClassNameSettings._Impl, keyof ClassNameSettings._Impl> { }

        namespace ClassNameSettings {
            type Param = ClassNameSettings | object;

            interface _Impl {
                /**
                 * @default 'loading'
                 */
                loading: string;
                /**
                 * @default 'ui popup'
                 */
                popup: string;
                /**
                 * @default 'top left center bottom right'
                 */
                position: string;
                /**
                 * @default 'visible'
                 */
                visible: string;
            }
        }

        interface ErrorSettings extends Pick<ErrorSettings._Impl, keyof ErrorSettings._Impl> { }

        namespace ErrorSettings {
            type Param = ErrorSettings | object;

            interface _Impl {
                /**
                 * @default 'The position you specified is not a valid position'
                 */
                invalidPosition: string;
                /**
                 * @default 'Popup does not fit within the boundaries of the viewport'
                 */
                cannotPlace: string;
                /**
                 * @default 'The method you called is not defined.'
                 */
                method: string;
                /**
                 * @default 'This module requires ui transitions <https: github.com="" semantic-org="" ui-transition="">'
                 */
                noTransition: string;
                /**
                 * @default 'The target or popup you specified does not exist on the page'
                 */
                notFound: string;
            }
        }
    }
}
