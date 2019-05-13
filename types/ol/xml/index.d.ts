declare module 'ol/xml' {

  export function createElementNS(namespaceURI: string, qualifiedName: string): Element;

  export function getAllTextContent(node: Node, normalizeWhitespace: boolean): string;

  export function getAttributeNS(node: Element, namespaceURI: string, name: string): string;

  export function isDocument(object: any): boolean;

  export function makeArrayExtender<T>(valueReader: ((this: T, param1: Node, param2: any[]) => any[]), opt_this?: T): Parser;

  export function makeArrayPusher<T>(valueReader: ((this: T, param1: Element, param2: any[]) => void), opt_this?: T): Parser;

  export function makeArraySerializer<T, V>(nodeWriter: ((this: T, param1: Element, param2: V, param3: any[]) => void), opt_this?: T): Serializer;

  export function makeChildAppender<T, V>(nodeWriter: ((this: T, param1: Node, param2: V, param3: any[]) => void), opt_this?: T): Serializer;

  export function makeObjectPropertyPusher<T>(valueReader: ((this: T, param1: Element, param2: any[]) => void), opt_property?: string, opt_this?: T): Parser;

  export function makeObjectPropertySetter<T>(valueReader: ((this: T, param1: Element, param2: any[]) => void), opt_property?: string, opt_this?: T): Parser;

  export function makeReplacer<T>(valueReader: ((this: T, param1: Node, param2: any[]) => void), opt_this?: T): Parser;

  export function makeSequence<V>(object: { [key: string]: V }, orderedKeys: string[]): V[];

  export function makeSimpleNodeFactory(opt_nodeName?: string, opt_namespaceURI?: string): ((param0: any, param1: any[], param2: string) => Node);

  export function makeStructureNS<T>(namespaceURIs: string[], structure: T, opt_structureNS?: { [key: string]: T }): { [key: string]: T };

  export function parse(xml: string): Document;

  export function parseNode(parsersNS: { [key: string]: { [key: string]: Parser } }, node: Element, objectStack: any[], opt_this?: any): void;

  export function pushParseAndPop<T>(object: T, parsersNS: { [key: string]: { [key: string]: Parser } }, node: Element, objectStack: any[], opt_this?: any): T;

  export function pushSerializeAndPop<O, T>(object: O, serializersNS: { [key: string]: { [key: string]: Serializer } }, nodeFactory: ((this: T, param1: any, param2: any[], param3: string) => Node), values: any[], objectStack: any[], opt_keys?: string[], opt_this?: T): O;

  export function serialize<T>(serializersNS: { [key: string]: { [key: string]: Serializer } }, nodeFactory: ((this: T, param1: any, param2: any[], param3: string) => Node), values: any[], objectStack: any[], opt_keys?: string[], opt_this?: T): void;

  export interface NodeStackItem {
    node: Node;
  }

  export type Parser = ((param0: Element, param1: any[]) => void);

  export type Serializer = ((param0: Element, param1: any, param2: any[]) => void);

}
