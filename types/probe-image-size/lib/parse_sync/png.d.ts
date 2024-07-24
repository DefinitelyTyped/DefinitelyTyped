/// <reference types="node" />

declare function parsePng(data: Buffer):
    | {
        width: number;
        height: number;
        type: "png";
        mime: "image/png";
        wUnits: "px";
        hUnits: "px";
    }
    | undefined;

export = parsePng;
