interface JQuery {
    dropdown: SemanticUI.Dropdown;
}

declare namespace SemanticUI {
    // TODO: Should 'value'/'values' parameters be of type 'string' instead of 'any'?

    interface Dropdown {
        settings: DropdownSettings;

        /**
         * Recreates dropdown menu from select option values.
         */
        (behavior: 'setup menu'): JQuery;
        /**
         * Refreshes all cached selectors and data
         */
        (behavior: 'refresh'): JQuery;
        /**
         * Toggles current visibility of dropdown
         */
        (behavior: 'toggle'): JQuery;
        /**
         * Shows dropdown
         */
        (behavior: 'show'): JQuery;
        /**
         * Hides dropdown
         */
        (behavior: 'hide'): JQuery;
        /**
         * Clears dropdown of selection
         */
        (behavior: 'clear'): JQuery;
        /**
         * Hides all other dropdowns that is not current dropdown
         */
        (behavior: 'hide others'): JQuery;
        /**
         * Restores dropdown text and value to its value on page load
         */
        (behavior: 'restore defaults'): JQuery;
        /**
         * Restores dropdown text to its value on page load
         */
        (behavior: 'restore default text'): JQuery;
        /**
         * Restores dropdown text to its prompt, placeholder text
         */
        (behavior: 'restore placeholder text'): JQuery;
        /**
         * Restores dropdown value to its value on page load
         */
        (behavior: 'restore default value'): JQuery;
        /**
         * Saves current text and value as new defaults (for use with restore)
         */
        (behavior: 'save defaults'): JQuery;
        /**
         * Sets value as selected
         */
        (behavior: 'set selected', value: any): JQuery;
        /**
         * Remove value from selected
         */
        (behavior: 'remove selected', value: any): JQuery;
        /**
         * Adds a group of values as selected
         */
        (behavior: 'set selected', values: any[]): JQuery;
        /**
         * Sets selected values to exactly specified values, removing current selection
         */
        (behavior: 'set exactly', values: any[]): JQuery;
        /**
         * Sets dropdown text to a value
         */
        (behavior: 'set text', text: string): JQuery;
        /**
         * Sets dropdown input to value (does not update display state)
         */
        (behavior: 'set value', value: any): JQuery;
        /**
         * Returns current dropdown text
         */
        (behavior: 'get text'): string;
        /**
         * Returns current dropdown input value
         */
        (behavior: 'get value'): any;
        /**
         * Returns DOM element that matches a given input value
         */
        (behavior: 'get item', value: any): JQuery;
        /**
         * Adds touch events to element
         */
        (behavior: 'bind touch events'): JQuery;
        /**
         * Adds mouse events to element
         */
        (behavior: 'bind mouse events'): JQuery;
        /**
         * Binds a click to document to determine if you click away from a dropdown
         */
        (behavior: 'bind intent'): JQuery;
        /**
         * Unbinds document intent click
         */
        (behavior: 'unbind intent'): JQuery;
        /**
         * Returns whether event occurred inside dropdown
         */
        (behavior: 'determine intent'): boolean;
        /**
         * Triggers preset item selection action based on settings passing text/value
         */
        (behavior: 'determine select action', text: string, value: any): JQuery;
        /**
         * Sets dropdown to active state
         */
        (behavior: 'set active'): JQuery;
        /**
         * Sets dropdown to visible state
         */
        (behavior: 'set visible'): JQuery;
        /**
         * Removes dropdown active state
         */
        (behavior: 'remove active'): JQuery;
        /**
         * Removes dropdown visible state
         */
        (behavior: 'remove visible'): JQuery;
        /**
         * Returns whether dropdown is a selection dropdown
         */
        (behavior: 'is selection'): boolean;
        /**
         * Returns whether dropdown is animated
         */
        (behavior: 'is animated'): boolean;
        /**
         * Returns whether dropdown is visible
         */
        (behavior: 'is visible'): boolean;
        /**
         * Returns whether dropdown is hidden
         */
        (behavior: 'is hidden'): boolean;
        /**
         * Returns dropdown value as set on page load
         */
        (behavior: 'get default text'): string;
        /**
         * Returns placeholder text
         */
        (behavior: 'get placeholder text'): string;
        (behavior: 'destroy'): JQuery;
        <K extends keyof DropdownSettings>(behavior: 'setting', name: K, value?: undefined): DropdownSettings._Impl[K];
        <K extends keyof DropdownSettings>(behavior: 'setting', name: K, value: DropdownSettings._Impl[K]): JQuery;
        (behavior: 'setting', value: DropdownSettings): JQuery;
        (settings?: DropdownSettings): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/modules/dropdown.html#/settings}
     */
    type DropdownSettings = DropdownSettings.Param;

    namespace DropdownSettings {
        type Param = (Pick<_Impl, 'on'> |
            Pick<_Impl, 'allowReselection'> |
            Pick<_Impl, 'allowAdditions'> |
            Pick<_Impl, 'hideAdditions'> |
            Pick<_Impl, 'action'> |
            Pick<_Impl, 'minCharacters'> |
            Pick<_Impl, 'match'> |
            Pick<_Impl, 'selectOnKeydown'> |
            Pick<_Impl, 'forceSelection'> |
            Pick<_Impl, 'allowCategorySelection'> |
            Pick<_Impl, 'placeholder'> |
            Pick<_Impl, 'apiSettings'> |
            Pick<_Impl, 'fields'> |
            Pick<_Impl, 'saveRemoteData'> |
            Pick<_Impl, 'filterRemoteData'> |
            Pick<_Impl, 'useLabels'> |
            Pick<_Impl, 'maxSelections'> |
            Pick<_Impl, 'glyphWidth'> |
            Pick<_Impl, 'label'> |
            Pick<_Impl, 'direction'> |
            Pick<_Impl, 'keepOnScreen'> |
            Pick<_Impl, 'context'> |
            Pick<_Impl, 'fullTextSearch'> |
            Pick<_Impl, 'preserveHTML'> |
            Pick<_Impl, 'sortSelect'> |
            Pick<_Impl, 'showOnFocus'> |
            Pick<_Impl, 'allowTab'> |
            Pick<_Impl, 'transition'> |
            Pick<_Impl, 'duration'> |
            Pick<_Impl, 'keys'> |
            Pick<_Impl, 'delay'> |
            Pick<_Impl, 'onChange'> |
            Pick<_Impl, 'onAdd'> |
            Pick<_Impl, 'onRemove'> |
            Pick<_Impl, 'onLabelCreate'> |
            Pick<_Impl, 'onLabelRemove'> |
            Pick<_Impl, 'onLabelSelect'> |
            Pick<_Impl, 'onNoResults'> |
            Pick<_Impl, 'onShow'> |
            Pick<_Impl, 'onHide'> |
            Pick<_Impl, 'message'> |
            Pick<_Impl, 'selector'> |
            Pick<_Impl, 'regExp'> |
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
            // region Frequently Used Settings

            /**
             * Event used to trigger dropdown (Hover, Click, Custom Event)
             *
             * @default 'click'
             */
            on: string;
            /**
             * When set to true will fire onChange even when the value a user select matches the currently selected value.
             *
             * @default false
             */
            allowReselection: boolean;
            /**
             * Whether search selection should allow users to add their own selections, works for single or multi-select.
             *
             * @default false
             */
            allowAdditions: boolean;
            /**
             * When disabled user additions will appear in the results menu using a specially formatted selection item formatted by templates.addition.
             *
             * @default true
             */
            hideAdditions: boolean;
            /**
             * Sets a default action to occur. (See usage guide)
             *
             * @default 'activate'
             * @see {@link http://semantic-ui.com/modules/dropdown.html#/usage}
             */
            action: 'activate' | 'select' | 'combo' | 'nothing' | 'hide' | ((this: JQuery, text: string, value: string | false, element: JQuery) => void);
            /**
             * The minimum characters for a search to begin showing results
             *
             * @default 1
             */
            minCharacters: number;
            /**
             * When using search selection specifies how to match values.
             *
             * @default 'both'
             */
            match: 'both' | 'value' | 'text';
            /**
             * Whether dropdown should select new option when using keyboard shortcuts. Setting to false will require enter or left click to confirm a choice.
             *
             * @default true
             */
            selectOnKeydown: boolean;
            /**
             * Whether search selection will force currently selected choice when element is blurred.
             *
             * @default true
             */
            forceSelection: boolean;
            /**
             * Whether menu items with sub-menus (categories) should be selectable
             *
             * @default false
             */
            allowCategorySelection: boolean;
            /**
             * @default 'auto'
             */
            placeholder: 'auto' | 'value' | false;

            // endregion

            // region Remote Settings

            /**
             * Can be set to an object to specify API settings for retrieving remote selection menu content from an API endpoint
             *
             * @default false
             * @see {@link http://semantic-ui.com/behaviors/api.html}
             */
            apiSettings: false | ApiSettings;
            /**
             * List mapping dropdown content to JSON Property when using API
             */
            fields: Dropdown.FieldsSettings;
            /**
             * When enabled will automatically store selected name/value pairs in sessionStorage to preserve user selection on page refresh. Disabling will clear remote dropdown values on refresh.
             *
             * @default true
             */
            saveRemoteData: boolean;
            /**
             * When set to true API will be expected to return the complete result set, which will then be filtered clientside to only display matching results.
             *
             * @default false
             * @since 2.2.8
             */
            filterRemoteData: boolean;

            // endregion

            // region Multiple Select Settings

            /**
             * Whether multiselect should use labels. Must be set to true when allowAdditions is true
             *
             * @default true
             */
            useLabels: boolean;
            /**
             * When set to a number, sets the maximum number of selections
             *
             * @default false
             */
            maxSelections: false | number;
            /**
             * Maximum glyph width, used to calculate search size. This is usually size of a "W" in your font in em
             *
             * @default 1.0714
             */
            glyphWidth: number;
            /**
             * Allows customization of multi-select labels
             */
            label: Dropdown.LabelSettings;

            // endregion

            // region Additional Settings

            /**
             * When set to auto determines direction based on whether dropdown can fit on screen. Set to upward or downward to always force a direction.
             *
             * @default 'auto'
             */
            direction: 'auto' | 'upward' | 'downward';
            /**
             * Whether dropdown should try to keep itself on screen by checking whether menus display position in its context (Default context is page).
             *
             * @default true
             */
            keepOnScreen: boolean;
            /**
             * Element context to use when checking whether can show when keepOnScreen: true
             *
             * @default 'window'
             */
            context: string | JQuery;
            /**
             * Specifying to "true" will use a fuzzy full text search, setting to "exact" will force the exact search to be matched somewhere in the string
             *
             * @default false
             */
            fullTextSearch: boolean | 'exact';
            /**
             * Whether HTML included in dropdown values should be preserved. (Allows icons to show up in selected value)
             *
             * @default true
             */
            preserveHTML: boolean;
            /**
             * Whether to sort values when creating a dropdown automatically from a select element.
             *
             * @default false
             */
            sortSelect: boolean;
            /**
             * Whether to show dropdown menu automatically on element focus.
             *
             * @default true
             */
            showOnFocus: boolean;
            /**
             * Whether to allow the element to be navigable by keyboard, by automatically creating a tabindex
             *
             * @default true
             */
            allowTab: boolean;
            /**
             * Named transition to use when animating menu in and out.
             * Defaults to slide down or slide up depending on dropdown direction.
             * Fade and slide down are available without including ui transitions
             *
             * @default 'auto'
             * @see {@link http://semantic-ui.com/modules/transition.html}
             */
            transition: 'auto' | string;
            /**
             * Duration of animation events
             *
             * @default 200
             */
            duration: number;
            /**
             * The keycode used to represent keyboard shortcuts. To avoid issues with some foreign languages, you can pass false for comma delimiter's value
             */
            keys: Dropdown.KeySettings;
            /**
             * Time in milliseconds to debounce show or hide behavior when on: hover is used, or when touch is used.
             */
            delay: Dropdown.DelaySettings;

            // endregion

            // region Callbacks

            /**
             * Is called after a dropdown value changes. Receives the name and value of selection and the active menu element
             */
            onChange(this: JQuery, value: any, text: string, $choice: JQuery): void;
            /**
             * Is called after a dropdown selection is added using a multiple select dropdown, only receives the added value
             */
            onAdd(this: JQuery, addedValue: any, addedText: string, $addedChoice: JQuery): void;
            /**
             * Is called after a dropdown selection is removed using a multiple select dropdown, only receives the removed value
             */
            onRemove(this: JQuery, removedValue: any, removedText: string, $removedChoice: JQuery): void;
            /**
             * Allows you to modify a label before it is added. Expects the jQ DOM element for a label to be returned.
             */
            onLabelCreate(this: JQuery, value: any, text: string): JQuery;
            /**
             * Called when a label is remove, return false; will prevent the label from being removed.
             */
            onLabelRemove(this: JQuery, value: any): false | void;
            /**
             * Is called after a label is selected by a user
             */
            onLabelSelect(this: JQuery, $selectedLabels: JQuery): void;
            /**
             * Is called after a dropdown is searched with no matching values
             */
            onNoResults(this: JQuery, searchValue: any): void;
            /**
             * Is called before a dropdown is shown. If false is returned, dropdown will not be shown.
             */
            onShow(this: JQuery): false | void;
            /**
             * Is called before a dropdown is hidden. If false is returned, dropdown will not be hidden.
             */
            onHide(this: JQuery): false | void;

            // endregion

            // region DOM Settings

            /**
             * You can specify site wide messages by modifying $.fn.dropdown.settings.message that will apply on any dropdown if it appears in the page.
             */
            message: Dropdown.MessageSettings;
            selector: Dropdown.SelectorSettings;
            regExp: Dropdown.RegExpSettings;
            metadata: Dropdown.MetadataSettings;
            className: Dropdown.ClassNameSettings;

            // endregion

            // region Debug Settings

            error: Dropdown.ErrorSettings;

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

    namespace Dropdown {
        type FieldsSettings = FieldsSettings.Param;

        namespace FieldsSettings {
            type Param = (Pick<_Impl, 'remoteValues'> |
                Pick<_Impl, 'values'> |
                Pick<_Impl, 'name'> |
                Pick<_Impl, 'value'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * grouping for api results
                 *
                 * @default 'results'
                 */
                remoteValues: string;
                /**
                 * grouping for all dropdown values
                 *
                 * @default 'values'
                 */
                values: string;
                /**
                 * displayed dropdown text
                 *
                 * @default 'name'
                 */
                name: string;
                /**
                 * actual dropdown value
                 *
                 * @default 'value'
                 */
                value: string;
            }
        }

        type LabelSettings = LabelSettings.Param;

        namespace LabelSettings {
            type Param = (Pick<_Impl, 'transition'> |
                Pick<_Impl, 'duration'> |
                Pick<_Impl, 'variation'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default 'horizontal flip'
                 */
                transition: string;
                /**
                 * @default 200
                 */
                duration: number;
                /**
                 * @default false
                 */
                variation: false | string;
            }
        }

        type KeySettings = KeySettings.Param;

        namespace KeySettings {
            type Param = (Pick<_Impl, 'backspace'> |
                Pick<_Impl, 'delimiter'> |
                Pick<_Impl, 'deleteKey'> |
                Pick<_Impl, 'enter'> |
                Pick<_Impl, 'escape'> |
                Pick<_Impl, 'pageUp'> |
                Pick<_Impl, 'pageDown'> |
                Pick<_Impl, 'leftArrow'> |
                Pick<_Impl, 'upArrow'> |
                Pick<_Impl, 'rightArrow'> |
                Pick<_Impl, 'downArrow'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default 8
                 */
                backspace: number;
                /**
                 * @default 188
                 */
                delimiter: number | false;
                /**
                 * @default 46
                 */
                deleteKey: number;
                /**
                 * @default 13
                 */
                enter: number;
                /**
                 * @default 27
                 */
                escape: number;
                /**
                 * @default 33
                 */
                pageUp: number;
                /**
                 * @default 34
                 */
                pageDown: number;
                /**
                 * @default 37
                 */
                leftArrow: number;
                /**
                 * @default 38
                 */
                upArrow: number;
                /**
                 * @default 39
                 */
                rightArrow: number;
                /**
                 * @default 40
                 */
                downArrow: number;
            }
        }

        type DelaySettings = DelaySettings.Param;

        namespace DelaySettings {
            type Param = (Pick<_Impl, 'hide'> |
                Pick<_Impl, 'show'> |
                Pick<_Impl, 'search'> |
                Pick<_Impl, 'touch'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default 300
                 */
                hide: number;
                /**
                 * @default 200
                 */
                show: number;
                /**
                 * @default 50
                 */
                search: number;
                /**
                 * @default 50
                 */
                touch: number;
            }
        }

        type MessageSettings = MessageSettings.Param;

        namespace MessageSettings {
            type Param = (Pick<_Impl, 'addResult'> |
                Pick<_Impl, 'count'> |
                Pick<_Impl, 'maxSelections'> |
                Pick<_Impl, 'noResults'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default 'Add <b>{term}</b>'
                 */
                addResult: string;
                /**
                 * @default '{count} selected'
                 */
                count: string;
                /**
                 * @default 'Max {maxCount} selections'
                 */
                maxSelections: string;
                /**
                 * 'No results found.'
                 */
                noResults: string;
            }
        }

        type SelectorSettings = SelectorSettings.Param;

        namespace SelectorSettings {
            type Param = (Pick<_Impl, 'addition'> |
                Pick<_Impl, 'dropdown'> |
                Pick<_Impl, 'icon'> |
                Pick<_Impl, 'input'> |
                Pick<_Impl, 'item'> |
                Pick<_Impl, 'label'> |
                Pick<_Impl, 'remove'> |
                Pick<_Impl, 'siblingLabel'> |
                Pick<_Impl, 'menu'> |
                Pick<_Impl, 'message'> |
                Pick<_Impl, 'menuIcon'> |
                Pick<_Impl, 'search'> |
                Pick<_Impl, 'text'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default '.addition'
                 */
                addition: string;
                /**
                 * @default '.ui.dropdown'
                 */
                dropdown: string;
                /**
                 * @default '> .dropdown.icon'
                 */
                icon: string;
                /**
                 * @default '> input[type="hidden"], > select'
                 */
                input: string;
                /**
                 * @default '.item'
                 */
                item: string;
                /**
                 * @default '> .label'
                 */
                label: string;
                /**
                 * @default '> .label > .delete.icon'
                 */
                remove: string;
                /**
                 * @default '.label'
                 */
                siblingLabel: string;
                /**
                 * @default '.menu'
                 */
                menu: string;
                /**
                 * @default '.message'
                 */
                message: string;
                /**
                 * @default '.dropdown.icon'
                 */
                menuIcon: string;
                /**
                 * @default 'input.search, .menu > .search > input'
                 */
                search: string;
                /**
                 * @default '> .text:not(.icon)'
                 */
                text: string;
            }
        }

        type RegExpSettings = RegExpSettings.Param;

        namespace RegExpSettings {
            type Param = (Pick<_Impl, 'escape'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default /[-[\]{}()*+?.,\\^$|#\s]/g
                 */
                escape: RegExp;
            }
        }

        type MetadataSettings = MetadataSettings.Param;

        namespace MetadataSettings {
            type Param = (Pick<_Impl, 'defaultText'> |
                Pick<_Impl, 'defaultValue'> |
                Pick<_Impl, 'placeholderText'> |
                Pick<_Impl, 'text'> |
                Pick<_Impl, 'value'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default 'defaultText'
                 */
                defaultText: string;
                /**
                 * @default 'defaultValue'
                 */
                defaultValue: string;
                /**
                 * @default 'placeholderText'
                 */
                placeholderText: string;
                /**
                 * @default 'text'
                 */
                text: string;
                /**
                 * @default 'value'
                 */
                value: string;
            }
        }

        type ClassNameSettings = ClassNameSettings.Param;

        namespace ClassNameSettings {
            type Param = (Pick<_Impl, 'active'> |
                Pick<_Impl, 'addition'> |
                Pick<_Impl, 'animating'> |
                Pick<_Impl, 'disabled'> |
                Pick<_Impl, 'dropdown'> |
                Pick<_Impl, 'filtered'> |
                Pick<_Impl, 'hidden'> |
                Pick<_Impl, 'item'> |
                Pick<_Impl, 'label'> |
                Pick<_Impl, 'loading'> |
                Pick<_Impl, 'menu'> |
                Pick<_Impl, 'message'> |
                Pick<_Impl, 'multiple'> |
                Pick<_Impl, 'placeholder'> |
                Pick<_Impl, 'search'> |
                Pick<_Impl, 'selected'> |
                Pick<_Impl, 'selection'> |
                Pick<_Impl, 'upward'> |
                Pick<_Impl, 'visible'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default 'active'
                 */
                active: string;
                /**
                 * @default 'addition'
                 */
                addition: string;
                /**
                 * @default 'animating'
                 */
                animating: string;
                /**
                 * @default 'disabled'
                 */
                disabled: string;
                /**
                 * @default 'ui dropdown'
                 */
                dropdown: string;
                /**
                 * @default 'filtered'
                 */
                filtered: string;
                /**
                 * @default 'hidden transition'
                 */
                hidden: string;
                /**
                 * @default 'item'
                 */
                item: string;
                /**
                 * @default 'ui label'
                 */
                label: string;
                /**
                 * @default 'loading'
                 */
                loading: string;
                /**
                 * @default 'menu'
                 */
                menu: string;
                /**
                 * @default 'message'
                 */
                message: string;
                /**
                 * @default 'multiple'
                 */
                multiple: string;
                /**
                 * @default 'default'
                 */
                placeholder: string;
                /**
                 * @default 'search'
                 */
                search: string;
                /**
                 * @default 'selected'
                 */
                selected: string;
                /**
                 * @default 'selection'
                 */
                selection: string;
                /**
                 * @default 'upward'
                 */
                upward: string;
                /**
                 * @default 'visible'
                 */
                visible: string;
            }
        }

        type ErrorSettings = ErrorSettings.Param;

        namespace ErrorSettings {
            type Param = (Pick<_Impl, 'action'> |
                Pick<_Impl, 'alreadySetup'> |
                Pick<_Impl, 'labels'> |
                Pick<_Impl, 'method'> |
                Pick<_Impl, 'noTransition'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default 'You called a dropdown action that was not defined'
                 */
                action: string;
                /**
                 * @default 'Once a select has been initialized behaviors must be called on the created ui dropdown'
                 */
                alreadySetup: string;
                /**
                 * @default 'Allowing user additions currently requires the use of labels.'
                 */
                labels: string;
                /**
                 * @default 'The method you called is not defined.'
                 */
                method: string;
                /**
                 * @default 'This module requires ui transitions <https: github.com="" semantic-org="" ui-transition="">'
                 */
                noTransition: string;
            }
        }
    }
}
