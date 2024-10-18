/// <reference types="node" />

declare function parseIco(data: Buffer):
    | {
        width: number;
        height: number;
        variants: Array<{ width: number; height: number }>;
        type: "ico";
        mime: "image/x-icon";
        wUnits: "px";
        hUnits: "px";
    }
    | undefined;

export = parseIco;
