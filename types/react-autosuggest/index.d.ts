// Type definitions for react-autosuggest 9.3
// Project: http://react-autosuggest.js.org/, https://github.com/moroshko/react-autosuggest
// Definitions by: Nicolas Schmitt <https://github.com/nicolas-schmitt>
//                 Philip Ottesen <https://github.com/pjo256>
//                 Robert Essig <https://github.com/robessog>
//                 Terry Bayne <https://github.com/tbayne>
//                 Christopher Deutsch <https://github.com/cdeutsch>
//                 Kevin Ross <https://github.com/rosskevin>
//                 Thomas den Hollander <https://github.com/ThomasdenH>
//                 ulrichb <https://github.com/ulrichb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import * as React from 'react';

declare class Autosuggest<T = any, T2 = any> extends React.Component<
    Autosuggest.AutosuggestProps<T, T2>,
    Autosuggest.AutosuggestState<T>
> {
    /**
     * Autosuggest exposes these class properties to the parent component.
     * They can be accessed through `ref`.
     */
    input: HTMLInputElement | undefined;
}

export = Autosuggest;

declare namespace Autosuggest {
    /**
     * Utilies types based on:
     * https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-307871458
     */

    /** @internal */
    type Omit<T, K extends keyof T> = Pick<T, ({ [P in keyof T]: P } & { [P in K]: never } & { [x: string]: never, [x: number]: never })[keyof T]>;

    interface SuggestionsFetchRequestedParams {
        value: string;
        reason:
            | 'input-changed'
            | 'input-focused'
            | 'escape-pressed'
            | 'suggestions-revealed'
            | 'suggestion-selected';
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

    interface BlurEvent<TSuggestion> {
        highlightedSuggestion: TSuggestion;
    }

    interface InputProps<TSuggestion>
        extends Omit<React.InputHTMLAttributes<any>, 'onChange' | 'onBlur'> {
        onChange(event: React.FormEvent<any>, params: ChangeEvent): void;
        onBlur?(event: React.FocusEvent<any>, params?: BlurEvent<TSuggestion>): void;
        value: string;
    }

    interface SuggestionSelectedEventData<TSuggestion> {
        suggestion: TSuggestion;
        suggestionValue: string;
        suggestionIndex: number;
        sectionIndex: number | null;
        method: 'click' | 'enter';
    }

    type ThemeKey =
        | 'container'
        | 'containerOpen'
        | 'input'
        | 'inputOpen'
        | 'inputFocused'
        | 'suggestionsContainer'
        | 'suggestionsContainerOpen'
        | 'suggestionsList'
        | 'suggestion'
        | 'suggestionFirst'
        | 'suggestionHighlighted'
        | 'sectionContainer'
        | 'sectionContainerFirst'
        | 'sectionTitle';

    type Theme =
        | Record<string, string | React.CSSProperties>
        | Partial<Record<ThemeKey, string | React.CSSProperties>>;

    interface RenderSuggestionsContainerParams {
        containerProps: {
            id: string;
            key: string;
            className: string;
            ref: any;
            role: string;
        };
        children: React.ReactNode;
        query: string;
    }

    // types for functions - allowing reuse externally - e.g. as props and bound in the constructor
    type GetSectionSuggestions<TSuggestion, TSection> = (section: TSection) => TSuggestion[];
    type GetSuggestionValue<TSuggestion> = (suggestion: TSuggestion) => string;
    type OnSuggestionHighlighted = (params: SuggestionHighlightedParams) => void;
    type SuggestionsFetchRequested = (request: SuggestionsFetchRequestedParams) => void;
    type OnSuggestionsClearRequested = () => void;
    type OnSuggestionSelected<TSuggestion> = (
        event: React.FormEvent<any>,
        data: SuggestionSelectedEventData<TSuggestion>,
    ) => void;
    type RenderInputComponent<TSuggestion> = (inputProps: InputProps<TSuggestion>) => React.ReactNode;
    type RenderSuggestionsContainer = (params: RenderSuggestionsContainerParams) => React.ReactNode;
    type RenderSectionTitle = (section: any) => React.ReactNode;
    type RenderSuggestion<TSuggestion> = (
        suggestion: TSuggestion,
        params: RenderSuggestionParams,
    ) => React.ReactNode;
    type ShouldRenderSuggestions = (value: string) => boolean;

    interface AutosuggestPropsBase<TSuggestion> {
        /**
         * Set it to true if you'd like to render suggestions even when the input is not focused.
         */
        alwaysRenderSuggestions?: boolean;
        /**
         * Set it to false if you don't want Autosuggest to keep the input focused when suggestions are clicked/tapped.
         */
        focusInputOnSuggestionClick?: boolean;
        /**
         * Implement it to teach Autosuggest what should be the input value when suggestion is clicked.
         */
        getSuggestionValue: GetSuggestionValue<TSuggestion>;
        /**
         * 	Set it to true if you'd like Autosuggest to automatically highlight the first suggestion.
         */
        highlightFirstSuggestion?: boolean;
        /**
         * Use it only if you have multiple Autosuggest components on a page.
         */
        id?: string;
        /**
         * Pass through arbitrary props to the input. It must contain at least value and onChange.
         */
        inputProps: InputProps<TSuggestion>;
        /**
         * Will be called every time the highlighted suggestion changes.
         */
        onSuggestionHighlighted?: OnSuggestionHighlighted;
        /**
         * Will be called every time you need to recalculate suggestions.
         */
        onSuggestionsFetchRequested: SuggestionsFetchRequested;
        /**
         * Will be called every time you need to set suggestions to [].
         */
        onSuggestionsClearRequested?: OnSuggestionsClearRequested;
        /**
         * Will be called every time suggestion is selected via mouse or keyboard.
         */
        onSuggestionSelected?: OnSuggestionSelected<TSuggestion>;
        /**
         * Use it only if you need to customize the rendering of the input.
         */
        renderInputComponent?: RenderInputComponent<TSuggestion>;
        /**
         * Use it if you want to customize things inside the suggestions container beyond rendering the suggestions themselves.
         */
        renderSuggestionsContainer?: RenderSuggestionsContainer;
        /**
         * Use your imagination to define how suggestions are rendered.
         */
        renderSuggestion: RenderSuggestion<TSuggestion>;
        /**
         * When the input is focused, Autosuggest will consult this function when to render suggestions.
         * Use it, for example, if you want to display suggestions when input value is at least 2 characters long.
         */
        shouldRenderSuggestions?: ShouldRenderSuggestions;
        /**
         * Use your imagination to style the Autosuggest.
         */
        theme?: Theme;
    }

    interface AutosuggestPropsSingleSection<TSuggestion> extends AutosuggestPropsBase<TSuggestion> {
        /**
         * Set it to true if you'd like to display suggestions in multiple sections (with optional titles).
         */
        multiSection?: false;
        /**
         * These are the suggestions that will be displayed. Items can take an arbitrary shape.
         */
        suggestions: ReadonlyArray<TSuggestion>;
    }

    interface AutosuggestPropsMultiSection<TSuggestion, TSection> extends AutosuggestPropsBase<TSuggestion> {
        /**
         * Set it to true if you'd like to display suggestions in multiple sections (with optional titles).
         */
        multiSection: true;
        /**
         * These are the suggestions that will be displayed. Items can take an arbitrary shape.
         */
        suggestions: ReadonlyArray<TSection>;
        /**
         * Implement it to teach Autosuggest where to find the suggestions for every section.
         */
        getSectionSuggestions?: GetSectionSuggestions<TSuggestion, TSection>;
        /**
         * Use your imagination to define how section titles are rendered.
         */
        renderSectionTitle?: RenderSectionTitle;
    }

    type AutosuggestProps<TSuggestion, TSection> = AutosuggestPropsSingleSection<TSuggestion> | AutosuggestPropsMultiSection<TSuggestion, TSection>;

    interface AutosuggestState<TSuggestion> {
        isFocused: boolean;
        isCollapsed: boolean;
        highlightedSectionIndex: number | null;
        highlightedSuggestionIndex: number | null;
        highlightedSuggestion: TSuggestion | null;
        valueBeforeUpDown: TSuggestion | null;
    }
}
