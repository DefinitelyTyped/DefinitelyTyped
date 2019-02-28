// Type definitions for normalize-url 4.1
// Project: https://github.com/sindresorhus/normalize-url
// Definitions by: odin3 <https://github.com/odin3>
//                 BendingBender <https://github.com/BendingBender>
//                 Mathieu M-Gosselin <https://github.com/mathieumg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace normalizeUrl {
    interface Options {
        /**
         * @default 'http:'
         */
        defaultProtocol?: string;
        /**
         * Prepends `defaultProtocol` to the URL if it's protocol-relative.
         *
         * @default true
         * @example
         * normalizeUrl('//sindresorhus.com:80/');
         * //=> 'http://sindresorhus.com'
         *
         * normalizeUrl('//sindresorhus.com:80/', {normalizeProtocol: false});
         * //=> '//sindresorhus.com'
         */
        normalizeProtocol?: boolean;
        /**
         * Normalizes `https:` URLs to `http:`.
         *
         * @default false
         * @example
         * normalizeUrl('https://sindresorhus.com:80/');
         * //=> 'https://sindresorhus.com'
         *
         * normalizeUrl('https://sindresorhus.com:80/', {forceHttp: true});
         * //=> 'http://sindresorhus.com'
         */
        forceHttp?: boolean;
        /**
         * Normalizes `http:` URLs to `https:`.
         *
         * This option can't be used with the `forceHttp` option at the same time.
         *
         * @default false
         * @example
         * normalizeUrl('https://sindresorhus.com:80/');
         * //=> 'https://sindresorhus.com'
         *
         * normalizeUrl('http://sindresorhus.com:80/', {forceHttps: true});
         * //=> 'https://sindresorhus.com'
         */
        forceHttps?: boolean;
        /**
         * Strip the [authentication](https://en.wikipedia.org/wiki/Basic_access_authentication) part of a URL.
         *
         * @default true
         * @example
         * normalizeUrl('user:password@sindresorhus.com');
         * //=> 'https://sindresorhus.com'
         *
         * normalizeUrl('user:password@sindresorhus.com', {stripAuthentication: false});
         * //=> 'https://user:password@sindresorhus.com'
         */
        stripAuthentication?: boolean;
        /**
         * Removes hash from the URL.
         *
         * @default false
         * @example
         * normalizeUrl('sindresorhus.com/about.html#contact');
         * //=> 'http://sindresorhus.com/about.html#contact'
         *
         * normalizeUrl('sindresorhus.com/about.html#contact', {stripHash: true});
         * //=> 'http://sindresorhus.com/about.html'
         */
        stripHash?: boolean;
        /**
         * Removes HTTP(S) protocol from an URL `http://sindresorhus.com` → `sindresorhus.com`.
         *
         * @default false
         * @example
         * normalizeUrl('https://sindresorhus.com');
         * //=> 'https://sindresorhus.com'
         *
         * normalizeUrl('sindresorhus.com', {stripProtocol: true});
         * //=> 'sindresorhus.com'
         */
        stripProtocol?: boolean;
        /**
         * Removes `www.` from the URL.
         *
         * @default true
         * @example
         * normalizeUrl('http://www.sindresorhus.com');
         * //=> 'http://sindresorhus.com'
         *
         * normalizeUrl('http://www.sindresorhus.com', {stripWWW: false});
         * //=> 'http://www.sindresorhus.com'
         */
        stripWWW?: boolean;
        /**
         * Removes query parameters that matches any of the provided strings or regexes.
         *
         * @default [/^utm_\w+/i]
         * @example
         * normalizeUrl('www.sindresorhus.com?foo=bar&ref=test_ref', {
         *     removeQueryParameters: ['ref']
         * });
         * //=> 'http://sindresorhus.com/?foo=bar'
         */
        removeQueryParameters?: Array<RegExp | string>;
        /**
         * Removes trailing slash.
         *
         * **Note**: Trailing slash is always removed if the URL doesn't have a pathname.
         *
         * @default true
         * @example
         * normalizeUrl('http://sindresorhus.com/redirect/');
         * //=> 'http://sindresorhus.com/redirect'
         *
         * normalizeUrl('http://sindresorhus.com/redirect/', {removeTrailingSlash: false});
         * //=> 'http://sindresorhus.com/redirect/'
         *
         * normalizeUrl('http://sindresorhus.com/', {removeTrailingSlash: false});
         * //=> 'http://sindresorhus.com'
         */
        removeTrailingSlash?: boolean;
        /**
         * Removes the default directory index file from path that matches any of the provided strings or regexes.
         * When `true`, the regex `/^index\.[a-z]+$/` is used.
         *
         * @default false
         * @example
         * normalizeUrl('www.sindresorhus.com/foo/default.php', {
         *     removeDirectoryIndex: [/^default\.[a-z]+$/]
         * });
         * //=> 'http://sindresorhus.com/foo'
         */
        removeDirectoryIndex?: Array<RegExp | string>;
        /**
         * Sorts the query parameters alphabetically by key.
         *
         * @default true
         * @example
         * normalizeUrl('www.sindresorhus.com?b=two&a=one&c=three', {
         *     sortQueryParameters: false
         * });
         * //=> 'http://sindresorhus.com/?b=two&a=one&c=three'
         */
        sortQueryParameters?: boolean;
    }
}

/**
 * [Normalize](https://en.wikipedia.org/wiki/URL_normalization) a URL.
 * @param url URL to normalize.
 */
declare function normalizeUrl(url: string, options?: normalizeUrl.Options): string;

export = normalizeUrl;
