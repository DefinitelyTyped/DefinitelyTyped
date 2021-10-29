import rca = require('rainbow-colors-array');

const colorsHex = rca(10, "hex");

colorsHex[0].hex;

const colorsHsl = rca(10, "hsl");

colorsHsl[0].h;
colorsHsl[0].s;
colorsHsl[0].l;

const colorsRgb = rca(10, "rgb");

colorsRgb[0].r;
colorsRgb[0].g;
colorsRgb[0].b;

rca(10, "hex", true);
rca(10, "rgb", true);
rca(10, "hsl", true);

rca(10, "hex", false);
rca(10, "rgb", false);
rca(10, "hsl", false);
