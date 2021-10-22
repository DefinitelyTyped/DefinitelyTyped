export interface FontParameters {
    style: string;
    variant: string;
    weight: string;
    size: string;
    lineHeight: string;
    family: string;
    families: string[];
}
/**
 * The CSS class that we'll give the DOM elements that are collapsed, i.e.
 * to those elements which usually can be expanded.
 */
export const CLASS_COLLAPSED: string;
/**
 * The CSS class for controls.
 */
export const CLASS_CONTROL: string;
/**
 * The CSS class for hidden feature.
 */
export const CLASS_HIDDEN: string;
/**
 * The CSS class that we'll give the DOM elements to have them selectable.
 */
export const CLASS_SELECTABLE: string;
/**
 * The CSS class that we'll give the DOM elements to have them unselectable.
 */
export const CLASS_UNSELECTABLE: string;
/**
 * The CSS class for unsupported feature.
 */
export const CLASS_UNSUPPORTED: string;
/**
 * Get the list of font families from a font spec.  Note that this doesn't work
 * for font families that have commas in them.
 */
export function getFontParameters(fontSpec: string): FontParameters;
