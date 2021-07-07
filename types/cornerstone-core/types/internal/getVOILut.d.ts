/**
 * Retrieve a VOI LUT mapping function given the current windowing settings
 * and the VOI LUT for the image
 *
 * @param windowWidth Window Width
 * @param windowCenter Window Center
 * @param [voiLUT] Volume of Interest Lookup Table Object
 *
 * @return VOI LUT mapping function
 */
export default function _default(windowWidth: number, windowCenter: number, voiLUT?: any): VOILUTFunction;
/**
 * Volume of Interest Lookup Table Function
 */
export type VOILUTFunction = (modalityLutValue: number) => number;
