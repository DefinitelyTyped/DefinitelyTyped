// Type definitions for xmldom 0.1.16
// Project: https://github.com/jindw/xmldom.git
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "xmldom" {
  namespace xmldom {
    var DOMParser: DOMParserStatic;

    interface DOMParserStatic {
      new(): DOMParser;
      new(options: Options): DOMParser;
    }

    interface DOMParser {
      parseFromString(xmlsource: string, mimeType?: string): Document;
      serializeToString(node: Node): string;
    }

    interface Options {
      locator?: any;
      errorHandler?: ErrorHandlerFunction|ErrorHandlerObject;
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
}

