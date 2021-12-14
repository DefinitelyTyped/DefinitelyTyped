// Type definitions for sort-array 4.1
// Project: https://github.com/75lb/sort-array#readme
// Definitions by: mrmlnc <https://github.com/mrmlnc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.4

type Primitive = number | string | boolean | bigint | symbol | null | undefined;
interface SortOptions<Computed> {
    by?: string | string[];
    order?: string | string[];
    customOrders?: {
        [key: string]: any;
    };
    computed?: {
        [key: string]: (item: Computed) => Primitive;
    };
    nullRank?: -1 | 1;
    undefinedRank?: -1 | 1;
}
declare function sortArray<T>(array: T[], options?: SortOptions<T>): T[];
export = sortArray;
