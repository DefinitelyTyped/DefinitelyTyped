interface JQuery {
    transition: SemanticUI.Transition;
}

declare namespace SemanticUI {
    interface Transition {
        settings: TransitionSettings;

        /**
         * Stop current animation and preserve queue
         */
        (behavior: 'stop'): JQuery;
        /**
         * Stop current animation and queued animations
         */
        (behavior: 'stop all'): JQuery;
        /**
         * Clears all queued animations
         */
        (behavior: 'clear queue'): JQuery;
        /**
         * Stop current animation and show element
         */
        (behavior: 'show'): JQuery;
        /**
         * Stop current animation and hide element
         */
        (behavior: 'hide'): JQuery;
        /**
         * Toggles between hide and show
         */
        (behavior: 'toggle'): JQuery;
        /**
         * Forces reflow using a more expensive but stable method
         */
        (behavior: 'force repaint'): JQuery;
        /**
         * Triggers reflow on element
         */
        (behavior: 'repaint'): JQuery;
        /**
         * Resets all conditions changes during transition
         */
        (behavior: 'reset'): JQuery;
        /**
         * Enables animation looping
         */
        (behavior: 'looping'): JQuery;
        /**
         * Removes looping state from element
         */
        (behavior: 'remove looping'): JQuery;
        /**
         * Adds disabled state (stops ability to animate)
         */
        (behavior: 'disable'): JQuery;
        /**
         * Removes disabled state
         */
        (behavior: 'enable'): JQuery;
        /**
         * Modifies element animation duration
         */
        (behavior: 'set duration', duration: number): JQuery;
        /**
         * Saves all class names and styles to cache to be retrieved after animation
         */
        (behavior: 'save conditions'): JQuery;
        /**
         * Adds back cached names and styles to element
         */
        (behavior: 'restore conditions'): JQuery;
        /**
         * Returns vendor prefixed animation property for animationname
         */
        (behavior: 'get animation name'): string;
        /**
         * Returns vendor prefixed animation property for animationend
         */
        (behavior: 'get animation event'): string;
        /**
         * Returns whether element is currently visible
         */
        (behavior: 'is visible'): boolean;
        /**
         * Returns whether transition is currently occurring
         */
        (behavior: 'is animating'): boolean;
        /**
         * Returns whether animation looping is set
         */
        (behavior: 'is looping'): boolean;
        /**
         * Returns whether animations are supported
         */
        (behavior: 'is supported'): boolean;
        (behavior: 'destroy'): JQuery;
        <K extends keyof TransitionSettings>(behavior: 'setting', name: K, value?: undefined): TransitionSettings[K];
        <K extends keyof TransitionSettings>(behavior: 'setting', name: K, value: TransitionSettings[K]): JQuery;
        (behavior: 'setting', value: TransitionSettings | object): JQuery;
        (transition: string): JQuery;
        (settings?: TransitionSettings | object): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/modules/transition.html#/settings}
     */
    interface TransitionSettings extends Pick<TransitionSettings._Impl, keyof TransitionSettings._Impl> { }

    namespace TransitionSettings {
        interface _Impl {
            // region Transition Settings

            /**
             * Named animation event to used. Must be defined in CSS.
             *
             * @default 'fade'
             */
            animation: string;
            /**
             * Interval in MS between each elements transition
             *
             * @default 0
             */
            interval: number;
            /**
             * When an interval is specified, sets order of animations. auto reverses only animations that are hiding.
             *
             * @default 'auto'
             */
            reverse: 'auto' | boolean;
            /**
             * Specify the final display type (block, inline-block etc) so that it doesn't have to be calculated.
             *
             * @default false
             */
            displayType: false | string;
            /**
             * Duration of the CSS transition animation
             *
             * @default 500
             */
            duration: number;
            /**
             * If enabled a timeout will be added to ensure animationend callback occurs even if element is hidden
             */
            useFailSafe: boolean;
            /**
             * If enabled will allow same animation to be queued while it is already occurring
             */
            allowRepeats: boolean;
            /**
             * Whether to automatically queue animation if another is occurring
             */
            queue: boolean;

            // endregion

            // region Callbacks

            /**
             * Callback on each transition that changes visibility to shown
             */
            onShow(this: JQuery): void;
            /**
             * Callback on each transition that changes visibility to hidden
             */
            onHide(this: JQuery): void;
            /**
             * Callback on animation start, useful for queued animations
             */
            onStart(this: JQuery): void;
            /**
             * Callback on each transition complete
             */
            onComplete(this: JQuery): void;

            // endregion

            // region DOM Settings

            /**
             * Class names used to attach style to state
             */
            className: Transition.ClassNameSettings;

            // endregion

            // region Debug Settings

            error: Transition.ErrorSettings;

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

    namespace Transition {
        interface ClassNameSettings extends Pick<ClassNameSettings._Impl, keyof ClassNameSettings._Impl> { }

        namespace ClassNameSettings {
            interface _Impl {
                /**
                 * @default 'animating'
                 */
                animating: string;
                /**
                 * @default 'disabled'
                 */
                disabled: string;
                /**
                 * @default 'hidden'
                 */
                hidden: string;
                /**
                 * @default 'in'
                 */
                inward: string;
                /**
                 * @default 'loading'
                 */
                loading: string;
                /**
                 * @default 'looping'
                 */
                looping: string;
                /**
                 * @default 'out'
                 */
                outward: string;
                /**
                 * @default 'transition'
                 */
                transition: string;
                /**
                 * @default 'visible'
                 */
                visible: string;
            }
        }

        interface ErrorSettings extends Pick<ErrorSettings._Impl, keyof ErrorSettings._Impl> { }

        namespace ErrorSettings {
            interface _Impl {
                /**
                 * @default 'There is no CSS animation matching the one you specified.'
                 */
                noAnimation: string;
                /**
                 * @default 'The method you called is not defined'
                 */
                method: string;
            }
        }
    }
}
