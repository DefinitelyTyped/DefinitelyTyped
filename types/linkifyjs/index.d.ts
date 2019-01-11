// Type definitions for linkifyjs 2.1
// Project: https://github.com/SoapBox/linkifyjs#readme
// Definitions by: Sean Zhu <https://github.com/szhu>
//                 Ovidiu Bute <https://github.com/ovidiubute>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export type PossiblyFuncOfHrefAndType<T> =
    | T
    | ((href: string, type: string) => T);

// There's always a possibility that values at a string key can always be
// undefined; i.e., if the key does not exist.
export type PossiblyByType<T> = T | { [type: string]: T | undefined };

export type EventHandler = (e: HTMLElement) => void;

export interface LinkifyOptions {
    /**
     * attributes
     * - Type: Object | Function (String href, String type)
     * - Default: null
     *
     * Object of attributes to add to each new link. Note: the class and target
     * attributes have dedicated options.
     *
     * Also accepts a function that takes the unformatted href, the link type
     * (e.g., 'url', 'email', etc.) and returns the object.
     */
    attributes?: PossiblyFuncOfHrefAndType<
        React.AnchorHTMLAttributes<HTMLAnchorElement>
    > | null;

    /**
     * className
     * - Type: String | Function (String href, String type) | Object
     * - Default: 'linkified' (may be removed in future releases)
     *
     * class attribute to use for newly created links.
     *
     * Accepts a function that takes the unformatted href value and link type
     * (e.g., 'url', 'email', etc.) and returns the string.
     *
     * Accepts an object where each key is the link type and each value is the
     * string or function to use for that type.
     */
    className?: PossiblyByType<PossiblyFuncOfHrefAndType<string | undefined>>;

    /**
     * defaultProtocol
     * - Type: String
     * - Default: 'http'
     * - Values: 'http', 'https', 'ftp', 'ftps', etc.
     *
     * Protocol that should be used in href attributes for URLs without a
     * protocol (e.g., github.com).
     */
    defaultProtocol?: string;

    /**
     * events
     * - *element, jquery interfaces only*
     * - Type: Object | Function (String href, String type) | Object
     * - Default: null
     *
     * Add event listeners to newly created link elements. Takes a hash where
     * each key is an standard event name and the value is an event handler.
     *
     * Also accepts a function that takes the unformatted href and the link type
     * (e.g., 'url', 'email', etc.) and returns the hash.
     *
     * For React, specify events in the attributes option as standard React
     * events.
     *
     * See the React Event docs and the linkify-react event docs
     */
    events?: PossiblyFuncOfHrefAndType<{
        [eventName: string]: EventHandler;
    }> | null;

    /**
     * format
     * - Type: Function (String value, String type) | Object
     * - Default: null
     *
     * Format the text displayed by a linkified entity. e.g., truncate a long
     * URL.
     *
     * Accepts an object where each key is the link type (e.g., 'url', 'email',
     * etc.) and each value is the formatting function to use for that type.
     *
     * NOTE: According to the linkifyjs implementation, `format` can be just a
     * string, but this is not mentioned in the docs, so we exclude it.
     */
    format?: PossiblyByType<(value: string, type: string) => string>;
    //

    /**
     * formatHref
     * - Type: Function (String href, String type) | Object
     * - Default: null
     *
     * Similar to format, except the result of this function will be used as the
     * href attribute of the new link.
     *
     * This is useful when finding hashtags, where you don’t necessarily want
     * the default to be a link to a named anchor.
     *
     * Accepts an object where each key is the link type (e.g., 'url', 'email',
     * etc.) and each value is the formatting function to use for that type.
     *
     * NOTE: According to the linkifyjs implementation, `formatHref` can be just
     * a string, but this is not mentioned in the docs, so we exclude it.
     */
    formatHref?: PossiblyByType<(href: string, type: string) => string>;

    /**
     * ignoreTags
     * - *element, html, and jquery interfaces only*
     * - Type: Array
     * - Default: []
     *
     * Prevent linkify from trying to parse links in the specified tags. This is
     * useful when running linkify on arbitrary HTML.
     */
    ignoreTags?: string[];

    /**
     * nl2br
     * - Type: Boolean
     * - Default: false
     *
     * If true, \n line breaks will automatically be converted to <br> tags.
     *
     */
    nl2br?: boolean;

    /**
     * tagName
     * - Type: String | Function (String href, String type) | Object
     * - Default: a
     *
     * The tag name to use for each link. For cases where you can’t use anchor
     * tags.
     *
     * Accepts a function that takes the unformatted href, the link type (e.g.,
     * 'url', 'email', etc.) and returns the tag name.
     *
     * Accepts an object where each key is the link type and each value is the
     * tag name to use for that type.
     */
    tagName?: PossiblyByType<PossiblyFuncOfHrefAndType<string>>;

    /**
     * target
     * - Type: String | Function (String href, String type) | Object
     * - Default: '_blank' for URLs, null for everything else
     *
     * target attribute for generated link.
     *
     * Accepts a function that takes the unformatted href, the link type (e.g.,
     * 'url', 'email', etc.) and returns the target
     *
     * Accepts an object where each key is the link type and each value is the
     * target to use for that type.
     */
    target?: PossiblyByType<
        PossiblyFuncOfHrefAndType<string | null | undefined>
    >;

    /**
     * validate
     * - Type: Boolean | Function (String value, String type) | Object
     * - Default: null
     *
     * If option resolves to false, the given value will not show up as a link.
     *
     * Accepts a function that takes a discovered link and the link type (e.g.,
     * 'url', 'email', etc.) and returns true if the link should be converted
     * into an anchor tag, and false otherwise.
     *
     * Accepts an object where each key is the link type and each value is the
     * the validation option to use for that type
     */
    validate?: PossiblyByType<PossiblyFuncOfHrefAndType<boolean>>;
}
