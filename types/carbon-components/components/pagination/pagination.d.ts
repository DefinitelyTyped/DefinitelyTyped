declare const Pagination_base: any;
declare class Pagination extends Pagination_base {
    constructor(element: any, options: any);
    _emitEvent: (evtName: any, detail: any) => void;
    static components: WeakMap<object, any>;
    static options: {
        selectorInit: string;
        selectorItemsPerPageInput: string;
        selectorPageNumberInput: string;
        selectorPageBackward: string;
        selectorPageForward: string;
        eventItemsPerPage: string;
        eventPageNumber: string;
        eventPageChange: string;
    };
}
export default Pagination;
