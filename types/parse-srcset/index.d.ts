interface ParsedSrcset {
    url: string;
    d?: number;
    h?: number;
    w?: number;
}

declare function parseSrcset(value: string): ParsedSrcset[];

export as namespace parseSrcset;
export = parseSrcset;
