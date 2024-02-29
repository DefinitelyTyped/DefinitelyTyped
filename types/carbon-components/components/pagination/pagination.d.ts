interface PaginationOptions {
    selectorInit: string;
    selectorItemsPerPageInput: string;
    selectorPageNumberInput: string;
    selectorPageBackward: string;
    selectorPageForward: string;
    eventItemsPerPage: string;
    eventPageNumber: string;
    eventPageChange: string;
}

declare const Pagination_base: any;
declare class Pagination extends Pagination_base {
    constructor(element: any, options?: Partial<PaginationOptions>);
    _emitEvent: (evtName: string, detail: object) => void;
    static components: WeakMap<object, any>;
    static options: PaginationOptions;
}
export default Pagination;
