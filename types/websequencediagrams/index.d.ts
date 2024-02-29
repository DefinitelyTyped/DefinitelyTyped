/// <reference types="node" />

declare namespace WSD {
    type OutputType = "png" | "svg" | "pdf";
    type Style =
        | "default"
        | "earth"
        | "magazine"
        | "modern-blue"
        | "mscgen,"
        | "napkin"
        | "omegapple"
        | "patent"
        | "qsd"
        | "rose"
        | "roundgreen"
        | "vs2010";

    type DiagramTuple = [Buffer, string];
}

declare const WSD: {
    root: string;
    styles: WSD.Style[];

    /** @async */
    diagramURL: (message: string | Buffer, style?: WSD.Style, format?: WSD.OutputType) => Promise<string>;

    /** @async */
    diagram: (message: string | Buffer, style?: WSD.Style, format?: WSD.OutputType) => Promise<WSD.DiagramTuple>;
};

export = WSD;
