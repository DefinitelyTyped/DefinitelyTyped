// Type definitions for react-select 1.3
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
//                 David Schkalee <https://github.com/misantronic>
//                 Arthur Udalov <https://github.com/darkartur>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Endurance Idehen <https://github.com/endurance>
//                 Guillaume Chartier <https://github.com/RCGuillaume>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export default class ReactSelectClass<TValue = OptionValues> extends React.Component<ReactSelectProps<TValue>> {
    focus(): void;
    setValue(value: Option<TValue>): void;
}
// Other components
export class Creatable<TValue = OptionValues> extends React.Component<ReactCreatableSelectProps<TValue>> {}
export class Async<TValue = OptionValues> extends React.Component<ReactAsyncSelectProps<TValue>> {}
export class AsyncCreatable<TValue = OptionValues> extends React.Component<ReactAsyncCreatableSelectProps<TValue>> {}

export type OptionComponentType<TValue = OptionValues> = React.ComponentType<OptionComponentProps<TValue>>;
export type ValueComponentType<TValue = OptionValues> = React.ComponentType<ValueComponentProps<TValue>>;

export type HandlerRendererResult = JSX.Element | null | false;

// Handlers
export type FocusOptionHandler<TValue = OptionValues> = (option: Option<TValue>) => void;
export type SelectValueHandler<TValue = OptionValues> = (option: Option<TValue>) => void;
export type ArrowRendererHandler = (props: ArrowRendererProps) => HandlerRendererResult;
export type ClearRendererHandler = () => HandlerRendererResult;
export type FilterOptionHandler<TValue = OptionValues> = (option: Option<TValue>, filter: string) => boolean;
export type FilterOptionsHandler<TValue = OptionValues> = (
    options: Options<TValue>,
    filter: string,
    currentValues: Options<TValue>,
) => Options<TValue>;
export type InputRendererHandler = (props: { [key: string]: any }) => HandlerRendererResult;
export type MenuRendererHandler<TValue = OptionValues> = (props: MenuRendererProps<TValue>) => HandlerRendererResult;
export type OnCloseHandler = () => void;
export type OnInputChangeHandler = (inputValue: string) => string;
export type OnInputKeyDownHandler = React.KeyboardEventHandler<HTMLDivElement | HTMLInputElement>;
export type OnMenuScrollToBottomHandler = () => void;
export type OnOpenHandler = () => void;
export type OnFocusHandler = React.FocusEventHandler<HTMLDivElement | HTMLInputElement>;
export type OnBlurHandler = React.FocusEventHandler<HTMLDivElement | HTMLInputElement>;
export type OptionRendererHandler<TValue = OptionValues> = (option: Option<TValue>) => HandlerRendererResult;
export type ValueRendererHandler<TValue = OptionValues> = (
    option: Option<TValue>,
    index?: number,
) => HandlerRendererResult;
export type OnValueClickHandler<TValue = OptionValues> = (
    option: Option<TValue>,
    event: React.MouseEvent<HTMLAnchorElement>,
) => void;
export type IsOptionUniqueHandler<TValue = OptionValues> = (arg: {
    option: Option<TValue>;
    options: Options<TValue>;
    labelKey: string;
    valueKey: string;
}) => boolean;
export type IsValidNewOptionHandler = (arg: { label: string }) => boolean;
export type NewOptionCreatorHandler<TValue = OptionValues> = (arg: {
    label: string;
    labelKey: string;
    valueKey: string;
}) => Option<TValue>;
export type PromptTextCreatorHandler = (filterText: string) => string;
export type ShouldKeyDownEventCreateNewOptionHandler = (arg: { keyCode: number }) => boolean;

export type OnChangeSingleHandler<TValue = OptionValues> = OnChangeHandler<TValue, Option<TValue>>;
export type OnChangeMultipleHandler<TValue = OptionValues> = OnChangeHandler<TValue, Options<TValue>>;
export type OnChangeHandler<TValue = OptionValues, TOption = Option<TValue> | Options<TValue>> = (
    newValue: TOption | null,
) => void;
export type OnNewOptionClickHandler<TValue = OptionValues> = (option: Option<TValue>) => void;

export type LoadOptionsHandler<TValue = OptionValues> =
    | LoadOptionsAsyncHandler<TValue>
    | LoadOptionsLegacyHandler<TValue>;
export type LoadOptionsAsyncHandler<TValue = OptionValues> = (input: string) => Promise<AutocompleteResult<TValue>>;
export type LoadOptionsLegacyHandler<TValue = OptionValues> = (
    input: string,
    callback: (err: any, result: AutocompleteResult<TValue>) => void,
) => void;

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
    label?: string | undefined;
    /** Value for searching */
    value?: TValue | undefined;
    /**
     * Allow this option to be cleared
     * @default true
     */
    clearableValue?: boolean | undefined;
    /**
     * Do not allow this option to be selected
     * @default false
     */
    disabled?: boolean | undefined;
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

    /**
     * Callback to remove selection from option; receives the option as a parameter.
     */
    removeValue: SelectValueHandler<TValue>;

    /**
     * function which returns a custom way to render the options in the menu
     */
    optionRenderer: OptionRendererHandler<TValue>;
}

export interface OptionComponentProps<TValue = OptionValues> {
    /**
     * Classname(s) to apply to the option component.
     */
    className?: string | undefined;

    /**
     * Currently focused option.
     */
    focusOption?: Option<TValue> | undefined;

    inputValue?: string | undefined;
    instancePrefix?: string | undefined;

    /**
     * True if this option is disabled.
     */
    isDisabled?: boolean | undefined;

    /**
     * True if this option is focused.
     */
    isFocused?: boolean | undefined;

    /**
     * True if this option is selected.
     */
    isSelected?: boolean | undefined;

    /**
     * Callback to be invoked when this option is focused.
     */
    onFocus?: ((option: Option<TValue>, event: any) => void) | undefined;

    /**
     * Callback to be invoked when this option is selected.
     */
    onSelect?: ((option: Option<TValue>, event: any) => void) | undefined;

    /**
     * Option to be rendered by this component.
     */
    option: Option<TValue>;

    /**
     * Index of the option being rendered in the list
     */
    optionIndex?: number | undefined;

    /**
     * Callback to invoke when removing an option from a multi-selection. (Not necessarily the one
     * being rendered)
     */
    removeValue?: ((value: TValue | TValue[]) => void) | undefined;

    /**
     * Callback to invoke to select an option. (Not necessarily the one being rendered)
     */
    selectValue?: ((value: TValue | TValue[]) => void) | undefined;
}

export interface ArrowRendererProps {
    /**
     * Arrow mouse down event handler.
     */
    onMouseDown: React.MouseEventHandler<any>;

    /**
     * whether the Select is open or not.
     */
    isOpen: boolean;
}

export interface ValueComponentProps<TValue = OptionValues> {
    disabled: ReactSelectProps<TValue>['disabled'];
    id: string;
    instancePrefix: string;
    onClick: OnValueClickHandler<TValue> | null;
    onRemove?: SelectValueHandler<TValue> | undefined;
    placeholder: ReactSelectProps<TValue>['placeholder'];
    value: Option<TValue>;
    values?: Array<Option<TValue>> | undefined;
}

export interface ReactSelectProps<TValue = OptionValues> extends React.Props<ReactSelectClass<TValue>> {
    /**
     * text to display when `allowCreate` is true.
     * @default 'Add "{label}"?'
     */
    addLabelText?: string | undefined;
    /**
     * renders a custom drop-down arrow to be shown in the right-hand side of the select.
     * @default undefined
     */
    arrowRenderer?: ArrowRendererHandler | null | undefined;
    /**
     * blurs the input element after a selection has been made. Handy for lowering the keyboard on mobile devices.
     * @default false
     */
    autoBlur?: boolean | undefined;
    /**
     * autofocus the component on mount
     * @deprecated. Use autoFocus instead
     * @default false
     */
    autofocus?: boolean | undefined;
    /**
     * autofocus the component on mount
     * @default false
     */
    autoFocus?: boolean | undefined;
    /**
     *  If enabled, the input will expand as the length of its value increases
     */
    autosize?: boolean | undefined;
    /**
     * whether pressing backspace removes the last item when there is no input value
     * @default true
     */
    backspaceRemoves?: boolean | undefined;
    /**
     * Message to use for screenreaders to press backspace to remove the current item
     * {label} is replaced with the item label
     * @default "Press backspace to remove..."
     */
    backspaceToRemoveMessage?: string | undefined;
    /**
     * CSS className for the outer element
     */
    className?: string | undefined;
    /**
     * Prefix prepended to element default className if no className is defined
     */
    classNamePrefix?: string | undefined;
    /**
     * title for the "clear" control when `multi` is true
     * @default "Clear all"
     */
    clearAllText?: string | undefined;
    /**
     * Renders a custom clear to be shown in the right-hand side of the select when clearable true
     * @default undefined
     */
    clearRenderer?: ClearRendererHandler | undefined;
    /**
     * title for the "clear" control
     * @default "Clear value"
     */
    clearValueText?: string | undefined;
    /**
     * whether to close the menu when a value is selected
     * @default true
     */
    closeOnSelect?: boolean | undefined;
    /**
     * whether it is possible to reset value. if enabled, an X button will appear at the right side.
     * @default true
     */
    clearable?: boolean | undefined;
    /**
     * whether backspace removes an item if there is no text input
     * @default true
     */
    deleteRemoves?: boolean | undefined;
    /**
     * delimiter to use to join multiple values
     * @default ","
     */
    delimiter?: string | undefined;
    /**
     * whether the Select is disabled or not
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * whether escape clears the value when the menu is closed
     * @default true
     */
    escapeClearsValue?: boolean | undefined;
    /**
     * method to filter a single option
     */
    filterOption?: FilterOptionHandler<TValue> | undefined;
    /**
     * method to filter the options array
     */
    filterOptions?: FilterOptionsHandler<TValue> | undefined;
    /**
     * id for the underlying HTML input element
     * @default undefined
     */
    id?: string | undefined;
    /**
     * whether to strip diacritics when filtering
     * @default true
     */
    ignoreAccents?: boolean | undefined;
    /**
     * whether to perform case-insensitive filtering
     * @default true
     */
    ignoreCase?: boolean | undefined;
    /**
     * custom attributes for the Input (in the Select-control) e.g: {'data-foo': 'bar'}
     * @default {}
     */
    inputProps?: { [key: string]: any } | undefined;
    /**
     * renders a custom input
     */
    inputRenderer?: InputRendererHandler | undefined;
    /**
     * allows for synchronization of component id's on server and client.
     * @see https://github.com/JedWatson/react-select/pull/1105
     */
    instanceId?: string | undefined;
    /**
     * whether the Select is loading externally or not (such as options being loaded).
     * if true, a loading spinner will be shown at the right side.
     * @default false
     */
    isLoading?: boolean | undefined;
    /**
     * (legacy mode) joins multiple values into a single form field with the delimiter
     * @default false
     */
    joinValues?: boolean | undefined;
    /**
     * the option property to use for the label
     * @default "label"
     */
    labelKey?: string | undefined;
    /**
     * (any, start) match the start or entire string when filtering
     * @default "any"
     */
    matchPos?: string | undefined;
    /**
     * (any, label, value) which option property to filter on
     * @default "any"
     */
    matchProp?: string | undefined;
    /**
     * buffer of px between the base of the dropdown and the viewport to shift if menu doesnt fit in viewport
     * @default 0
     */
    menuBuffer?: number | undefined;
    /**
     * optional style to apply to the menu container
     */
    menuContainerStyle?: React.CSSProperties | undefined;
    /**
     * renders a custom menu with options
     */
    menuRenderer?: MenuRendererHandler<TValue> | undefined;
    /**
     * optional style to apply to the menu
     */
    menuStyle?: React.CSSProperties | undefined;
    /**
     * multi-value input
     * @default false
     */
    multi?: boolean | undefined;
    /**
     * field name, for hidden `<input>` tag
     */
    name?: string | undefined;
    /**
     * placeholder displayed when there are no matching search results or a falsy value to hide it
     * @default "No results found"
     */
    noResultsText?: string | JSX.Element | undefined;
    /**
     * onBlur handler: function (event) {}
     */
    onBlur?: OnBlurHandler | undefined;
    /**
     * whether to clear input on blur or not
     * @default true
     */
    onBlurResetsInput?: boolean | undefined;
    /**
     * whether the input value should be reset when options are selected.
     * Also input value will be set to empty if 'onSelectResetsInput=true' and
     * Select will get new value that not equal previous value.
     * @default true
     */
    onSelectResetsInput?: boolean | undefined;
    /**
     * whether to clear input when closing the menu through the arrow
     * @default true
     */
    onCloseResetsInput?: boolean | undefined;
    /**
     * onChange handler: function (newValue) {}
     */
    onChange?: OnChangeHandler<TValue> | undefined;
    /**
     * fires when the menu is closed
     */
    onClose?: OnCloseHandler | undefined;
    /**
     * onFocus handler: function (event) {}
     */
    onFocus?: OnFocusHandler | undefined;
    /**
     * onInputChange handler: function (inputValue) {}
     */
    onInputChange?: OnInputChangeHandler | undefined;
    /**
     * onInputKeyDown handler: function (keyboardEvent) {}
     */
    onInputKeyDown?: OnInputKeyDownHandler | undefined;
    /**
     * fires when the menu is scrolled to the bottom; can be used to paginate options
     */
    onMenuScrollToBottom?: OnMenuScrollToBottomHandler | undefined;
    /**
     * fires when the menu is opened
     */
    onOpen?: OnOpenHandler | undefined;
    /**
     * boolean to enable opening dropdown when focused
     * @default false
     */
    openOnClick?: boolean | undefined;
    /**
     * open the options menu when the input gets focus (requires searchable = true)
     * @default true
     */
    openOnFocus?: boolean | undefined;
    /**
     * className to add to each option component
     */
    optionClassName?: string | undefined;
    /**
     * option component to render in dropdown
     */
    optionComponent?: OptionComponentType<TValue> | undefined;
    /**
     * function which returns a custom way to render the options in the menu
     */
    optionRenderer?: OptionRendererHandler<TValue> | undefined;
    /**
     * array of Select options
     * @default false
     */
    options?: Options<TValue> | undefined;
    /**
     * number of options to jump when using page up/down keys
     * @default 5
     */
    pageSize?: number | undefined;
    /**
     * field placeholder, displayed when there's no value
     * @default "Select..."
     */
    placeholder?: string | JSX.Element | undefined;
    /**
     * whether the selected option is removed from the dropdown on multi selects
     * @default true
     */
    removeSelected?: boolean | undefined;
    /**
     * applies HTML5 required attribute when needed
     * @default false
     */
    required?: boolean | undefined;
    /**
     * value to use when you clear the control
     */
    resetValue?: any;
    /**
     * use react-select in right-to-left direction
     * @default false
     */
    rtl?: boolean | undefined;
    /**
     * whether the viewport will shift to display the entire menu when engaged
     * @default true
     */
    scrollMenuIntoView?: boolean | undefined;
    /**
     * whether to enable searching feature or not
     * @default true;
     */
    searchable?: boolean | undefined;
    /**
     * whether to select the currently focused value when the  [tab]  key is pressed
     */
    tabSelectsValue?: boolean | undefined;
    /**
     * initial field value
     */
    value?: Option<TValue> | Options<TValue> | string | string[] | number | number[] | boolean | undefined;
    /**
     * the option property to use for the value
     * @default "value"
     */
    valueKey?: string | undefined;
    /**
     * function which returns a custom way to render the value selected
     * @default false
     */
    valueRenderer?: ValueRendererHandler<TValue> | undefined;
    /**
     *  optional style to apply to the control
     */
    style?: React.CSSProperties | undefined;

    /**
     *  optional tab index of the control
     */
    tabIndex?: string | number | undefined;

    /**
     *  value component to render
     */
    valueComponent?: ValueComponentType<TValue> | undefined;

    /**
     *  optional style to apply to the component wrapper
     */
    wrapperStyle?: React.CSSProperties | undefined;

    /**
     * onClick handler for value labels: function (value, event) {}
     */
    onValueClick?: OnValueClickHandler<TValue> | undefined;

    /**
     *  pass the value to onChange as a simple value (legacy pre 1.0 mode), defaults to false
     */
    simpleValue?: boolean | undefined;
}

export interface ReactCreatableSelectProps<TValue = OptionValues> extends ReactSelectProps<TValue> {
    /**
     * Searches for any matching option within the set of options. This function prevents
     * duplicate options from being created.
     */
    isOptionUnique?: IsOptionUniqueHandler<TValue> | undefined;

    /**
     * Determines if the current input text represents a valid option.
     */
    isValidNewOption?: IsValidNewOptionHandler | undefined;

    /**
     * factory to create new options
     */
    newOptionCreator?: NewOptionCreatorHandler<TValue> | undefined;

    /**
     * Creates prompt/placeholder for option text.
     */
    promptTextCreator?: PromptTextCreatorHandler | undefined;

    /**
     * Decides if a keyDown event (eg its 'keyCode') should result in the creation of a new option.
     */
    shouldKeyDownEventCreateNewOption?: ShouldKeyDownEventCreateNewOptionHandler | undefined;

    /**
     * new option click handler: function (option) {}
     */
    onNewOptionClick?: OnNewOptionClickHandler<TValue> | undefined;

    /**
     * true: Show new option at top of list
     * false: Show new option at bottom of list
     * @default true
     */
    showNewOptionAtTop?: boolean | undefined;
}

export interface ReactAsyncSelectProps<TValue = OptionValues> extends ReactSelectProps<TValue> {
    /**
     * Whether to auto-load the default async options set.
     */
    autoload?: boolean | undefined;

    /**
     *  object to use to cache results; can be null to disable cache
     */
    cache?: { [key: string]: any } | boolean | undefined;

    /**
     *  function to call to load options asynchronously
     */
    loadOptions: LoadOptionsHandler<TValue>;

    /**
     *  replaces the placeholder while options are loading
     */
    loadingPlaceholder?: string | JSX.Element | undefined;
    /**
     *  displayed in the drop down list when the user did not type anything yet
     */
    searchPromptText?: string | undefined;
}

export type ReactAsyncCreatableSelectProps<TValue = OptionValues> = ReactAsyncSelectProps<TValue> &
    ReactCreatableSelectProps<TValue>;
