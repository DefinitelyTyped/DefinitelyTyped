import { Color, formatCss, formatRgb, modeP3, Rgb, useMode } from '../fn';

declare const color: Rgb;
const str: string = formatRgb(color);

let p3 = useMode(modeP3);

declare const color2: Color;
const r2 = p3(color2);
const str2 = formatCss(r2);

declare const color3: string;
const r3 = p3(color3);
const tr3 = r3 === undefined ? formatCss(r3) : formatCss(r3);

declare const color4: string;
const r4 = p3(color4);
const tr4 = formatCss(r4);

declare const color5: Color;
const r5: string = formatRgb(color);
