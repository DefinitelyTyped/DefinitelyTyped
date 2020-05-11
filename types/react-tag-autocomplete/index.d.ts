// Type definitions for react-tag-autocomplete 5.12
// Project: https://github.com/i-like-robots/react-tags#readme
// Definitions by: James Lismore <https://github.com/jlismore>
//                 Rahul Sagore <https://github.com/Rahul-Sagore>
//                 Max Cilauro <https://github.com/MaxCilauro>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component } from 'react';

export default class ReactTags extends Component<ReactTagsProps> {}

export interface Tag {
    id: string | number;
    name: string;
    disabled?: boolean;
}

export interface TagComponentProps {
    tag: Tag;
    classNames: ClassNames;
    onDelete: (event: React.MouseEvent<HTMLButtonElement>) => void;
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
    addOnBlur?: boolean;
    /**
     * Disables ability to delete the selected tags when backspace is pressed while focussed on the text input. Default: true.
     */
    allowBackspace?: boolean;
    /**
     * Allows users to add new (not suggested) tags. Default: false.
     */
    allowNew?: boolean;
    /**
     * Boolean parameter to control whether the text-input should be autofocused on mount. Default: true.
     */
    autofocus?: boolean;
    /**
     * Boolean parameter to control whether the text-input should be automatically resized to fit its value. Default: true.
     */
    autoresize?: boolean;
    classNames?: ClassNames;
    /**
     * Clear the text input when a tag is deleted. Default: true.
     */
    clearInputOnDelete?: boolean;
    /**
     * Array of characters matching keyboard event key values. This is useful when needing to support a specific character irrespective of the keyboard layout.
     * Note, that this list is separate from the one specified by the delimiters option, so you'll need to set the value there to [],
     * if you wish to disable those keys. Example usage: delimiterChars={[',', ' ']}. Default: []
     */
    delimiterChars?: string[];
    /**
     * Array of integers matching keyboard event keyCode values. When a corresponding key is pressed, the preceding string is finalised as tag. Default: [9, 13] (Tab and return keys).
     */
    delimiters?: number[];
    /**
     * Function called when the user wants to add a tag. Receives the tag
     */
    handleAddition: (tag: Tag) => void;
    /**
     * Optional event handler when focus on the input is lost. Receives no arguments.
     */
    handleBlur?: () => void;
    /**
     * Function called when the user wants to delete a tag. Receives the tag index.
     */
    handleDelete: (index: number) => void;
    /**
     * Optional event handler when the input receives focus. Receives no arguments.
     */
    handleFocus?: () => void;
    /**
     * Optional event handler when the input changes. Receives the current input value.
     */
    handleInputChange?: (input: string) => void;
    /**
     * Optional validation function that determines if tag should be added to tags. Receives a tag object. Should return a boolean.
     */
    handleValidate?: (tag: Tag) => boolean;
    /**
     * An object containing additional attributes that will be applied to the underlying <input /> field.
     */
    inputAttributes?: { [key: string]: any };
    /**
     * Maximum number of suggestions to display. Default: 6.
     */
    maxSuggestionsLength?: number;
    /**
     * How many characters are needed for suggestions to appear. Default: 2.
     */
    minQueryLength?: number;
    /**
     * Message shown if there are no matching suggestions. Default: null.
     */
    noSuggestionsText?: string;
    /**
     * The placeholder string shown for the input. Default: 'Add new tag'.
     */
    placeholder?: string;
    /**
     * An array of suggestions that are used as basis for showing suggestions. Each suggestion must have an id and a name property and an optional disabled property. Default: []
     */
    suggestions?: Tag[];
    /**
     * A callback function to filter suggestion items with. The callback receives two arguments; a suggestion and the current query and must return a boolean value.
     * If no function is supplied the default filter is applied. Default: null.
     */
    suggestionsFilter?: (suggestion: Tag, query: string) => boolean;
    /**
     * Provide a custom tag component to render. Default: null.
     */
    tagComponent?: React.SFC<TagComponentProps>;
    /**
     * An array of tags that are displayed as pre-selected. Each tag must have an id and a name property. Default: []
     */
    tags?: Tag[];
}
