/**
 * When using {@link module:ol/xml~makeChildAppender} or
 * {@link module:ol/xml~makeSimpleNodeFactory}, the top objectStack item needs
 * to have this structure.
 */
export interface NodeStackItem {
    node: Node;
}
export type Parser = (p0: Element, p1: any[]) => void;
export type Serializer = (p0: Element, p1: any, p2: any[]) => void;
/**
 * A node factory that creates a node using the parent's namespaceURI and the
 * nodeName passed by {@link module:ol/xml~serialize} or
 * {@link module:ol/xml~pushSerializeAndPop} to the node factory.
 */
export const OBJECT_PROPERTY_NODE_FACTORY: () => void;
export const XML_SCHEMA_INSTANCE_URI: string;
export function createElementNS(namespaceURI: string, qualifiedName: string): Element;
/**
 * Recursively grab all text content of child nodes into a single string.
 */
export function getAllTextContent(node: Node, normalizeWhitespace: boolean): string;
export function getAttributeNS(node: Element, namespaceURI: string, name: string): string;
/**
 * Get a document that should be used when creating nodes for XML serializations.
 */
export function getDocument(): Document;
export function getXMLSerializer(): XMLSerializer;
export function isDocument(object: any): boolean;
/**
 * Make an array extender function for extending the array at the top of the
 * object stack.
 */
export function makeArrayExtender<T>(
    valueReader: (this: T, p0: Node, p1: any[]) => any[] | undefined,
    opt_this?: T,
): Parser;
/**
 * Make an array pusher function for pushing to the array at the top of the
 * object stack.
 */
export function makeArrayPusher<T>(valueReader: (this: T, p0: Element, p1: any[]) => any, opt_this?: T): Parser;
/**
 * Create a serializer that calls the provided nodeWriter from
 * {@link module:ol/xml~serialize}. This can be used by the parent writer to have the
 * 'nodeWriter' called with an array of values when the nodeWriter was
 * designed to serialize a single item. An example would be a LineString
 * geometry writer, which could be reused for writing MultiLineString
 * geometries.
 */
export function makeArraySerializer<T, V>(
    nodeWriter: (this: T, p0: Element, p1: V, p2: any[]) => void,
    opt_this?: T,
): Serializer;
/**
 * Create a serializer that appends nodes written by its nodeWriter to its
 * designated parent. The parent is the node of the
 * {@link module:ol/xml~NodeStackItem} at the top of the objectStack.
 */
export function makeChildAppender<T, V>(
    nodeWriter: (this: T, p0: Node, p1: V, p2: any[]) => void,
    opt_this?: T,
): Serializer;
/**
 * Make an object property pusher function for adding a property to the
 * object at the top of the stack.
 */
export function makeObjectPropertyPusher<T>(
    valueReader: (this: T, p0: Element, p1: any[]) => any,
    opt_property?: string,
    opt_this?: T,
): Parser;
/**
 * Make an object property setter function.
 */
export function makeObjectPropertySetter<T>(
    valueReader: (this: T, p0: Element, p1: any[]) => any,
    opt_property?: string,
    opt_this?: T,
): Parser;
/**
 * Make an object stack replacer function for replacing the object at the
 * top of the stack.
 */
export function makeReplacer<T>(valueReader: (this: T, p0: Node, p1: any[]) => any, opt_this?: T): Parser;
/**
 * Create an array of values to be used with {@link module:ol/xml~serialize} or
 * {@link module:ol/xml~pushSerializeAndPop}, where orderedKeys has to be provided as
 * opt_key argument.
 */
export function makeSequence(object: { [key: string]: any }, orderedKeys: string[]): any[];
/**
 * Create a node factory which can use the opt_keys passed to
 * {@link module:ol/xml~serialize} or {@link module:ol/xml~pushSerializeAndPop} as node names,
 * or a fixed node name. The namespace of the created nodes can either be fixed,
 * or the parent namespace will be used.
 */
export function makeSimpleNodeFactory(
    opt_nodeName?: string,
    opt_namespaceURI?: string,
): (p0: any, p1: any[], p2?: string) => Node | undefined;
/**
 * Create a namespaced structure, using the same values for each namespace.
 * This can be used as a starting point for versioned parsers, when only a few
 * values are version specific.
 */
export function makeStructureNS<T>(
    namespaceURIs: string[],
    structure: T,
    opt_structureNS?: { [key: string]: T },
): { [key: string]: T };
/**
 * Parse an XML string to an XML Document.
 */
export function parse(xml: string): Document;
/**
 * Parse a node using the parsers and object stack.
 */
export function parseNode(
    parsersNS: { [key: string]: { [key: string]: Parser } },
    node: Element,
    objectStack: any[],
    opt_this?: any,
): void;
/**
 * Push an object on top of the stack, parse and return the popped object.
 */
export function pushParseAndPop<T>(
    object: T,
    parsersNS: { [key: string]: { [key: string]: Parser } },
    node: Element,
    objectStack: any[],
    opt_this?: any,
): T;
export function pushSerializeAndPop<O, T>(
    object: O,
    serializersNS: { [key: string]: { [key: string]: Serializer } },
    nodeFactory: (this: T, p0: any, p1: any[], p2: string | undefined) => Node | undefined,
    values: any[],
    objectStack: any[],
    opt_keys?: string[],
    opt_this?: T,
): O | undefined;
/**
 * Register a Document to use when creating nodes for XML serializations. Can be used
 * to inject a Document where there is no globally available implementation.
 */
export function registerDocument(document: Document): void;
/**
 * Register a XMLSerializer. Can be used  to inject a XMLSerializer
 * where there is no globally available implementation.
 */
export function registerXMLSerializer(xmlSerializer: XMLSerializer): void;
/**
 * Walk through an array of values and call a serializer for each value.
 */
export function serialize<T>(
    serializersNS: { [key: string]: { [key: string]: Serializer } },
    nodeFactory: (this: T, p0: any, p1: any[], p2: string | undefined) => Node | undefined,
    values: any[],
    objectStack: any[],
    opt_keys?: string[],
    opt_this?: T,
): void;
