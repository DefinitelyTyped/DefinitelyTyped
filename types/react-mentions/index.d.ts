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
     * @default false
     */
    singleLine?: boolean | undefined;

    /**
     * If set to `true` spaces will not interrupt matching suggestions
     */
    allowSpaceInQuery?: boolean | undefined;

    /** Renders the SuggestionList above the cursor if there is not enough space below */
    allowSuggestionsAboveCursor?: boolean | undefined;

    /** Forces the SuggestionList to be rendered above the cursor */
    forceSuggestionsAboveCursor?: boolean | undefined;
    ignoreAccents?: boolean | undefined;

    /** @default '' */
    value?: string | undefined;

    /** A callback that is invoked when the user changes the value in the mentions input */
    onChange?: OnChangeHandlerFunc | undefined;
    placeholder?: string | undefined;

    /** Passes true as second argument if the blur was caused by a mousedown on a suggestion */
    onBlur?:
        | ((
            event: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLTextAreaElement>,
            clickedSuggestion: boolean,
        ) => void)
        | undefined;
    onSelect?: ((event: React.UIEvent) => void) | undefined;
    onKeyDown?:
        | ((
            event: React.KeyboardEvent<HTMLTextAreaElement> | React.KeyboardEvent<HTMLInputElement>,
        ) => void)
        | undefined;
    children: React.ReactElement<MentionProps> | Array<React.ReactElement<MentionProps>>;
    className?: string | undefined;
    classNames?: any;
    style?: any;

    /** Allows customizing the container of the suggestions */
    customSuggestionsContainer?: ((children: React.ReactNode) => React.ReactNode) | undefined;

    /** Render suggestions into the DOM in the supplied host element. */
    suggestionsPortalHost?: Element | undefined;

    /** Accepts a React ref to forward to the underlying input element */
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
export interface MentionsInputComponentUnwrapped extends React.Component<MentionsInputProps> {
    /**
     * @deprecated since version 2.4.0. Please use @see MentionsInputProps.inputRef
     */
    inputRef?: HTMLInputElement | HTMLTextAreaElement | undefined;
}

/**
 * @deprecated Use {MentionsInputComponentUnwrapped}
 */
export interface MentionsInputComponentUnrwapped extends MentionsInputComponentUnwrapped {}

/**
 * Used with @see React.RefObject<MentionsInputComponent>.
 */
export interface MentionsInputComponent extends React.Component<MentionsInputProps> {
    // MentionsInput uses substyle (https://github.com/jfschwarz/substyle) which adds this wrappedInstance
    wrappedInstance?: MentionsInputComponentUnwrapped | undefined;
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
    /**
     * Callback invoked when a suggestion has been added
     */
    onAdd?: OnAddHandlerFunc | undefined;

    /** Allows customizing how mention suggestions are rendered */
    renderSuggestion?: SuggestionFunc | undefined;
    className?: string | undefined;

    /**
     * A template string for the markup to use for mentions
     * @default '@[__display__](__id__)'
     */
    markup?: string | undefined;

    /** Accepts a function for customizing the string that is displayed for a mention */
    displayTransform?: DisplayTransformFunc | undefined;

    /**
     * Defines the char sequence upon which to trigger querying the data source
     * @default '@'
     */
    trigger: string | RegExp;
    isLoading?: boolean | undefined;

    /**
     * An array of the mentionable data entries (objects with id & display keys, or a filtering function that returns an array based on a query parameter
     * @default null
     */
    data: SuggestionDataItem[] | DataFunc | null;
    style?: any;

    /** Append a space when a suggestion has been added */
    appendSpaceOnAdd?: boolean | undefined;

    /**
     * Allows providing a custom regular expression for parsing your markup and extracting the placeholder interpolations
     */
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
    display?: string | undefined;
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
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
) => Promise<void> | void | Promise<SuggestionDataItem[]> | SuggestionDataItem[];

export type SuggestionFunc = (
    suggestion: SuggestionDataItem,
    search: string,
    highlightedDisplay: React.ReactNode,
    index: number,
    focused: boolean,
) => React.ReactNode;

export type OnAddHandlerFunc = (
    id: string | number,
    display: string,
    startPos: number,
    endPos: number,
) => void;
