// Type definitions for @webscopeio/react-textarea-autocomplete 4.7
// Project: https://github.com/webscopeio/react-textarea-autocomplete
// Definitions by: Michal Zochowski <https://github.com/michauzo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

export default ReactTextareaAutocomplete;
export as namespace ReactTextareaAutocomplete;

import * as React from "react";

type Component<P extends {}> = React.FunctionComponent<P> | React.ComponentClass<P>;

export type CaretPositionType = "start" | "end" | "next" | number;

export interface TextToReplaceType {
    text: string;
    caretPosition: CaretPositionType;
    key?: string;
}

export type DataProviderType<TItem> = (token: string) => Promise<TItem[]> | TItem[];

export interface ItemComponentProps<TItem> {
    selected: boolean;
    entity: TItem;
}

/**
 * Textarea Types
 */
export interface SettingType<TItem> {
    /**
     * Called after each keystroke to get data what the suggestion list should display (array or promise resolving array).
     */
    dataProvider: DataProviderType<TItem>;

    /**
     * The component for rendering the item in suggestion list. It has selected and entity props provided by React Textarea Autocomplete.
     */
    component: Component<ItemComponentProps<TItem>>;

    /**
     * Set this to true if you want to provide autocomplete for words (tokens) containing whitespace.
     * @default false
     */
    allowWhitespace?: boolean;

    /**
     * Show autocomplete only if it's preceded by whitespace. Cannot be combined with allowWhitespace.
     * @default false
     */
    afterWhitespace?: boolean;

    /**
     * (Optional for string based item. If the item is an object this method is required) This function defines text
     * which will be placed into textarea after the user makes a selection.
     *
     * You can also specify the behavior of caret if you return object {text: "item", caretPosition: "start"} the caret
     * will be before the word once the user confirms their selection. Other possible value are "next", "end" and number,
     * which is absolute number in contex of textarea (0 is equal position before the first char). Defaults to "next"
     * which is space after the injected word.
     *
     * The default behavior for string based item is a string: <TRIGGER><ITEM><TRIGGER>). This method should always
     * return a unique string, otherwise, you have to use object notation and specify your own key or return object
     * from dataProvider with key property.
     */
    output?: (item: TItem, trigger?: string) => TextToReplaceType | string;
}

export interface TriggerType<TItem> {
    [key: string]: SettingType<TItem>;
}

export type TextareaProps<
    TItem,
    CustomTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>
> = CustomTextAreaProps & {
    /**
     * Define triggers and their corresponding behavior.
     */
    trigger: TriggerType<TItem>;

    /**
     * Gets data props which is already fetched (and displayed) suggestion.
     */
    loadingComponent: Component<{ data: TItem[] | Promise<TItem[]> }>;

    /**
     * Allows you to get React ref of the underlying textarea.
     */
    innerRef?: (ref: HTMLTextAreaElement) => void;

    /**
     * With default implementation it will scroll the dropdown every time when the item gets out of the view.
     * @default true
     */
    scrollToItem?: boolean | ((container: HTMLDivElement, item: HTMLDivElement) => void);

    /**
     * Number of characters that user should type for trigger a suggestion.
     * @default 1
     */
    minChar?: number;

    /**
     * Listener called every time the textarea's caret position is changed.
     * The listener is called with one attribute - caret position denoted by an integer number.
     */
    onCaretPositionChange?: (pos: number) => void;

    /**
     * When it's true the textarea will move along with a caret as a user continues to type.
     * @default false
     */
    movePopupAsYouType?: boolean;

    /**
     * Element which should prevent autocomplete to overflow. Defaults to body.
     */
    boundariesElement?: string | HTMLElement;

    /**
     * What component use for as textarea. Default is textarea. (You can combine this with react-autosize-textarea for instance)
     */
    textAreaComponent?: Component<CustomTextAreaProps> | { component: Component<CustomTextAreaProps>; ref: string };

    /**
     * When set to true the autocomplete will be rendered at the end of the <body>
     * @default false
     */
    renderToBody?: boolean;

    /**
     * Callback get called everytime item is highlighted in the list
     */
    onItemHighlighted?: (event: { currentTrigger: string; item: TItem | null }) => void;

    /**
     * Callback get called everytime item is selected
     */
    onItemSelected?: (event: { currentTrigger: string; item: TItem }) => void;

    /**
     * Styles of textarea
     */
    style?: React.CSSProperties;

    /**
     * Styles of list's wrapper.
     */
    listStyle?: React.CSSProperties;

    /**
     * Styles of item's wrapper.
     */
    itemStyle?: React.CSSProperties;

    /**
     * Styles of loader's wrapper.
     */
    loaderStyle?: React.CSSProperties;

    /**
     * Styles of textarea's container.
     */
    containerStyle?: React.CSSProperties;

    /**
     * Styles of dropdown's wrapper.
     */
    dropdownStyle?: React.CSSProperties;

    /**
     * ClassNames of the textarea.
     */
    className?: string;

    /**
     * ClassNames of the textarea's container.
     */
    containerClassName?: string;

    /**
     *     ClassNames of list's wrapper.
     */
    listClassName?: string;

    /**
     * ClassNames of item's wrapper.
     */
    itemClassName?: string;

    /**
     * ClassNames of loader's wrapper.
     */
    loaderClassName?: string;

    /**
     *     ClassNames of dropdown's wrapper.
     */
    dropdownClassName?: string;
};

export interface TextareaState<TItem> {
    currentTrigger?: string;
    top?: number;
    left?: number;
    actualToken: string;
    data?: TItem[];
    value: string;
    dataLoading: boolean;
    selectionEnd: number;
    selectionStart: number;
    component?: React.SFC<ItemComponentProps<TItem>>;
}

declare class ReactTextareaAutocomplete<
    TItem extends string | object,
    CustomTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> = React.TextareaHTMLAttributes<HTMLTextAreaElement>
> extends React.Component<TextareaProps<TItem, CustomTextAreaProps>, TextareaState<TItem>> {
    /**
     * Gets the current caret position in the textarea.
     */
    getCaretPosition(): number;
    /**
     * Sets the caret position to the integer value passed as the argument.
     * @param position caret position to set.
     */
    setCaretPosition(position: number): void;
    /**
     * Returns selectionStart and selectionEnd of the textarea.
     */
    getSelectionPosition(): { selectionStart: number; selectionEnd: number };
    /**
     *     Returns currently selected word.
     */
    getSelectedText(): string | undefined;
}
