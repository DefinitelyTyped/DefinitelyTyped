// Type definitions for @rgrove/parse-xml 1.1.1
// Project: https://github.com/rgrove/parse-xml
// Definitions by: Pete Johanson <https://github.com/petejohanson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare function parseXml(name: string, options?: parseXml.ParseOptions): parseXml.IDocument;

declare namespace parseXml {
    export interface INode {
      parent?: INode;
      type: string;
    }

    export interface IDocument extends INode {
        type: "document";
        children: Node[];
    }

    export interface ICData extends INode {
        type: "cdata";
        text: string;
    }

    export interface IComment extends INode {
        type: "comment";
        content: string;
    }

    export interface IText extends INode {
        type: "text";
        text: string;
    }

    export interface IElement extends INode {
        type: "element";
        attributes: { [key: string]: string };
        children: INode[];
        name: string;
        preserveWhitespace?: string;
    }

    export type Node = ICData | IComment | IElement | IText;

    export interface ParseOptions {
        ignoreUndefinedEntities?: boolean;
        preserveCdata?: boolean;
        preserveComments?: boolean;
        resolveUndefinedEntity?: (ref: string) => string;
    }
}

export = parseXml
