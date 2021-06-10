// Type definitions for xmldom 0.1.22
// Project: https://github.com/xmldom/xmldom
// Definitions by: Qubo <https://github.com/tkqubo>
//                 Karfau <https://github.com/karfau>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference lib="dom" />

declare namespace xmldom {
    var DOMParser: DOMParserStatic;
    var XMLSerializer: XMLSerializerStatic;
    var DOMImplementation: DOMImplementationStatic;

    interface DOMImplementationStatic {
        new(): DOMImplementation;
    }

    interface DOMParserStatic {
        new (): DOMParser;
        new (options: Options): DOMParser;
    }

    interface XMLSerializerStatic {
        new (): XMLSerializer;
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
}

export = xmldom;
