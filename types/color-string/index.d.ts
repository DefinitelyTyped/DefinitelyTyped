export type Color = [number, number, number, number];

export interface ColorDescriptor {
    model: "rgb" | "hsl" | "hwb";
    value: Color;
}

export function get(colorString: string): ColorDescriptor | null;

export namespace get {
    function hsl<TColorStr extends string | null>(colorString: TColorStr): TColorStr extends string ? Color : null;
    function hwb<TColorStr extends string | null>(colorString: TColorStr): TColorStr extends string ? Color : null;
    function rgb<TColorStr extends string | null>(colorString: TColorStr): TColorStr extends string ? Color : null;
}

export namespace to {
    function hex(...args: Array<number | number[]>): string;
    function rgb(...args: Array<number | number[]>): string;
    namespace rgb {
        function percent(...args: Array<number | number[]>): string;
    }
    function keyword(...args: Array<number | number[]>): string;
    function hsl(...args: Array<number | number[]>): string;
    function hwb(...args: Array<number | number[]>): string;
}
