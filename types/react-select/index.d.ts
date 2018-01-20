// Type definitions for react-select 1.1
// Project: https://github.com/JedWatson/react-select
// Definitions by: ESQUIBET Hugo <https://github.com/Hesquibet>
//                 Gilad Gray <https://github.com/giladgray>
//                 Izaak Baker <https://github.com/iebaker>
//                 Tadas Dailyda <https://github.com/skirsdeda>
//                 Mark Vujevits <https://github.com/vujevits>
//                 Mike Deverell <https://github.com/devrelm>
//                 MartynasZilinskas <https://github.com/MartynasZilinskas>
//                 Onat Yigit Mercan <https://github.com/onatm>
//                 Ian Johnson <https://github.com/ninjaferret>
//                 Anton Novik <https://github.com/tehbi4>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';

export default class ReactSelectClass<TValue = OptionValues> extends React.Component<ReactSelectProps<TValue>> {
    focus(): void;
}
// Other components
export class Creatable<TValue = OptionValues> extends React.Component<ReactCreatableSelectProps<TValue>> { }
export class Async<TValue = OptionValues> extends React.Component<ReactAsyncSelectProps<TValue>> { }
export class AsyncCreatable<TValue = OptionValues> extends React.Component<ReactAsyncSelectProps<TValue> & ReactCreatableSelectProps<TValue>> { }

export type HandlerRendererResult = JSX.Element | null | false;

// Handlers
export type FocusOptionHandler<TValue = OptionValues> = (option: Option<TValue>) => void;
export type SelectValueHandler<TValue = OptionValues> = (option: Option<TValue>) => void;
export type ArrowRendererHandler = (props: ArrowRendererProps) => HandlerRendererResult;
export type FilterOptionHandler<TValue = OptionValues> = (option: Option<TValue>, filter: string) => boolean;
export type FilterOptionsHandler<TValue = OptionValues> = (options: Options<TValue>, filter: string, currentValues: Options<TValue>) => Options<TValue>;
export type InputRendererHandler = (props: { [key: string]: any }) => HandlerRendererResult;
export type MenuRendererHandler<TValue = OptionValues> = (props: MenuRendererProps<TValue>) => HandlerRendererResult;
export type OnCloseHandler = () => void;
export type OnInputChangeHandler = (inputValue: string) => void;
export type OnInputKeyDownHandler = React.KeyboardEventHandler<HTMLDivElement | HTMLInputElement>;
export type OnMenuScrollToBottomHandler = () => void;
export type OnOpenHandler = () => void;
export type OnFocusHandler = React.FocusEventHandler<HTMLDivElement | HTMLInputElement>;
export type OnBlurHandler = React.FocusEventHandler<HTMLDivElement | HTMLInputElement>;
export type OptionRendererHandler<TValue = OptionValues> = (option: Option<TValue>) => HandlerRendererResult;
export type ValueRendererHandler<TValue = OptionValues> = (option: Option<TValue>) => HandlerRendererResult;
export type OnValueClickHandler<TValue = OptionValues> = (option: Option<TValue>, event: React.MouseEvent<HTMLAnchorElement>) => void;
export type IsOptionUniqueHandler<TValue = OptionValues> = (arg: { option: Option<TValue>, options: Options<TValue>, labelKey: string, valueKey: string }) => boolean;
export type IsValidNewOptionHandler = (arg: { label: string }) => boolean;
export type NewOptionCreatorHandler<TValue = OptionValues> = (arg: { label: string, labelKey: string, valueKey: string }) => Option<TValue>;
export type PromptTextCreatorHandler = (filterText: string) => string;
export type ShouldKeyDownEventCreateNewOptionHandler = (arg: { keyCode: number }) => boolean;

export type OnChangeSingleHandler<TValue = OptionValues> = OnChangeHandler<TValue, Option<TValue>>;
export type OnChangeMultipleHandler<TValue = OptionValues> = OnChangeHandler<TValue, Options<TValue>>;
export type OnChangeHandler<TValue = OptionValues, TOption = Option<TValue> | Options<TValue>> = (newValue: TOption | null) => void;
export type OnNewOptionClickHandler<TValue = OptionValues> = (option: Option<TValue>) => void;

export type LoadOptionsHandler<TValue = OptionValues> = LoadOptionsAsyncHandler<TValue> | LoadOptionsLegacyHandler<TValue>;
export type LoadOptionsAsyncHandler<TValue = OptionValues> = (input: string) => Promise<AutocompleteResult<TValue>>;
export type LoadOptionsLegacyHandler<TValue = OptionValues> = (input: string, callback: (err: any, result: AutocompleteResult<TValue>) => void) => void;

export interface AutocompleteResult<TValue = OptionValues> {
    /** The search-results to be displayed  */
    options: Options<TValue>;
    /**
     * Should be set to true, if and only if a longer query with the same prefix
     * would return a subset of the results
     * If set to true, more specific queries will not be sent to the server.
     */
    complete: boolean;
}

export type Options<TValue = OptionValues> = Array<Option<TValue>>;

export interface Option<TValue = OptionValues> {
    /** Text for rendering */
    label?: string;
    /** Value for searching */
    value?: TValue;
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
    /**
     * In the event that a custom menuRenderer is provided, Option should be able
     * to accept arbitrary key-value pairs. See react-virtualized-select.
     */
    [property: string]: any;
}

export type OptionValues = string | number | boolean;

export interface MenuRendererProps<TValue = OptionValues> {
    /**
     * The currently focused option; should be visible in the menu by default.
     * default {}
     */
    focusedOption: Option<TValue>;

    /**
     * Callback to focus a new option; receives the option as a parameter.
     */
    focusOption: FocusOptionHandler<TValue>;

    /**
     * Option labels are accessible with this string key.
     */
    labelKey: string;

    /**
     * Ordered array of options to render.
     */
    options: Options<TValue>;

    /**
     * Callback to select a new option; receives the option as a parameter.
     */
    selectValue: SelectValueHandler<TValue>;

    /**
     * Array of currently selected options.
     */
    valueArray: Options<TValue>;
}

export interface ArrowRendererProps {
    /**
     * Arrow mouse down event handler.
     */
    onMouseDown: React.MouseEventHandler<any>;
}

export interface ReactSelectProps<TValue = OptionValues> extends React.Props<ReactSelectClass<TValue>> {
    /**
     * text to display when `allowCreate` is true.
     * @default 'Add "{label}"?'
     */
    addLabelText?: string;
    /**
     * renders a custom drop-down arrow to be shown in the right-hand side of the select.
     * @default undefined
     */
    arrowRenderer?: ArrowRendererHandler;
    /**
     * blurs the input element after a selection has been made. Handy for lowering the keyboard on mobile devices.
     * @default false
     */
    autoBlur?: boolean;
    /**
     * autofocus the component on mount
     * @deprecated. Use autoFocus instead
     * @default false
     */
    autofocus?: boolean;
    /**
     * autofocus the component on mount
     * @default false
     */
    autoFocus?: boolean;
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
     * whether to close the menu when a value is selected
     * @default true
     */
    closeOnSelect?: boolean;
    /**
     * whether it is possible to reset value. if enabled, an X button will appear at the right side.
     * @default true
     */
    clearable?: boolean;
    /**
     * whether backspace removes an item if there is no text input
     * @default true
     */
    deleteRemoves?: boolean;
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
    filterOption?: FilterOptionHandler<TValue>;
    /**
     * method to filter the options array
     */
    filterOptions?: FilterOptionsHandler<TValue>;                                      
    /**
     * id for the underlying HTML input element
     * @default ""
     */
    id?: string;                               
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
    inputProps?: { [key: string]: any };
    /**
     * renders a custom input
     */
    inputRenderer?: InputRendererHandler;
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
    menuContainerStyle?: React.CSSProperties;
    /**
     * renders a custom menu with options
     */
    menuRenderer?: MenuRendererHandler<TValue>;
    /**
     * optional style to apply to the menu
     */
    menuStyle?: React.CSSProperties;
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
    noResultsText?: string | JSX.Element;
    /**
     * onBlur handler: function (event) {}
     */
    onBlur?: OnBlurHandler;
    /**
     * whether to clear input on blur or not
     * @default true
     */
    onBlurResetsInput?: boolean;
    /**
     * onChange handler: function (newValue) {}
     */
    onChange?: OnChangeHandler<TValue>;
    /**
     * fires when the menu is closed
     */
    onClose?: OnCloseHandler;
    /**
     * onFocus handler: function (event) {}
     */
    onFocus?: OnFocusHandler;
    /**
     * onInputChange handler: function (inputValue) {}
     */
    onInputChange?: OnInputChangeHandler;
    /**
     * onInputKeyDown handler: function (keyboardEvent) {}
     */
    onInputKeyDown?: OnInputKeyDownHandler;
    /**
     * fires when the menu is scrolled to the bottom; can be used to paginate options
     */
    onMenuScrollToBottom?: OnMenuScrollToBottomHandler;
    /**
     * fires when the menu is opened
     */
    onOpen?: OnOpenHandler;
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
    optionComponent?: React.ComponentType<TValue>;
    /**
     * function which returns a custom way to render the options in the menu
     */
    optionRenderer?: OptionRendererHandler<TValue>;
    /**
     * array of Select options
     * @default false
     */
    options?: Options<TValue>;
    /**
     * field placeholder, displayed when there's no value
     * @default "Select..."
     */
    placeholder?: string | JSX.Element;
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
    value?: Option<TValue> | Options<TValue> | string | string[] | number | number[] | boolean;
    /**
     * the option property to use for the value
     * @default "value"
     */
    valueKey?: string;
    /**
     * function which returns a custom way to render the value selected
     * @default false
     */
    valueRenderer?: ValueRendererHandler<TValue>;
    /**
     *  optional style to apply to the control
     */
    style?: React.CSSProperties;

    /**
     *  optional tab index of the control
     */
    tabIndex?: string;

    /**
     *  value component to render
     */
    valueComponent?: React.ComponentType<TValue>;

    /**
     *  optional style to apply to the component wrapper
     */
    wrapperStyle?: React.CSSProperties;

    /**
     * onClick handler for value labels: function (value, event) {}
     */
    onValueClick?: OnValueClickHandler<TValue>;

    /**
     *  pass the value to onChange as a simple value (legacy pre 1.0 mode), defaults to false
     */
    simpleValue?: boolean;
}

export interface ReactCreatableSelectProps<TValue = OptionValues> extends ReactSelectProps<TValue> {
    /**
     * Searches for any matching option within the set of options. This function prevents
     * duplicate options from being created.
     */
    isOptionUnique?: IsOptionUniqueHandler<TValue>;

    /**
     * Determines if the current input text represents a valid option.
     */
    isValidNewOption?: IsValidNewOptionHandler;

    /**
     * factory to create new options
     */
    newOptionCreator?: NewOptionCreatorHandler<TValue>;

    /**
     * Creates prompt/placeholder for option text.
     */
    promptTextCreator?: PromptTextCreatorHandler;

    /**
     * Decides if a keyDown event (eg its 'keyCode') should result in the creation of a new option.
     */
    shouldKeyDownEventCreateNewOption?: ShouldKeyDownEventCreateNewOptionHandler;

    /**
     * new option click handler: function (option) {}
     */
    onNewOptionClick?: OnNewOptionClickHandler<TValue>;
}

export interface ReactAsyncSelectProps<TValue = OptionValues> extends ReactSelectProps<TValue> {
    /**
     * Whether to auto-load the default async options set.
     */
    autoload?: boolean;

    /**
     *  object to use to cache results; can be null to disable cache
     */
    cache?: { [key: string]: any } | boolean;

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
    loadOptions: LoadOptionsHandler<TValue>;

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
    noResultsText?: string | JSX.Element;
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
