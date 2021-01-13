/**
 * Main iterator function. Returns default iterator based
 * on the class of an instance.
 */
declare function enumerate(object, kind?: any): any;

declare namespace enumerate {
    var KIND_KEYS: 'keys';
    var KIND_VALUES: 'values';
    var KIND_ENTRIES: 'entries';

    /**
     * Convenient explicit iterators for special kinds.
     */
    var keys: (object) => any;

    var values: (object) => any;

    var entries: (object) => any;

    var generic: (object) => any;
}
export = enumerate;
