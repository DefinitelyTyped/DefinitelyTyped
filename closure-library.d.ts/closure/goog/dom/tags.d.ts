declare module goog {
    function require(name: 'goog.dom.tags'): typeof goog.dom.tags;
}

declare module goog.dom.tags {

    /**
     * Checks whether the tag is void (with no contents allowed and no legal end
     * tag), for example 'br'.
     * @param {string} tagName The tag name in lower case.
     * @return {boolean}
     */
    function isVoidTag(tagName: string): boolean;
}
