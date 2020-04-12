export interface FontParameters {
    style: string;
    variant: string;
    weight: string;
    size: string;
    lineHeight: string;
    family: string;
    families: string[];
}
export const CLASS_COLLAPSED: string;
export const CLASS_CONTROL: string;
export const CLASS_HIDDEN: string;
export const CLASS_SELECTABLE: string;
export const CLASS_UNSELECTABLE: string;
export const CLASS_UNSUPPORTED: string;
export function getFontParameters(fontSpec: string): FontParameters;
