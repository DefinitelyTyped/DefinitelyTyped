/// <reference path="./common.d.ts" />

declare namespace M {
    class Autocomplete extends Component<AutocompleteOptions> implements Openable {
        /**
         * Get Instance
         */
        static getInstance(elem: Element): Autocomplete;

        /**
         * Init autocomplete
         */
        static init(els: Element, options?: Partial<AutocompleteOptions>): Autocomplete;

        /**
         * Init autocompletes
         */
        static init(els: MElements, options?: Partial<AutocompleteOptions>): Autocomplete[];

        /**
         * Show autocomplete.
         */
        open(): void;

        /**
         * Hide autocomplete.
         */
        close(): void;

        /**
         * Select a specific autocomplete options.
         * @param el Element of the autocomplete option.
         */
        selectOption(el: Element): void;

        /**
         * Update autocomplete options data.
         * @param data Autocomplete options data object.
         */
        updateData(data: AutocompleteData): void;

        /**
         * If the autocomplete is open.
         */
        isOpen: boolean;

        /**
         * Number of matching autocomplete options.
         */
        count: number;

        /**
         * Index of the current selected option.
         */
        activeIndex: number;
    }

    interface AutocompleteData {
        [key: string]: string | null;
    }

    interface AutocompleteOptions {
        /**
         * Data object defining autocomplete options with optional icon strings.
         */
        data: AutocompleteData;

        /**
         * Limit of results the autocomplete shows.
         * @default infinity
         */
        limit: number;

        /**
         * Callback for when autocompleted.
         */
        onAutocomplete: (this: Autocomplete, text: string) => void;

        /**
         * Minimum number of characters before autocomplete starts.
         * @default 1
         */
        minLength: number;

        /**
         * Sort function that defines the order of the list of autocomplete options.
         */
        sortFunction: (a: string, b: string, inputText: string) => number;
    }
}

interface JQuery {
    // Pick<T,K> to check methods exist.
    autocomplete(method: keyof Pick<M.Autocomplete, "open" | "close" | "destroy">): JQuery;
    autocomplete(method: keyof Pick<M.Autocomplete, "selectOption">, el: Element): JQuery;
    autocomplete(method: keyof Pick<M.Autocomplete, "updateData">, data: M.AutocompleteData): JQuery;
    autocomplete(options?: Partial<M.AutocompleteOptions>): JQuery;
}
