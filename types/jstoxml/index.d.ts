interface XmlAttrs {
    [name: string]: unknown;
}

export interface XmlElement {
    /**
     * Element's name
     */
    _name?: string | undefined;

    /**
     * Element's attributes.
     */
    _attrs?: XmlAttrs | XmlAttrs[] | undefined;

    /**
     * Element's content.
     */
    _content?: XmlElement | XmlElement[] | unknown | undefined;

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
    depth?: number | undefined;

    /**
     * By default elements are intented with 1 whitespace per depth.
     * @default " "
     */
    indent?: string | undefined;

    /**
     * Set Custom XML header when given a string,
     * when setting to true the default xml header will be added.
     * @default false
     */
    header?: string | boolean | undefined;

    /**
     * Custom filter for XML entities.
     */
    filter?: { [char: string]: string } | undefined;

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
    attributesFilter?: {} | undefined;

    /**
     * If for some reason you want to avoid self-closing tags, you can pass in a special config option _selfCloseTag.
     * @default true
     */
    _selfCloseTag?: boolean | undefined;
}

export function toXML(obj?: XmlElement | XmlElement[], options?: XmlOptions): string;

// do not export every type by default
export {};
