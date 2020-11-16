import Subtag = require('./Subtag');

// These are really static integers assigned to Tag.
declare enum ErrorCode {
    ERR_DEPRECATED = 1,
    ERR_NO_LANGUAGE = 2,
    ERR_UNKNOWN = 3,
    ERR_TOO_LONG = 4,
    ERR_EXTRA_REGION = 5,
    ERR_EXTRA_EXTLANG = 6,
    ERR_EXTRA_SCRIPT = 7,
    ERR_DUPLICATE_VARIANT = 8,
    ERR_WRONG_ORDER = 9,
    ERR_SUPPRESS_SCRIPT = 10,
    ERR_SUBTAG_DEPRECATED = 11,
    ERR_EXTRA_LANGUAGE = 12,
}

// This class isn’t exposed. It’s an error instance that has additional properties.
declare class LanguageTagsError extends Error {
    code: ErrorCode;
    tag: Tag;
    subtag: Subtag;
}

declare class Tag {
    declare static ERR_DEPRECATED: ErrorCode.ERR_DEPRECATED;
    declare static ERR_NO_LANGUAGE: ErrorCode.ERR_NO_LANGUAGE;
    declare static ERR_UNKNOWN: ErrorCode.ERR_UNKNOWN;
    declare static ERR_TOO_LONG: ErrorCode.ERR_TOO_LONG;
    declare static ERR_EXTRA_REGION: ErrorCode.ERR_EXTRA_REGION;
    declare static ERR_EXTRA_EXTLANG: ErrorCode.ERR_EXTRA_EXTLANG;
    declare static ERR_EXTRA_SCRIPT: ErrorCode.ERR_EXTRA_SCRIPT;
    declare static ERR_DUPLICATE_VARIANT: ErrorCode.ERR_DUPLICATE_VARIANT;
    declare static ERR_WRONG_ORDER: ErrorCode.ERR_WRONG_ORDER;
    declare static ERR_SUPPRESS_SCRIPT: ErrorCode.ERR_SUPPRESS_SCRIPT;
    declare static ERR_SUBTAG_DEPRECATED: ErrorCode.ERR_SUBTAG_DEPRECATED;
    declare static ERR_EXTRA_LANGUAGE: ErrorCode.ERR_EXTRA_LANGUAGE;

    /**
     * If the tag is listed as 'deprecated' or 'redundant' it might have a preferred value. This method returns a `Tag`
     * object if so.
     *
     * ```
     * > tags('zh-cmn-Hant').preferred();
     * Tag
     * ```
     */
    preferred(): Tag;

    /**
     * Returns `grandfathered` if the tag is grandfathered, `redundant` if the tag is redundant, and `tag` if neither.
     * For a definition of grandfathered and redundant tags, see
     * [RFC 5646 section 2.2.8](http://tools.ietf.org/html/rfc5646#section-2.2.8).
     */
    type(): 'grandfathered' | 'redundant' | 'tag';

    /**
     * Returns an array of subtags making up the tag, as `Subtag` objects.
     */
    subtags(): Subtag[];

    /**
     * Shortcut for `tag.find('language')`.
     */
    language(): Subtag;

    /**
     * Shortcut for `tag.find('region')`.
     */
    region(): Subtag;

    /**
     * Shortcut for `tag.find('script')`.
     */
    script(): Subtag;

    /**
     * Find a subtag of the given type from those making up the tag.
     */
    find(type: string): Subtag;

    /**
     * Returns `true` if the tag is valid, `false` otherwise.
     */
    valid(): boolean;

    /**
     * Returns an array of `Error` objects if the tag is invalid. The `message` property of each is readable and helpful
     * enough for UI output. The `code` property can be checked against the `Tag.ERR_*` constants. Each error will also
     * have either a `subtag` or `tag` property with the code of the offending tag.
     */
    errors(): LanguageTagsError[];

    /**
     * Format a tag according to the case conventions defined in
     * [RFC 5646 section 2.1.1](http://tools.ietf.org/html/rfc5646#section-2.1.1).
     *
     * ```
     * > tags('en-gb').format();
     * 'en-GB'
     * ```
     */
    format(): string;

    /**
     * For grandfathered or redundant tags, returns a date string reflecting the deprecation date if the tag is
     * deprecated.
     *
     * ```
     * > tags('zh-cmn-Hant').deprecated();
     * '2009-07-29'
     * ```
     */
    deprecated(): string | null;

    /**
     * For grandfathered or redundant tags, returns a date string reflecting the date the tag was added to the registry.
     */
    added(): string;

    /**
     * Returns an array of tag descriptions for grandfathered or redundant tags, otherwise returns an empty array.
     */
    descriptions(): string[];
}

export = Tag;
