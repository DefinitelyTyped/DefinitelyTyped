import UniversalRouter, { Params } from ".";
import { PathFunctionOptions } from 'path-to-regexp';

export interface GenerateUrlsOptions extends PathFunctionOptions {
    /**
     * Provide a function to stringifyQueryParams option to generate URL with query string from unknown route params.
     */
    stringifyQueryParams?: (params: Params) => string;
}

/**
 * In most web applications it's much simpler to just use a string for hyperlinks.
 */
export default function generateUrls(router: UniversalRouter, options?: GenerateUrlsOptions): (routeName: string, params?: Params) => string;
