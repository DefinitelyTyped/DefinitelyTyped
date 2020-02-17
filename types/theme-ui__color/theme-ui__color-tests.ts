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

darken('#000', 0.2);
darken('#000', '0.2');
lighten('#000', 0.2);
lighten('#000', '0.2');
rotate('#000', 0.2);
rotate('#000', '0.2');

hue('#000', 2);
hue('#000', '2');

saturation('#000', 0.2);
saturation('#000', '0.2');
lightness('#000', 0.2);
lightness('#000', '0.2');

desaturate('#000', 0.1);
desaturate('#000', '0.1');
saturate('#000', 0.1);
saturate('#000', '0.1');

shade('#000', 0.25);
shade('#000', '0.25');
tint('#000', 0.25);
tint('#000', '0.25');

transparentize('#000', 0.2);
transparentize('#000', '0.2');
alpha('#000', 0.2);
alpha('#000', '0.2');

mix('#000', '#FFF');
mix('#000', '#FFF', 0.25);
mix('#000', '#FFF', '0.25');

complement('#000');
invert('#000');

grayscale('#000', 0.25);
grayscale('#000', '0.25');
