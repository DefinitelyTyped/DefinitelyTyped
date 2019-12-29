import conversions = require('./conversions');

declare namespace route {
    interface rgb {
        hsl(from: conversions.RGB): conversions.HSL;
        hsv(from: conversions.RGB): conversions.HSV;
        hwb(from: conversions.RGB): conversions.HWB;
        cmyk(from: conversions.RGB): conversions.CMYK;
        xyz(from: conversions.RGB): conversions.XYZ;
        lab(from: conversions.RGB): conversions.LAB;
        lch(from: conversions.RGB): conversions.LCH;
        hex(from: conversions.RGB): conversions.HEX;
        keyword(from: conversions.RGB): conversions.KEYWORD;
        ansi16(from: conversions.RGB): conversions.ANSI16;
        ansi256(from: conversions.RGB): conversions.ANSI256;
        hcg(from: conversions.RGB): conversions.HCG;
        apple(from: conversions.RGB): conversions.APPLE;
        gray(from: conversions.RGB): conversions.GRAY;
    }
    interface hsl {
        rgb(from: conversions.HSL): conversions.RGB;
        hsv(from: conversions.HSL): conversions.HSV;
        hwb(from: conversions.HSL): conversions.HWB;
        cmyk(from: conversions.HSL): conversions.CMYK;
        xyz(from: conversions.HSL): conversions.XYZ;
        lab(from: conversions.HSL): conversions.LAB;
        lch(from: conversions.HSL): conversions.LCH;
        hex(from: conversions.HSL): conversions.HEX;
        keyword(from: conversions.HSL): conversions.KEYWORD;
        ansi16(from: conversions.HSL): conversions.ANSI16;
        ansi256(from: conversions.HSL): conversions.ANSI256;
        hcg(from: conversions.HSL): conversions.HCG;
        apple(from: conversions.HSL): conversions.APPLE;
        gray(from: conversions.HSL): conversions.GRAY;
    }
    interface hsv {
        rgb(from: conversions.HSV): conversions.RGB;
        hsl(from: conversions.HSV): conversions.HSL;
        hwb(from: conversions.HSV): conversions.HWB;
        cmyk(from: conversions.HSV): conversions.CMYK;
        xyz(from: conversions.HSV): conversions.XYZ;
        lab(from: conversions.HSV): conversions.LAB;
        lch(from: conversions.HSV): conversions.LCH;
        hex(from: conversions.HSV): conversions.HEX;
        keyword(from: conversions.HSV): conversions.KEYWORD;
        ansi16(from: conversions.HSV): conversions.ANSI16;
        ansi256(from: conversions.HSV): conversions.ANSI256;
        hcg(from: conversions.HSV): conversions.HCG;
        apple(from: conversions.HSV): conversions.APPLE;
        gray(from: conversions.HSV): conversions.GRAY;
    }
    interface hwb {
        rgb(from: conversions.HWB): conversions.RGB;
        hsl(from: conversions.HWB): conversions.HSL;
        hsv(from: conversions.HWB): conversions.HSV;
        cmyk(from: conversions.HWB): conversions.CMYK;
        xyz(from: conversions.HWB): conversions.XYZ;
        lab(from: conversions.HWB): conversions.LAB;
        lch(from: conversions.HWB): conversions.LCH;
        hex(from: conversions.HWB): conversions.HEX;
        keyword(from: conversions.HWB): conversions.KEYWORD;
        ansi16(from: conversions.HWB): conversions.ANSI16;
        ansi256(from: conversions.HWB): conversions.ANSI256;
        hcg(from: conversions.HWB): conversions.HCG;
        apple(from: conversions.HWB): conversions.APPLE;
        gray(from: conversions.HWB): conversions.GRAY;
    }
    interface cmyk {
        rgb(from: conversions.CMYK): conversions.RGB;
        hsl(from: conversions.CMYK): conversions.HSL;
        hsv(from: conversions.CMYK): conversions.HSV;
        hwb(from: conversions.CMYK): conversions.HWB;
        xyz(from: conversions.CMYK): conversions.XYZ;
        lab(from: conversions.CMYK): conversions.LAB;
        lch(from: conversions.CMYK): conversions.LCH;
        hex(from: conversions.CMYK): conversions.HEX;
        keyword(from: conversions.CMYK): conversions.KEYWORD;
        ansi16(from: conversions.CMYK): conversions.ANSI16;
        ansi256(from: conversions.CMYK): conversions.ANSI256;
        hcg(from: conversions.CMYK): conversions.HCG;
        apple(from: conversions.CMYK): conversions.APPLE;
        gray(from: conversions.CMYK): conversions.GRAY;
    }
    interface xyz {
        rgb(from: conversions.XYZ): conversions.RGB;
        hsl(from: conversions.XYZ): conversions.HSL;
        hsv(from: conversions.XYZ): conversions.HSV;
        hwb(from: conversions.XYZ): conversions.HWB;
        cmyk(from: conversions.XYZ): conversions.CMYK;
        lab(from: conversions.XYZ): conversions.LAB;
        lch(from: conversions.XYZ): conversions.LCH;
        hex(from: conversions.XYZ): conversions.HEX;
        keyword(from: conversions.XYZ): conversions.KEYWORD;
        ansi16(from: conversions.XYZ): conversions.ANSI16;
        ansi256(from: conversions.XYZ): conversions.ANSI256;
        hcg(from: conversions.XYZ): conversions.HCG;
        apple(from: conversions.XYZ): conversions.APPLE;
        gray(from: conversions.XYZ): conversions.GRAY;
    }
    interface lab {
        rgb(from: conversions.LAB): conversions.RGB;
        hsl(from: conversions.LAB): conversions.HSL;
        hsv(from: conversions.LAB): conversions.HSV;
        hwb(from: conversions.LAB): conversions.HWB;
        cmyk(from: conversions.LAB): conversions.CMYK;
        xyz(from: conversions.LAB): conversions.XYZ;
        lch(from: conversions.LAB): conversions.LCH;
        hex(from: conversions.LAB): conversions.HEX;
        keyword(from: conversions.LAB): conversions.KEYWORD;
        ansi16(from: conversions.LAB): conversions.ANSI16;
        ansi256(from: conversions.LAB): conversions.ANSI256;
        hcg(from: conversions.LAB): conversions.HCG;
        apple(from: conversions.LAB): conversions.APPLE;
        gray(from: conversions.LAB): conversions.GRAY;
    }
    interface lch {
        rgb(from: conversions.LCH): conversions.RGB;
        hsl(from: conversions.LCH): conversions.HSL;
        hsv(from: conversions.LCH): conversions.HSV;
        hwb(from: conversions.LCH): conversions.HWB;
        cmyk(from: conversions.LCH): conversions.CMYK;
        xyz(from: conversions.LCH): conversions.XYZ;
        lab(from: conversions.LCH): conversions.LAB;
        hex(from: conversions.LCH): conversions.HEX;
        keyword(from: conversions.LCH): conversions.KEYWORD;
        ansi16(from: conversions.LCH): conversions.ANSI16;
        ansi256(from: conversions.LCH): conversions.ANSI256;
        hcg(from: conversions.LCH): conversions.HCG;
        apple(from: conversions.LCH): conversions.APPLE;
        gray(from: conversions.LCH): conversions.GRAY;
    }
    interface hex {
        rgb(from: conversions.HEX): conversions.RGB;
        hsl(from: conversions.HEX): conversions.HSL;
        hsv(from: conversions.HEX): conversions.HSV;
        hwb(from: conversions.HEX): conversions.HWB;
        cmyk(from: conversions.HEX): conversions.CMYK;
        xyz(from: conversions.HEX): conversions.XYZ;
        lab(from: conversions.HEX): conversions.LAB;
        lch(from: conversions.HEX): conversions.LCH;
        keyword(from: conversions.HEX): conversions.KEYWORD;
        ansi16(from: conversions.HEX): conversions.ANSI16;
        ansi256(from: conversions.HEX): conversions.ANSI256;
        hcg(from: conversions.HEX): conversions.HCG;
        apple(from: conversions.HEX): conversions.APPLE;
        gray(from: conversions.HEX): conversions.GRAY;
    }
    interface keyword {
        rgb(from: conversions.KEYWORD): conversions.RGB;
        hsl(from: conversions.KEYWORD): conversions.HSL;
        hsv(from: conversions.KEYWORD): conversions.HSV;
        hwb(from: conversions.KEYWORD): conversions.HWB;
        cmyk(from: conversions.KEYWORD): conversions.CMYK;
        xyz(from: conversions.KEYWORD): conversions.XYZ;
        lab(from: conversions.KEYWORD): conversions.LAB;
        lch(from: conversions.KEYWORD): conversions.LCH;
        hex(from: conversions.KEYWORD): conversions.HEX;
        ansi16(from: conversions.KEYWORD): conversions.ANSI16;
        ansi256(from: conversions.KEYWORD): conversions.ANSI256;
        hcg(from: conversions.KEYWORD): conversions.HCG;
        apple(from: conversions.KEYWORD): conversions.APPLE;
        gray(from: conversions.KEYWORD): conversions.GRAY;
    }
    interface ansi16 {
        rgb(from: conversions.ANSI16): conversions.RGB;
        hsl(from: conversions.ANSI16): conversions.HSL;
        hsv(from: conversions.ANSI16): conversions.HSV;
        hwb(from: conversions.ANSI16): conversions.HWB;
        cmyk(from: conversions.ANSI16): conversions.CMYK;
        xyz(from: conversions.ANSI16): conversions.XYZ;
        lab(from: conversions.ANSI16): conversions.LAB;
        lch(from: conversions.ANSI16): conversions.LCH;
        hex(from: conversions.ANSI16): conversions.HEX;
        keyword(from: conversions.ANSI16): conversions.KEYWORD;
        ansi256(from: conversions.ANSI16): conversions.ANSI256;
        hcg(from: conversions.ANSI16): conversions.HCG;
        apple(from: conversions.ANSI16): conversions.APPLE;
        gray(from: conversions.ANSI16): conversions.GRAY;
    }
    interface ansi256 {
        rgb(from: conversions.ANSI256): conversions.RGB;
        hsl(from: conversions.ANSI256): conversions.HSL;
        hsv(from: conversions.ANSI256): conversions.HSV;
        hwb(from: conversions.ANSI256): conversions.HWB;
        cmyk(from: conversions.ANSI256): conversions.CMYK;
        xyz(from: conversions.ANSI256): conversions.XYZ;
        lab(from: conversions.ANSI256): conversions.LAB;
        lch(from: conversions.ANSI256): conversions.LCH;
        hex(from: conversions.ANSI256): conversions.HEX;
        keyword(from: conversions.ANSI256): conversions.KEYWORD;
        ansi16(from: conversions.ANSI256): conversions.ANSI16;
        hcg(from: conversions.ANSI256): conversions.HCG;
        apple(from: conversions.ANSI256): conversions.APPLE;
        gray(from: conversions.ANSI256): conversions.GRAY;
    }
    interface hcg {
        rgb(from: conversions.HCG): conversions.RGB;
        hsl(from: conversions.HCG): conversions.HSL;
        hsv(from: conversions.HCG): conversions.HSV;
        hwb(from: conversions.HCG): conversions.HWB;
        cmyk(from: conversions.HCG): conversions.CMYK;
        xyz(from: conversions.HCG): conversions.XYZ;
        lab(from: conversions.HCG): conversions.LAB;
        lch(from: conversions.HCG): conversions.LCH;
        hex(from: conversions.HCG): conversions.HEX;
        keyword(from: conversions.HCG): conversions.KEYWORD;
        ansi16(from: conversions.HCG): conversions.ANSI16;
        ansi256(from: conversions.HCG): conversions.ANSI256;
        apple(from: conversions.HCG): conversions.APPLE;
        gray(from: conversions.HCG): conversions.GRAY;
    }
    interface apple {
        rgb(from: conversions.APPLE): conversions.RGB;
        hsl(from: conversions.APPLE): conversions.HSL;
        hsv(from: conversions.APPLE): conversions.HSV;
        hwb(from: conversions.APPLE): conversions.HWB;
        cmyk(from: conversions.APPLE): conversions.CMYK;
        xyz(from: conversions.APPLE): conversions.XYZ;
        lab(from: conversions.APPLE): conversions.LAB;
        lch(from: conversions.APPLE): conversions.LCH;
        hex(from: conversions.APPLE): conversions.HEX;
        keyword(from: conversions.APPLE): conversions.KEYWORD;
        ansi16(from: conversions.APPLE): conversions.ANSI16;
        ansi256(from: conversions.APPLE): conversions.ANSI256;
        hcg(from: conversions.APPLE): conversions.HCG;
        gray(from: conversions.APPLE): conversions.GRAY;
    }
    interface gray {
        rgb(from: conversions.GRAY): conversions.RGB;
        hsl(from: conversions.GRAY): conversions.HSL;
        hsv(from: conversions.GRAY): conversions.HSV;
        hwb(from: conversions.GRAY): conversions.HWB;
        cmyk(from: conversions.GRAY): conversions.CMYK;
        xyz(from: conversions.GRAY): conversions.XYZ;
        lab(from: conversions.GRAY): conversions.LAB;
        lch(from: conversions.GRAY): conversions.LCH;
        hex(from: conversions.GRAY): conversions.HEX;
        keyword(from: conversions.GRAY): conversions.KEYWORD;
        ansi16(from: conversions.GRAY): conversions.ANSI16;
        ansi256(from: conversions.GRAY): conversions.ANSI256;
        hcg(from: conversions.GRAY): conversions.HCG;
        apple(from: conversions.GRAY): conversions.APPLE;
    }
}

declare function route(fromModel: 'rgb'): route.rgb;
declare function route(fromModel: 'hsl'): route.hsl;
declare function route(fromModel: 'hsv'): route.hsv;
declare function route(fromModel: 'hwb'): route.hwb;
declare function route(fromModel: 'cmyk'): route.cmyk;
declare function route(fromModel: 'xyz'): route.xyz;
declare function route(fromModel: 'lab'): route.lab;
declare function route(fromModel: 'lch'): route.lch;
declare function route(fromModel: 'hex'): route.hex;
declare function route(fromModel: 'keyword'): route.keyword;
declare function route(fromModel: 'ansi16'): route.ansi16;
declare function route(fromModel: 'ansi256'): route.ansi256;
declare function route(fromModel: 'hcg'): route.hcg;
declare function route(fromModel: 'apple'): route.apple;
declare function route(fromModel: 'gray'): route.gray;

export = route;
