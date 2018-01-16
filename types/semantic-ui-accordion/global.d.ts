interface JQuery {
    accordion: SemanticUI.Accordion;
}

declare namespace SemanticUI {
    interface Accordion {
        settings: AccordionSettings;

        /**
         * Refreshes all cached selectors and data
         */
        (behavior: 'refresh'): JQuery;
        /**
         * Opens accordion content at index
         */
        (behavior: 'open', index: number): JQuery;
        /**
         * Closes accordion content that are not active
         */
        (behavior: 'close others'): JQuery;
        /**
         * Closes accordion content at index
         */
        (behavior: 'close', index: number): JQuery;
        /**
         * Toggles accordion content at index
         */
        (behavior: 'toggle', index: number): JQuery;
        (behavior: 'destroy'): JQuery;
        <K extends keyof AccordionSettings>(behavior: 'setting', name: K, value?: undefined): AccordionSettings._Impl[K];
        <K extends keyof AccordionSettings>(behavior: 'setting', name: K, value: AccordionSettings._Impl[K]): JQuery;
        (behavior: 'setting', value: AccordionSettings): JQuery;
        (settings?: AccordionSettings): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/modules/accordion.html#/settings}
     */
    type AccordionSettings = AccordionSettings.Param;

    namespace AccordionSettings {
        type Param = (Pick<_Impl, 'exclusive'> |
            Pick<_Impl, 'on'> |
            Pick<_Impl, 'animateChildren'> |
            Pick<_Impl, 'closeNested'> |
            Pick<_Impl, 'collapsible'> |
            Pick<_Impl, 'duration'> |
            Pick<_Impl, 'easing'> |
            Pick<_Impl, 'observeChanges'> |
            Pick<_Impl, 'onOpening'> |
            Pick<_Impl, 'onOpen'> |
            Pick<_Impl, 'onClosing'> |
            Pick<_Impl, 'onClose'> |
            Pick<_Impl, 'onChange'> |
            Pick<_Impl, 'selector'> |
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
            // region Behavior

            /**
             * Only allow one section open at a time
             *
             * @default true
             */
            exclusive: boolean;
            /**
             * Event on title that will cause accordion to open
             *
             * @default 'click'
             */
            on: string;
            /**
             * Whether child content opacity should be animated (may cause performance issues with many child elements)
             *
             * @default true
             */
            animateChildren: boolean;
            /**
             * Close open nested accordion content when an element closes
             *
             * @default true
             */
            closeNested: boolean;
            /**
             * Allow active sections to collapse
             *
             * @default true
             */
            collapsible: boolean;
            /**
             * Duration in ms of opening animation
             *
             * @default 500
             */
            duration: number;
            /**
             * Easing of opening animation. EaseInOutQuint is included with accordion, for additional options you must include easing equations.
             *
             * @default 'easeInOutQuint'
             * @see {@link http://gsgd.co.uk/sandbox/jquery/easing/}
             */
            easing: string;
            /**
             * whether accordion should automatically refresh on DOM insertion
             *
             * @default true
             */
            observeChanges: boolean;

            // endregion

            // region Callbacks

            /**
             * Callback before element opens
             */
            onOpening(this: JQuery): void;
            /**
             * Callback after element is open
             */
            onOpen(this: JQuery): void;
            /**
             * Callback before element closes
             */
            onClosing(this: JQuery): void;
            /**
             * Callback after element is closed
             */
            onClose(this: JQuery): void;
            /**
             * Callback on element open or close
             */
            onChange(this: JQuery): void;

            // endregion

            // region DOM Settings

            /**
             * Selectors used to find parts of a module
             */
            selector: Accordion.SelectorSettings;
            /**
             * Class names used to determine element state
             */
            className: Accordion.ClassNameSettings;

            // endregion

            // region Debug Settings

            error: Accordion.ErrorSettings;

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

    namespace Accordion {
        type SelectorSettings = SelectorSettings.Param;

        namespace SelectorSettings {
            type Param = (Pick<_Impl, 'accordion'> |
                Pick<_Impl, 'title'> |
                Pick<_Impl, 'trigger'> |
                Pick<_Impl, 'content'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default '.accordion'
                 */
                accordion: string;
                /**
                 * @default '.title'
                 */
                title: string;
                /**
                 * @default '.title'
                 */
                trigger: string;
                /**
                 * @default '.content'
                 */
                content: string;
            }
        }

        type ClassNameSettings = ClassNameSettings.Param;

        namespace ClassNameSettings {
            type Param = (Pick<_Impl, 'active'> |
                Pick<_Impl, 'animating'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default 'active'
                 */
                active: string;
                /**
                 * @default 'animating'
                 */
                animating: string;
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
