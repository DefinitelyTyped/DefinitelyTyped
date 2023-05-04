export interface Options {
    /**
     * Whether to flatten objects
     * @default true
     */
    objects?: boolean | undefined;
    /**
     * Whether to flatten arrays
     * @default false
     */
    arrays?: boolean | undefined;
    /**
     * The separator to use
     * @default '.'
     */
    separator?: string | undefined;
}

/**
 * Flattens a data row recursively
 */
export default function flatten(opts?: Options): (dataRow: any) => any;
