/**
 * Checks whether a string matches the [`Name`](http://www.w3.org/TR/xml/#NT-Name) production in from
 * XML Namespaces specification.
 */
export function name(name: string): boolean;

/**
 * Checks whether a string matches the [`QName`](http://www.w3.org/TR/xml-names/#NT-QName) production
 * from the XML Namespaces specification.
 */
export function qname(qname: string): boolean;
