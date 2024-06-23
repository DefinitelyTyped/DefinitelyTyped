import { Mode } from "./common";
import { ColorToSameColorMapper } from "./map";

type Filter = (amt?: number, mode?: Mode) => ColorToSameColorMapper;

declare const filterBrightness: Filter;
declare const filterContrast: Filter;
declare const filterSepia: Filter;
declare const filterSaturate: Filter;
declare const filterGrayscale: Filter;
declare const filterInvert: Filter;
declare const filterHueRotate: Filter;

export {
    filterBrightness,
    filterContrast,
    filterGrayscale,
    filterHueRotate,
    filterInvert,
    filterSaturate,
    filterSepia,
};
