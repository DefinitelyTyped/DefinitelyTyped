/**
 * Transform an URL to a valid origin value.
 *
 * @param url URL to transform to it's origin.
 * @returns The origin.
 * @api public
 */
declare function origin(url: string | object | { protocol: string; host: string }): string;

declare namespace origin {
    /**
     * Check if the origins are the same.
     *
     * @param a URL or origin of a.
     * @param b URL or origin of b.
     * @returns true if origins are the same, false otherwise
     * @api public
     */
    function same(a: string, b: string): boolean;
}

export = origin;
