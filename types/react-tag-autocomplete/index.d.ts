import { Component } from "react";

export default class ReactTags extends Component<ReactTagsProps> {}

export interface Tag {
    id: string | number;
    name: string;
    disabled?: boolean | undefined;
}

export interface TagComponentProps {
    tag: Tag;
    classNames: ClassNames;
    removeButtonText: string;
    onDelete: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface SuggestionComponentProps {
    item: Tag;
    query: string;
}

export interface ClassNames {
    root: string;
    rootFocused: string;
    selected: string;
    selectedTag: string;
    selectedTagName: string;
    search: string;
    searchInput: string;
    suggestions: string;
    suggestionActive: string;
    suggestionDisabled: string;
}

export interface ReactTagsProps {
    /**
     * Creates a tag from the current input value when focus on the input is lost. Default: false.
     */
    addOnBlur?: boolean | undefined;
    /**
     * Disables ability to delete the selected tags when backspace is pressed while focussed on the text input.
     * Default: true.
     */
    allowBackspace?: boolean | undefined;
    /**
     * Allows users to add new (not suggested) tags. Default: false.
     */
    allowNew?: boolean | undefined;
    /**
     * The aria-label string for the input. Defaults to placeholder string.
     */
    ariaLabelText?: string | undefined;
    /**
     * Boolean parameter to control whether the text-input should be autofocused on mount. Default: true.
     */
    autofocus?: boolean | undefined;
    /**
     * Boolean parameter to control whether the text-input should be automatically resized to fit its value.
     * Default: true.
     */
    autoresize?: boolean | undefined;
    classNames?: ClassNames | undefined;
    /**
     * Clear the text input when a tag is deleted. Default: true.
     */
    clearInputOnDelete?: boolean | undefined;
    /**
     * Array of integers matching keyboard event keyCode values. When a corresponding key is pressed,
     * the preceding string is finalised as tag. Default: [9, 13] (Tab and return keys).
     */
    delimiters?: string[] | undefined;
    /**
     * The ID attribute given to the listbox element. Default: ReactTags.
     */
    id?: string | undefined;
    /**
     * An object containing additional attributes that will be applied to the underlying <input /> field.
     */
    inputAttributes?: { [key: string]: any } | undefined;
    /**
     * Maximum number of suggestions to display. Default: 6.
     */
    maxSuggestionsLength?: number | undefined;
    /**
     * How many characters are needed for suggestions to appear. Default: 2.
     */
    minQueryLength?: number | undefined;
    /**
     * Enables users to show a prompt to add a new tag at the bottom of the suggestions list if allowNew is enabled.
     * Defaults to null.
     */
    newTagText?: string | undefined;
    /**
     * Message shown if there are no matching suggestions. Default: null.
     */
    noSuggestionsText?: string | undefined;
    /**
     * Function called when the user wants to add a tag. Receives the tag
     */
    onAddition: (tag: Tag) => void;
    /**
     * Optional event handler when focus on the input is lost. Receives no arguments.
     */
    onBlur?: (() => void) | undefined;
    /**
     * Function called when the user wants to delete a tag. Receives the tag index.
     */
    onDelete: (index: number) => void;
    /**
     * Optional event handler when the input receives focus. Receives no arguments.
     */
    onFocus?: (() => void) | undefined;
    /**
     * Optional event handler when the input changes. Receives the current input value.
     */
    onInput?: ((input: string) => void) | undefined;
    /**
     * Optional validation function that determines if tag should be added to tags. Receives a tag object.
     * Should return a boolean.
     */
    onValidate?: ((tag: Tag) => boolean) | undefined;
    /**
     * The placeholder string shown for the input. Default: 'Add new tag'.
     */
    placeholderText?: string | undefined;
    /**
     * The title text to add to the remove selected tag button. Default 'Click to remove tag'.
     */
    removeButtonText?: string | undefined;
    /**
     * An array of suggestions that are used as basis for showing suggestions.
     * Each suggestion must have an id and a name property and an optional disabled property. Default: []
     */
    suggestions?: Tag[] | undefined;
    /**
     * A callback function to filter suggestion items with. The callback receives two arguments;
     * a suggestion and the current query and must return a boolean value.
     * If no function is supplied the default filter is applied. Default: null.
     */
    suggestionsFilter?: ((suggestion: Tag, query: string) => boolean) | undefined;
    /**
     * A callback function to apply a custom filter to the suggestions. The callback receives two arguments;
     * a query and the input suggestions and must return a new array of suggestion items.
     * Using this option you can filter and sort suggestions.
     */
    suggestionsTransform?: ((query: string, suggestions: Tag[]) => Tag[]) | undefined;
    /**
     * Provide a custom tag component to render. Default: null.
     */
    tagComponent?: React.FC<TagComponentProps> | undefined;
    /**
     * Provide a custom suggestion component to render. Receives the suggestion and current query as props. Defaults to null.
     */
    suggestionComponent?: React.FC<SuggestionComponentProps> | undefined;
    /**
     * An array of tags that are displayed as pre-selected. Each tag must have an id and a name property. Default: []
     */
    tags?: Tag[] | undefined;
}
