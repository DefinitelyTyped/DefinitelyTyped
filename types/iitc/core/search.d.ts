export {};

declare global {
    /**
     * you can implement your own result provider by listing to the search @see hook:
     * addHook('search', function(query: SearchQuery) {});
     */
    class SearchQuery {
        /** the term for which the user has searched */
        term: string;

        /**
         * indicating if the user has pressed enter after searching. You should not search online or
         * do heavy processing unless the user has confirmed the search term
         */
        confirmed: boolean;

        /** called to add a result to the query */
        addResult(result: SearchResult): void;

        private init(): void;
        private show(): void;
        private hide(): void;
        private resultLayer(result: SearchResult): L.LayerGroup;
        private onResultSelected(result: SearchResult, event: any): void;
        private removeSelectedResult(): void;
        private onResultHoverStart(result: SearchResult, event: any): void;
        private removeHoverResult(): void;
        private onResultHoverEnd(result: SearchResult, event: any): void;
    }

    type SearchResult = SearchResultPosition | SearchResultBounds;
    interface SearchResultPosition extends SearchResultBase {
        position: L.LatLngExpression;
    }

    interface SearchResultBounds extends SearchResultBase {
        bounds: L.LatLngBoundsExpression;
    }

    interface SearchResultBase {
        /** Will be interpreted as HTML, so make sure to escape properly. */
        title: string;
        /** secondary information for this result.Will be interpreted as HTML, so make sure to escape properly. */
        description: JQuery | any[] | Element | Text | string;
        /** a ILayer to be added to the map when the user selects this search result. Will be generated if not set. Set to `null` to prevent the result from being added to the map. */
        layer?: L.Layer | undefined;
        /** a URL to a icon to display in the result list. Should be 12x12. */
        icon?: string | undefined;
        /**
         * a handler to be called when the result is selected. May return `true` to prevent the map from being repositioned.
         * You may reposition the map yourself or do other work.
         */
        onSelected?: ((result: SearchResult, event: UIEvent) => boolean | undefined) | undefined;
        /**
         * a handler to be called when the result is removed from the map(because another result has been
         * selected or the search was cancelled by the user).
         */
        onRemove?: ((result: SearchResult) => void) | undefined;
    }

    class Search {
        lastSearch: SearchQuery | null;

        doSearch(term: string, confirmed: boolean): void;
        setup(): void;
    }

    var search: Search;
}
