export interface NodeStackItem {
    node: Node;
}
export type Parser = (p0: Element, p1: any[]) => void;
export type Serializer = (p0: Element, p1: any, p2: any[]) => void;
export function createElementNS(namespaceURI: string, qualifiedName: string): Element;
export function getAllTextContent(node: Node, normalizeWhitespace: boolean): string;
export function getAttributeNS(node: Element, namespaceURI: string, name: string): string;
export function isDocument(object: any): boolean;
export function makeArrayExtender<T>(valueReader: (this: T, p0: Node, p1: any[]) => any[], opt_this?: T): Parser;
export function makeArrayPusher<T>(valueReader: (this: T, p0: Element, p1: any[]) => any, opt_this?: T): Parser;
export function makeArraySerializer<T, V>(
    nodeWriter: (this: T, p0: Element, p1: V, p2: any[]) => void,
    opt_this?: T,
): Serializer;
export function makeChildAppender<T, V>(
    nodeWriter: (this: T, p0: Node, p1: V, p2: any[]) => void,
    opt_this?: T,
): Serializer;
export function makeObjectPropertyPusher<T>(
    valueReader: (this: T, p0: Element, p1: any[]) => any,
    opt_property?: string,
    opt_this?: T,
): Parser;
export function makeObjectPropertySetter<T>(
    valueReader: (this: T, p0: Element, p1: any[]) => any,
    opt_property?: string,
    opt_this?: T,
): Parser;
export function makeReplacer<T>(valueReader: (this: T, p0: Node, p1: any[]) => any, opt_this?: T): Parser;
export function makeSequence(object: { [key: string]: any }, orderedKeys: string[]): any[];
export function makeSimpleNodeFactory(
    opt_nodeName?: string,
    opt_namespaceURI?: string,
): (p0: any, p1: any[], p2?: string) => Node;
export function makeStructureNS<T>(
    namespaceURIs: string[],
    structure: T,
    opt_structureNS?: { [key: string]: T },
): { [key: string]: T };
export function parse(xml: string): Document;
export function parseNode(
    parsersNS: { [key: string]: { [key: string]: Parser } },
    node: Element,
    objectStack: any[],
    opt_this?: any,
): void;
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
    nodeFactory: (this: T, p0: any, p1: any[], p2: string | undefined) => Node,
    values: any[],
    objectStack: any[],
    opt_keys?: string[],
    opt_this?: T,
): O;
export function serialize<T>(
    serializersNS: { [key: string]: { [key: string]: Serializer } },
    nodeFactory: (this: T, p0: any, p1: any[], p2: string | undefined) => Node,
    values: any[],
    objectStack: any[],
    opt_keys?: string[],
    opt_this?: T,
): void;
