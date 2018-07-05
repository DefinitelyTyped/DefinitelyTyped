// Type definitions for xmltojson
// Project: https://github.com/metatribal/xmlToJSON
// Definitions by: Travis Crowe <https://github.com/traviscrowe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



export = xmltojson;

declare namespace xmltojson {
    function grokType(sValue: any): any;
    function parseString(xmlString: string, opt: Options): Object;
    function parseXml(oXMLParent: Document, opt: Options): Object;
    function xmlToString(xmlDoc: Document): string;
    function stringToXml(xmlString: string): Document;

    interface Options {
        mergeCDATA?: boolean,
        grokAttr?: boolean,
        grokText?: boolean,
        normalize?: boolean,
        xmlns?: boolean,
        namespaceKey?: string,
        textKey?: string,
        valueKey?: string,
        attrKey?: string,
        cdataKey?: string,
        attrsAsObject?: boolean,
        stripAttrPrefix?: boolean,
        stripElemPrefix?: boolean,
        childrenAsArray?: boolean
    }
}
