import * as React from 'react';

import { Option } from './filters';
import { InstructionsContext, ValueEventContext } from './accessibility/index';

import { classNames, noop, scrollIntoView } from './utils';

import { formatGroupLabel, getOptionLabel, getOptionValue } from './builtins';

import { PlaceholderOrValue, SelectComponents, SelectComponentsConfig } from './components/index';
import { StylesConfig } from './styles';
import { ThemeConfig } from './theme';
import {
    ActionMeta,
    FocusDirection,
    FocusEventHandler,
    GroupTypeBase,
    InputActionMeta,
    KeyboardEventHandler,
    MenuPlacement,
    MenuPosition,
    OptionsType,
    ValueType,
    OptionTypeBase,
    SetValueAction,
} from './types';

export type MouseOrTouchEvent = React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>;
export type FormatOptionLabelContext = 'menu' | 'value';
export interface FormatOptionLabelMeta<OptionType extends OptionTypeBase, IsMulti extends boolean> {
    context: FormatOptionLabelContext;
    inputValue: string;
    selectValue: ValueType<OptionType, IsMulti>;
}

export type SelectComponentsProps = { [key in string]: any };

export interface NamedProps<
    OptionType extends OptionTypeBase = { label: string; value: string },
    IsMulti extends boolean = false,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> {
    /** Aria label (for assistive tech) */
    'aria-label'?: string | undefined;
    /** HTML ID of an element that should be used as the label (for assistive tech) */
    'aria-labelledby'?: string | undefined;
    /** Focus the control when it is mounted */
    autoFocus?: boolean | undefined;
    /** Remove the currently focused option when the user presses backspace */
    backspaceRemovesValue?: boolean | undefined;
    /** Remove focus from the input when the user selects an option (handy for dismissing the keyboard on touch devices) */
    blurInputOnSelect?: boolean | undefined;
    /** When the user reaches the top/bottom of the menu, prevent scroll on the scroll-parent  */
    captureMenuScroll?: boolean | undefined;
    /** className attribute applied to the outer component */
    className?: string | undefined;
    /** classNamePrefix attribute used as a base for inner component classNames */
    classNamePrefix?: string | null | undefined;
    /** Close the select menu when the user selects an option */
    closeMenuOnSelect?: boolean | undefined;
    /**
     * If `true`, close the select menu when the user scrolls the document/body.
     *
     * If a function, takes a standard javascript `ScrollEvent` you return a boolean:
     *
     * `true` => The menu closes
     *
     * `false` => The menu stays open
     *
     * This is useful when you have a scrollable modal and want to portal the menu out,
     * but want to avoid graphical issues.
     */
    closeMenuOnScroll?: boolean | EventListener | undefined;
    /**
     * This complex object includes all the compositional components that are used
     * in `react-select`. If you wish to overwrite a component, pass in an object
     * with the appropriate namespace.
     *
     * If you only wish to restyle a component, we recommend using the `styles` prop
     * instead. For a list of the components that can be passed in, and the shape
     * that will be passed to them, see [the components docs](/api#components)
     */
    components?: SelectComponentsConfig<OptionType, IsMulti, GroupType> | undefined;
    /** Whether the value of the select, e.g. SingleValue, should be displayed in the control. */
    controlShouldRenderValue?: boolean | undefined;
    /** Delimiter used to join multiple values into a single HTML Input value */
    delimiter?: string | undefined;
    /** Clear all values when the user presses escape AND the menu is closed */
    escapeClearsValue?: boolean | undefined;
    /** Custom method to filter whether an option should be displayed in the menu */
    filterOption?: ((option: Option, rawInput: string) => boolean) | null | undefined;
    /** Formats group labels in the menu as React components */
    formatGroupLabel?: formatGroupLabel<OptionType, GroupType> | undefined;
    /** Formats option labels in the menu and control as React components */
    formatOptionLabel?: ((option: OptionType, labelMeta: FormatOptionLabelMeta<OptionType, IsMulti>) => React.ReactNode) | undefined;
    /** Resolves option data to a string to be displayed as the label by components */
    getOptionLabel?: getOptionLabel<OptionType> | undefined;
    /** Resolves option data to a string to compare options and specify value attributes */
    getOptionValue?: getOptionValue<OptionType> | undefined;
    /** Hide the selected option from the menu */
    hideSelectedOptions?: boolean | undefined;
    /** The id to set on the SelectContainer component. */
    id?: string | undefined;
    /** The value of the search input */
    inputValue?: string | undefined;
    /** The id of the search input */
    inputId?: string | undefined;
    /** Define an id prefix for the select components e.g. {your-id}-value */
    instanceId?: number | string | undefined;
    /** Is the select value clearable */
    isClearable?: boolean | undefined;
    /** Is the select disabled */
    isDisabled?: boolean | undefined;
    /** Is the select in a state of loading (async) */
    isLoading?: boolean | undefined;
    /** Override the built-in logic to detect whether an option is disabled */
    isOptionDisabled?: ((option: OptionType, options: OptionsType<OptionType>) => boolean | false) | undefined;
    /** Override the built-in logic to detect whether an option is selected */
    isOptionSelected?: ((option: OptionType, options: OptionsType<OptionType>) => boolean) | undefined;
    /** Support multiple selected options */
    isMulti?: IsMulti | undefined;
    /** Is the select direction right-to-left */
    isRtl?: boolean | undefined;
    /** Whether to enable search functionality */
    isSearchable?: boolean | undefined;
    /** Async: Text to display when loading options */
    loadingMessage?: ((obj: { inputValue: string }) => string | null) | undefined;
    /** Minimum height of the menu before flipping */
    minMenuHeight?: number | undefined;
    /** Maximum height of the menu before scrolling */
    maxMenuHeight?: number | undefined;
    /** Whether the menu is open */
    menuIsOpen?: boolean | undefined;
    /**
     * Default placement of the menu in relation to the control. 'auto' will flip
     * when there isn't enough space below the control.
     */
    menuPlacement?: MenuPlacement | undefined;
    /** The CSS position value of the menu, when "fixed" extra layout management is required */
    menuPosition?: MenuPosition | undefined;
    /** Whether the menu should use a portal, and where it should attach */
    menuPortalTarget?: HTMLElement | null | undefined;
    /** Whether to block scroll events when the menu is open */
    menuShouldBlockScroll?: boolean | undefined;
    /** Whether the menu should be scrolled into view when it opens */
    menuShouldScrollIntoView?: boolean | undefined;
    /** Name of the HTML Input (optional - without this, no input will be rendered) */
    name?: string | undefined;
    /** Text to display when there are no options */
    noOptionsMessage?: ((obj: { inputValue: string }) => string | null) | undefined;
    /** Handle blur events on the control */
    onBlur?: FocusEventHandler | undefined;
    /** Handle change events on the select */
    onChange?: ((value: ValueType<OptionType, IsMulti>, action: ActionMeta<OptionType>) => void) | undefined;
    /** Handle focus events on the control */
    onFocus?: FocusEventHandler | undefined;
    /** Handle change events on the input */
    onInputChange?: ((newValue: string, actionMeta: InputActionMeta) => void) | undefined;
    /** Handle key down events on the select */
    onKeyDown?: KeyboardEventHandler | undefined;
    /** Handle the menu opening */
    onMenuOpen?: (() => void) | undefined;
    /** Handle the menu closing */
    onMenuClose?: (() => void) | undefined;
    /** Fired when the user scrolls to the top of the menu */
    onMenuScrollToTop?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    /** Fired when the user scrolls to the bottom of the menu */
    onMenuScrollToBottom?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    /** Allows control of whether the menu is opened when the Select is focused */
    openMenuOnFocus?: boolean | undefined;
    /** Allows control of whether the menu is opened when the Select is clicked */
    openMenuOnClick?: boolean | undefined;
    /** Array of options that populate the select menu */
    options?: ReadonlyArray<OptionType | GroupType> | undefined;
    /** Number of options to jump in menu when page{up|down} keys are used */
    pageSize?: number | undefined;
    /** Placeholder text for the select value */
    placeholder?: React.ReactNode | undefined;
    /** Status to relay to screen readers */
    screenReaderStatus?: ((obj: { count: number }) => string) | undefined;
    /** Style modifier methods */
    styles?: StylesConfig<OptionType, IsMulti, GroupType> | undefined;
    /** Theme modifier method */
    theme?: ThemeConfig | undefined;
    /** Sets the tabIndex attribute on the input */
    tabIndex?: string | null | undefined;
    /** Select the currently focused option when the user presses tab */
    tabSelectsValue?: boolean | undefined;
    /** The value of the select; reflected by the selected option */
    value?: readonly OptionType[] | OptionType | null | undefined;

    defaultInputValue?: string | undefined;
    defaultMenuIsOpen?: boolean | undefined;
    defaultValue?: readonly OptionType[] | OptionType | null | undefined;
}

export interface Props<
    OptionType extends OptionTypeBase = { label: string; value: string },
    IsMulti extends boolean = false,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> extends NamedProps<OptionType, IsMulti, GroupType>,
        SelectComponentsProps {}

export const defaultProps: Props<any>;

export interface MenuOptions<OptionType extends OptionTypeBase> {
    render: OptionType[];
    focusable: OptionType[];
}

export interface State<OptionType extends OptionTypeBase> {
    ariaLiveSelection: string;
    ariaLiveContext: string;
    inputIsHidden: boolean;
    isFocused: boolean;
    isComposing: boolean;
    focusedOption: OptionType | null;
    focusedValue: OptionType | null;
    menuOptions: MenuOptions<OptionType>;
    selectValue: OptionsType<OptionType>;
}

export type ElRef = React.Ref<any>;

export default class Select<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean = false,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> extends React.Component<Props<OptionType, IsMulti, GroupType>, State<OptionType>> {
    static defaultProps: Props<any>;

    // Misc. Instance Properties
    // ------------------------------

    blockOptionHover: boolean;
    clearFocusValueOnUpdate: boolean;
    commonProps: any; // TODO
    components: SelectComponents<OptionType, IsMulti, GroupType>;
    hasGroups: boolean;
    initialTouchX: number;
    initialTouchY: number;
    inputIsHiddenAfterUpdate: boolean | null;
    instancePrefix: string;
    openAfterFocus: boolean;
    scrollToFocusedOptionOnUpdate: boolean;
    userIsDragging: boolean | null;

    // Refs
    // ------------------------------

    controlRef: ElRef;
    getControlRef: (ref: HTMLElement) => void;
    focusedOptionRef: ElRef;
    getFocusedOptionRef: (ref: HTMLElement) => void;
    menuListRef: ElRef;
    getMenuListRef: (ref: HTMLElement) => void;
    inputRef: ElRef;
    getInputRef: (ref: HTMLElement) => void;

    // Lifecycle
    // ------------------------------

    cacheComponents: (components: SelectComponents<OptionType, IsMulti, GroupType>) => void;

    // ==============================
    // Consumer Handlers
    // ==============================

    onMenuOpen(): void;
    onMenuClose(): void;
    onInputChange(newValue: string, actionMeta: InputActionMeta): void;

    // ==============================
    // Methods
    // ==============================

    focusInput(): void;
    blurInput(): void;

    // aliased for consumers
    focus(): void;
    blur(): void;

    openMenu(focusOption: 'first' | 'last'): void;
    focusValue(direction: 'previous' | 'next'): void;

    focusOption(direction: FocusDirection): void;
    setValue: (newValue: ValueType<OptionType, IsMulti>, action: SetValueAction, option?: OptionType) => void;
    selectOption: (newValue: OptionType) => void;
    removeValue: (removedValue: OptionType) => void;
    clearValue: () => void;
    popValue: () => void;

    // ==============================
    // Getters
    // ==============================

    getCommonProps(): {
        cx: any;
        clearValue: () => void;
        getStyles: (key: string, props: {}) => {};
        getValue: () => OptionType[];
        hasValue: boolean;
        isMulti: boolean;
        isRtl: boolean;
        options: OptionsType<any>;
        selectOption: (newValue: OptionType) => void;
        setValue: (newValue: ValueType<OptionType, IsMulti>, action: SetValueAction, option?: OptionType) => void;
        selectProps: Readonly<{
            children?: React.ReactNode | undefined;
        }> &
            Readonly<Props<OptionType, IsMulti, GroupType>>;
    };

    getNextFocusedValue(nextSelectValue: OptionsType<OptionType>): OptionType;

    getNextFocusedOption(options: OptionsType<OptionType>): OptionType;
    getOptionLabel: getOptionLabel<OptionType>;
    getOptionValue: getOptionValue<OptionType>;
    getStyles: (key: string, props: {}) => {};
    getElementId: (element: 'group' | 'input' | 'listbox' | 'option') => string;
    getActiveDescendentId: () => any;

    // ==============================
    // Helpers
    // ==============================
    announceAriaLiveSelection: (props: { event: string; context: ValueEventContext }) => void;
    announceAriaLiveContext: (props: { event: string; context?: InstructionsContext | undefined }) => void;

    hasValue(): boolean;
    hasOptions(): boolean;
    countOptions(): number;
    isClearable(): boolean;
    isOptionDisabled(option: OptionType, selectValue: OptionsType<OptionType>): boolean;
    isOptionSelected(option: OptionType, selectValue: OptionsType<OptionType>): boolean;
    filterOption(option: {}, inputValue: string): boolean;
    formatOptionLabel(data: OptionType, context: FormatOptionLabelContext): React.ReactNode;
    formatGroupLabel: formatGroupLabel<OptionType, GroupType>;

    // ==============================
    // Mouse Handlers
    // ==============================

    onMenuMouseDown: (event: React.MouseEvent<HTMLElement>) => void;
    onMenuMouseMove: (event: React.MouseEvent<HTMLElement>) => void;
    onControlMouseDown: (event: MouseOrTouchEvent) => void;
    onDropdownIndicatorMouseDown: (event: MouseOrTouchEvent) => void;
    onClearIndicatorMouseDown: (event: MouseOrTouchEvent) => void;
    onScroll: (event: Event) => void;

    // ==============================
    // Composition Handlers
    // ==============================

    startListeningComposition(): void;
    stopListeningComposition(): void;
    onCompositionStart: () => void;
    onCompositionEnd: () => void;

    // ==============================
    // Touch Handlers
    // ==============================

    startListeningToTouch(): void;
    stopListeningToTouch(): void;
    onTouchStart: (event: TouchEvent) => void;
    onTouchMove: (event: TouchEvent) => void;
    onTouchEnd: (event: TouchEvent) => void;
    onControlTouchEnd: (event: React.TouchEvent<HTMLElement>) => void;
    onClearIndicatorTouchEnd: (event: React.TouchEvent<HTMLElement>) => void;
    onDropdownIndicatorTouchEnd: (event: React.TouchEvent<HTMLElement>) => void;

    // ==============================
    // Focus Handlers
    // ==============================

    handleInputChange: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onInputFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
    onInputBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    onOptionHover: (focusedOption: OptionType) => void;
    shouldHideSelectedOptions: () => boolean;

    // ==============================
    // Keyboard Handlers
    // ==============================

    onKeyDown: (event: React.KeyboardEvent<HTMLElement>) => void;

    // ==============================
    // Menu Options
    // ==============================

    buildMenuOptions(
        props: Props<OptionType, IsMulti, GroupType>,
        selectValue: OptionsType<OptionType>,
    ): MenuOptions<OptionType>;

    // ==============================
    // Renderers
    // ==============================
    constructAriaLiveMessage(): string;

    renderInput(): React.ReactNode;
    renderPlaceholderOrValue(): PlaceholderOrValue<OptionType, IsMulti, GroupType> | null;
    renderClearIndicator(): React.ReactNode;
    renderLoadingIndicator(): React.ReactNode;
    renderIndicatorSeparator(): React.ReactNode;
    renderDropdownIndicator(): React.ReactNode;
    renderMenu(): React.ReactNode;
    renderFormField(): React.ReactNode;

    renderLiveRegion(): React.ReactNode;
}
