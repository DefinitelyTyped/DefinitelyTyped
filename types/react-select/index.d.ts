// Type definitions for react-select 1.0
// Project: https://github.com/JedWatson/react-select
// Definitions by: ESQUIBET Hugo <https://github.com/Hesquibet/>, Gilad Gray <https://github.com/giladgray/>, Izaak Baker <https://github.com/iebaker/>, Tadas Dailyda <https://github.com/skirsdeda/>, Mark Vujevits <https://github.com/vujevits/>, Mike Deverell <https://github.com/devrelm/>, David Schkalee <https://github.com/misantronic/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';

export = ReactSelectClass;

declare namespace ReactSelectClass {
    export interface AutocompleteResult {
        /** the search-results to be displayed  */
        options: Option[],
        /** Should be set to true, if and only if a longer query with the same prefix
         * would return a subset of the results
         * If set to true, more specific queries will not be sent to the server.
         **/
        complete: boolean;
    }

    export interface Option {
        /** Text for rendering */
        label?: string;
        /** Value for searching */
        value?: string | number | boolean;
        /**
         * Allow this option to be cleared
         * @default true
         */
        clearableValue?: boolean;
        /**
         * Do not allow this option to be selected
         * @default false
         */
        disabled?: boolean;
    }

    export interface MenuRendererProps {
        /**
         * The currently focused option; should be visible in the menu by default.
         * default {}
         */
        focusedOption: Option;

        /**
         * Callback to focus a new option; receives the option as a parameter.
         */
        focusOption: (option: Option) => void;

        /**
         * Option labels are accessible with this string key.
         */
        labelKey: string;

        /**
         * Ordered array of options to render.
         */
        options: Option[];

        /**
         * Callback to select a new option; receives the option as a parameter.
         */
        selectValue: (option: Option) => void;

        /**
         * Array of currently selected options.
         */
        valueArray: Option[];
    }

    export interface ArrowRendererProps {
        /**
         * Arrow mouse down event handler.
         */
        onMouseDown: React.MouseEventHandler<{}>;
    }

    export interface ReactSelectProps extends React.Props<ReactSelectClass> {
        /**
         * text to display when `allowCreate` is true.
         * @default 'Add "{label}"?'
         */
        addLabelText?: string;
        /**
         * renders a custom drop-down arrow to be shown in the right-hand side of the select.
         * @default undefined
         */
        arrowRenderer?: (props: ArrowRendererProps) => React.ReactElement<any>;
        /**
         * blurs the input element after a selection has been made. Handy for lowering the keyboard on mobile devices.
         * @default false
         */
        autoBlur?: boolean;
        /**
         * autofocus the component on mount
         * @default false
         */
        autofocus?: boolean;
        /**
         *  If enabled, the input will expand as the length of its value increases
         */
        autosize?: boolean;
        /**
         * whether pressing backspace removes the last item when there is no input value
         * @default true
         */
        backspaceRemoves?: boolean;
        /**
         * Message to use for screenreaders to press backspace to remove the current item
         * {label} is replaced with the item label
         * @default "Press backspace to remove..."
         */
        backspaceToRemoveMessage?: string;
        /**
         * CSS className for the outer element
         */
        className?: string;
        /**
         * title for the "clear" control when `multi` is true
         * @default "Clear all"
         */
        clearAllText?: string;
        /**
         * title for the "clear" control
         * @default "Clear value"
         */
        clearValueText?: string;
        /**
         * whether it is possible to reset value. if enabled, an X button will appear at the right side.
         * @default true
         */
        clearable?: boolean;
        /**
         * delimiter to use to join multiple values
         * @default ","
         */
        delimiter?: string;
        /**
         * whether the Select is disabled or not
         * @default false
         */
        disabled?: boolean;
        /**
         * whether escape clears the value when the menu is closed
         * @default true
         */
        escapeClearsValue?: boolean;
        /**
         * method to filter a single option
         */
        filterOption?: (option: Option, filter: string) => Option;
        /**
         * method to filter the options array
         */
        filterOptions?: (options: Array<Option>, filter: string, currentValues: Array<Option>) => Array<Option>;
        /**
         * whether to strip diacritics when filtering
         * @default true
         */
        ignoreAccents?: boolean;
        /**
         * whether to perform case-insensitive filtering
         * @default true
         */
        ignoreCase?: boolean;
        /**
         * custom attributes for the Input (in the Select-control) e.g: {'data-foo': 'bar'}
         * @default {}
         */
        inputProps?: Object;
        /**
         * renders a custom input
         */
        inputRenderer?: (props: Object) => React.ReactElement<any>;
        /**
         * allows for synchronization of component id's on server and client.
         * @see https://github.com/JedWatson/react-select/pull/1105
         */
        instanceId?: string;
        /**
         * whether the Select is loading externally or not (such as options being loaded).
         * if true, a loading spinner will be shown at the right side.
         * @default false
         */
        isLoading?: boolean;
        /**
         * (legacy mode) joins multiple values into a single form field with the delimiter
         * @default false
         */
        joinValues?: boolean;
        /**
         * the option property to use for the label
         * @default "label"
         */
        labelKey?: string;
        /**
         * (any, start) match the start or entire string when filtering
         * @default "any"
         */
        matchPos?: string;
        /**
         * (any, label, value) which option property to filter on
         * @default "any"
         */
        matchProp?: string;
        /**
         * buffer of px between the base of the dropdown and the viewport to shift if menu doesnt fit in viewport
         * @default 0
         */
        menuBuffer?: number;
        /**
         * optional style to apply to the menu container
         */
        menuContainerStyle?: {}
        /**
         * renders a custom menu with options
         */
        menuRenderer?: (props: MenuRendererProps) => React.ReactElement<any>;
        /**
         * optional style to apply to the menu
         */
        menuStyle?: {}
        /**
         * multi-value input
         * @default false
         */
        multi?: boolean;
        /**
         * field name, for hidden `<input>` tag
         */
        name?: string;
        /**
         * placeholder displayed when there are no matching search results or a falsy value to hide it
         * @default "No results found"
         */
        noResultsText?: string;
        /**
         * onBlur handler: function (event) {}
         */
        onBlur?: React.FocusEventHandler<{}>;
        /**
         * whether to clear input on blur or not
         * @default true
         */
        onBlurResetsInput?: boolean;
        /**
         * onChange handler: function (newValue) {}
         */
        onChange?: (newValue: Option | Option[] | null) => void;
        /**
         * fires when the menu is closed
         */
        onClose?: () => void;
        /**
         * onFocus handler: function (event) {}
         */
        onFocus?: React.FocusEventHandler<{}>;
        /**
         * onInputChange handler: function (inputValue) {}
         */
        onInputChange?: (inputValue: string) => void;
        /**
         * onInputKeyDown handler: function (keyboardEvent) {}
         */
        onInputKeyDown?: (event: KeyboardEvent) => void;
        /**
         * fires when the menu is scrolled to the bottom; can be used to paginate options
         */
        onMenuScrollToBottom?: () => void;
        /**
         * fires when the menu is opened
         */
        onOpen?: () => void;
        /**
         * @deprecated use onValueClick isntead
         */
        onOptionLabelClick?: (value: string, event: Event) => void;
        /**
         * boolean to enable opening dropdown when focused
         * @default false
         */
        openAfterFocus?: boolean;
        /**
         * open the options menu when the input gets focus (requires searchable = true)
         * @default false
         */
        openOnFocus?: boolean;
        /**
         * className to add to each option component
         */
        optionClassName?: string;
        /**
         * option component to render in dropdown
         */
        optionComponent?: React.ComponentClass<any>;
        /**
         * function which returns a custom way to render the options in the menu
         */
        optionRenderer?: (option: Option) => JSX.Element;
        /**
         * array of Select options
         * @default false
         */
        options?: Array<Option>;
        /**
         * field placeholder, displayed when there's no value
         * @default "Select..."
         */
        placeholder?: string | React.ReactElement<any>;
        /**
         * whether the selected option is removed from the dropdown on multi selects
         * @default true
         */
        removeSelected?: boolean;
        /**
         * applies HTML5 required attribute when needed
         * @default false
         */
        required?: boolean;
        /**
         * value to use when you clear the control
         */
        resetValue?: any;
        /**
         * whether the viewport will shift to display the entire menu when engaged
         * @default true
         */
        scrollMenuIntoView?: boolean;
        /**
         * whether to enable searching feature or not
         * @default true;
         */
        searchable?: boolean;
        /**
         * whether to select the currently focused value when the  [tab]  key is pressed
         */
        tabSelectsValue?: boolean;
        /**
         * initial field value
         */
        value?: Option | Option[] | string | string[] | number | number[] | boolean;
        /**
         * the option property to use for the value
         * @default "value"
         */
        valueKey?: string;
        /**
         * function which returns a custom way to render the value selected
         * @default false
         */
        valueRenderer?: (option: Option) => JSX.Element;
        /**
         *  optional style to apply to the control
         */
        style?: any;

        /**
         *  optional tab index of the control
         */
        tabIndex?: string;

        /**
         *  value component to render
         */
        valueComponent?: React.ComponentClass<any>;

        /**
         *  optional style to apply to the component wrapper
         */
        wrapperStyle?: any;

        /**
         * onClick handler for value labels: function (value, event) {}
         */
        onValueClick?: (value: string, event: Event) => void;

        /**
         *  pass the value to onChange as a simple value (legacy pre 1.0 mode), defaults to false
         */
        simpleValue?: boolean;
    }

    export interface ReactCreatableSelectProps extends ReactSelectProps {
        /**
         * Searches for any matching option within the set of options. This function prevents
         * duplicate options from being created.
         */
        isOptionUnique?: (arg: { option: Option, options: Option[], labelKey: string, valueKey: string }) => boolean;

        /**
         * Determines if the current input text represents a valid option.
         */
        isValidNewOption?: (arg: { label: string }) => boolean;

        /**
         * factory to create new options
         */
        newOptionCreator?: (arg: { label: string, labelKey: string, valueKey: string }) => Option;

        /**
         * Creates prompt/placeholder for option text.
         */
        promptTextCreator?: (filterText: string) => string;

        /**
         * Decides if a keyDown event (eg its 'keyCode') should result in the creation of a new option.
         */
        shouldKeyDownEventCreateNewOption?: (arg: { keyCode: number }) => boolean;
    }


    export interface ReactAsyncSelectProps extends ReactSelectProps {
        /**
         * Whether to auto-load the default async options set.
         */
        autoload?: boolean;

        /**
         *  object to use to cache results; can be null to disable cache
         */
        cache?: Object | boolean;

        /**
         *  whether to strip diacritics when filtering (shared with Select)
         */
        ignoreAccents?: boolean;

        /**
         *  whether to perform case-insensitive filtering (shared with Select)
         */
        ignoreCase?: boolean;

        /**
         *  overrides the isLoading state when set to true
         */
        isLoading?: boolean;

        /**
         *  function to call to load options asynchronously
         */
        loadOptions:
            | ((input: string) => Promise<AutocompleteResult>)
            | ((input: string, callback: (err: any, result: AutocompleteResult) => void) => void);

        /**
         *  replaces the placeholder while options are loading
         */
        loadingPlaceholder?: string;

        /**
         *  the minimum number of characters that trigger loadOptions
         */
        minimumInput?: number;

        /**
         *  placeholder displayed when there are no matching search results (shared with Select)
         */
        noResultsText?: string;
        /**
         *  field placeholder; displayed when there's no value (shared with Select)
         */
        placeholder?: string;

        /**
         *  label to prompt for search input
         */
        searchPromptText?: string;

        /**
         *  message to display while options are loading
         */
        searchingText?: string;
    }
}

declare class ReactSelectClass extends React.Component<ReactSelectClass.ReactSelectProps> { }

declare module ReactSelectClass {
    class Creatable extends React.Component<ReactCreatableSelectProps> { }
    class Async extends React.Component<ReactAsyncSelectProps> { }
    class AsyncCreatable extends React.Component<ReactAsyncSelectProps & ReactCreatableSelectProps> { }
}
