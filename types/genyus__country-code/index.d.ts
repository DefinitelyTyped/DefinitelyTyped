/**
 * Country Code utility Library
 */

export function find(opts: Options): Country | undefined;

export function nameIncludes(name: string, opts?: Options): Country[];

export interface Country {
    readonly name: string;
    readonly alpha2: string;
    readonly alpha3: string;
    isoNumeric: string;
}

export interface Options {
    /**
     * number from 0 - 1, a percentage of accuracy for the search
     * @default 1
     */
    accuracy?: number | undefined;
    name?: string | undefined;
}

export const countries: {
    [key: string]: Country;
};
