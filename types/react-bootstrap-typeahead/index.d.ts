// Type definitions for react-bootstrap-typeahead 3.4
// Project: https://github.com/ericgio/react-bootstrap-typeahead, http://ericgio.github.io/react-bootstrap-typeahead
// Definitions by: Guymestef <https://github.com/Guymestef>
//                 Rajab Shakirov <https://github.com/radziksh>
//                 Paito Anderson <https://github.com/PaitoAnderson>
//                 Andreas Richter <https://github.com/arichter83>
//                 Dale Fenton <https://github.com/dalevfenton>
//                 Håkon Holhjem <https://github.com/KngHawkon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import * as React from 'react';
export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export type StringPropertyNames<T extends object> = { [K in keyof T]: T[K] extends string ? K : never }[keyof T];

/* ---------------------------------------------------------------------------
                       Constants and Enumerated Types
--------------------------------------------------------------------------- */
export type TypeaheadModel = string|object;
export type TypeaheadBsSizes = 'large' | 'lg' | 'small' | 'sm';
export type TypeaheadAlign = 'justify' | 'left' | 'right';
// if options is an object, only let labelKey be a key of that object, whose value is a string
// or a custom label function that takes a single option and returns a string for the label
export type TypeaheadLabelKey<T extends TypeaheadModel> = T extends object ? (StringPropertyNames<T> | ((option: T) => string)) : never;
// don't allow onBlur, onChange, onFocus or onKeyDown as members of inputProps
// those props should be supplied directly to <Typeahead /> or <AsyncTypeahead />
export interface InputProps extends Omit<React.InputHTMLAttributes<'input'>, 'onBlur'|'onChange'|'onFocus'|'onKeyDown'> { }

/* ---------------------------------------------------------------------------
                            Typeahead Contexts
--------------------------------------------------------------------------- */
export interface TypeaheadContext<T extends TypeaheadModel> {
    activeIndex?: number;
    hintText?: string;
    initialItem?: T;
    isOnlyResult?: boolean;
    onActiveItemChange?: (options: T) => void;
    onAdd?: (option: T) => void;
    onInitialItemChange?: (option: T) => void;
    onMenuItemClick?: (option: T, e: Event) => void;
    selectHintOnEnter?: boolean;
}

export interface TypeaheadState<T extends TypeaheadModel> {
    activeIndex: number|null;
    activeItem: T|null;
    initialItem: T|null;
    isFocused: boolean;
    selected: T[];
    showMenu: boolean;
    shownResults: number;
    text: string;
}

export interface InputContainerPropsSingle<T extends TypeaheadModel> {
    'aria-activedescendant': string;
    'aria-autocomplete': 'list' | 'both';
    'aria-expanded': boolean | 'true' | 'false';
    'aria-haspopup': 'listbox';
    'aria-owns': string;
    autoComplete: string;
    disabled: boolean;
    inputRef: React.LegacyRef<HTMLInputElement>;
    onBlur: (e: Event) => void;
    onChange: (selected: T[]) => void;
    onClick: (e: Event) => void;
    onFocus: (e: Event) => void;
    onKeyDown: (e: Event) => void;
    placeholder: string|null;
    role: 'combobox';
    value: string;
}

export interface InputContainerPropsMultiple<T extends TypeaheadModel> extends Omit<InputContainerPropsSingle<T>, 'role'> {
    inputClassName: string;
    labelKey: TypeaheadLabelKey<T>;
    onRemove: (e: Event) => void;
    renderToken: (selectedItem: T, props: TypeaheadMenuProps<T>, index: number) => React.ReactNode;
    role: '';
    selected: T[];
}

export type HintedInputContextKeys = 'hintText' | 'initialItem' | 'onAdd' | 'selectHintOnEnter';
export interface HintedInputContext<T extends TypeaheadModel> extends Pick<TypeaheadContext<T>, HintedInputContextKeys> {}

export type MenuItemContextKeys = 'activeIndex' | 'isOnlyResult' | 'onActiveItemChange' | 'onInitialItemChange' | 'onMenuItemClick';
export interface MenuItemContext<T extends TypeaheadModel> extends Pick<TypeaheadContext<T>, MenuItemContextKeys> {}

export interface TokenContext {
    active: boolean;
    onBlur: (e: any) => void;
    onClick: (e: any) => void;
    onFocus: (e: any) => void;
    onKeyDown: (e: any) => void;
}

/* ---------------------------------------------------------------------------
                       Typeahead Props and Component
--------------------------------------------------------------------------- */
export interface TypeaheadContainerProps<T extends TypeaheadModel> {
    activeIndex: number | null;
    activeItem: T | null;
    initialItem: T | null;
    isFocused: boolean;
    selected: T[];
    showMenu: boolean;
    shownResults: number;
    text: string;
}

export type TypeaheadResult<T extends TypeaheadModel> = T & { customOption: boolean };

export interface TypeaheadProps<T extends TypeaheadModel> {
    /* For localized accessibility: Should return a string indicating the number of results for screen readers.
    Receives the current results. */
    a11yNumResults?: () => void;

    /* For localized accessibility: Should return a string indicating the number of selections for screen readers.
    Receives the current selections. */
    a11yNumSelected?: () => void;

    /* Specify menu alignment. The default value is justify, which makes the menu as wide as the input and truncates long values.
       Specifying left or right will align the menu to that side and the width will be determined by the length of menu item values. */
    align?: TypeaheadAlign;

    /* Allows the creation of new selections on the fly. Any new items will be added to the list of selections,
       but not the list of original options unless handled as such by Typeahead's parent.
       The newly added item will always be returned as an object even if the other options are simply strings,
       so be sure your onChange callback can handle this. */
    allowNew?: boolean | ((results: T[], props: AllTypeaheadOwnAndInjectedProps<T>) => boolean);

    /* Autofocus the input when the component initially mounts. */
    autoFocus?: boolean;

    /* Whether to render the menu inline or attach to document.body. */
    bodyContainer?: boolean;

    /* Specify the size of the input. */
    bsSize?: TypeaheadBsSizes;

    /* Whether or not filtering should be case-sensitive. */
    caseSensitive?: boolean;

    /* Displays a button to clear the input when there are selections. */
    clearButton?: boolean;

    /* The initial value displayed in the text input. */
    defaultInputValue?: string;

     /* Whether or not the menu is displayed upon initial render. */
    defaultOpen?: boolean;

    /* Specify any pre-selected options. Use only if you want the component to be uncontrolled. */
    defaultSelected?: T[];

    /* Whether to disable the input. Will also disable selections when multiple={true}. */
    disabled?: boolean;

    /* Specify whether the menu should appear above the input. */
    dropup?: boolean;

    /* Message displayed in the menu when there are no valid results.
       Passing a falsy value will hide the menu if no matches are found. */
    emptyLabel?: string;

    /* Either an array of fields in option to search, or a custom filtering callback. */
    filterBy?: (string[] | ((option: T, props: AllTypeaheadOwnAndInjectedProps<T>) => boolean));

    /* Whether or not to automatically adjust the position of the menu when it reaches the viewport boundaries. */
    flip?: boolean;

    /* Highlights the menu item if there is only one result and allows selecting that item by hitting enter.
       Does not work with allowNew. */
    highlightOnlyResult?: boolean;

    /* An html id attribute, required for assistive technologies such as screen readers. */
    id?: string | number;

    /* Whether the filter should ignore accents and other diacritical marks. */
    ignoreDiacritics?: boolean;

    /* Props to be applied directly to the input. onBlur, onChange, onFocus, and onKeyDown are ignored. */
    inputProps?: InputProps;

    /* Bootstrap 4 only. Adds the `is-invalid` classname to the `form-control`. */
    isInvalid?: boolean;

    /* Indicate whether an asynchronous data fetch is happening. */
    isLoading?: boolean;

    /* Bootstrap 4 only. Adds the `is-valid` classname to the `form-control`. */
    isValid?: boolean;

    /* Specify which option key to use for display or a render function.
       By default, the selector will use the label key. */
    labelKey?: TypeaheadLabelKey<T>;

    /* Maximum height of the dropdown menu. */
    maxHeight?: string;

    /* Maximum number of results to display by default. Mostly done for performance reasons
       so as not to render too many DOM nodes in the case of large data sets. */
    maxResults?: number;

    /* DEPRECATED. Id applied to the top-level menu element. Required for accessibility. */
    menuId?: string;

    /* Number of input characters that must be entered before showing results. */
    minLength?: number;

    /* Whether or not multiple selections are allowed. */
    multiple?: boolean;

    /* Provides the ability to specify a prefix before the user-entered text to indicate that the selection will be new. No-op unless allowNew={true}. */
    newSelectionPrefix?: string;

    /* Invoked when the input is blurred. Receives an event. */
    onBlur?: (e: Event) => void;

    /* Invoked whenever items are added or removed. Receives an array of the selected options. */
    onChange?: (selected: T[]) => void;

    /* Invoked when the input is focused. Receives an event. */
    onFocus?: (e: Event) => void;

    /* Invoked when the input value changes. Receives the string value of the input, as well as the original event. */
    onInputChange?: (input: string, e: Event) => void;

    /* Invoked when a key is pressed. Receives an event. */
    onKeyDown?: (e: Event) => void;

    /* DEPRECATED: Invoked when the menu is hidden. */
    onMenuHide?: () => void;

    /* DEPRECATED: Invoked when the menu is shown. */
    onMenuShow?: () => void;

    /*     Invoked when menu visibility changes. */
    onMenuToggle?: (show: boolean) => void;

    /* Invoked when the pagination menu item is clicked. */
    onPaginate?: (e: Event, numResults: number) => void;

    /* Whether or not the menu should be displayed. undefined allows the component to control visibility,
    while true and false show and hide the menu, respectively. */
    open?: boolean;

    /* Full set of options, including any pre-selected options. */
    options: T[];

    /* Give user the ability to display additional results if the number of results exceeds maxResults. */
    paginate?: boolean;

    /* Prompt displayed when large data sets are paginated. */
    paginationText?: string;

    /* Placeholder text for the input. */
    placeholder?: string;

    /* Whether to use fixed positioning for the menu, which is useful when rendering inside a
    container with overflow: hidden;. Uses absolute positioning by default. */
    positionFixed?: boolean;

    /* Callback for custom menu rendering. */
    renderMenu?: (results: Array<TypeaheadResult<T>>, menuProps: any) => React.ReactNode;

    /* Provides a hook for customized rendering of menu item contents. */
    renderMenuItemChildren?: (option: TypeaheadResult<T>, props: TypeaheadMenuProps<T>, index: number) => React.ReactNode;

    /* Provides a hook for customized rendering of tokens when multiple selections are enabled. */
    renderToken?: (selectedItem: T, props: TypeaheadMenuProps<T>, index: number) => React.ReactNode;

    /* The selected option(s) displayed in the input. Use this prop if you want to control the component via its parent. */
    selected?: T[];

    /* Allows selecting the hinted result by pressing enter. */
    selectHintOnEnter?: boolean;
}

export type AllTypeaheadOwnAndInjectedProps<T extends TypeaheadModel> = TypeaheadProps<T> & TypeaheadContainerProps<T>;
export class Typeahead<T extends TypeaheadModel> extends React.Component<TypeaheadProps<T>> { }

/* ---------------------------------------------------------------------------
                       AsyncTypeahead Props and Component
--------------------------------------------------------------------------- */
export interface AsyncTypeaheadProps<T extends TypeaheadModel> extends TypeaheadProps<T> {
    /*     Delay, in milliseconds, before performing search. */
    delay?: number;

    /* Whether or not a request is currently pending. Necessary for the component to know when new results are available. */
    isLoading: boolean;

    /* Callback to perform when the search is executed. */
    onSearch: (query: string) => void;

    /* Message displayed in the menu when there is no user input. */
    promptText?: React.ReactNode;

    /* Message to display in the menu while the request is pending. */
    searchText?: React.ReactNode;

    /* Whether or not the component should cache query results. */
    useCache?: boolean;
}

export class AsyncTypeahead<T extends TypeaheadModel> extends React.Component<AsyncTypeaheadProps<T>> { }

/* ---------------------------------------------------------------------------
        TypeaheadInputSingle & TypeaheadInputMulti Props and Component
--------------------------------------------------------------------------- */
export interface BaseTypeaheadInputProps extends React.InputHTMLAttributes<'input'> {
    type: 'text';
}

export interface TypeaheadSingleInputWithHocProps<T extends TypeaheadModel> extends
    Omit<BaseTypeaheadInputProps, keyof InputContainerPropsSingle<T>>,
    InputContainerPropsSingle<T> {}

export interface TypeaheadMulitInputWithHocProps<T extends TypeaheadModel> extends
    Omit<BaseTypeaheadInputProps, keyof InputContainerPropsMultiple<T>>,
    HintedInputContext<T>,
    InputContainerPropsMultiple<T> {}

export type TypeaheadInputPropKeys = 'bsSize'|'disabled'|'inputProps'|'labelKey'|'multiple'|
                                     'onBlur'|'onChange'|'onFocus'|'onKeyDown'|'placeholder'|'renderToken'|'selected';

export type TypeaheadInputProps<T extends TypeaheadModel> = Pick<TypeaheadProps<T>, TypeaheadInputPropKeys>;

export class TypeaheadInputSingle<T extends TypeaheadModel> extends React.Component<TypeaheadSingleInputWithHocProps<T>> { }
export class TypeaheadInputMulti<T extends TypeaheadModel> extends React.Component<TypeaheadMulitInputWithHocProps<T>> { }

/* ---------------------------------------------------------------------------
                       Highlighter Props and Component
--------------------------------------------------------------------------- */
export interface HighligherProps {
    children: React.ReactNode;
    search?: string;
}

export class Highlighter extends React.PureComponent<HighligherProps> { }

/* ---------------------------------------------------------------------------
                       ClearButton Props and Component
--------------------------------------------------------------------------- */
export interface ClearButtonProps extends React.HTMLAttributes<'button'> {
    bsSize?: TypeaheadBsSizes;
    label?: string;
    onClick: React.HTMLAttributes<'button'>['onClick']; // make onClick requried
}

export const ClearButton: React.FunctionComponent<ClearButtonProps>;

/* ---------------------------------------------------------------------------
                       Loader Props and Component
--------------------------------------------------------------------------- */
export interface LoaderProps {
    bsSize: TypeaheadBsSizes;
}

export const Loader: React.FunctionComponent<LoaderProps>;

/* ---------------------------------------------------------------------------
                       AutosizeInput Props and Component
--------------------------------------------------------------------------- */
export interface AutosizeInputProps extends Pick<React.InputHTMLAttributes<'input'>, 'className' | 'style'> {
    inputClassName?: string;
    inputRef?: React.LegacyRef<HTMLInputElement>;
    inputStyle?: Pick<React.CSSProperties, 'boxSizing' | 'width'>;
    style: React.CSSProperties;
}

export class AutosizeInput extends React.Component<AutosizeInputProps> { }

/* ---------------------------------------------------------------------------
                       Menu Props and Component
--------------------------------------------------------------------------- */
export interface MenuProps {
    id: string;
    className?: string;
    emptyLabel?: string;
    innerRef?: React.LegacyRef<HTMLUListElement>;
    maxHeight?: string;
    style?: React.CSSProperties;
    text?: string;
}

export type MenuHeaderProps = Omit<React.HTMLProps<'li'>, 'className'>;

export class Menu extends React.Component<MenuProps> {
    static Divider: React.FunctionComponent;
    static Header: React.FunctionComponent<MenuHeaderProps>;
}

/* ---------------------------------------------------------------------------
                       TypeaheadMenu Props and Component
--------------------------------------------------------------------------- */
// prop names that Typeahead provides to TypeaheadMenu
export type TypeaheadMenuPropsPick = 'labelKey' | 'newSelectionPrefix'| 'options' | 'renderMenuItemChildren';
export interface TypeaheadMenuProps<T extends TypeaheadModel> extends MenuProps, Pick<AllTypeaheadOwnAndInjectedProps<T>, TypeaheadMenuPropsPick> {}
export class TypeaheadMenu<T extends TypeaheadModel> extends React.Component<TypeaheadMenuProps<T>> { }

/* ---------------------------------------------------------------------------
                       Menu Item Props and Component
--------------------------------------------------------------------------- */
export interface BaseMenuItemProps extends React.HTMLProps<'li'> {
    active?: boolean;
}
export class BaseMenuItem extends React.Component<BaseMenuItemProps> { }

export interface MenuItemProps<T extends TypeaheadModel> extends BaseMenuItemProps {
    option: T;
    position: number;
    label?: string;
}

export class MenuItem<T extends TypeaheadModel> extends React.Component<MenuItemProps<T>> { }

/* ---------------------------------------------------------------------------
                       Overlay Props and Component
--------------------------------------------------------------------------- */
export type OverlayTypeaheadProps = Pick<TypeaheadProps<any>, 'align' | 'dropup' | 'flip' | 'onMenuHide' | 'onMenuShow' | 'onMenuToggle'>;

export interface OverlayProps extends OverlayTypeaheadProps {
    children?: React.ReactNode;
    className?: string;
    container: HTMLElement;
    referenceElement?: HTMLElement;
    show?: boolean;
}

export class Overlay extends React.Component<OverlayProps> { }

/* ---------------------------------------------------------------------------
                       Token Props and Component
--------------------------------------------------------------------------- */
export interface TokenProps extends React.HTMLProps<'div'> {
    active?: boolean;
    onRemove?: () => void; // Token does not invoke onRemove with any parameters
}

export class Token extends React.Component<TokenProps> { }
