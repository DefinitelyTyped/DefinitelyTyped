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

    interface MenuRendererProps {
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

    interface ReactSelectProps extends __React.Props<ReactSelect> {
        /**
         * text to display when `allowCreate` is true.
         * @default 'Add "{label}"?'
         */
        addLabelText?: string;
        /**
         * allow new options to be created in multi mode (displays an "Add <option> ?" item
         * when a value not already in the options array is entered)
         * @default false
         */
        allowCreate?: boolean;
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
        filterOptions?: (options: Array<Option>, filter: string, currentValues: (string | number)[]) => Array<Option>;
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
        menuRenderer?: (props: MenuRendererProps) => __React.ReactElement<any>;
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
         * factory to create new options when `allowCreate` is true
         * @default false
         */
        newOptionCreator?: (input: string) => Option;
        /**
         * placeholder displayed when there are no matching search results or a falsy value to hide it
         * @default "No results found"
         */
        noResultsText?: string;
        /**
         * onBlur handler: function (event) {}
         */
        onBlur?: __React.FocusEventHandler;
        /**
         * whether to clear input on blur or not
         * @default true
         */
        onBlurResetsInput?: boolean;
        /**
         * onChange handler: function (newValue) {}
         */
        onChange?: (newValue: Option | Option[]) => void;
        /**
         * fires when the menu is closed
         */
        onClose?: () => void;
        /**
         * onFocus handler: function (event) {}
         */
        onFocus?: __React.FocusEventHandler;
        /**
         * onInputChange handler: function (inputValue) {}
         */
        onInputChange?: (inputValue: string) => void;
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
         * option component to render in dropdown
         */
        optionComponent?: __React.ReactElement<any>;
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
        placeholder?: string | __React.ReactElement<any>;
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
        valueComponent?: __React.ReactElement<any>;

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

    interface ReactAsyncSelectProps extends ReactSelectProps {
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

    interface ReactSelect extends  __React.ReactElement<ReactSelectProps> { }
    interface ReactSelectAsyncClass extends __React.ComponentClass<ReactAsyncSelectProps> {
    }
    const Async: ReactSelectAsyncClass;
    interface ReactSelectClass extends __React.ComponentClass<ReactSelectProps> {
        Async: ReactSelectAsyncClass;
    }

}

declare module "react-select" {
    const RS: ReactSelect.ReactSelectClass;
    export = RS;
}

declare module "react-select-props" {
    
    interface Option extends ReactSelect.Option {}
    interface MenuRendererProps extends ReactSelect.MenuRendererProps {}

    export { MenuRendererProps, Option };
}

