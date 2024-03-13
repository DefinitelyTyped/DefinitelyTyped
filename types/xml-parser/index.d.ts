declare function parse(xml: string): parse.Document;

declare namespace parse {
    export interface Document {
        declaration: Declaration;
        root: Node;
    }

    export interface Declaration {
        attributes: Attributes;
    }

    export interface Node {
        name: string;
        attributes: Attributes;
        children: Node[];
        content?: string | undefined;
    }

    export interface Attributes {
        [name: string]: string;
    }
}

export = parse;
