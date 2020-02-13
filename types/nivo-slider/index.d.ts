// Type definitions for Nivo Slider 3.2
// Project: https://github.com/Codeinwp/Nivo-Slider-jQuery, https://github.com/gilbitron/nivo-slider
// Definitions by: Anderson Friaça <https://github.com/AndersonFriaca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

export type EffectType = 'sliceDown' | 'sliceDownLeft' | 'sliceUp' | 'sliceUpLeft' | 'sliceUpDown' | 'sliceUpDownLeft' |
    'fold' | 'fade' | 'random' | 'slideInRight' | 'slideInLeft' | 'boxRandom' | 'boxRain' | 'boxRainReverse' |
    'boxRainGrow' | 'boxRainGrowReverse';

export interface Options {
    effect?: EffectType;
    slices?: number;
    boxCols?: number;
    boxRows?: number;
    animSpeed?: number;
    pauseTime?: number;
    startSlide?: number;
    directionNav?: boolean;
    controlNav?: boolean;
    controlNavThumbs?: boolean;
    pauseOnHover?: boolean;
    manualAdvance?: boolean;
    prevText?: string;
    nextText?: string;
    randomStart?: boolean;
    beforeChange?: () => void;
    afterChange?: () => void;
    slideshowEnd?: () => void;
    lastSlide?: () => void;
    afterLoad?: () => void;
}
declare global {
    interface JQuery {
        nivoSlider(options?: Options): JQuery;
    }
}
