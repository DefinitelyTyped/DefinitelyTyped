declare namespace oj {  
  class Color {
    static ALICEBLUE: oj.Color;
    static ANTIQUEWHITE: oj.Color;
    static AQUA: oj.Color;
    static AQUAMARINE: oj.Color;
    static AZURE: oj.Color;
    static BEIGE: oj.Color;
    static BISQUE: oj.Color;
    static BLACK: oj.Color;
    static BLANCHEDALMOND: oj.Color;
    static BLUE: oj.Color;
    static BLUEVIOLET: oj.Color;
    static BROWN: oj.Color;
    static BURLYWOOD: oj.Color;
    static CADETBLUE: oj.Color;
    static CHARTREUSE: oj.Color;
    static CHOCOLATE: oj.Color;
    static CORAL: oj.Color;
    static CORNFLOWERBLUE: oj.Color;
    static CORNSILK: oj.Color;
    static CRIMSON: oj.Color;
    static CYAN: oj.Color;
    static DARKBLUE: oj.Color;
    static DARKCYAN: oj.Color;
    static DARKGOLDENROD: oj.Color;
    static DARKGRAY: oj.Color;
    static DARKGREEN: oj.Color;
    static DARKGREY: oj.Color;
    static DARKKHAKI: oj.Color;
    static DARKMAGENTA: oj.Color;
    static DARKOLIVEGREEN: oj.Color;
    static DARKORANGE: oj.Color;
    static DARKORCHID: oj.Color;
    static DARKRED: oj.Color;
    static DARKSALMON: oj.Color;
    static DARKSEAGREEN: oj.Color;
    static DARKSLATEBLUE: oj.Color;
    static DARKSLATEGRAY: oj.Color;
    static DARKSLATEGREY: oj.Color;
    static DARKTURQUOISE: oj.Color;
    static DARKVIOLET: oj.Color;
    static DEEPPINK: oj.Color;
    static DEEPSKYBLUE: oj.Color;
    static DIMGRAY: oj.Color;
    static DIMGREY: oj.Color;
    static DODGERBLUE: oj.Color;
    static FIREBRICK: oj.Color;
    static FLORALWHITE: oj.Color;
    static FORESTGREEN: oj.Color;
    static FUCHSIA: oj.Color;
    static GAINSBORO: oj.Color;
    static GHOSTWHITE: oj.Color;
    static GOLD: oj.Color;
    static GOLDENROD: oj.Color;
    static GRAY: oj.Color;
    static GREEN: oj.Color;
    static GREENYELLOW: oj.Color;
    static GREY: oj.Color;
    static HONEYDEW: oj.Color;
    static HOTPINK: oj.Color;
    static INDIANRED: oj.Color;
    static INDIGO: oj.Color;
    static IVORY: oj.Color;
    static KHAKI: oj.Color;
    static LAVENDER: oj.Color;
    static LAVENDERBLUSH: oj.Color;
    static LAWNGREEN: oj.Color;
    static LEMONCHIFFON: oj.Color;
    static LIGHTBLUE: oj.Color;
    static LIGHTCORAL: oj.Color;
    static LIGHTCYAN: oj.Color;
    static LIGHTGOLDENRODYELLOW: oj.Color;
    static LIGHTGRAY: oj.Color;
    static LIGHTGREEN: oj.Color;
    static LIGHTGREY: oj.Color;
    static LIGHTPINK: oj.Color;
    static LIGHTSALMON: oj.Color;
    static LIGHTSEAGREEN: oj.Color;
    static LIGHTSKYBLUE: oj.Color;
    static LIGHTSLATEGRAY: oj.Color;
    static LIGHTSLATEGREY: oj.Color;
    static LIGHTSTEELBLUE: oj.Color;
    static LIGHTYELLOW: oj.Color;
    static LIME: oj.Color;
    static LIMEGREEN: oj.Color;
    static LINEN: oj.Color;
    static MAGENTA: oj.Color;
    static MAROON: oj.Color;
    static MEDIUMAQUAMARINE: oj.Color;
    static MEDIUMBLUE: oj.Color;
    static MEDIUMORCHID: oj.Color;
    static MEDIUMPURPLE: oj.Color;
    static MEDIUMSEAGREEN: oj.Color;
    static MEDIUMSLATEBLUE: oj.Color;
    static MEDIUMSPRINGGREEN: oj.Color;
    static MEDIUMTURQUOISE: oj.Color;
    static MEDIUMVIOLETRED: oj.Color;
    static MIDNIGHTBLUE: oj.Color;
    static MINTCREAM: oj.Color;
    static MISTYROSE: oj.Color;
    static MOCCASIN: oj.Color;
    static NAVAJOWHITE: oj.Color;
    static NAVY: oj.Color;
    static OLDLACE: oj.Color;
    static OLIVE: oj.Color;
    static OLIVEDRAB: oj.Color;
    static ORANGE: oj.Color;
    static ORANGERED: oj.Color;
    static ORCHID: oj.Color;
    static PALEGOLDENROD: oj.Color;
    static PALEGREEN: oj.Color;
    static PALETURQUOISE: oj.Color;
    static PALEVIOLETRED: oj.Color;
    static PAPAYAWHIP: oj.Color;
    static PEACHPUFF: oj.Color;
    static PERU: oj.Color;
    static PINK: oj.Color;
    static PLUM: oj.Color;
    static POWDERBLUE: oj.Color;
    static PURPLE: oj.Color;
    static REBECCAPURPLE: oj.Color;
    static RED: oj.Color;
    static ROSYBROWN: oj.Color;
    static ROYALBLUE: oj.Color;
    static SADDLEBROWN: oj.Color;
    static SALMON: oj.Color;
    static SANDYBROWN: oj.Color;
    static SEAGREEN: oj.Color;
    static SEASHELL: oj.Color;
    static SIENNA: oj.Color;
    static SILVER: oj.Color;
    static SKYBLUE: oj.Color;
    static SLATEBLUE: oj.Color;
    static SLATEGRAY: oj.Color;
    static SLATEGREY: oj.Color;
    static SNOW: oj.Color;
    static SPRINGGREEN: oj.Color;
    static STEELBLUE: oj.Color;
    static TAN: oj.Color;
    static TEAL: oj.Color;
    static THISTLE: oj.Color;
    static TOMATO: oj.Color;
    static TRANSPARENT: oj.Color;
    static TURQUOISE: oj.Color;
    static VIOLET: oj.Color;
    static WHEAT: oj.Color;
    static WHITE: oj.Color;
    static WHITESMOKE: oj.Color;
    static YELLOW: oj.Color;
    static YELLOWGREEN: oj.Color;
    constructor(color: string|oj.Color.RGBA|oj.Color.HSLA|oj.Color.HSVA);
    getAlpha(): number;
    getBlue(doNotRound?: boolean): number;
    getGreen(doNotRound?: boolean): number;
    getRed(doNotRound?: boolean): number;
    isEqual(color: oj.Color): boolean;
    toString(): string;
  }
  namespace Color {
    type HSLA =
    {
      h: number, s: number, l: number, a?: number
    }
  }
  namespace Color {
    type HSVA =
    {
      h: number, s: number, v: number, a?: number
    }
  }
  namespace Color {
    type RGBA =
    {
      r: number, g: number, b: number, a?: number
    }
  }

}
