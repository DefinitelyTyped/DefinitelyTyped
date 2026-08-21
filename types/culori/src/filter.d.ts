import { Mode } from "./common.js";
import { ColorToSameColorMapper } from "./map.js";

declare function filterBrightness(amount?: number, mode?: Mode): ColorToSameColorMapper;
declare function filterContrast(amount?: number, mode?: Mode): ColorToSameColorMapper;
declare function filterSepia(amount?: number, mode?: Mode): ColorToSameColorMapper;
declare function filterSaturate(amount?: number, mode?: Mode): ColorToSameColorMapper;
declare function filterGrayscale(amount?: number, mode?: Mode): ColorToSameColorMapper;
declare function filterInvert(amount?: number, mode?: Mode): ColorToSameColorMapper;
declare function filterHueRotate(degress?: number, mode?: Mode): ColorToSameColorMapper;

export {
    filterBrightness,
    filterContrast,
    filterGrayscale,
    filterHueRotate,
    filterInvert,
    filterSaturate,
    filterSepia,
};
