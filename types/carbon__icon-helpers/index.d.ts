// Type definitions for @carbon/icon-helpers 10.7
// Project: https://github.com/carbon-design-system/carbon/blob/master/packages/icon-helpers
// Definitions by: Eric Liu <https://github.com/metonym>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

export const defaultAttributes: {
    focusable: string;
    preserveAspectRatio: string;
};

export function getAttributes({
    width,
    height,
    viewBox,
    ...attributes
}?: {
    width?: number;
    height?: number;
    viewBox?: string;
    tabindex?: number | string;
    title?: string;
    role?: string;
}): {
    width: number;
    height: number;
    viewBox: string;
    title?: string;
    role?: string;
    focusable: string;
    preserveAspectRatio: string;
};

export function toString(descriptor: any): string;
export function formatAttributes(attrs: any): string;
export function toSVG(descriptor: any): SVGSVGElement;
