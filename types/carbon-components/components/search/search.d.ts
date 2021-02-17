interface SearchOptions {
    selectorInit: string;
    selectorSearchView: string;
    selectorSearchInput: string;
    selectorClearIcon: string;
    selectorIconContainer: string;
    classClearHidden: string;
    classLayoutHidden: string;
}

declare const Search_base: any;
declare class Search extends Search_base {
    constructor(element: HTMLElement, options?: Partial<SearchOptions>);
    toggleLayout(element: HTMLElement): void;
    showClear(value: number | string, icon: HTMLElement): void;
    static get options(): SearchOptions;
    static components: WeakMap<object, any>;
}
export default Search;
