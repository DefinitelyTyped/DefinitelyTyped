// Type definitions for @rgrove/parse-xml 1.1
// Project: https://github.com/rgrove/parse-xml
// Definitions by: Pete Johanson <https://github.com/petejohanson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare function parseXml(name: string, options?: parseXml.ParseOptions): parseXml.Document;

declare namespace parseXml {
    interface NodeBase {
      parent?: NodeBase;
      type: string;
    }

    interface Document extends NodeBase {
        type: "document";
        children: NodeBase[];
    }

    interface CData extends NodeBase {
        type: "cdata";
        text: string;
    }

    interface Comment extends NodeBase {
        type: "comment";
        content: string;
    }

    interface Text extends NodeBase {
        type: "text";
        text: string;
    }

    interface Element extends NodeBase {
        type: "element";
        attributes: { [key: string]: string };
        children: NodeBase[];
        name: string;
        preserveWhitespace?: string;
    }

    type Node = CData | Comment | Element | Text;

    interface ParseOptions {
        ignoreUndefinedEntities?: boolean;
        preserveCdata?: boolean;
        preserveComments?: boolean;
        resolveUndefinedEntity?: (ref: string) => string;
    }
}

export = parseXml;
