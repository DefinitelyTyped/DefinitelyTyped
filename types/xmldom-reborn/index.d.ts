// Type definitions for xmldom-reborn 1.0
// Project: https://github.com/MrDatastorage/xmldom-reborn
// Definitions by: Qubo <https://github.com/tkqubo>
//                 Andreas Neeven <https://github.com/aneeven>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const DOMParser: DOMParserStatic;
declare const XMLSerializer: XMLSerializerStatic;
declare const DOMImplementation: DOMImplementationStatic;

interface DOMImplementationStatic {
    new(): DOMImplementation;
}

interface DOMParser {
    parseFromString(xmlsource: string, mimeType?: string): Document;
}

interface DOMParserStatic {
    new(): DOMParser;
    new(options: Options): DOMParser;
}

interface XMLSerializer {
    serializeToString(node: Node): string;
}

interface XMLSerializerStatic {
    new(): XMLSerializer;
}

interface Options {
    locator?: any;
    errorHandler?: ErrorHandlerFunction | ErrorHandlerObject;
}

interface ErrorHandlerFunction {
    (level: string, msg: any): any;
}

interface ErrorHandlerObject {
    warning?: (msg: any) => any;
    error?: (msg: any) => any;
    fatalError?: (msg: any) => any;
}

export {
    DOMImplementation,
    DOMImplementationStatic,
    DOMParser,
    DOMParserStatic,
    XMLSerializer,
    XMLSerializerStatic,
    Options,
    ErrorHandlerFunction,
    ErrorHandlerObject
}