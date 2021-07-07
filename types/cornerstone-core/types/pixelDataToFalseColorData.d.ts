import { Image } from "./Objects";
import { LookupTable } from "./Colors";

/**
 * @deprecated This function is superseded by the ability to set the Viewport parameters to include colormaps.
 *
 * Converts the image pixel data into a false color data
 *
 * @param image A Cornerstone Image Object
 * @param lookupTable A lookup table Object
 */
export default function pixelDataToFalseColorData(image: Image, lookupTable: LookupTable | number[]): void;
