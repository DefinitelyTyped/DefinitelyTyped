export interface Options {
    /**
     * Paths used to deconstruct the array
     */
    paths?: string | string[] | undefined;
    blankOut?: boolean | undefined;
}

/**
 * Performs an unwind recursively in the specified sequence
 * @param opts
 */
export default function unwind(opts?: Options): (dataRow: any) => any;
