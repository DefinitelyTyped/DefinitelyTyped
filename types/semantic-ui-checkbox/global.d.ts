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
        <K extends keyof CheckboxSettings>(behavior: 'setting', name: K, value?: undefined): CheckboxSettings._Impl[K];
        <K extends keyof CheckboxSettings>(behavior: 'setting', name: K, value: CheckboxSettings._Impl[K]): JQuery;
        (behavior: 'setting', value: CheckboxSettings): JQuery;
        (settings?: CheckboxSettings): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/modules/checkbox.html#/settings}
     */
    type CheckboxSettings = CheckboxSettings.Param;

    namespace CheckboxSettings {
        type Param = (Pick<_Impl, 'uncheckable'> |
            Pick<_Impl, 'fireOnInit'> |
            Pick<_Impl, 'onChange'> |
            Pick<_Impl, 'onChecked'> |
            Pick<_Impl, 'onIndeterminate'> |
            Pick<_Impl, 'onDeterminate'> |
            Pick<_Impl, 'onUnchecked'> |
            Pick<_Impl, 'beforeChecked'> |
            Pick<_Impl, 'beforeIndeterminate'> |
            Pick<_Impl, 'beforeDeterminate'> |
            Pick<_Impl, 'beforeUnchecked'> |
            Pick<_Impl, 'onEnable'> |
            Pick<_Impl, 'onDisable'> |
            Pick<_Impl, 'onEnabled'> |
            Pick<_Impl, 'onDisabled'> |
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
            onChange(this: HTMLInputElement): void;
            /**
             * Callback after a checkbox is checked.
             */
            onChecked(this: HTMLInputElement): void;
            /**
             * Callback after a checkbox is set to undeterminate.
             */
            onIndeterminate(this: HTMLInputElement): void;
            /**
             * Callback after a checkbox is set to determinate.
             */
            onDeterminate(this: HTMLInputElement): void;
            /**
             * Callback after a checkbox is unchecked.
             */
            onUnchecked(this: HTMLInputElement): void;
            /**
             * Callback before a checkbox is checked. Can cancel change by returning false
             */
            beforeChecked(this: HTMLInputElement): void | false;
            /**
             * Callback before a checkbox is set to undeterminate. Can cancel change by returning false
             */
            beforeIndeterminate(this: HTMLInputElement): void | false;
            /**
             * Callback before a checkbox is set to determinate. Can cancel change by returning false
             */
            beforeDeterminate(this: HTMLInputElement): void | false;
            /**
             * Callback before a checkbox is unchecked. Can cancel change by returning false
             */
            beforeUnchecked(this: HTMLInputElement): void | false;
            /**
             * Callback after a checkbox is enabled.
             */
            onEnable(this: HTMLInputElement): void;
            /**
             * Callback after a checkbox is disabled.
             */
            onDisable(this: HTMLInputElement): void;
            /**
             * Callback after a checkbox is enabled.
             *
             * @deprecated
             */
            onEnabled(this: HTMLInputElement): void;
            /**
             * Callback after a checkbox is disabled.
             *
             * @deprecated
             */
            onDisabled(this: HTMLInputElement): void;

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
        type SelectorSettings = SelectorSettings.Param;

        namespace SelectorSettings {
            type Param = (Pick<_Impl, 'input'> |
                Pick<_Impl, 'label'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

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

        type ClassNameSettings = ClassNameSettings.Param;

        namespace ClassNameSettings {
            type Param = (Pick<_Impl, 'checked'> |
                Pick<_Impl, 'disabled'> |
                Pick<_Impl, 'radio'> |
                Pick<_Impl, 'readOnly'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

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
