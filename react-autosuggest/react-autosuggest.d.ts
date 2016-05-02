// Type definitions for react-autosuggest 3.7.1
// Project: https://github.com/moroshko/react-autosuggest
// Definitions by: Stephen Jelfs <https://github.com/stephenjelfs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts" />

declare module "react-autosuggest" {
   interface Suggestion {
     text: string;
   }

  interface Theme {
    container?: string;
    containerOpen?: string;
    input?: string;
    suggestionsContainer?: string;
    suggestion?: string;
    suggestionFocused?: string;
    sectionContainer?: string;
    sectionTitle?: string;
    sectionSuggestionsContainer?: string;
  }

  interface InputProps {
    value: string;
    onChange: (event: any, params: {newValue: string, method: string}) => void;
    type?: string;
    placeholder?: string;
  }

  interface AutosuggestProps extends __React.Props<Autosuggest> {
    suggestions: any[];
    onSuggestionsUpdateRequested?: (params: {value: string, reason: string}) => void;
    getSuggestionValue: (suggestion: any) => string;
    renderSuggestion: (suggestion: any, params: {value: string, valueBeforeUpDown: string}) => __React.ReactElement<any>;
    inputProps: InputProps;
    shouldRenderSuggestions?: (value: string) => boolean;
    multiSection?: boolean;
    renderSectionTitle?: (section: any) =>  __React.ReactElement<any>;
    getSectionSuggestions?: (section: any) => any[];
    onSuggestionSelected?: (event: any, params: {suggestion: any, suggestionValue: string, method: string}) => void;
    focusInputOnSuggestionClick?: boolean;
    theme?: Theme;
    id?: string;
  }

  class Autosuggest extends __React.Component<AutosuggestProps, {}> {}

  export = Autosuggest;
}
