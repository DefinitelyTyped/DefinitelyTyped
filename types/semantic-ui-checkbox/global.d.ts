interface JQuery {
    checkbox: SemanticUI.Checkbox;
}

declare namespace SemanticUI {
    interface Checkbox {
        settings: CheckboxSettings;

        /**
         * Switches a checkbox from current state
         */
        (behavior: 'toggle'): JQuery;
        /**
         * Set a checkbox state to checked
         */
        (behavior: 'check'): JQuery;
        /**
         * Set a checkbox state to unchecked
         */
        (behavior: 'uncheck'): JQuery;
        /**
         * Set as indeterminate checkbox
         */
        (behavior: 'indeterminate'): JQuery;
        /**
         * Set as determinate checkbox
         */
        (behavior: 'determinate'): JQuery;
        /**
         * Enable interaction with a checkbox
         */
        (behavior: 'enable'): JQuery;
        /**
         * Set a checkbox state to checked without callbacks
         */
        (behavior: 'set checked'): JQuery;
        /**
         * Set a checkbox state to unchecked without callbacks
         */
        (behavior: 'set unchecked'): JQuery;
        /**
         * Set as indeterminate checkbox without callbacks
         */
        (behavior: 'set indeterminate'): JQuery;
        /**
         * Set as determinate checkbox without callbacks
         */
        (behavior: 'set determinate'): JQuery;
        /**
         * Enable interaction with a checkbox without callbacks
         */
        (behavior: 'set enabled'): JQuery;
        /**
         * Disable interaction with a checkbox without callbacks
         */
        (behavior: 'set disabled'): JQuery;
        /**
         * Attach checkbox events to another element
         */
        (behavior: 'attach events', selector: string | JQuery, event?: string): JQuery;
        /**
         * Returns whether element is radio selection
         */
        (behavior: 'is radio'): boolean;
        /**
         * Returns whether element is currently checked
         */
        (behavior: 'is checked'): boolean;
        /**
         * Returns whether element is not checked
         */
        (behavior: 'is unchecked'): boolean;
        /**
         * Returns whether element is able to be changed
         */
        (behavior: 'can change'): boolean;
        /**
         * Returns whether element can be checked (checking if already checked or `beforeChecked` would cancel)
         */
        (behavior: 'should allow check'): boolean;
        /**
         * Returns whether element can be unchecked (checking if already unchecked or `beforeUnchecked` would cancel)
         */
        (behavior: 'should allow uncheck'): boolean;
        /**
         * Returns whether element can be determinate (checking if already determinate or `beforeDeterminate` would cancel)
         */
        (behavior: 'should allow determinate'): boolean;
        /**
         * Returns whether element can be indeterminate (checking if already indeterminate or `beforeIndeterminate` would cancel)
         */
        (behavior: 'should allow indeterminate'): boolean;
        /**
         * Returns whether element is able to be unchecked
         */
        (behavior: 'can uncheck'): boolean;
        (behavior: 'destroy'): JQuery;
        <K extends keyof CheckboxSettings>(behavior: 'setting', name: K, value?: undefined): CheckboxSettings[K];
        <K extends keyof CheckboxSettings>(behavior: 'setting', name: K, value: CheckboxSettings[K]): JQuery;
        (behavior: 'setting', value: CheckboxSettings.Param): JQuery;
        (settings?: CheckboxSettings.Param): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/modules/checkbox.html#/settings}
     */
    interface CheckboxSettings extends Pick<CheckboxSettings._Impl, keyof CheckboxSettings._Impl> { }

    namespace CheckboxSettings {
        type Param = CheckboxSettings | object;

        interface _Impl {
            // region Behavior

            /**
             * Setting to true/false will determine whether an input will allow no selection. Auto will set disallow this behavior only for radio boxes
             *
             * @default 'auto'
             */
            uncheckable: 'auto' | boolean;
            /**
             * Whether callbacks for checked status should be fired on init as well as change
             *
             * @default false
             */
            fireOnInit: boolean;

            // endregion

            // region Callbacks

            /**
             * Callback after a checkbox is either checked or unchecked.
             */
            onChange(this: HTMLElement): void;
            /**
             * Callback after a checkbox is checked.
             */
            onChecked(this: HTMLElement): void;
            /**
             * Callback after a checkbox is set to undeterminate.
             */
            onIndeterminate(this: HTMLElement): void;
            /**
             * Callback after a checkbox is set to determinate.
             */
            onDeterminate(this: HTMLElement): void;
            /**
             * Callback after a checkbox is unchecked.
             */
            onUnchecked(this: HTMLElement): void;
            /**
             * Callback before a checkbox is checked. Can cancel change by returning false
             */
            beforeChecked(this: HTMLElement): boolean;
            /**
             * Callback before a checkbox is set to undeterminate. Can cancel change by returning false
             */
            beforeIndeterminate(this: HTMLElement): boolean;
            /**
             * Callback before a checkbox is set to determinate. Can cancel change by returning false
             */
            beforeDeterminate(this: HTMLElement): boolean;
            /**
             * Callback before a checkbox is unchecked. Can cancel change by returning false
             */
            beforeUnchecked(this: HTMLElement): boolean;
            /**
             * Callback after a checkbox is enabled.
             */
            onEnable(this: HTMLElement): void;
            /**
             * Callback after a checkbox is disabled.
             */
            onDisable(this: HTMLElement): void;
            /**
             * Callback after a checkbox is enabled.
             *
             * @deprecated
             */
            onEnabled(this: HTMLElement): void;
            /**
             * Callback after a checkbox is disabled.
             *
             * @deprecated
             */
            onDisabled(this: HTMLElement): void;

            // endregion

            // region DOM Settings

            /**
             * Selectors used to find parts of a module
             */
            selector: Checkbox.SelectorSettings;
            /**
             * Class names used to determine element state
             */
            className: Checkbox.ClassNameSettings;

            // endregion

            // region Debug Settings

            error: Checkbox.ErrorSettings;

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

    namespace Checkbox {
        interface SelectorSettings extends Pick<SelectorSettings._Impl, keyof SelectorSettings._Impl> { }

        namespace SelectorSettings {
            type Param = SelectorSettings | object;

            interface _Impl {
                /**
                 * @default 'input[type=checkbox], input[type=radio]'
                 */
                input: string;
                /**
                 * @default 'label'
                 */
                label: string;
            }
        }

        interface ClassNameSettings extends Pick<ClassNameSettings._Impl, keyof ClassNameSettings._Impl> { }

        namespace ClassNameSettings {
            type Param = ClassNameSettings | object;

            interface _Impl {
                /**
                 * @default 'checked'
                 */
                checked: string;
                /**
                 * @default 'disabled'
                 */
                disabled: string;
                /**
                 * @default 'radio'
                 */
                radio: string;
                /**
                 * @default 'read-only'
                 */
                readOnly: string;
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
