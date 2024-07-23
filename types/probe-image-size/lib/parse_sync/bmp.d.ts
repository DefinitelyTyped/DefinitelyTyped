/// <reference types="node" />

declare function parseBmp(data: Buffer):
    | {
        width: number;
        height: number;
        type: "bmp";
        mime: "image/bmp";
        wUnits: "px";
        hUnits: "px";
    }
    | undefined;

export = parseBmp;
