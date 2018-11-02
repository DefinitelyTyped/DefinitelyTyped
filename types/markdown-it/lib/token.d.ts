export = Token;

declare class Token {
    constructor(type: string, tag: string, nesting: number);
    attrGet: (name: string) => string | null;
    attrIndex: (name: string) => number;
    attrJoin: (name: string, value: string) => void;
    attrPush: (attrData: string[]) => void;
    attrSet: (name: string, value: string) => void;
    attrs: string[][];
    block: boolean;
    children: Token[];
    content: string;
    hidden: boolean;
    info: string;
    level: number;
    map: number[];
    markup: string;
    meta: any;
    nesting: number;
    tag: string;
    type: string;
}
