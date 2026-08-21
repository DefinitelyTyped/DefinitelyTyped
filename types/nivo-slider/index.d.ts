/// <reference types="jquery" />

export type EffectType =
    | "sliceDown"
    | "sliceDownLeft"
    | "sliceUp"
    | "sliceUpLeft"
    | "sliceUpDown"
    | "sliceUpDownLeft"
    | "fold"
    | "fade"
    | "random"
    | "slideInRight"
    | "slideInLeft"
    | "boxRandom"
    | "boxRain"
    | "boxRainReverse"
    | "boxRainGrow"
    | "boxRainGrowReverse";

export interface Options {
    effect?: EffectType | undefined;
    slices?: number | undefined;
    boxCols?: number | undefined;
    boxRows?: number | undefined;
    animSpeed?: number | undefined;
    pauseTime?: number | undefined;
    startSlide?: number | undefined;
    directionNav?: boolean | undefined;
    controlNav?: boolean | undefined;
    controlNavThumbs?: boolean | undefined;
    pauseOnHover?: boolean | undefined;
    manualAdvance?: boolean | undefined;
    prevText?: string | undefined;
    nextText?: string | undefined;
    randomStart?: boolean | undefined;
    beforeChange?: (() => void) | undefined;
    afterChange?: (() => void) | undefined;
    slideshowEnd?: (() => void) | undefined;
    lastSlide?: (() => void) | undefined;
    afterLoad?: (() => void) | undefined;
}
declare global {
    interface JQuery {
        nivoSlider(options?: Options): JQuery;
    }
}
