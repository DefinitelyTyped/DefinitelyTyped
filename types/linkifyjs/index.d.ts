export type LinkEntityType =
    | "url"
    | "email"
    | "hashtag"
    | "mention";

export interface FindResultHash {
    /**
     * The type of entity found.
     */
    type: LinkEntityType;
    /**
     * The original entity substring.
     */
    value: string;
    /**
     * Should be the value of this links `href` attribute.
     */
    href: string;
}

/**
 * Finds all links in the given string.
 *
 * Returns a list of links where each element is a hash.
 *
 * @param str Search string.
 * @param [type] only find links of the given type.
 */
export function find(str: string, type?: LinkEntityType): FindResultHash[];

/**
 * Is the given string a link? Not to be used for strict validation.
 *
 * @param str the `string` to test.
 * @param type returns `true` only if the link is of the given type.
 *
 * @see https://soapbox.github.io/linkifyjs/docs/caveats.html
 */
export function test(str: string, type?: LinkEntityType): boolean;

/**
 * Internal method used to perform lexicographical analysis on the given string,
 * and output the resulting token array.
 *
 * @param str
 *
 * @return
 */
export function tokenize(str: string): Array<{ v: Array<{ v: string }> }>;

export interface Options {
    /**
     * Object of attributes to add to each new link. Note: the class and target
     * attributes have dedicated options.
     *
     * Also accepts a function that takes the unformatted href, the link type
     * (e.g., 'url', 'email', etc.) and returns the object.
     *
     * @default null
     */
    attributes?:
        | Record<string, string>
        | ((href: string, type: LinkEntityType) => Record<string, string>)
        | null
        | undefined;

    /**
     * class attribute to use for newly created links.
     *
     * Accepts a function that takes the unformatted href value and link type
     * (e.g., 'url', 'email', etc.) and returns the string.
     *
     * Accepts an object where each key is the link type and each value is the
     * string or function to use for that type.
     */
    className?:
        | string
        | Partial<Record<LinkEntityType, string | ((href: string) => string)>>
        | ((href: string, type: LinkEntityType) => string)
        | undefined;

    /**
     * Protocol that should be used in href attributes for URLs without a
     * protocol (e.g., github.com).
     *
     * @default 'http'
     */
    defaultProtocol?: "http" | "https" | "ftp" | "ftps" | string | undefined;

    /**
     * Format the text displayed by a linkified entity. e.g., truncate a long URL.
     *
     * Accepts an object where each key is the link type (e.g., 'url', 'email', etc.),
     * and each value is the formatting function to use for that type.
     *
     * @default null
     */
    format?:
        | ((value: string, type: LinkEntityType) => string)
        | Partial<Record<LinkEntityType, (value: string) => string>>
        | null
        | undefined;

    /**
     * Similar to format, except the result of this function will be used as the
     * href attribute of the new link.
     *
     * This is useful when finding hashtags, where you don’t necessarily
     * want the default to be a link to a named anchor.
     *
     * Accepts an object where each key is the link type (e.g., 'url', 'email', etc.),
     * and each value is the formatting function to use for that type.
     *
     * @default null
     */
    formatHref?:
        | ((href: string, type: LinkEntityType) => string)
        | Partial<Record<LinkEntityType, (href: string) => string>>
        | null
        | undefined;

    /**
     * If `true`, \n line breaks will automatically be converted to `<br>` tags.
     *
     * @default false
     */
    nl2br?: boolean | undefined;

    /**
     * The tag name to use for each link.
     * For cases where you can’t use anchor tags.
     *
     * Accepts a function that takes the unformatted href,
     * the link type (e.g., 'url', 'email', etc.) and returns the tag name.
     *
     * Accepts an object where each key is the link type,
     * and each value is the tag name to use for that type.
     *
     * @default a
     */
    tagName?:
        | string
        | ((href: string, type: LinkEntityType) => string)
        | Partial<Record<LinkEntityType, string>>
        | undefined;

    /**
     * target attribute for generated link.
     *
     * Accepts a function that takes the unformatted href,
     * the link type (e.g., 'url', 'email', etc.) and returns the target
     *
     * Accepts an object where each key is the link type,
     * and each value is the target to use for that type.
     *
     * @default { url: '_blank' }
     */
    target?:
        | string
        | ((href: string, type: LinkEntityType) => string)
        | Partial<Record<LinkEntityType, string | null>>
        | undefined;

    /**
     * validate
     * - Type: Boolean | Function (String value, String type) | Object
     * - Default: null
     *
     * If option resolves to false, the given value will not show up as a link.
     *
     * Accepts a function that takes a discovered link,
     * and the link type (e.g., 'url', 'email', etc.),
     * and returns true if the link should be converted into an anchor tag,
     * and false otherwise.
     *
     * Accepts an object where each key is the link type and each value is the
     * the validation option to use for that type
     *
     * @default null
     */
    validate?:
        | boolean
        | ((href: string, type: LinkEntityType) => boolean)
        | Partial<Record<LinkEntityType, ((href: string) => boolean)>>
        | null
        | undefined;
}
