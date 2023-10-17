type WalkerCallback = (node: Child, index: number, nodes: Child[]) => boolean | void;

export interface Node {
    type: string;
    value: string;
    after: string;
    before: string;
    sourceIndex: number;
    nodes?: Child[] | undefined;

    walk(filter: string | RegExp, callback: WalkerCallback): void;
    walk(callback: WalkerCallback): void;
}

export interface Child extends Node {
    type: "media-query" | "media-feature-expression" | "media-feature" | "media-type" | "colon" | "value" | "keyword";
    parent: Node;
}

export interface Root extends Node {
    type: "media-query-list";
}

declare function mediaQueryParser(mediaQuery: string): Root;

export default mediaQueryParser;
