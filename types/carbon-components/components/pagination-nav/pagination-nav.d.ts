interface PaginationNavOptions {
    selectorInit: string;
    selectorPageElement: string;
    selectorPageButton: string;
    selectorPagePrevious: string;
    selectorPageNext: string;
    selectorPageSelect: string;
    selectorPageActive: string;
    attribPage: string;
    attribActive: string;
    classActive: string;
    classDisabled: string;
}

declare const PaginationNav_base: any;
declare class PaginationNav extends PaginationNav_base {
    constructor(element: HTMLElement, options?: Partial<PaginationNavOptions>);
    getActivePageNumber: () => number | undefined;
    clearActivePage: (evt: Event) => void;
    handleClick: (evt: MouseEvent) => void;
    handleSelectChange: (evt: Event) => void;
    setPrevNextStates: () => void;
    static components: WeakMap<object, any>;
    static get options(): PaginationNavOptions;
}
export default PaginationNav;
