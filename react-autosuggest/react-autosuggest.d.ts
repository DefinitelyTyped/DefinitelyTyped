// Type definitions for react-autosuggest v7.0.1
// Project: http://react-autosuggest.js.org/
// Definitions by: Nicolas Schmitt <https://github.com/nicolas-schmitt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts"/>

declare namespace ReactAutosuggest {
    import React = __React;

    interface SuggestionsFetchRequest {
        value: string;
        reason: string;
    }

    interface InputValues {
        value: string;
        valueBeforeUpDown?: string;
    }

    interface InputProps extends React.HTMLAttributes {
        value: string;
        onChange: (event: React.FormEvent, params?: { newValue: string, method: string }) => void;
    }

    interface ExplicitSuggestionSelectedEventData<TSuggestion> {
        method: string;
        sectionIndex: number;
        suggestion: TSuggestion;
        suggestionValue: string;
    }

    interface SuggestionSelectedEventData extends ExplicitSuggestionSelectedEventData<any> {
    }

    interface Theme {
        container: string;
        containerOpen: string;
        input: string;
        sectionContainer: string;
        sectionSuggestionsContainer: string;
        sectionTitle: string;
        suggestion: string;
        suggestionFocused: string;
        suggestionsContainer: string;
    }

    interface AutosuggestProps extends React.Props<Autosuggest> {
        suggestions: any[];
        onSuggestionsFetchRequested: (request: SuggestionsFetchRequest) => void;
        onSuggestionsClearRequested?: () => void;
        getSuggestionValue: (suggestion: any) => any;
        renderSuggestion: (suggestion: any, inputValues: InputValues) => JSX.Element;
        inputProps: InputProps;
        onSuggestionSelected?: (event: React.FormEvent, data: SuggestionSelectedEventData | ExplicitSuggestionSelectedEventData<any>) => void;
        shouldRenderSuggestions?: (value: string) => boolean;
        alwaysRenderSuggestions?: boolean;
        focusFirstSuggestion?: boolean;
        focusInputOnSuggestionClick?: boolean;
        multiSection?: boolean;
        renderSectionTitle?: (section: any, inputValues: InputValues) => JSX.Element;
        getSectionSuggestions?: (section: any) => any[];
        renderInputComponent?: () => JSX.Element;
        renderSuggestionsContainer?: (children: any) => JSX.Element;
        theme?: Theme;
        id?: string;
    }

    class Autosuggest extends React.Component<AutosuggestProps, any> { }
}

declare module 'react-autosuggest' {
    import Autosuggest = ReactAutosuggest.Autosuggest;
    export = Autosuggest;
}
