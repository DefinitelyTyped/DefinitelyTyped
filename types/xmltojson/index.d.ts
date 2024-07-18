export = xmltojson;

declare namespace xmltojson {
    function grokType(sValue: any): any;
    function parseString(xmlString: string, opt: Options): Object;
    function parseXml(oXMLParent: Document, opt: Options): Object;
    function xmlToString(xmlDoc: Document): string;
    function stringToXml(xmlString: string): Document;

    interface Options {
        mergeCDATA?: boolean | undefined;
        grokAttr?: boolean | undefined;
        grokText?: boolean | undefined;
        normalize?: boolean | undefined;
        xmlns?: boolean | undefined;
        namespaceKey?: string | undefined;
        textKey?: string | undefined;
        valueKey?: string | undefined;
        attrKey?: string | undefined;
        cdataKey?: string | undefined;
        attrsAsObject?: boolean | undefined;
        stripAttrPrefix?: boolean | undefined;
        stripElemPrefix?: boolean | undefined;
        childrenAsArray?: boolean | undefined;
    }
}
