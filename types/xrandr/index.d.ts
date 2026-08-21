export interface Interface {
    connected: boolean;
    modes: Mode[];
    rotation: "normal" | "left" | "right" | "inverted";
    position: {
        x: number;
        y: number;
    };
}

export interface Mode {
    width: number;
    height: number;
    rate: number;
    native?: boolean;
    current?: boolean;
    interlaced?: boolean;
}

export type XrandrResult = Record<string, Interface>;

export function parser(input: string): XrandrResult;
