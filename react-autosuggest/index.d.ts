// Type definitions for react-autosuggest v3.7.3
// Project: http://react-autosuggest.js.org/
// Definitions by: Nicolas Schmitt <https://github.com/nicolas-schmitt>, Philip Ottesen <https://github.com/pjo256>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="react"/>

declare namespace ReactAutosuggest {
  interface SuggestionUpdateRequest {
    value: string;
    reason: string;
  }

  interface InputValues {
    value: string;
    valueBeforeUpDown?: string;
  }

  interface ChangeEvent {
    newValue: string;
    method: 'down' | 'up' | 'escape' | 'enter' | 'click' | 'type';
  }

  interface BlurEvent {
    focusedSuggestion: any;
  }

  interface InputProps extends React.HTMLAttributes<any> {
    value: string;
    onChange: (event: React.FormEvent<any>, params?: ChangeEvent) => void;
    onBlur?: (event: React.FormEvent<any>, params?: BlurEvent) => void;
  }

  interface ExplicitSuggestionSelectedEventData<TSuggestion> {
    method: 'click' | 'enter';
    sectionIndex: number | null;
    suggestion: TSuggestion;
    suggestionValue: string;
  }

  interface SuggestionSelectedEventData extends ExplicitSuggestionSelectedEventData<any> {
  }

  interface Theme {
    container?: string;
    containerOpen?: string;
    input?: string;
    sectionContainer?: string;
    sectionSuggestionsContainer?: string;
    sectionTitle?: string;
    suggestion?: string;
    suggestionFocused?: string;
    suggestionsContainer?: string;
  }

  interface AutosuggestProps extends React.Props<Autosuggest> {
    suggestions: any[];
    onSuggestionsUpdateRequested?: (request: SuggestionUpdateRequest) => void;
    getSuggestionValue: (suggestion: any) => string;
    renderSuggestion: (suggestion: any, inputValues: InputValues) => JSX.Element;
    inputProps: InputProps;
    alwaysRenderSuggestions?: boolean;
    shouldRenderSuggestions?: (value: string) => boolean;
    multiSection?: boolean;
    renderSectionTitle?: (section: any, inputValues: InputValues) => JSX.Element;
    getSectionSuggestions?: (section: any) => any[];
    onSuggestionSelected?: (event: React.FormEvent<any>, data: SuggestionSelectedEventData | ExplicitSuggestionSelectedEventData<any>) => void;
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
