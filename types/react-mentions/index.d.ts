// Type definitions for react-mentions 3.3
// Project: https://github.com/signavio/react-mentions
// Definitions by: Scott Willeke <https://github.com/activescott>
//                 Eugene Fedorenko <https://github.com/efedorenko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
import * as React from "react";

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export {};

/**
 * MentionsInput is the main component rendering the textarea control. It takes one or multiple Mention components as its children.
 */
export const MentionsInput: MentionsInputClass;

/**
 * Each Mention component represents a data source for a specific class of mentionable objects, such as users, template variables, issues, etc.
 */
export const Mention: React.SFC<MentionProps>;

/**
 * The properties for the @see MentionsInput component.
 */
export interface MentionsInputProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'onBlur' | 'onKeyDown' | 'onSelect'> {
    /**
     * If set to `true` a regular text input element will be rendered
     * instead of a textarea
     */
    singleLine?: boolean;
    /**
     * If set to `true` spaces will not interrupt matching suggestions
     */
    allowSpaceInQuery?: boolean;
    allowSuggestionsAboveCursor?: boolean;
    ignoreAccents?: boolean;
    value?: string;
    onChange?: OnChangeHandlerFunc;
    placeholder?: string;
    onBlur?: (event: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLTextAreaElement>, clickedSuggestion: boolean) => void;
    onSelect?: (event: React.UIEvent) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement> | React.KeyboardEvent<HTMLInputElement>) => void;
    children: React.ReactElement<MentionProps> | Array<React.ReactElement<MentionProps>>;
    className?: string;
    classNames?: any;
    style?: any;
    suggestionsPortalHost?: Element;
    inputRef?: React.Ref<HTMLTextAreaElement> | React.Ref<HTMLInputElement>;
}

/**
 * Exposes the type for use with the @see MentionsInputComponent.wrappedInstance which is added by react-mentions' use of substyle (https://github.com/jfschwarz/substyle).
 */
export interface MentionsInputComponentUnrwapped extends React.Component<MentionsInputProps> {
    /**
     * @deprecated since version 2.4.0. Please use @see MentionsInputProps.inputRef
     */
    inputRef?: HTMLInputElement | HTMLTextAreaElement;
}

/**
 * Used with @see React.RefObject<MentionsInputComponent>.
 */
export interface MentionsInputComponent extends React.Component<MentionsInputProps> {
    // MentionsInput uses substyle (https://github.com/jfschwarz/substyle) which adds this wrappedInstance
    wrappedInstance?: MentionsInputComponentUnrwapped;
}

/**
 * Used to reference MentionsInput element in a TSX file.
 */
export interface MentionsInputClass extends React.ComponentClass<MentionsInputProps> {
}

/**
 * Props definition for a mention subelement.
 */
export interface MentionProps {
    onAdd?: (id: string | number, display: string) => void;
    renderSuggestion?: (suggestion: SuggestionDataItem, search: string, highlightedDisplay: React.ReactNode, index: number, focused: boolean) => React.ReactNode;
    className?: string;
    markup?: string;
    displayTransform?: DisplayTransformFunc;
    trigger: string | RegExp;
    isLoading?: boolean;
    data: SuggestionDataItem[] | DataFunc;
    style?: any;
    appendSpaceOnAdd?: boolean;
    regex?: RegExp;
}

/**
 * The shape of a mention.
 */
export interface MentionItem {
    display: string;
    id: string;
    type: null;
}

/**
 * The shape of suggestion items.
 */
export interface SuggestionDataItem {
    id: string | number;
    display: string;
}

/**
 * Defines the function signature for implementing @see MentionsInputProps.displayTransform
 */
export type DisplayTransformFunc = (id: string, display: string) => string;

/**
 * Defines the function signature for implementing @see MentionsInputProps.onChange
 */
export type OnChangeHandlerFunc = (event: { target: { value: string } }, newValue: string, newPlainTextValue: string, mentions: MentionItem[]) => void;

/**
 * The function to implement asynchronous loading of suggestions in @see MentionProps.data .
 */
export type DataFunc = (query: string, callback: (data: SuggestionDataItem[]) => void) => void | SuggestionDataItem[];
