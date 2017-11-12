// Autocomplete Plus 2.x
// https://atom.io/packages/autocomplete-plus

/// <reference path="./config.d.ts" />

import { Point, ScopeDescriptor, TextEditor } from "../index";

/** The parameters passed into getSuggestions by Autocomplete+. */
export interface SuggestionsRequestedEvent {
    /** The current TextEditor. */
    editor: TextEditor;

    /** The position of the cursor. */
    bufferPosition: Point;

    /** The scope descriptor for the current cursor position. */
    scopeDescriptor: ScopeDescriptor;

    /** The prefix for the word immediately preceding the current cursor position. */
    prefix: string;

    /** Whether the autocomplete request was initiated by the user. */
    activatedManually: boolean;
}

/** The parameters passed into onDidInsertSuggestion by Autocomplete+. */
export interface SuggestionInsertedEvent {
    editor: TextEditor;
    triggerPosition: Point;
    suggestion: TextSuggestion|SnippetSuggestion;
}

/**
 *  An autocompletion suggestion for the user.
 *  Primary data type for the Atom Autocomplete+ service.
 */
export interface Suggestion<T extends { text: string }|{ snippet: string }> {
    /**
     *  A string that will show in the UI for this suggestion.
     *  When not set, snippet || text is displayed.
     */
    displayText?: string;

    /**
     *  The text immediately preceding the cursor, which will be replaced by the text.
     *  If not provided, the prefix passed into getSuggestions will be used.
     */
    replacementPrefix?: string;

    /**
     *  The suggestion type. It will be converted into an icon shown against the
     *  suggestion.
     */
    type?: string;

    /** This is shown before the suggestion. Useful for return values. */
    leftLabel?: string;

    /** Use this instead of leftLabel if you want to use html for the left label. */
    leftLabelHTML?: string;

    /**
     *  An indicator (e.g. function, variable) denoting the "kind" of suggestion this
     *  represents.
     */
    rightLabel?: string;

    /** Use this instead of rightLabel if you want to use html for the right label. */
    rightLabelHTML?: string;

    /**
     *  Class name for the suggestion in the suggestion list. Allows you to style your
     *  suggestion via CSS, if desired.
     */
    className?: string;

    /**
     *  If you want complete control over the icon shown against the suggestion.
     *  e.g. iconHTML: <i class="icon-move-right"></i>
     */
    iconHTML?: string;

    /**
     *  A doc-string summary or short description of the suggestion. When specified, it
     *  will be displayed at the bottom of the suggestions list.
     */
    description?: string;

    /**
     *  A url to the documentation or more information about this suggestion.
     *  When specified, a More.. link will be displayed in the description area.
     */
    descriptionMoreURL?: string;
}

export interface TextSuggestion extends Suggestion<TextSuggestion> {
    /** The text which will be inserted into the editor, in place of the prefix. */
    text: string;
}

export interface SnippetSuggestion extends Suggestion<SnippetSuggestion> {
    /**
     *  A snippet string. This will allow users to tab through function arguments
     *  or other options.
     */
    snippet: string;
}

export type Suggestions = Array<TextSuggestion|SnippetSuggestion>;

/** The interface that all Autocomplete+ providers must implement. */
export interface AutocompleteProvider {
    /**
     *  Defines the scope selector(s) (can be comma-separated) for which your provider
     *  should receive suggestion requests.
     */
    selector: string;

    /**
     *  Is called when a suggestion request has been dispatched by autocomplete+ to
     *  your provider. Return an array of suggestions (if any) in the order you would
     *  like them displayed to the user. Returning a Promise of an array of suggestions
     *  is also supported.
     */
    getSuggestions(params: SuggestionsRequestedEvent): Suggestions|Promise<Suggestions>;

    /**
     *  Defines the scope selector(s) (can be comma-separated) for which your provider
     *  should not be used.
     */
    disableForSelector?: string;

    /**
     *  A number to indicate its priority to be included in a suggestions request.
     *  The default provider has an inclusion priority of 0. Higher priority providers
     *  can suppress lower priority providers with excludeLowerPriority.
     */
    inclusionPriority?: number;

    /** Will not use lower priority providers when this provider is used. */
    excludeLowerPriority?: boolean;

    /**
     *  A number to determine the sort order of suggestions. The default provider has
     *  an suggestion priority of 1.
     */
    suggestionPriority?: number;

    /**
     *  Function that is called when a suggestion from your provider was inserted
     *  into the buffer.
     */
    onDidInsertSuggestion?(params: SuggestionInsertedEvent): void;

    /** Will be called if your provider is being destroyed by autocomplete+ */
    dispose?(): void;
}
