// Type definitions for react-autosuggest v3.7.3
// Project: http://react-autosuggest.js.org/
// Definitions by: Nicolas Schmitt <https://github.com/nicolas-schmitt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts"/>

declare namespace ReactAutosuggest {
  import React = __React;

  interface SuggestionUpdateRequest {
    value: string;
    reason: string;
  }

  interface InputValues {
    value: string;
    valueBeforeUpDown?: string;
  }

  interface InputProps extends React.HTMLAttributes {
    value: string;
    onChange: (event: React.FormEvent, params?: {newValue: string, method: string}) => void;
  }

  interface SuggestionSelectedEventData {
    method: string;
    sectionIndex: number;
    suggestion: any;
    suggestionValue: string;
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
    onSuggestionsUpdateRequested?: (request: SuggestionUpdateRequest) => void;
    getSuggestionValue: (suggestion: any) => string;
    renderSuggestion: (suggestion: any, inputValues: InputValues) => JSX.Element;
    inputProps: InputProps;
    shouldRenderSuggestions?: (value: string) => boolean;
    multiSection?: boolean;
    renderSectionTitle?: (section: any, inputValues: InputValues) => JSX.Element;
    getSectionSuggestions?: (section: any) => any[];
    onSuggestionSelected?: (event: React.FormEvent, data: SuggestionSelectedEventData) => void;
    focusInputOnSuggestionClick?: boolean;
    theme?: Theme;
    id?: string;
  }

  class Autosuggest extends React.Component<AutosuggestProps, any> {}
}

declare module 'react-autosuggest' {
  import Autosuggest = ReactAutosuggest.Autosuggest;
  export = Autosuggest;
}
