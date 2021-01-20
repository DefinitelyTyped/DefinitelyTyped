declare const PaginationNav_base: any;
declare class PaginationNav extends PaginationNav_base {
    constructor(element: any, options: any);
    getActivePageNumber: () => number | undefined;
    clearActivePage: (evt: any) => void;
    handleClick: (evt: any) => void;
    handleSelectChange: (evt: any) => void;
    setPrevNextStates: () => void;
    static components: WeakMap<object, any>;
    static get options(): {
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
    };
}
export default PaginationNav;
