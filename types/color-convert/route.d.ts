import {
    ANSI16,
    ANSI256,
    APPLE,
    CMYK,
    GRAY,
    HCG,
    HEX,
    HSL,
    HSV,
    HWB,
    KEYWORD,
    LAB,
    LCH,
    RGB,
    XYZ,
} from "./conversions";

declare namespace route {
    interface rgb {
        hsl(from: RGB): HSL;
        hsl(...from: RGB): HSL;
        hsl(from: RGB): HSL;
        hsl(...from: RGB): HSL;
        hsv(from: RGB): HSV;
        hsv(...from: RGB): HSV;
        hwb(from: RGB): HWB;
        hwb(...from: RGB): HWB;
        cmyk(from: RGB): CMYK;
        cmyk(...from: RGB): CMYK;
        xyz(from: RGB): XYZ;
        xyz(...from: RGB): XYZ;
        lab(from: RGB): LAB;
        lab(...from: RGB): LAB;
        lch(from: RGB): LCH;
        lch(...from: RGB): LCH;
        hex(from: RGB): HEX;
        hex(...from: RGB): HEX;
        keyword(from: RGB): KEYWORD;
        keyword(...from: RGB): KEYWORD;
        ansi16(from: RGB): ANSI16;
        ansi16(...from: RGB): ANSI16;
        ansi256(from: RGB): ANSI256;
        ansi256(...from: RGB): ANSI256;
        hcg(from: RGB): HCG;
        hcg(...from: RGB): HCG;
        apple(from: RGB): APPLE;
        apple(...from: RGB): APPLE;
        gray(from: RGB): GRAY;
        gray(...from: RGB): GRAY;
    }
    interface hsl {
        rgb(from: HSL): RGB;
        hsv(from: HSL): HSV;
        hwb(from: HSL): HWB;
        cmyk(from: HSL): CMYK;
        xyz(from: HSL): XYZ;
        lab(from: HSL): LAB;
        lch(from: HSL): LCH;
        hex(from: HSL): HEX;
        keyword(from: HSL): KEYWORD;
        ansi16(from: HSL): ANSI16;
        ansi256(from: HSL): ANSI256;
        hcg(from: HSL): HCG;
        apple(from: HSL): APPLE;
        gray(from: HSL): GRAY;
    }
    interface hsv {
        rgb(from: HSV): RGB;
        hsl(from: HSV): HSL;
        hwb(from: HSV): HWB;
        cmyk(from: HSV): CMYK;
        xyz(from: HSV): XYZ;
        lab(from: HSV): LAB;
        lch(from: HSV): LCH;
        hex(from: HSV): HEX;
        keyword(from: HSV): KEYWORD;
        ansi16(from: HSV): ANSI16;
        ansi256(from: HSV): ANSI256;
        hcg(from: HSV): HCG;
        apple(from: HSV): APPLE;
        gray(from: HSV): GRAY;
    }
    interface hwb {
        rgb(from: HWB): RGB;
        hsl(from: HWB): HSL;
        hsv(from: HWB): HSV;
        cmyk(from: HWB): CMYK;
        xyz(from: HWB): XYZ;
        lab(from: HWB): LAB;
        lch(from: HWB): LCH;
        hex(from: HWB): HEX;
        keyword(from: HWB): KEYWORD;
        ansi16(from: HWB): ANSI16;
        ansi256(from: HWB): ANSI256;
        hcg(from: HWB): HCG;
        apple(from: HWB): APPLE;
        gray(from: HWB): GRAY;
    }
    interface cmyk {
        rgb(from: CMYK): RGB;
        hsl(from: CMYK): HSL;
        hsv(from: CMYK): HSV;
        hwb(from: CMYK): HWB;
        xyz(from: CMYK): XYZ;
        lab(from: CMYK): LAB;
        lch(from: CMYK): LCH;
        hex(from: CMYK): HEX;
        keyword(from: CMYK): KEYWORD;
        ansi16(from: CMYK): ANSI16;
        ansi256(from: CMYK): ANSI256;
        hcg(from: CMYK): HCG;
        apple(from: CMYK): APPLE;
        gray(from: CMYK): GRAY;
    }
    interface xyz {
        rgb(from: XYZ): RGB;
        hsl(from: XYZ): HSL;
        hsv(from: XYZ): HSV;
        hwb(from: XYZ): HWB;
        cmyk(from: XYZ): CMYK;
        lab(from: XYZ): LAB;
        lch(from: XYZ): LCH;
        hex(from: XYZ): HEX;
        keyword(from: XYZ): KEYWORD;
        ansi16(from: XYZ): ANSI16;
        ansi256(from: XYZ): ANSI256;
        hcg(from: XYZ): HCG;
        apple(from: XYZ): APPLE;
        gray(from: XYZ): GRAY;
    }
    interface lab {
        rgb(from: LAB): RGB;
        hsl(from: LAB): HSL;
        hsv(from: LAB): HSV;
        hwb(from: LAB): HWB;
        cmyk(from: LAB): CMYK;
        xyz(from: LAB): XYZ;
        lch(from: LAB): LCH;
        hex(from: LAB): HEX;
        keyword(from: LAB): KEYWORD;
        ansi16(from: LAB): ANSI16;
        ansi256(from: LAB): ANSI256;
        hcg(from: LAB): HCG;
        apple(from: LAB): APPLE;
        gray(from: LAB): GRAY;
    }
    interface lch {
        rgb(from: LCH): RGB;
        hsl(from: LCH): HSL;
        hsv(from: LCH): HSV;
        hwb(from: LCH): HWB;
        cmyk(from: LCH): CMYK;
        xyz(from: LCH): XYZ;
        lab(from: LCH): LAB;
        hex(from: LCH): HEX;
        keyword(from: LCH): KEYWORD;
        ansi16(from: LCH): ANSI16;
        ansi256(from: LCH): ANSI256;
        hcg(from: LCH): HCG;
        apple(from: LCH): APPLE;
        gray(from: LCH): GRAY;
    }
    interface hex {
        rgb(from: HEX): RGB;
        hsl(from: HEX): HSL;
        hsv(from: HEX): HSV;
        hwb(from: HEX): HWB;
        cmyk(from: HEX): CMYK;
        xyz(from: HEX): XYZ;
        lab(from: HEX): LAB;
        lch(from: HEX): LCH;
        keyword(from: HEX): KEYWORD;
        ansi16(from: HEX): ANSI16;
        ansi256(from: HEX): ANSI256;
        hcg(from: HEX): HCG;
        apple(from: HEX): APPLE;
        gray(from: HEX): GRAY;
    }
    interface keyword {
        rgb(from: KEYWORD): RGB;
        hsl(from: KEYWORD): HSL;
        hsv(from: KEYWORD): HSV;
        hwb(from: KEYWORD): HWB;
        cmyk(from: KEYWORD): CMYK;
        xyz(from: KEYWORD): XYZ;
        lab(from: KEYWORD): LAB;
        lch(from: KEYWORD): LCH;
        hex(from: KEYWORD): HEX;
        ansi16(from: KEYWORD): ANSI16;
        ansi256(from: KEYWORD): ANSI256;
        hcg(from: KEYWORD): HCG;
        apple(from: KEYWORD): APPLE;
        gray(from: KEYWORD): GRAY;
    }
    interface ansi16 {
        rgb(from: ANSI16): RGB;
        hsl(from: ANSI16): HSL;
        hsv(from: ANSI16): HSV;
        hwb(from: ANSI16): HWB;
        cmyk(from: ANSI16): CMYK;
        xyz(from: ANSI16): XYZ;
        lab(from: ANSI16): LAB;
        lch(from: ANSI16): LCH;
        hex(from: ANSI16): HEX;
        keyword(from: ANSI16): KEYWORD;
        ansi256(from: ANSI16): ANSI256;
        hcg(from: ANSI16): HCG;
        apple(from: ANSI16): APPLE;
        gray(from: ANSI16): GRAY;
    }
    interface ansi256 {
        rgb(from: ANSI256): RGB;
        hsl(from: ANSI256): HSL;
        hsv(from: ANSI256): HSV;
        hwb(from: ANSI256): HWB;
        cmyk(from: ANSI256): CMYK;
        xyz(from: ANSI256): XYZ;
        lab(from: ANSI256): LAB;
        lch(from: ANSI256): LCH;
        hex(from: ANSI256): HEX;
        keyword(from: ANSI256): KEYWORD;
        ansi16(from: ANSI256): ANSI16;
        hcg(from: ANSI256): HCG;
        apple(from: ANSI256): APPLE;
        gray(from: ANSI256): GRAY;
    }
    interface hcg {
        rgb(from: HCG): RGB;
        hsl(from: HCG): HSL;
        hsv(from: HCG): HSV;
        hwb(from: HCG): HWB;
        cmyk(from: HCG): CMYK;
        xyz(from: HCG): XYZ;
        lab(from: HCG): LAB;
        lch(from: HCG): LCH;
        hex(from: HCG): HEX;
        keyword(from: HCG): KEYWORD;
        ansi16(from: HCG): ANSI16;
        ansi256(from: HCG): ANSI256;
        apple(from: HCG): APPLE;
        gray(from: HCG): GRAY;
    }
    interface apple {
        rgb(from: APPLE): RGB;
        hsl(from: APPLE): HSL;
        hsv(from: APPLE): HSV;
        hwb(from: APPLE): HWB;
        cmyk(from: APPLE): CMYK;
        xyz(from: APPLE): XYZ;
        lab(from: APPLE): LAB;
        lch(from: APPLE): LCH;
        hex(from: APPLE): HEX;
        keyword(from: APPLE): KEYWORD;
        ansi16(from: APPLE): ANSI16;
        ansi256(from: APPLE): ANSI256;
        hcg(from: APPLE): HCG;
        gray(from: APPLE): GRAY;
    }
    interface gray {
        rgb(from: GRAY): RGB;
        hsl(from: GRAY): HSL;
        hsv(from: GRAY): HSV;
        hwb(from: GRAY): HWB;
        cmyk(from: GRAY): CMYK;
        xyz(from: GRAY): XYZ;
        lab(from: GRAY): LAB;
        lch(from: GRAY): LCH;
        hex(from: GRAY): HEX;
        keyword(from: GRAY): KEYWORD;
        ansi16(from: GRAY): ANSI16;
        ansi256(from: GRAY): ANSI256;
        hcg(from: GRAY): HCG;
        apple(from: GRAY): APPLE;
    }
}

declare function route(fromModel: "rgb"): route.rgb;
declare function route(fromModel: "hsl"): route.hsl;
declare function route(fromModel: "hsv"): route.hsv;
declare function route(fromModel: "hwb"): route.hwb;
declare function route(fromModel: "cmyk"): route.cmyk;
declare function route(fromModel: "xyz"): route.xyz;
declare function route(fromModel: "lab"): route.lab;
declare function route(fromModel: "lch"): route.lch;
declare function route(fromModel: "hex"): route.hex;
declare function route(fromModel: "keyword"): route.keyword;
declare function route(fromModel: "ansi16"): route.ansi16;
declare function route(fromModel: "ansi256"): route.ansi256;
declare function route(fromModel: "hcg"): route.hcg;
declare function route(fromModel: "apple"): route.apple;
declare function route(fromModel: "gray"): route.gray;

export = route;
