type Primitive = number | string | boolean | bigint | symbol | null | undefined;
interface SortOptions<Computed> {
    /**
     * One or more property names or computed fields to sort by.
     * Specifying property names is only relevant when sorting an array of
     * objects.
     */
    by?: string | string[];
    /**
     * One or more sort orders. Specify 'asc', 'desc' or a property name from
     * the options.customOrders object.
     */
    order?: string | string[];
    /**
     * A dictionary object containing one or more custom orders. Each custom
     * order value must be an array defining the order expected values must be
     * sorted in.
     */
    customOrders?: {
        [key: string]: any;
    };
    /**
     * A dictionary object containing one or more computed field functions. The
     * function will be invoked once per item in the array. Each invocation
     * will receive the array item as input and must return a primitive value
     * by which the array can be sorted.
     */
    computed?: {
        [key: string]: (item: Computed) => Primitive;
    };
    /**
     * Configures whether null values will be sorted before or after defined
     * values. Set to -1 for before, 1 for after. Defaults to 1.
     * @default 1
     */
    nullRank?: -1 | 1;
    /**
     * Configures whether undefined values will be sorted before or after
     * defined values. Set to -1 for before, 1 for after. Defaults to 1.
     * @default 1
     */
    undefinedRank?: -1 | 1;
}

/**
 * Isomorphic, load-anywhere function to sort an array by scalar, deep or
 * computed values in any standard or custom order. Returns the array
 * passed in.
 * @param array The input array to sort. It is sorted in place.
 * @param options Sort options.
 */
declare function sortArray<T>(array: T[], options?: SortOptions<T>): T[];
export = sortArray;
