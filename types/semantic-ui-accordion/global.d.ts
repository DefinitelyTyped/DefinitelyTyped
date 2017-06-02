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
        <K extends keyof AccordionSettings>(behavior: 'setting', name: K, value?: undefined): AccordionSettings[K];
        <K extends keyof AccordionSettings>(behavior: 'setting', name: K, value: AccordionSettings[K]): JQuery;
        (behavior: 'setting', value: AccordionSettings.Param): JQuery;
        (settings?: AccordionSettings.Param): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/modules/accordion.html#/settings}
     */
    interface AccordionSettings extends Pick<AccordionSettings._Impl, keyof AccordionSettings._Impl> { }

    namespace AccordionSettings {
        type Param = AccordionSettings | object;

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
        interface SelectorSettings extends Pick<SelectorSettings._Impl, keyof SelectorSettings._Impl> { }

        namespace SelectorSettings {
            type Param = SelectorSettings | object;

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

        interface ClassNameSettings extends Pick<ClassNameSettings._Impl, keyof ClassNameSettings._Impl> { }

        namespace ClassNameSettings {
            type Param = ClassNameSettings | object;

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

        interface ErrorSettings extends Pick<ErrorSettings._Impl, keyof ErrorSettings._Impl> { }

        namespace ErrorSettings {
            type Param = ErrorSettings | object;

            interface _Impl {
                /**
                 * @default 'The method you called is not defined.'
                 */
                method: string;
            }
        }
    }
}
