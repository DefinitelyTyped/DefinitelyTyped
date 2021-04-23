// Type definitions for jstoxml 2.0
// Project: http://github.com/davidcalhoun/jstoxml
// Definitions by: Steven Snoeijen <https://github.com/stevensnoeijen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface XmlAttrs {
    [name: string]: unknown;
}

export interface XmlElement {
    /**
     * Element's name
     */
    _name?: string;

    /**
     * Element's attributes.
     */
    _attrs?: XmlAttrs | XmlAttrs[];

    /**
     * Element's content.
     */
    _content?: XmlElement | XmlElement[] | unknown;

    /**
     * Another way to create (sub)-elements (like in _content).
     */
    [key: string]: XmlElement | XmlElement[] | unknown;
}

export interface XmlOptions {
    /**
     * Tree depth.
     * @default 0
     */
    depth?: number;

    /**
     * By default elements are intented with 1 whitespace per depth.
     * @default " "
     */
    indent?: string;

    /**
     * Set Custom XML header when given a string,
     * when setting to true the default xml header will be added.
     * @default false
     */
    header?: string | boolean;

    /**
     * Custom filter for XML entities.
     */
    filter?: { [char: string]: string };

    /**
     * Custom filter for XML attributes
     * Default filters are:
     * @example
     * <code>
     * const defaultEntityFilter = {
     *   "<": "&lt;",
     *   ">": "&gt;",
     *   "&": "&amp;",
     * };
     * </code>
     * Setting this to `false` disables attribute filters.
     */
    attributesFilter?: {};

    /**
     * If for some reason you want to avoid self-closing tags, you can pass in a special config option _selfCloseTag.
     * @default true
     */
    _selfCloseTag?: boolean;
}

export function toXML(obj?: XmlElement | XmlElement[], options?: XmlOptions): string;

// do not export every type by default
export {};
