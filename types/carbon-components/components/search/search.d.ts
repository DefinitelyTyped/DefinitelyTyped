declare const Search_base: any;
declare class Search extends Search_base {
    constructor(element: any, options: any);
    toggleLayout(element: any): void;
    showClear(value: any, icon: any): void;
    static get options(): {
        selectorInit: string;
        selectorSearchView: string;
        selectorSearchInput: string;
        selectorClearIcon: string;
        selectorIconContainer: string;
        classClearHidden: string;
        classLayoutHidden: string;
    };
    static components: WeakMap<object, any>;
}
export default Search;
