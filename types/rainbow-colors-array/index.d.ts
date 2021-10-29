interface HexColor {
    hex: string;
}
interface RGBColor {
    r: number;
    g: number;
    b: number;
}
interface HSLColor {
    h: number;
    s: number;
    l: number;
}
declare function rca(amount: number, type: 'hex', pastel?: boolean): HexColor[];
declare function rca(amount: number, type: 'hsl', pastel?: boolean): HSLColor[];
declare function rca(amount: number, type: 'rgb', pastel?: boolean): RGBColor[];

export = rca;
