import convert = require("color-convert");

convert.rgb.hsv([1, 2, 3]);
convert.rgb.hsv(1, 2, 3);
convert.rgb.hsv.raw([1, 2, 3]);
convert.rgb.hsv.raw(1, 2, 3);
convert.rgb.hsv([1, 2, 3]);
convert.rgb.hsv(1, 2, 3);

convert.rgb.hex(123, 45, 67);
convert.rgb.hex([123, 45, 67]);

convert.hex.lab("DEADBF");
convert.hex.lab.raw("DEADBF");

convert.rgb.cmyk(167, 255, 4);
convert.rgb.cmyk.raw(167, 255, 4);

convert.rgb.hsl([140, 200, 100]);
convert.rgb.hsv([140, 200, 100]);
convert.rgb.hwb([140, 200, 100]);
convert.rgb.cmyk([140, 200, 100]);
convert.rgb.keyword([255, 228, 196]);
convert.rgb.xyz([92, 191, 84]);
convert.rgb.lab([92, 191, 84]);
convert.rgb.lch([92, 191, 84]);
convert.rgb.ansi16([92, 191, 84]);
convert.rgb.ansi256([92, 191, 84]);
convert.rgb.hex([92, 191, 84]);
convert.rgb.hcg([140, 200, 100]);
convert.rgb.apple([255, 127, 0]);

convert.hsl.rgb([96, 48, 59]);
convert.hsl.hsv([96, 48, 59]);
convert.hsl.hwb([96, 48, 59]);
convert.hsl.cmyk([96, 48, 59]);
convert.hsl.keyword([240, 100, 50]);
convert.hsl.ansi16([240, 100, 50]);
convert.hsl.ansi256([240, 100, 50]);
convert.hsl.hex([240, 100, 50]);
convert.hsl.hcg([96, 48, 59]);

convert.hsv.rgb([96, 50, 78]);
convert.hsv.hsl([96, 50, 78]);
convert.hsv.hsl([0, 0, 0]);
convert.hsv.hwb([96, 50, 78]);
convert.hsv.cmyk([96, 50, 78]);
convert.hsv.keyword([240, 100, 100]);
convert.hsv.ansi16([240, 100, 100]);
convert.hsv.ansi256([240, 100, 100]);
convert.hsv.hex([251, 80, 42]);
convert.hsv.hcg([96, 50, 78]);

convert.cmyk.rgb([30, 0, 50, 22]);
convert.cmyk.hsl([30, 0, 50, 22]);
convert.cmyk.hsv([30, 0, 50, 22]);
convert.cmyk.hwb([30, 0, 50, 22]);
convert.cmyk.keyword([100, 100, 0, 0]);
convert.cmyk.ansi16([30, 0, 50, 22]);
convert.cmyk.ansi256([30, 0, 50, 22]);
convert.cmyk.hex([30, 0, 50, 22]);

convert.keyword.rgb("blue");
convert.keyword.hsl("blue");
convert.keyword.hsv("blue");
convert.keyword.hwb("blue");
convert.keyword.cmyk("blue");
convert.keyword.lab("blue");
convert.keyword.xyz("blue");
convert.keyword.ansi16("purple");
convert.keyword.ansi256("purple");
convert.keyword.hex("blue");

convert.xyz.rgb([25, 40, 15]);
convert.xyz.rgb([50, 100, 100]);
convert.xyz.lab([25, 40, 15]);
convert.xyz.lch([25, 40, 15]);

convert.lab.xyz([69, -48, 44]);
convert.lab.rgb([75, 20, -30]);
convert.lab.lch([69, -48, 44]);

convert.lch.lab([69, 65, 137]);
convert.lch.xyz([69, 65, 137]);
convert.lch.rgb([69, 65, 137]);

convert.ansi16.rgb(103);
convert.ansi256.rgb(175);

convert.hex.rgb("ABCDEF");
convert.hex.rgb("AABBCC");
convert.hex.rgb("ABC");

convert.hcg.rgb([96, 39, 64]);
convert.hcg.hsv([96, 39, 64]);
convert.hcg.hsl([96, 39, 64]);
convert.rgb.hcg.raw([250, 0, 255]);
convert.hsl.rgb.raw([96, 48, 59]);
convert.rgb.hsl.raw([140, 200, 100]);

convert.hsv.rgb.raw([96, 50, 78]);
convert.rgb.hsv.raw([140, 200, 100]);

convert.hwb.rgb.raw([96, 39, 22]);
convert.rgb.hwb.raw([140, 200, 100]);

convert.cmyk.rgb.raw([30, 0, 50, 22]);
convert.rgb.cmyk.raw([140, 200, 100]);

convert.keyword.rgb.raw("blue");
convert.rgb.keyword.raw([255, 228, 196]);

convert.hsv.hsl.raw([96, 50, 78]);
convert.hsv.hsl.raw([302, 32, 55]);
convert.hsv.hsl.raw([267, 19, 89]);
convert.hsv.hsl.raw([267, 91, 95]);
convert.hsv.hsl.raw([267, 91, 12]);
convert.hsv.hsl.raw([180, 50, 0]);

convert.hsl.hsv.raw([96, 48, 59]);
convert.hsl.hsv.raw([120, 54, 61]);
convert.hsl.hsv.raw([27, 51, 43]);
convert.hsl.hsv.raw([241, 17, 79]);
convert.hsl.hsv.raw([120, 50, 0]);

convert.xyz.rgb.raw([25, 40, 15]);
convert.rgb.xyz.raw([92, 191, 84]);

convert.rgb.lab.raw([92, 191, 84]);
convert.hwb.rgb([0, 0, 0]);
convert.hwb.rgb([0, 20, 40]);
convert.hwb.rgb([0, 40, 40]);
convert.hwb.rgb([0, 40, 20]);

convert.hwb.rgb([120, 0, 0]);
convert.hwb.rgb([120, 20, 40]);
convert.hwb.rgb([120, 40, 40]);
convert.hwb.rgb([120, 40, 20]);

convert.hwb.rgb([240, 0, 0]);
convert.hwb.rgb([240, 20, 40]);
convert.hwb.rgb([240, 40, 40]);
convert.hwb.rgb([240, 40, 20]);

const val: [number, number, number] = [0, 0, 0];

convert.hsl.hsv(val);
convert.hsl.rgb(val);
convert.hsl.hwb(val);
convert.hsl.cmyk(val);
convert.hsl.hex(val);

convert.rgb.keyword(255, 255, 0);
convert.rgb.keyword(255, 255, 1);
convert.rgb.keyword(250, 254, 1);
convert.gray.rgb([0]);
convert.gray.rgb([50]);
convert.gray.rgb([100]);
convert.gray.hsl([50]);
convert.gray.hsv([50]);
convert.gray.hwb([50]);
convert.gray.cmyk([50]);
convert.gray.lab([50]);
convert.gray.hex([50]);
convert.gray.hex([100]);
convert.gray.hex([0]);

convert.rgb.gray([0, 0, 0]);
convert.rgb.gray([128, 128, 128]);
convert.rgb.gray([255, 255, 255]);
convert.rgb.gray([0, 128, 255]);
