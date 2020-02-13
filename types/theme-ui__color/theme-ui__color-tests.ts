import {
    darken,
    lighten,
    rotate,
    hue,
    saturation,
    lightness,
    desaturate,
    saturate,
    shade,
    tint,
    transparentize,
    alpha,
    mix,
    complement,
    invert,
    grayscale,
} from '@theme-ui/color';

darken(0.2, '#000');
lighten(0.2, '#000');
rotate(0.2, '#000');
hue(0.2, '#000');
saturation(0.2, '#000');
lightness(0.2, '#000');
desaturate(0.1, '#000');
saturate(0.1, '#000');
shade('20%', '#000');
tint('20%', '#000');
transparentize(0.2, '#000');
alpha('#000', 0.2);
mix(0.25, '#000', '#FFF');
complement('#000');
complement('#000');
invert('#000');
grayscale('#000');
