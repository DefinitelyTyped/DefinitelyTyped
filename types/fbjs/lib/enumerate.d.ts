/**
 * Main iterator function. Returns default iterator based
 * on the class of an instance.
 */
declare function enumerate(o: any, kind?: any): any;

declare namespace enumerate {
    const KIND_KEYS: 'keys';
    const KIND_VALUES: 'values';
    const KIND_ENTRIES: 'entries';

    /**
     * Convenient explicit iterators for special kinds.
     */
    function keys(object: any): any;

    function values(object: any): any;

    function entries(object: any): any;

    function generic(object: any): any;
}
export = enumerate;
