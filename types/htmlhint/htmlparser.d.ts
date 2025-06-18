export interface Attr {
    name: string;
    value: string;
    quote: string;
    index: number;
    raw: string;
}

export interface Block {
    tagName: string;
    attrs: Attr[];
    type: string;
    raw: string;
    pos: number;
    line: number;
    col: number;
    content: string;
    long: boolean;
    close: string;
    lastEvent?: Partial<Block>;
}

export type Listener = (event: Block) => void;

export default class HTMLParser {
    lastEvent: Partial<Block> | null;

    private _listeners: { [type: string]: Listener[] };
    private _mapCdataTags: { [tagName: string]: boolean };
    private _arrBlocks: Array<Partial<Block>>;

    constructor();

    makeMap(
        str: string,
    ): {
        [key: string]: boolean;
    };
    parse(html: string): void;
    addListener(types: string, listener: Listener): void;
    fire(type: string, data?: Partial<Block>): void;
    removeListener(type: string, listener: Listener): void;
    fixPos(
        event: Block,
        index: number,
    ): {
        line: number;
        col: number;
    };
    getMapAttrs(
        arrAttrs: Attr[],
    ): {
        [name: string]: string;
    };
}
