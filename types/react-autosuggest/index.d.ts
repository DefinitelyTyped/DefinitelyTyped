// Type definitions for react-autosuggest 8.0
// Project: http://react-autosuggest.js.org/
// Definitions by: Nicolas Schmitt <https://github.com/nicolas-schmitt>, Philip Ottesen <https://github.com/pjo256>, Robert Essig <https://github.com/robessog>, Terry Bayne <https://github.com/tbayne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';
declare class Autosuggest extends React.Component<any> {}

export = Autosuggest;

declare namespace Autosuggest {
  interface SuggestionsFetchRequest {
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
    onChange(event: React.FormEvent<any>, params?: ChangeEvent): void;
    onBlur?(event: React.FormEvent<any>, params?: BlurEvent): void;
  }

  interface SuggestionSelectedEventData<TSuggestion> {
    method: 'click' | 'enter';
    sectionIndex: number | null;
    suggestion: TSuggestion;
    suggestionValue: string;
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
    onSuggestionsFetchRequested(request: SuggestionsFetchRequest): void;
    onSuggestionsClearRequested?(): void;
    getSuggestionValue(suggestion: any): any;
    renderSuggestion(suggestion: any, inputValues: InputValues): JSX.Element;
    inputProps: InputProps;
    onSuggestionSelected?(event: React.FormEvent<any>, data: SuggestionSelectedEventData<any>): void;
    shouldRenderSuggestions?(value: string): boolean;
    alwaysRenderSuggestions?: boolean;
    focusFirstSuggestion?: boolean;
    focusInputOnSuggestionClick?: boolean;
    multiSection?: boolean;
    renderSectionTitle?(section: any, inputValues: InputValues): JSX.Element;
    getSectionSuggestions?(section: any): any[];
    renderInputComponent?(): JSX.Element;
    renderSuggestionsContainer?(children: any): JSX.Element;
    theme?: Theme;
    id?: string;
  }
}
