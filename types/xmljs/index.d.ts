/*~ Note that ES6 modules cannot directly export class objects.
 *~ This file should be imported using the CommonJS-style:
 *~   import x = require('someLibrary');
 *~
 *~ Refer to the documentation to understand common
 *~ workarounds for this limitation of ES6 modules.
 */

/*~ If this module is a UMD module that exposes a global variable 'myClassLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace XmlParser;

/*~ This declaration specifies that the class constructor function
 *~ is the exported object from the file
 */
export = XmlParser;

interface ParserParameters {
    /**
     * Whenever or not to use a strict parser
     */
    strict?: boolean | undefined;
    /**
     * Do not trimtext and comment nodes
     */
    noTrim?: boolean | undefined;
    /**
     * Do not normalize whitespaces in text
     */
    noNormalizeWhitespaces?: boolean | undefined;
    /**
     * Turn the tagsNames to lowercase
     */
    lowercaseTagnames?: boolean | undefined;
    /**
     * Disables xml namespaces
     */
    noNamespaces?: boolean | undefined;
    /**
     * Disable position tracing of sax
     */
    noTracing?: boolean | undefined;
    /**
     * Allow only predefined entities
     */
    strictEntities?: boolean | undefined;
}

/*~ Write your module's methods and properties in this class */
declare class XmlParser {
    constructor(oPar: ParserParameters);
    /**
     * Parses a xml string
     * @param xml  XML string to parse
     * @param cb Callback function with error and the result (an Node)
     * @returns whenever or not there where any errors
     */
    parseString(xml: string, cb: (err: null | Error[], xmlNode: Node) => void): boolean;
    errors: Error[];

    /**
     * Returns whenever a node is a XmlNode or not
     * @param n
     */
    static isXmlNode(n: Node): n is XmlNode;
}

/**
 * Attribute
 */
declare class Attribute {
    name: string;
    text: string;
}

/**
 * XML Attribute, an attribute with a namespace
 */
declare class XmlAttribute extends Attribute {
    ns: string;
}

declare class Node {
    /**
     * Gets an node attribute by name
     * @param attrName  Name of the attribute
     * @param ignoreCase  whenever or not to ignore the name casing
     */
    getAttribute(attrName: string, ignoreCase: boolean): XmlAttribute;
    /**
     * Traverses the XML Nodes and iterates through specified path
     * @param path  Node names to traverse down
     * @param ignoreCase  Ignore the casing of the path / node names
     */
    path(path: string[], ignoreCase: boolean): XmlNode[];
    /**
     * Recursively traverses the nodes and calls the given function in-order
     * @param fn Function to call for each node
     */
    visit(fn: (n: Node) => void): void;
}

declare class XmlNode extends Node {
    name: string;
    ns: string;
    prefix: string;
    localName: string;
    text: string;
}
