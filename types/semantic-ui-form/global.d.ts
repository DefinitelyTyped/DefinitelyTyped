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
         * Returns true/false whether a field passes its validation rules
         */
        (behavior: 'is valid', field: string): boolean;
        /**
         * Adds rule to existing rules for field
         * @since 2.2.11
         */
        (behavior: 'add rule', field: string, rules: string | string[] | Form.Rules): JQuery;
        /**
         * Adds rule to existing rules for field
         * @since 2.2.11
         */
        (behavior: 'add field', field: string, rules: string | string[] | Form.Rules): JQuery;
        /**
         * Adds fields object to existing fields
         * @since 2.2.11
         */
        (behavior: 'add fields', fields: Form.Fields): JQuery;
        /**
         * Removes specific rule from field leaving other rules
         * @since 2.2.11
         */
        (behavior: 'remove rule', field: string, rule: Form.Rule): JQuery;
        /**
         * Remove all validation for a field
         * @since 2.2.11
         */
        (behavior: 'remove field', field: string): JQuery;
        /**
         * @since 2.2.11
         */
        (behavior: 'remove rules', fields: string | string[], rules: Form.Rule[]): JQuery;
        /**
         * @since 2.2.11
         */
        (behavior: 'remove fields', fields: string[]): JQuery;
        /**
         * Adds error prompt to the field with the given identifier
         */
        (behavior: 'add prompt', identifier: string, errors: string | string[]): JQuery;
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
        <K extends keyof FormSettings>(behavior: 'setting', name: K, value?: undefined): FormSettings._Impl[K];
        <K extends keyof FormSettings>(behavior: 'setting', name: K, value: FormSettings._Impl[K]): JQuery;
        (behavior: 'setting', value: FormSettings): JQuery;
        (settings?: FormSettings | Form.Fields): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/behaviors/form.html#/settings}
     */
    type FormSettings = FormSettings.Param;

    namespace FormSettings {
        type Param = (Pick<_Impl, 'keyboardShortcuts'> |
            Pick<_Impl, 'on'> |
            Pick<_Impl, 'revalidate'> |
            Pick<_Impl, 'delay'> |
            Pick<_Impl, 'inline'> |
            Pick<_Impl, 'transition'> |
            Pick<_Impl, 'duration'> |
            Pick<_Impl, 'fields'> |
            Pick<_Impl, 'text'> |
            Pick<_Impl, 'prompt'> |
            Pick<_Impl, 'onValid'> |
            Pick<_Impl, 'onInvalid'> |
            Pick<_Impl, 'onSuccess'> |
            Pick<_Impl, 'onFailure'> |
            Pick<_Impl, 'templates'> |
            Pick<_Impl, 'rules'> |
            Pick<_Impl, 'selector'> |
            Pick<_Impl, 'metadata'> |
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
            defaults: {
                [name: string]: Form.Field;
            };

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
            onSuccess(this: JQuery, event: JQuery.Event<HTMLElement>, fields: any): void;
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
            optional?: boolean;
            rules: Rule[];
        }

        interface Rule {
            type: string;
            prompt: string;
        }

        interface Fields {
            [name: string]: string | string[];
        }

        interface Rules {
            rules: Rule[];
        }

        type TextSettings = TextSettings.Param;

        namespace TextSettings {
            type Param = (Pick<_Impl, 'unspecifiedRule'> |
                Pick<_Impl, 'unspecifiedField'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

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

        type PromptSettings = PromptSettings.Param;

        namespace PromptSettings {
            type Param = (Pick<_Impl, 'empty'> |
                Pick<_Impl, 'checked'> |
                Pick<_Impl, 'email'> |
                Pick<_Impl, 'url'> |
                Pick<_Impl, 'regExp'> |
                Pick<_Impl, 'integer'> |
                Pick<_Impl, 'decimal'> |
                Pick<_Impl, 'number'> |
                Pick<_Impl, 'is'> |
                Pick<_Impl, 'isExactly'> |
                Pick<_Impl, 'not'> |
                Pick<_Impl, 'notExactly'> |
                Pick<_Impl, 'contain'> |
                Pick<_Impl, 'containExactly'> |
                Pick<_Impl, 'doesntContain'> |
                Pick<_Impl, 'doesntContainExactly'> |
                Pick<_Impl, 'minLength'> |
                Pick<_Impl, 'length'> |
                Pick<_Impl, 'exactLength'> |
                Pick<_Impl, 'maxLength'> |
                Pick<_Impl, 'match'> |
                Pick<_Impl, 'different'> |
                Pick<_Impl, 'creditCard'> |
                Pick<_Impl, 'minCount'> |
                Pick<_Impl, 'exactCount'> |
                Pick<_Impl, 'maxCount'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

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

        type TemplatesSettings = TemplatesSettings.Param;

        namespace TemplatesSettings {
            type Param = (Pick<_Impl, 'error'> |
                Pick<_Impl, 'prompt'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                error(errors: string[]): JQuery;
                prompt(errors: string[]): JQuery;
            }
        }

        type SelectorSettings = SelectorSettings.Param;

        namespace SelectorSettings {
            type Param = (Pick<_Impl, 'message'> |
                Pick<_Impl, 'field'> |
                Pick<_Impl, 'group'> |
                Pick<_Impl, 'input'> |
                Pick<_Impl, 'prompt'> |
                Pick<_Impl, 'submit'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

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

        type MetadataSettings = MetadataSettings.Param;

        namespace MetadataSettings {
            type Param = (Pick<_Impl, 'validate'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default 'validate'
                 */
                validate: string;
            }
        }

        type ClassNameSettings = ClassNameSettings.Param;

        namespace ClassNameSettings {
            type Param = (Pick<_Impl, 'active'> |
                Pick<_Impl, 'placeholder'> |
                Pick<_Impl, 'disabled'> |
                Pick<_Impl, 'visible'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

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
