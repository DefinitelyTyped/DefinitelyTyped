import UniversalRouter, { Params } from ".";

export interface generateUrlsOptions {
    /**
     * Provide a function to stringifyQueryParams option to generate URL with query string from unknown route params.
     */
    stringifyQueryParams?: (params: Params) => string;
    [_: string]: any;
}

/**
 * In most web applications it's much simpler to just use a string for hyperlinks.
 */
export default function generateUrls(router: UniversalRouter, options?: generateUrlsOptions): (routeName: string, params?: Params) => string;
