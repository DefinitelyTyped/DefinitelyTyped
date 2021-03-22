// Type definitions for color-convert 2.0
// Project: https://github.com/qix-/color-convert#readme
// Definitions by: Junyoung Clare Jang <https://github.com/Airlun>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import conversions = require('./conversions');
import route = require('./route');

export const rgb: typeof conversions.rgb &
    route.rgb &
    {
        [F in keyof route.rgb]: {
            raw: route.rgb[F];
        };
    };

export const hsl: typeof conversions.hsl &
    route.hsl &
    {
        [F in keyof route.hsl]: {
            raw: route.hsl[F];
        };
    };

export const hsv: typeof conversions.hsv &
    route.hsv &
    {
        [F in keyof route.hsv]: {
            raw: route.hsv[F];
        };
    };

export const hwb: typeof conversions.hwb &
    route.hwb &
    {
        [F in keyof route.hwb]: {
            raw: route.hwb[F];
        };
    };

export const cmyk: typeof conversions.cmyk &
    route.cmyk &
    {
        [F in keyof route.cmyk]: {
            raw: route.cmyk[F];
        };
    };

export const xyz: typeof conversions.xyz &
    route.xyz &
    {
        [F in keyof route.xyz]: {
            raw: route.xyz[F];
        };
    };

export const lab: typeof conversions.lab &
    route.lab &
    {
        [F in keyof route.lab]: {
            raw: route.lab[F];
        };
    };

export const lch: typeof conversions.lch &
    route.lch &
    {
        [F in keyof route.lch]: {
            raw: route.lch[F];
        };
    };

export const hex: typeof conversions.hex &
    route.hex &
    {
        [F in keyof route.hex]: {
            raw: route.hex[F];
        };
    };

export const keyword: typeof conversions.keyword &
    route.keyword &
    {
        [F in keyof route.keyword]: {
            raw: route.keyword[F];
        };
    };

export const ansi16: typeof conversions.ansi16 &
    route.ansi16 &
    {
        [F in keyof route.ansi16]: {
            raw: route.ansi16[F];
        };
    };

export const ansi256: typeof conversions.ansi256 &
    route.ansi256 &
    {
        [F in keyof route.ansi256]: {
            raw: route.ansi256[F];
        };
    };

export const hcg: typeof conversions.hcg &
    route.hcg &
    {
        [F in keyof route.hcg]: {
            raw: route.hcg[F];
        };
    };

export const apple: typeof conversions.apple &
    route.apple &
    {
        [F in keyof route.apple]: {
            raw: route.apple[F];
        };
    };

export const gray: typeof conversions.gray &
    route.gray &
    {
        [F in keyof route.gray]: {
            raw: route.gray[F];
        };
    };
