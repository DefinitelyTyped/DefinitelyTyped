// Type definitions for react-select v1.0.0
// Project: https://github.com/JedWatson/react-select
// Definitions by: ESQUIBET Hugo <https://github.com/Hesquibet/>, Gilad Gray <https://github.com/giladgray/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts"/>

declare namespace ReactSelect {
    interface Option {
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

    interface ReactSelectProps extends __React.Props<ReactSelect> {
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
        onBlur?: __React.FocusEventHandler;
        /**
         * whether to clear input on blur or not
         * @default true
         */
        onBlurResetsInput?: boolean;
        onChange?: (newValue: Option | Option[]) => void;
        onFocus?: __React.FocusEventHandler;
        onInputChange?: (inputValue: string) => void;
        onOptionLabelClick?: (value: string, event: Event) => void;
        /**
         * function which returns a custom way to render the options in the menu
         */
        optionRenderer?: () => void;
        /**
         * array of Select options
         * @default false
         */
        options?: Array<Option>;
        /**
         * field placeholder, displayed when there's no value
         * @default "Select..."
         */
        placeholder?: string;
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
    }

    interface ReactAsyncSelectProps extends __React.Props<ReactSelect> {
        cache?: any;
        loadOptions?: () => void;
        ignoreAccents?: boolean;
        isLoading?: boolean;
        loadingPlaceholder?: string;
    }

    interface ReactSelect extends  __React.ReactElement<ReactSelectProps> { }
    interface ReactSelectClass extends __React.ComponentClass<ReactSelectProps> {
        Async: __React.ComponentClass<ReactAsyncSelectProps>;
    }
}

declare module "react-select" {
    var select: ReactSelect.ReactSelectClass;
    export = select;
}
