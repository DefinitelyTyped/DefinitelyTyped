declare module goog {
    function require(name: 'goog.fs.url'): typeof goog.fs.url;
}

declare module goog.fs.url {

    /**
     * @typedef {{createObjectURL: (function(!Blob): string),
     *            revokeObjectURL: function(string): void}}
     */
    type UrlObject_ = {createObjectURL: ((arg0: Blob) => string); revokeObjectURL: (arg0: string) => void};

    /**
     * Creates a blob URL for a blob object.
     * Throws an error if the browser does not support Object Urls.
     *
     * @param {!Blob} blob The object for which to create the URL.
     * @return {string} The URL for the object.
     */
    function createObjectUrl(blob: Blob): string;

    /**
     * Revokes a URL created by {@link goog.fs.url.createObjectUrl}.
     * Throws an error if the browser does not support Object Urls.
     *
     * @param {string} url The URL to revoke.
     */
    function revokeObjectUrl(url: string): void;

    /**
     * Checks whether this browser supports Object Urls. If not, calls to
     * createObjectUrl and revokeObjectUrl will result in an error.
     *
     * @return {boolean} True if this browser supports Object Urls.
     */
    function browserSupportsObjectUrls(): boolean;
}
