interface JQuery {
    form: SemanticUI.Form;
}

declare namespace SemanticUI {
    interface Form {
        settings: FormSettings;

        /**
         * Submits selected form
         */
        (behavior: 'submit'): JQuery;
        /**
         * Returns true/false whether a form passes its validation rules
         */
        (behavior: 'is valid'): boolean;
        /**
         * Validates form and calls onSuccess or onFailure
         */
        (behavior: 'validate form'): JQuery;
        /**
         * gets browser property change event
         */
        (behavior: 'get change event'): string;
        /**
         * Returns element with matching name, id, or data-validate metadata to ID
         */
        (behavior: 'get field', id: string): JQuery;
        /**
         * Returns value of element with id
         */
        (behavior: 'get value', id: string): any;
        /**
         * Returns object of element values that match array of ids. If no IDS are passed will return all fields
         */
        (behavior: 'get values', ids?: string[]): any;
        /**
         * Sets value of element with id
         */
        (behavior: 'set value', id: string): JQuery;
        /**
         * Sets key/value pairs from passed values object to matching ids
         */
        (behavior: 'set values', values: any): JQuery;
        /**
         * Returns validation rules for a given jQuery-referenced input field
         */
        (behavior: 'get validation', element: JQuery): any;
        /**
         * Returns whether a field exists
         */
        (behavior: 'has field', identifier: string): boolean;
        /**
         * Adds errors to form, given an array errors
         */
        (behavior: 'add errors', errors: string[]): JQuery;
        (behavior: 'destroy'): JQuery;
        <K extends keyof FormSettings>(behavior: 'setting', name: K, value?: undefined): FormSettings[K];
        <K extends keyof FormSettings>(behavior: 'setting', name: K, value: FormSettings[K]): JQuery;
        (behavior: 'setting', value: FormSettings.Param): JQuery;
        (settings?: FormSettings.Param): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/behaviors/form.html#/settings}
     */
    interface FormSettings extends Pick<FormSettings._Impl, keyof FormSettings._Impl> { }

    namespace FormSettings {
        type Param = FormSettings | object;

        interface _Impl {
            // region Form Settings

            /**
             * Adds keyboard shortcuts for enter and escape keys to submit form and blur fields respectively
             *
             * @default true
             */
            keyboardShortcuts: boolean;
            /**
             * Event used to trigger validation. Can be either submit, blur or change.
             *
             * @default 'submit'
             */
            on: 'submit' | 'blur' | 'change';
            /**
             * If set to true will revalidate fields with errors on input change
             *
             * @default true
             */
            revalidate: boolean;
            /**
             * Delay from last typed letter to validate a field when using on: change or when revalidating a field.
             *
             * @default true
             */
            delay: boolean;
            /**
             * Adds inline error on field validation error
             *
             * @default false
             */
            inline: boolean;
            /**
             * Named transition to use when animating validation errors. Fade and slide down are available without including ui transitions
             *
             * @default 'scale'
             * @see {@link http://semantic-ui.com/modules/transition.html}
             */
            transition: string;
            /**
             * Animation speed for inline prompt
             *
             * @default 150
             */
            duration: number;
            fields: {
                [name: string]: string | string[] | Form.Field;
            };

            // endregion

            // region Form Prompts

            text: Form.TextSettings;
            prompt: Form.PromptSettings;

            // endregion

            // region Callbacks

            /**
             * Callback on each valid field
             */
            onValid(this: JQuery): void;
            /**
             * Callback on each invalid field
             */
            onInvalid(this: JQuery): void;
            /**
             * Callback if a form is all valid
             */
            onSuccess(this: JQuery, event: JQueryEventObject, fields: any): void;
            /**
             * Callback if any form field is invalid
             */
            onFailure(this: JQuery, formErrors: string[], fields: any): void;

            // endregion

            // region Templates

            templates: Form.TemplatesSettings;

            // endregion

            // region Rules

            rules: {
                [name: string]: (this: HTMLElement, ...args: any[]) => boolean;
            };

            // endregion

            // region DOM Settings

            /**
             * Selectors used to match functionality to DOM
             */
            selector: Form.SelectorSettings;
            /**
             * HTML5 metadata attributes
             */
            metadata: Form.MetadataSettings;
            /**
             * Class names used to attach style to state
             */
            className: Form.ClassNameSettings;

            // endregion

            // region Debug Settings

            error: Form.ErrorSettings;

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

    namespace Form {
        interface Field {
            identifier: string;
            rules: Rule[];
        }

        interface Rule {
            type: string;
            prompt: string;
        }

        interface TextSettings extends Pick<TextSettings._Impl, keyof TextSettings._Impl> { }

        namespace TextSettings {
            type Param = TextSettings | object;

            interface _Impl {
                /**
                 * @default 'Please enter a valid value'
                 */
                unspecifiedRule: string;
                /**
                 * @default 'This field'
                 */
                unspecifiedField: string;
            }
        }

        interface PromptSettings extends Pick<PromptSettings._Impl, keyof PromptSettings._Impl> { }

        namespace PromptSettings {
            type Param = PromptSettings | object;

            interface _Impl {
                /**
                 * @default '{name} must have a value'
                 */
                empty: string;
                /**
                 * @default '{name} must be checked'
                 */
                checked: string;
                /**
                 * @default '{name} must be a valid e-mail'
                 */
                email: string;
                /**
                 * @default '{name} must be a valid url'
                 */
                url: string;
                /**
                 * @default '{name} is not formatted correctly'
                 */
                regExp: string;
                /**
                 * @default '{name} must be an integer'
                 */
                integer: string;
                /**
                 * @default '{name} must be a decimal number'
                 */
                decimal: string;
                /**
                 * @default '{name} must be set to a number'
                 */
                number: string;
                /**
                 * @default '{name} must be \'{ruleValue}\''
                 */
                is: string;
                /**
                 * @default '{name} must be exactly \'{ruleValue}\''
                 */
                isExactly: string;
                /**
                 * @default '{name} cannot be set to \'{ruleValue}\''
                 */
                not: string;
                /**
                 * @default '{name} cannot be set to exactly \'{ruleValue}\''
                 */
                notExactly: string;
                /**
                 * @default '{name} cannot contain \'{ruleValue}\''
                 */
                contain: string;
                /**
                 * @default '{name} cannot contain exactly \'{ruleValue}\''
                 */
                containExactly: string;
                /**
                 * @default '{name} must contain  \'{ruleValue}\''
                 */
                doesntContain: string;
                /**
                 * @default '{name} must contain exactly \'{ruleValue}\''
                 */
                doesntContainExactly: string;
                /**
                 * @default '{name} must be at least {ruleValue} characters'
                 */
                minLength: string;
                /**
                 * @default '{name} must be at least {ruleValue} characters'
                 */
                length: string;
                /**
                 * @default '{name} must be exactly {ruleValue} characters'
                 */
                exactLength: string;
                /**
                 * @default '{name} cannot be longer than {ruleValue} characters'
                 */
                maxLength: string;
                /**
                 * @default '{name} must match {ruleValue} field'
                 */
                match: string;
                /**
                 * @default '{name} must have a different value than {ruleValue} field'
                 */
                different: string;
                /**
                 * @default '{name} must be a valid credit card number'
                 */
                creditCard: string;
                /**
                 * @default '{name} must have at least {ruleValue} choices'
                 */
                minCount: string;
                /**
                 * @default '{name} must have exactly {ruleValue} choices'
                 */
                exactCount: string;
                /**
                 * @default '{name} must have {ruleValue} or less choices'
                 */
                maxCount: string;
            }
        }

        interface TemplatesSettings extends Pick<TemplatesSettings._Impl, keyof TemplatesSettings._Impl> { }

        namespace TemplatesSettings {
            type Param = TemplatesSettings | object;

            interface _Impl {
                error(errors: string[]): JQuery;
                prompt(errors: string[]): JQuery;
            }
        }

        interface SelectorSettings extends Pick<SelectorSettings._Impl, keyof SelectorSettings._Impl> { }

        namespace SelectorSettings {
            type Param = SelectorSettings | object;

            interface _Impl {
                /**
                 * @default '.error.message'
                 */
                message: string;
                /**
                 * @default 'input, textarea, select'
                 */
                field: string;
                /**
                 * @default '.field'
                 */
                group: string;
                /**
                 * @default 'input'
                 */
                input: string;
                /**
                 * @default '.prompt'
                 */
                prompt: string;
                /**
                 * @default '.submit'
                 */
                submit: string;
            }
        }

        interface MetadataSettings extends Pick<MetadataSettings._Impl, keyof MetadataSettings._Impl> { }

        namespace MetadataSettings {
            type Param = MetadataSettings | object;

            interface _Impl {
                /**
                 * @default 'validate'
                 */
                validate: string;
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
                 * @default 'default'
                 */
                placeholder: string;
                /**
                 * @default 'disabled'
                 */
                disabled: string;
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
                 * @default 'The method you called is not defined.'
                 */
                method: string;
            }
        }
    }
}
