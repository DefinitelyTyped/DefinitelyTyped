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
        <K extends keyof StickySettings>(behavior: 'setting', name: K, value?: undefined): StickySettings[K];
        <K extends keyof StickySettings>(behavior: 'setting', name: K, value: StickySettings[K]): JQuery;
        (behavior: 'setting', value: StickySettings.Param): JQuery;
        (settings?: StickySettings.Param): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/modules/sticky.html#/settings}
     */
    interface StickySettings extends Pick<StickySettings._Impl, keyof StickySettings._Impl> { }

    namespace StickySettings {
        type Param = StickySettings | object;

        interface _Impl {
            // region Sticky Settings

            /**
             * Whether element should be "pushed" by the viewport, attaching to the bottom of the screen when scrolling up
             *
             * @default false
             */
            pushing: boolean;
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
        interface ClassNameSettings extends Pick<ClassNameSettings._Impl, keyof ClassNameSettings._Impl> { }

        namespace ClassNameSettings {
            type Param = ClassNameSettings | object;

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

        interface ErrorSettings extends Pick<ErrorSettings._Impl, keyof ErrorSettings._Impl> { }

        namespace ErrorSettings {
            type Param = ErrorSettings | object;

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
