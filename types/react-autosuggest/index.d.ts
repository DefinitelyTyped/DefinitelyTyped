import * as React from "react";

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
    type Omit<T, K extends keyof T> = Pick<
        T,
        ({ [P in keyof T]: P } & { [P in K]: never } & { [x: string]: never; [x: number]: never })[keyof T]
    >;

    type FetchRequestedReasons =
        | "input-changed"
        | "input-focused"
        | "escape-pressed"
        | "suggestions-revealed"
        | "suggestion-selected";

    type ShouldRenderReasons =
        | "input-changed"
        | "input-focused"
        | "input-blurred"
        | "escape-pressed"
        | "suggestions-revealed"
        | "suggestions-updated"
        | "render";

    interface SuggestionsFetchRequestedParams {
        value: string;
        reason: FetchRequestedReasons;
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
        method: "down" | "up" | "escape" | "enter" | "click" | "type";
    }

    interface BlurEvent<TSuggestion> {
        highlightedSuggestion: TSuggestion;
    }

    interface RenderInputComponentProps extends React.InputHTMLAttributes<any> {
        value: string;
        ref?: React.Ref<HTMLInputElement> | undefined;
    }

    interface InputProps<TSuggestion> extends Omit<React.InputHTMLAttributes<HTMLElement>, "onChange" | "onBlur"> {
        onChange: (event: React.FormEvent<HTMLElement>, params: ChangeEvent) => void;
        onBlur?: ((event: React.FocusEvent<HTMLElement>, params?: BlurEvent<TSuggestion>) => void) | undefined;
        value: string;
        ref?: React.Ref<HTMLInputElement> | undefined;
    }

    interface ContainerProps extends React.InputHTMLAttributes<any> {}

    interface SuggestionSelectedEventData<TSuggestion> {
        suggestion: TSuggestion;
        suggestionValue: string;
        suggestionIndex: number;
        sectionIndex: number | null;
        method: "click" | "enter";
    }

    type ThemeKey =
        | "container"
        | "containerOpen"
        | "input"
        | "inputOpen"
        | "inputFocused"
        | "suggestionsContainer"
        | "suggestionsContainerOpen"
        | "suggestionsList"
        | "suggestion"
        | "suggestionFirst"
        | "suggestionHighlighted"
        | "sectionContainer"
        | "sectionContainerFirst"
        | "sectionTitle";

    type Theme = Record<string, string | React.CSSProperties> | Partial<Record<ThemeKey, string | React.CSSProperties>>;

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
    type RenderInputComponent = (inputProps: RenderInputComponentProps) => React.ReactNode;
    type RenderSuggestionsContainer = (params: RenderSuggestionsContainerParams) => React.ReactNode;
    type RenderSectionTitle = (section: any) => React.ReactNode;
    type RenderSuggestion<TSuggestion> = (suggestion: TSuggestion, params: RenderSuggestionParams) => React.ReactNode;
    type ShouldKeepSuggestionsOnSelect<TSuggestion> = (suggestion?: TSuggestion) => boolean;
    type ShouldRenderSuggestions = (value: string, reason: ShouldRenderReasons) => boolean;

    interface AutosuggestPropsBase<TSuggestion> {
        /**
         * Set it to true if you'd like to render suggestions even when the input is not focused.
         */
        alwaysRenderSuggestions?: boolean | undefined;
        /**
         * Set it to false if you don't want Autosuggest to keep the input focused when suggestions are clicked/tapped.
         */
        focusInputOnSuggestionClick?: boolean | undefined;
        /**
         * Implement it to teach Autosuggest what should be the input value when suggestion is clicked.
         */
        getSuggestionValue: GetSuggestionValue<TSuggestion>;
        /**
         *     Set it to true if you'd like Autosuggest to automatically highlight the first suggestion.
         */
        highlightFirstSuggestion?: boolean | undefined;
        /**
         * Use it only if you have multiple Autosuggest components on a page.
         */
        id?: string | undefined;
        /**
         * Pass through arbitrary props to the input. It must contain at least value and onChange.
         */
        inputProps: InputProps<TSuggestion>;
        /**
         * Provides arbitrary properties to the outer `div` container of Autosuggest. Allows the override of accessibility properties.
         */
        containerProps?: ContainerProps | undefined;
        /**
         * Will be called every time the highlighted suggestion changes.
         */
        onSuggestionHighlighted?: OnSuggestionHighlighted | undefined;
        /**
         * Will be called every time you need to recalculate suggestions.
         */
        onSuggestionsFetchRequested: SuggestionsFetchRequested;
        /**
         * Will be called every time you need to set suggestions to [].
         */
        onSuggestionsClearRequested?: OnSuggestionsClearRequested | undefined;
        /**
         * Will be called every time suggestion is selected via mouse or keyboard.
         */
        onSuggestionSelected?: OnSuggestionSelected<TSuggestion> | undefined;
        /**
         * Use it only if you need to customize the rendering of the input.
         */
        renderInputComponent?: RenderInputComponent | undefined;
        /**
         * Use it if you want to customize things inside the suggestions container beyond rendering the suggestions themselves.
         */
        renderSuggestionsContainer?: RenderSuggestionsContainer | undefined;
        /**
         * Use your imagination to define how suggestions are rendered.
         */
        renderSuggestion: RenderSuggestion<TSuggestion>;
        /**
         * When a suggestion is selected, Autosuggest will consult this function on whether to close the suggestions list.
         * Use it, for example, if you want to make multiple selections at the same time. By default it will close every time
         * a suggestion is selected.
         */
        shouldKeepSuggestionsOnSelect?: ShouldKeepSuggestionsOnSelect<TSuggestion>;
        /**
         * When the input is focused, Autosuggest will consult this function when to render suggestions.
         * Use it, for example, if you want to display suggestions when input value is at least 2 characters long.
         */
        shouldRenderSuggestions?: ShouldRenderSuggestions | undefined;
        /**
         * Use your imagination to style the Autosuggest.
         */
        theme?: Theme | undefined;
    }

    interface AutosuggestPropsSingleSection<TSuggestion> extends AutosuggestPropsBase<TSuggestion> {
        /**
         * Set it to true if you'd like to display suggestions in multiple sections (with optional titles).
         */
        multiSection?: false | undefined;
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
        getSectionSuggestions?: GetSectionSuggestions<TSuggestion, TSection> | undefined;
        /**
         * Use your imagination to define how section titles are rendered.
         */
        renderSectionTitle?: RenderSectionTitle | undefined;
    }

    type AutosuggestProps<TSuggestion, TSection> =
        | AutosuggestPropsSingleSection<TSuggestion>
        | AutosuggestPropsMultiSection<TSuggestion, TSection>;

    interface AutosuggestState<TSuggestion> {
        isFocused: boolean;
        isCollapsed: boolean;
        highlightedSectionIndex: number | null;
        highlightedSuggestionIndex: number | null;
        highlightedSuggestion: TSuggestion | null;
        valueBeforeUpDown: TSuggestion | null;
    }
}
