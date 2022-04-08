interface JQuery {
    sticky: SemanticUI.Sticky;
}

declare namespace SemanticUI {
    interface Sticky {
        settings: StickySettings;

        /**
         * recalculates offsets
         */
        (behavior: 'refresh'): JQuery;
        (behavior: 'destroy'): JQuery;
        <K extends keyof StickySettings>(behavior: 'setting', name: K, value?: undefined): StickySettings._Impl[K];
        <K extends keyof StickySettings>(behavior: 'setting', name: K, value: StickySettings._Impl[K]): JQuery;
        (behavior: 'setting', value: StickySettings): JQuery;
        (settings?: StickySettings): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/modules/sticky.html#/settings}
     */
    type StickySettings = StickySettings.Param;

    namespace StickySettings {
        type Param = (Pick<_Impl, 'pushing'> |
            Pick<_Impl, 'setSize'> |
            Pick<_Impl, 'jitter'> |
            Pick<_Impl, 'observeChanges'> |
            Pick<_Impl, 'context'> |
            Pick<_Impl, 'scrollContext'> |
            Pick<_Impl, 'offset'> |
            Pick<_Impl, 'bottomOffset'> |
            Pick<_Impl, 'onReposition'> |
            Pick<_Impl, 'onScroll'> |
            Pick<_Impl, 'onStick'> |
            Pick<_Impl, 'onUnstick'> |
            Pick<_Impl, 'onTop'> |
            Pick<_Impl, 'onBottom'> |
            Pick<_Impl, 'className'> |
            Pick<_Impl, 'error'> |
            Pick<_Impl, 'namespace'> |
            Pick<_Impl, 'name'> |
            Pick<_Impl, 'silent'> |
            Pick<_Impl, 'debug'> |
            Pick<_Impl, 'performance'> |
            Pick<_Impl, 'verbose'>) &
            Partial<Pick<_Impl, keyof _Impl>>;

        interface _Impl {
            // region Sticky Settings

            /**
             * Whether element should be "pushed" by the viewport, attaching to the bottom of the screen when scrolling up
             *
             * @default false
             */
            pushing: boolean;
            /**
             * Sets size of fixed content to match its width before fixing to screen dynamically.
             * This is used because fixed may display block or 100% width content differently than it appears before sticking.
             *
             * @default true
             * @since 2.2.11
             */
            setSize: boolean;
            /**
             * Sticky container height will only be set if the difference between heights of container and context is larger than this jitter value.
             *
             * @default 5
             */
            jitter: number;
            /**
             * Whether any change in context DOM should automatically refresh cached sticky positions
             *
             * @default false
             */
            observeChanges: boolean;
            /**
             * Context which sticky element should stick to
             *
             * @default false
             */
            context: false | string | JQuery;
            /**
             * Context which sticky should attach onscroll events.
             *
             * @default 'window'
             */
            scrollContext: string | JQuery;
            /**
             * Offset in pixels from the top of the screen when fixing element to viewport
             *
             * @default 0
             */
            offset: number;
            /**
             * Offset in pixels from the bottom of the screen when fixing element to viewport
             *
             * @default 0
             */
            bottomOffset: number;

            // endregion

            // region Callbacks

            /**
             * Callback when element is repositioned from layout change
             */
            onReposition(this: JQuery): void;
            /**
             * Callback when requestAnimationFrame fires from scroll handler.
             */
            onScroll(this: JQuery): void;
            /**
             * Callback when element is fixed to page
             */
            onStick(this: JQuery): void;
            /**
             * Callback when element is unfixed from page
             */
            onUnstick(this: JQuery): void;
            /**
             * Callback when element is bound to top of parent container
             */
            onTop(this: JQuery): void;
            /**
             * Callback when element is bound to bottom of parent container
             */
            onBottom(this: JQuery): void;

            // endregion

            // region DOM Settings

            /**
             * Class names used to attach style to state
             */
            className: Sticky.ClassNameSettings;

            // endregion

            // region Debug Settings

            error: Sticky.ErrorSettings;

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

    namespace Sticky {
        type ClassNameSettings = ClassNameSettings.Param;

        namespace ClassNameSettings {
            type Param = (Pick<_Impl, 'bound'> |
                Pick<_Impl, 'fixed'> |
                Pick<_Impl, 'supported'> |
                Pick<_Impl, 'top'> |
                Pick<_Impl, 'bottom'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default 'bound'
                 */
                bound: string;
                /**
                 * @default 'fixed'
                 */
                fixed: string;
                /**
                 * @default 'native'
                 */
                supported: string;
                /**
                 * @default 'top'
                 */
                top: string;
                /**
                 * @default 'bottom'
                 */
                bottom: string;
            }
        }

        type ErrorSettings = ErrorSettings.Param;

        namespace ErrorSettings {
            type Param = (Pick<_Impl, 'container'> |
                Pick<_Impl, 'visible'> |
                Pick<_Impl, 'method'> |
                Pick<_Impl, 'invalidContext'> |
                Pick<_Impl, 'elementSize'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default 'Sticky element must be inside a relative container'
                 */
                container: string;
                /**
                 * @default 'Element is hidden, you must call refresh after element becomes visible'
                 */
                visible: string;
                /**
                 * @default 'The method you called is not defined.'
                 */
                method: string;
                /**
                 * @default 'Context specified does not exist'
                 */
                invalidContext: string;
                /**
                 * @default 'Sticky element is larger than its container, cannot create sticky.'
                 */
                elementSize: string;
            }
        }
    }
}
