import { FilterFunction } from "./FilterFunction";

/**
 * A collection of filter-functions.
 */
export interface FilterFunctionCollection<TElement = HTMLElement> {
    /**
     * The display-name of the filter-function and the `FilterFunction` itself.
     */
    [displayName: string]: FilterFunction<TElement> | true;
}
