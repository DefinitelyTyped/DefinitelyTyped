interface JQuery {
    visibility: SemanticUI.Visibility;
}

declare namespace SemanticUI {
    interface Visibility {
        settings: VisibilitySettings;

        /**
         * Disable callbacks temporarily. This is useful if you need to adjust scroll position and do not want to trigger callbacks during the position change.
         */
        (behavior: 'disable callbacks'): JQuery;
        /**
         * Re-enable callbacks
         */
        (behavior: 'enable callbacks'): JQuery;
        /**
         * Returns whether element is on screen
         */
        (behavior: 'is on screen'): boolean;
        /**
         * Returns whether element is off screen
         */
        (behavior: 'is off screen'): boolean;
        /**
         * Returns number of pixels passed in current element from top of element
         */
        (behavior: 'get pixels passed'): number;
        /**
         * Returns element calculations as object
         */
        (behavior: 'get element calculations'): Visibility.ElementCalculations;
        /**
         * Returns screen calculations as object
         */
        (behavior: 'get screen calculations'): Visibility.ScreenCalculations;
        /**
         * Returns screen size as object
         */
        (behavior: 'get screen size'): Visibility.ScreenSize;
        (behavior: 'destroy'): JQuery;
        <K extends keyof VisibilitySettings>(behavior: 'setting', name: K, value?: undefined): VisibilitySettings._Impl[K];
        <K extends keyof VisibilitySettings>(behavior: 'setting', name: K, value: VisibilitySettings._Impl[K]): JQuery;
        (behavior: 'setting', value: VisibilitySettings): JQuery;
        (settings?: VisibilitySettings): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/behaviors/visibility.html#/settings}
     */
    type VisibilitySettings = VisibilitySettings.Param;

    namespace VisibilitySettings {
        type Param = (Pick<_Impl, 'once'> |
            Pick<_Impl, 'continuous'> |
            Pick<_Impl, 'type'> |
            Pick<_Impl, 'initialCheck'> |
            Pick<_Impl, 'context'> |
            Pick<_Impl, 'refreshOnLoad'> |
            Pick<_Impl, 'refreshOnResize'> |
            Pick<_Impl, 'checkOnRefresh'> |
            Pick<_Impl, 'zIndex'> |
            Pick<_Impl, 'offset'> |
            Pick<_Impl, 'includeMargin'> |
            Pick<_Impl, 'throttle'> |
            Pick<_Impl, 'observeChanges'> |
            Pick<_Impl, 'transition'> |
            Pick<_Impl, 'duration'> |
            Pick<_Impl, 'onTopVisible'> |
            Pick<_Impl, 'onTopPassed'> |
            Pick<_Impl, 'onBottomVisible'> |
            Pick<_Impl, 'onPassing'> |
            Pick<_Impl, 'onBottomPassed'> |
            Pick<_Impl, 'onTopVisibleReverse'> |
            Pick<_Impl, 'onTopPassedReverse'> |
            Pick<_Impl, 'onBottomVisibleReverse'> |
            Pick<_Impl, 'onPassingReverse'> |
            Pick<_Impl, 'onBottomPassedReverse'> |
            Pick<_Impl, 'onOnScreen'> |
            Pick<_Impl, 'onOffScreen'> |
            Pick<_Impl, 'onLoad'> |
            Pick<_Impl, 'onAllLoaded'> |
            Pick<_Impl, 'onFixed'> |
            Pick<_Impl, 'onUnfixed'> |
            Pick<_Impl, 'onUpdate'> |
            Pick<_Impl, 'onRefresh'> |
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
            // region Functionality

            /**
             * When set to false a callback will occur each time an element passes the threshold for a condition.
             *
             * @default true
             */
            once: boolean;
            /**
             * When set to true a callback will occur anytime an element passes a condition not just immediately after the threshold is met.
             *
             * @default false
             */
            continuous: boolean;
            /**
             * Set to image to load images when on screen. Set to fixed to add class name fixed when passed.
             *
             * @default false
             */
            type: false | 'image' | 'fixed';
            /**
             * Whether visibility conditions should be checked immediately on init
             *
             * @default true
             */
            initialCheck: boolean;
            /**
             * The scroll context visibility should use.
             *
             * @default 'window'
             */
            context: string | JQuery;
            /**
             * Whether visibility conditions should be checked on window load. This ensures that after images load content positions will be updated correctly.
             *
             * @default true
             */
            refreshOnLoad: boolean;
            /**
             * Whether visibility conditions should be checked on window resize. Useful when content resizes causes continuous changes in position
             *
             * @default true
             */
            refreshOnResize: boolean;
            /**
             * Whether visibility conditions should be checked on calls to refresh.
             * These calls can be triggered from either resize, load or manually calling $('.foo').visibility('refresh')
             *
             * @default true
             */
            checkOnRefresh: boolean;
            /**
             * Specify a z-index when using type: 'fixed'.
             *
             * @default 1
             * @since 2.2
             */
            zIndex: number;
            /**
             * Value that context scrollTop should be adjusted in pixels. Useful for making content appear below content fixed to the page.
             *
             * @default 0
             */
            offset: number;
            /**
             * Whether element calculations should include its margin
             *
             * @default false
             */
            includeMargin: boolean;
            /**
             * When set to an integer, scroll position will be debounced using this ms value. false will debounce with requestAnimationFrame.
             *
             * @default false
             */
            throttle: false | number;
            /**
             * Whether to automatically refresh content when changes are made to the element's DOM subtree
             *
             * @default true
             */
            observeChanges: boolean;
            /**
             * When using type: image allows you to specify transition when showing a loaded image
             *
             * @default false
             */
            transition: false | string;
            /**
             * When using type: image allows you to specify transition duration
             *
             * @default 1000
             */
            duration: number;

            // endregion

            // region Visibility Callbacks

            /**
             * Element's top edge has passed bottom of screen
             */
            onTopVisible(this: JQuery): void;
            /**
             * Element's top edge has passed top of the screen
             */
            onTopPassed(this: JQuery): void;
            /**
             * Element's bottom edge has passed bottom of screen
             */
            onBottomVisible(this: JQuery): void;
            /**
             * Any part of an element is visible on screen
             */
            onPassing(this: JQuery): void;
            /**
             * Element's bottom edge has passed top of screen
             */
            onBottomPassed(this: JQuery): void;
            /**
             * Element's top edge has not passed bottom of screen
             */
            onTopVisibleReverse(this: JQuery): void;
            /**
             * Element's top edge has not passed top of the screen
             */
            onTopPassedReverse(this: JQuery): void;
            /**
             * Element's bottom edge has not passed bottom of screen
             */
            onBottomVisibleReverse(this: JQuery): void;
            /**
             * Element's top has not passed top of screen but bottom has
             */
            onPassingReverse(this: JQuery): void;
            /**
             * Element's bottom edge has not passed top of screen
             */
            onBottomPassedReverse(this: JQuery): void;
            onOnScreen(this: JQuery): void;
            onOffScreen(this: JQuery): void;

            // endregion

            // region Image Callbacks

            /**
             * Occurs after an image has completed loading
             *
             * @since 2.2
             */
            onLoad(this: JQuery): void;
            /**
             * Occurs after all img initialized at the same time have loaded.
             *
             * @since 2.2
             */
            onAllLoaded(this: JQuery): void;

            // endregion

            // region Fixed Callbacks

            /**
             * Occurs after element has been assigned position fixed
             *
             * @since 2.2
             */
            onFixed(this: JQuery): void;
            /**
             * Occurs after element has been removed from fixed position
             *
             * @since 2.2
             */
            onUnfixed(this: JQuery): void;

            // endregion

            // region Utility Callbacks

            /**
             * Occurs each time an elements calculations are updated
             */
            onUpdate(this: JQuery, calculations: Visibility.ElementCalculations): void;
            /**
             * Occurs whenever element's visibility is refreshed
             */
            onRefresh(this: JQuery): void;

            // endregion

            // region DOM Settings

            /**
             * Class names used to attach style to state
             */
            className: Visibility.ClassNameSettings;

            // endregion

            // region Debug Settings

            error: Visibility.ErrorSettings;

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

    namespace Visibility {
        interface ElementPosition {
            fits: boolean;
            offset: JQueryCoordinates;
            width: number;
            height: number;
        }

        interface ElementCalculations extends ElementPosition {
            margin?: {
                top: number;
                bottom: number;
            };
            top: number;
            bottom: number;

            topVisible: boolean;
            topPassed: boolean;
            bottomVisible: boolean;
            bottomPassed: boolean;
            pixelsPassed: number;
            percentagePassed: number;

            onScreen: boolean;
            passing: boolean;
            offScreen: boolean;
        }

        interface ScreenCalculations {
            top: number;
            bottom: number;
        }

        interface ScreenSize {
            height: number;
        }

        type ClassNameSettings = ClassNameSettings.Param;

        namespace ClassNameSettings {
            type Param = (Pick<_Impl, 'fixed'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default 'fixed'
                 */
                fixed: string;
            }
        }

        type ErrorSettings = ErrorSettings.Param;

        namespace ErrorSettings {
            type Param = (Pick<_Impl, 'method'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default 'The method you called is not defined.'
                 */
                method: string;
            }
        }
    }
}
