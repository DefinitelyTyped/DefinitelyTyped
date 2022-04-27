// Type definitions for @elastic/maki 6.3
// Project: https://github.com/elastic/maki
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * A pixel-aligned point of interest icon set made for cartographers
 */
declare namespace maki {
    type IconName = string;

    type SvgContent = string;

    interface Sprite {
        height: number;
        pixelRation: number;
        sdf: boolean;
        width: number;
        x: number;
        y: number;
    }

    interface SpriteSheet {
        [sheet: string]: Sprite;
    }
}

declare const maki: {
    /** bject that can be used to organize and display icons in your app or website */
    layouts: {
        all: maki.IconName[];
    };

    svgArray: maki.SvgContent[];

    spritesheet: {
        1: maki.SpriteSheet;
        2: maki.SpriteSheet;
        4: maki.SpriteSheet;
    };
};

export = maki;
