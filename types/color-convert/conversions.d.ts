import colors = require("color-name");

export type RGB = [number, number, number];
export type HSL = [number, number, number];
export type HSV = [number, number, number];
export type HWB = [number, number, number];
export type CMYK = [number, number, number, number];
export type XYZ = [number, number, number];
export type LAB = [number, number, number];
export type LCH = [number, number, number];
export type HEX = string;
export type KEYWORD = keyof typeof colors;
export type ANSI16 = number;
export type ANSI256 = number;
export type HCG = [number, number, number];
export type APPLE = [number, number, number];
export type GRAY = [number];

export namespace rgb {
    const channels: 3;
    const labels: "rgb";
    function hsl(rgb: RGB): HSL;
    function hsl(...rgb: RGB): HSL;
    function hsv(rgb: RGB): HSV;
    function hsv(...rgb: RGB): HSV;
    function hwb(rgb: RGB): HWB;
    function hwb(...rgb: RGB): HWB;
    function cmyk(rgb: RGB): CMYK;
    function cmyk(...rgb: RGB): CMYK;
    function keyword(rgb: RGB): KEYWORD;
    function keyword(...rgb: RGB): KEYWORD;
    function xyz(rgb: RGB): XYZ;
    function xyz(...rgb: RGB): XYZ;
    function lab(rgb: RGB): LAB;
    function lab(...rgb: RGB): LAB;
    function ansi16(rgb: RGB): ANSI16;
    function ansi16(...rgb: RGB): ANSI16;
    function ansi256(rgb: RGB): ANSI256;
    function ansi256(...rgb: RGB): ANSI256;
    function hex(rgb: RGB): HEX;
    function hex(...rgb: RGB): HEX;
    function hcg(rgb: RGB): HCG;
    function hcg(...rgb: RGB): HCG;
    function apple(rgb: RGB): APPLE;
    function apple(...rgb: RGB): APPLE;
    function gray(rgb: RGB): GRAY;
    function gray(...rgb: RGB): GRAY;
}

export namespace hsl {
    const channels: 3;
    const labels: "hsl";
    function rgb(hsl: HSL): RGB;
    function hsv(hsl: HSL): HSV;
    function hcg(hsl: HSL): HCG;
}

export namespace hsv {
    const channels: 3;
    const labels: "hsv";
    function rgb(hsv: HSV): RGB;
    function hsl(hsv: HSV): HSL;
    function ansi16(hsv: HSV): ANSI16;
    function hcg(hsv: HSV): HCG;
}

export namespace hwb {
    const channels: 3;
    const labels: "hwb";
    function rgb(hwb: HWB): RGB;
    function hcg(hwb: HWB): HCG;
}

export namespace cmyk {
    const channels: 4;
    const labels: "cmyk";
    function rgb(cmyk: CMYK): RGB;
}

export namespace xyz {
    const channels: 3;
    const labels: "xyz";
    function rgb(xyz: XYZ): RGB;
    function lab(xyz: XYZ): LAB;
}

export namespace lab {
    const channels: 3;
    const labels: "lab";
    function xyz(lab: LAB): XYZ;
    function lch(lab: LAB): LCH;
}

export namespace lch {
    const channels: 3;
    const labels: "lch";
    function lab(lch: LCH): LAB;
}

export namespace hex {
    const channels: 1;
    const labels: ["hex"];
    function rgb(hex: HEX): RGB;
}

export namespace keyword {
    const channels: 1;
    const labels: ["keyword"];
    function rgb(keyword: KEYWORD): RGB;
}

export namespace ansi16 {
    const channels: 1;
    const labels: ["ansi16"];
    function rgb(ansi16: ANSI16): RGB;
}

export namespace ansi256 {
    const channels: 1;
    const labels: ["ansi256"];
    function rgb(ansi256: ANSI256): RGB;
}

export namespace hcg {
    const channels: 3;
    const labels: ["h", "c", "g"];
    function rgb(hcg: HCG): RGB;
    function hsv(hcg: HCG): HSV;
    function hsl(hcg: HCG): HSL;
    function hwb(hcg: HCG): HWB;
}

export namespace apple {
    const channels: 3;
    const labels: ["r16", "g16", "b16"];
    function rgb(apple: APPLE): RGB;
}

export namespace gray {
    const channels: 1;
    const labels: ["gray"];
    function rgb(gray: GRAY): RGB;
    function hsl(gray: GRAY): HSL;
    function hsv(gray: GRAY): HSV;
    function hwb(gray: GRAY): HWB;
    function cmyk(gray: GRAY): CMYK;
    function lab(gray: GRAY): LAB;
    function hex(gray: GRAY): HEX;
}
