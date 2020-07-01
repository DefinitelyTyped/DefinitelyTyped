import Color = require('color');

const color: Color<"white"> = new Color("white");
const colorOther: Color<"black"> = new Color("black");
const colorRGB: Color = new Color({ r: 0, g: 0, b: 0 }, "rgb");
const colorInt: Color = new Color(0x000000);
const colorWithoutNew: Color = Color(0x000000);
const colorByStaticMethod: Color = Color.rgb({ r: 0, g: 0, b: 0 });

const hex: string = color.hex();
const percent: string = color.percentString();
const keyword: string = color.keyword();
const alpha: number = color.alpha();
const red: number = color.red();
const green: number = color.green();
const blue: number = color.blue();
const hue: number = color.hue();
const saturationl: number = color.saturationl();
const lightness: number = color.lightness();
const saturationv: number = color.saturationv();
const value: number = color.value();
const cyan: number = color.cyan();
const magenta: number = color.magenta();
const yellow: number = color.yellow();
const black: number = color.black();
const luminosity: number = color.luminosity();
const contrast: number = color.contrast(colorOther);
const isDark: boolean = color.isDark();
const isLight: boolean = color.isLight();
const level: string = color.level(colorOther);

const x: number = color.x();
const y: number = color.y();
const z: number = color.z();
const l: number = color.l();
const a: number = color.a();
const b: number = color.b();
const rgbNumber: number = color.rgbNumber();

const chain: Color = color
    .alpha(0)
    .red(0)
    .green(0)
    .blue(0)
    .hue(0)
    .saturationl(0)
    .lightness(0)
    .saturationv(0)
    .value(0)
    .cyan(0)
    .magenta(0)
    .yellow(0)
    .black(0)
    .negate()
    .lighten(0)
    .darken(0)
    .saturate(0)
    .desaturate(0)
    .grayscale()
    .whiten(0)
    .blacken(0)
    .opaquer(0)
    .rotate(0)
    .mix(colorOther, 0)
    .hsl();
