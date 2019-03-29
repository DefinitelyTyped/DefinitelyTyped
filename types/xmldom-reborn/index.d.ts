// Type definitions for xmldom-reborn 1.0
// Project: https://github.com/MrDatastorage/xmldom-reborn
// Definitions by: Qubo <https://github.com/tkqubo>
//                 Andreas Neeven <https://github.com/aneeven>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export declare const DOMParser: DOMParserStatic;
export declare const XMLSerializer: XMLSerializerStatic;
export declare const DOMImplementation: DOMImplementationStatic;

interface DOMImplementationStatic {
    new(): DOMImplementation;
}

interface DOMParserStatic {
    new(): DOMParser;
    new(options: Options): DOMParser;
}

interface XMLSerializerStatic {
    new(): XMLSerializer;
}

interface DOMParser {
    parseFromString(xmlsource: string, mimeType?: string): Document;
}

interface XMLSerializer {
    serializeToString(node: Node): string;
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