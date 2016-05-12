// Type definitions for react-select v1.0.0
// Project: https://github.com/JedWatson/react-select
// Definitions by: ESQUIBET Hugo <https://github.com/Hesquibet/>, Gilad Gray <https://github.com/giladgray/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export as namespace ReactSelect;

declare const select: ReactSelectClass;
export default select;

export interface Option {
    /** Text for rendering */
    label: string;
    /** Value for searching */
    value: string | number;
    /**
     * Allow this option to be cleared
     * @default true
     */
    clearableValue?: boolean;
}

export interface ReactSelectProps extends React.Props<ReactSelect> {
    /**
     * text to display when `allowCreate` is true.
     * @default 'Add "{label}"?'
     */
    addLabelText?: string;
    /**
     * blurs the input element after a selection has been made. Handy for lowering the keyboard on mobile devices.
     * @default false
     */
    autoBlur?: boolean;
    /**
     * allow new options to be created in multi mode (displays an "Add <option> ?" item
     * when a value not already in the options array is entered)
     * @default false
     */
    allowCreate?: boolean;
    /**
     * whether to auto-load the default async options set
     * @default true
     */
    autoload?: boolean;
    /**
     * whether pressing backspace removes the last item when there is no input value
     * @default true
     */
    backspaceRemoves?: boolean;
    /**
     * enables the options cache for `asyncOptions`
     * @default true
     */
    cacheAsyncResults?: boolean;
    /**
     * CSS className for the outer element
     */
    className?: string;
    /**
     * whether it is possible to reset value. if enabled, an X button will appear at the right side.
     * @default true
     */
    clearable?: boolean;
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
     * method to filter a single option
     */
    filterOption?: (option: Option, filter: string) => Option;
    /**
     * method to filter the options array
     */
    filterOptions?: (options: Array<Option>, filter: string, currentValues: (string | number)[]) => Array<Option>;
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
     * whether the Select is loading externally or not (such as options being loaded).
     * if true, a loading spinner will be shown at the right side.
     * @default false
     */
    isLoading?: boolean;
    /**
     * the option property to use for the label
     * @default "label"
     */
    labelKey?: string;
    /**
     * function that calls a callback with the options
     */
    loadOptions?: (input: string, callback: (options: Option[]) => any) => any;
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
     * multi-value input
     * @default false
     */
    multi?: boolean;
    /**
     * field name, for hidden `<input>` tag
     */
    name?: string;
    /**
     * factory to create new options when `allowCreate` is true
     * @default false
     */
    newOptionCreator?: (input: string) => Option;
    /**
     * placeholder displayed when there are no matching search results or a falsy value to hide it
     * @default "No results found"
     */
    noResultsText?: string;
    onBlur?: React.FocusEventHandler;
    /**
     * whether to clear input on blur or not
     * @default true
     */
    onBlurResetsInput?: boolean;
    onChange?: (newValue: Option | Option[]) => void;
    onClose?: () => void;
    onFocus?: React.FocusEventHandler;
    onInputChange?: (inputValue: string) => void;
    onOpen?: () => void;
    onOptionLabelClick?: (value: string, event: Event) => void;

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
     * whether to enable searching feature or not
     * @default true;
     */
    searchable?: boolean;
    /**
     * message to display whilst options are loading via asyncOptions, or when `isLoading` is true
     * @default "Searching..."
     */
    searchingText?: string;
    /**
     * label to prompt for search input
     * @default "Type to search"
     */
    searchPromptText?: string;
    /**
     * initial field value
     */
    value?: Option | Option[];
    /**
     * the option property to use for the value
     * @default "value"
     */
    valueKey?: string;
    /**
     * function which returns a custom way to render the value selected
     * @default false
     */
    valueRenderer?: () => void;
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
    valueComponent?: Function;

    /**
     *  optional style to apply to the component wrapper
     */
    wrapperStyle?: any;

    /**
     * onClick handler for value labels: function (value, event) {}
     */
    onValueClick?: Function;

    /**
     *  pass the value to onChange as a simple value (legacy pre 1.0 mode), defaults to false
     */
    simpleValue?: boolean;
}

export interface ReactAsyncSelectProps extends ReactSelectProps {
    /**
     *  object to use to cache results; can be null to disable cache
     */
    cache?: any;

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
    loadOptions: (input: string, callback: (options: Option[]) => any) => any;

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

export interface ReactSelect extends  React.ReactElement<ReactSelectProps> { }
export interface ReactSelectAsyncClass extends React.ComponentClass<ReactAsyncSelectProps> {
}
export declare const Async: ReactSelectAsyncClass;
export interface ReactSelectClass extends React.ComponentClass<ReactSelectProps> {
    Async: ReactSelectAsyncClass;
}
