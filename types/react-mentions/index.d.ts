import * as React from "react";

export {};

/**
 * MentionsInput is the main component rendering the textarea control. It takes one or multiple Mention components as its children.
 */
export const MentionsInput: MentionsInputClass;

/**
 * Each Mention component represents a data source for a specific class of mentionable objects, such as users, template variables, issues, etc.
 */
export const Mention: React.FC<MentionProps>;

/**
 * The properties for the @see MentionsInput component.
 */
export interface MentionsInputProps
    extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange" | "onBlur" | "onKeyDown" | "onSelect">
{
    /**
     * If set to `true` a regular text input element will be rendered
     * instead of a textarea
     */
    singleLine?: boolean | undefined;
    /**
     * If set to `true` spaces will not interrupt matching suggestions
     */
    allowSpaceInQuery?: boolean | undefined;
    allowSuggestionsAboveCursor?: boolean | undefined;
    forceSuggestionsAboveCursor?: boolean | undefined;
    ignoreAccents?: boolean | undefined;
    value?: string | undefined;
    onChange?: OnChangeHandlerFunc | undefined;
    placeholder?: string | undefined;
    onBlur?:
        | ((
            event: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLTextAreaElement>,
            clickedSuggestion: boolean,
        ) => void)
        | undefined;
    onSelect?: ((event: React.UIEvent) => void) | undefined;
    onKeyDown?:
        | ((event: React.KeyboardEvent<HTMLTextAreaElement> | React.KeyboardEvent<HTMLInputElement>) => void)
        | undefined;
    children: React.ReactElement<MentionProps> | Array<React.ReactElement<MentionProps>>;
    className?: string | undefined;
    classNames?: any;
    style?: any;
    customSuggestionsContainer?: (children: React.ReactNode) => React.ReactNode | undefined;
    suggestionsPortalHost?: Element | undefined;
    inputRef?: React.Ref<HTMLTextAreaElement> | React.Ref<HTMLInputElement> | undefined;
    /**
     * This label would be exposed to screen readers when suggestion popup appears
     * @default ''
     */
    a11ySuggestionsListLabel?: string | undefined;
}

/**
 * Exposes the type for use with the @see MentionsInputComponent.wrappedInstance which is added by react-mentions' use of substyle (https://github.com/jfschwarz/substyle).
 */
export interface MentionsInputComponentUnrwapped extends React.Component<MentionsInputProps> {
    /**
     * @deprecated since version 2.4.0. Please use @see MentionsInputProps.inputRef
     */
    inputRef?: HTMLInputElement | HTMLTextAreaElement | undefined;
}

/**
 * Used with @see React.RefObject<MentionsInputComponent>.
 */
export interface MentionsInputComponent extends React.Component<MentionsInputProps> {
    // MentionsInput uses substyle (https://github.com/jfschwarz/substyle) which adds this wrappedInstance
    wrappedInstance?: MentionsInputComponentUnrwapped | undefined;
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
    onAdd?: ((id: string | number, display: string) => void) | undefined;
    renderSuggestion?:
        | ((
            suggestion: SuggestionDataItem,
            search: string,
            highlightedDisplay: React.ReactNode,
            index: number,
            focused: boolean,
        ) => React.ReactNode)
        | undefined;
    className?: string | undefined;
    markup?: string | undefined;
    displayTransform?: DisplayTransformFunc | undefined;
    trigger: string | RegExp;
    isLoading?: boolean | undefined;
    data: SuggestionDataItem[] | DataFunc;
    style?: any;
    appendSpaceOnAdd?: boolean | undefined;
    regex?: RegExp | undefined;
}

/**
 * The shape of a mention.
 */
export interface MentionItem {
    display: string;
    id: string;
    childIndex: number;
    index: number;
    plainTextIndex: number;
}

/**
 * The shape of suggestion items.
 */
export interface SuggestionDataItem {
    id: string | number;
    display?: string;
}

/**
 * Defines the function signature for implementing @see MentionsInputProps.displayTransform
 */
export type DisplayTransformFunc = (id: string, display: string) => string;

/**
 * Defines the function signature for implementing @see MentionsInputProps.onChange
 */
export type OnChangeHandlerFunc = (
    event: { target: { value: string } },
    newValue: string,
    newPlainTextValue: string,
    mentions: MentionItem[],
) => void;

/**
 * The function to implement asynchronous loading of suggestions in @see MentionProps.data .
 */
export type DataFunc = (
    query: string,
    callback: (data: SuggestionDataItem[]) => void,
) => Promise<void> | void | Promise<SuggestionDataItem[]> | SuggestionDataItem[];
