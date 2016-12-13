// Type definitions for emojione
// Project: https://github.com/Ranks/emojione
// Definitions by: Danilo Bargen <https://github.com/dbrgn/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var emojione: {
    sprites: boolean,
    imagePathPNG: string,
    imagePathSVG: string,
    imagePathSVGSprites: string,
    imageType: 'png' | 'svg',
    unicodeAlt: boolean,
    ascii: boolean,
    unicodeRegexp: string,
    cacheBustParam: string,
    toShort: (str: string) => string,
    toImage: (str: string) => string,
    shortnameToImage: (str: string) => string,
    unicodeToImage: (str: string) => string,
};
