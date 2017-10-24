// Type definitions for react-autosuggest 9.3
// Project: http://react-autosuggest.js.org/
// Definitions by: Nicolas Schmitt <https://github.com/nicolas-schmitt>
//                 Philip Ottesen <https://github.com/pjo256>
//                 Robert Essig <https://github.com/robessog>
//                 Terry Bayne <https://github.com/tbayne>
//                 Christopher Deutsch <https://github.com/cdeutsch>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';
declare class Autosuggest extends React.Component<Autosuggest.AutosuggestProps> {}

export = Autosuggest;

declare namespace Autosuggest {
  interface SuggestionsFetchRequest {
    value: string;
    reason: 'input-changed' | 'input-focused' | 'escape-pressed' | 'suggestions-revealed' | 'suggestion-selected';
  }

  interface InputValues {
    value: string;
    valueBeforeUpDown?: string;
  }

  interface RenderSuggestionParams {
    query: string;
    isHighlighted: boolean;
  }

  interface SuggestionHighlightedParams {
    suggestion: any;
  }

  interface ChangeEvent {
    newValue: string;
    method: 'down' | 'up' | 'escape' | 'enter' | 'click' | 'type';
  }

  interface BlurEvent {
    highlightedSuggestion: any;
  }

  interface InputProps extends React.InputHTMLAttributes<any> {
    value: string;
    onChange(event: React.FormEvent<any>, params?: ChangeEvent): void;
    onBlur?(event: React.FormEvent<any>, params?: BlurEvent): void;
    [key: string]: any;
  }

  interface SuggestionSelectedEventData<TSuggestion> {
    suggestion: TSuggestion;
    suggestionValue: string;
    suggestionIndex: number;
    sectionIndex: number | null;
    method: 'click' | 'enter';
  }

  interface Theme {
    container?: string;
    containerOpen?: string;
    input?: string;
    inputOpen?: string;
    inputFocused?: string;
    suggestionsContainer?: string;
    suggestionsContainerOpen?: string;
    suggestionsList?: string;
    suggestion?: string;
    suggestionFirst?: string;
    suggestionHighlighted?: string;
    sectionContainer?: string;
    sectionContainerFirst?: string;
    sectionTitle?: string;
  }

  interface AutosuggestProps extends React.Props<Autosuggest> {
    suggestions: any[];
    onSuggestionsFetchRequested(request: SuggestionsFetchRequest): void;
    onSuggestionsClearRequested?(): void;
    getSuggestionValue(suggestion: any): any;
    renderSuggestion(suggestion: any, params: RenderSuggestionParams): JSX.Element;
    inputProps: InputProps;
    onSuggestionSelected?(event: React.FormEvent<any>, data: SuggestionSelectedEventData<any>): void;
    onSuggestionHighlighted?(params: SuggestionHighlightedParams): void;
    shouldRenderSuggestions?(value: string): boolean;
    alwaysRenderSuggestions?: boolean;
    highlightFirstSuggestion?: boolean;
    focusInputOnSuggestionClick?: boolean;
    multiSection?: boolean;
    renderSectionTitle?(section: any): JSX.Element;
    getSectionSuggestions?(section: any): any[];
    renderInputComponent?(inputProps: InputProps): JSX.Element;
    renderSuggestionsContainer?(containerProps: any, children: any, query: string): JSX.Element;
    theme?: Theme;
    id?: string;
  }
}
