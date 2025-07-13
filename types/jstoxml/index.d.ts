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
     * XML content strings to replace (e.g. <a>This & that</a> becomes <a>This &amp; that</a>).
     * Default filters are:
     * @example
     * <code>
     * const defaultEntityFilter = {
     *   "<": "&lt;",
     *   ">": "&gt;",
     *   "&": "&amp;",
     *   "\"": "&quot;"
     * };
     * </code>
     */
    contentReplacements?: { [char: string]: string } | undefined;

    /**
     * XML attribute value substrings to replace (e.g. <a attributeKey="attributeValue" />).
     * Does not double encode HTML entities (e.g. &lt; is preserved and NOT converted to &amp;lt).
     * Default filters are:
     * @example
     * <code>
     * const defaultEntityFilter = {
     *   "<": "&lt;",
     *   ">": "&gt;",
     *   "&": "&amp;",
     *   "\"": "&quot;"
     * };
     * </code>
     */
    attributeReplacements?: {} | undefined;

    /**
     * Filters out attributes based on user-supplied function.
     */
    attributeFilter?: (key: string, value: unknown) => boolean;

    /**
     * Whether tags should be self-closing.
     * @default true
     */
    selfCloseTags?: boolean | undefined;

    /**
     * Custom map function to transform XML content. Runs after contentReplacements.
     */
    contentMap?: (val: unknown) => unknown;

    /**
     * When true explicitly outputs true attribute value strings,
     * e.g. <a foo='true' /> instead of <a foo />.
     * @default boolean
     */
    attributeExplicitTrue?: boolean;
}

export function toXML(obj?: XmlElement | XmlElement[], options?: XmlOptions): string;

// do not export every type by default
export {};
