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
    width?: number | undefined;
    height?: number | undefined;
    viewBox?: string | undefined;
    tabindex?: number | string | undefined;
    title?: string | undefined;
    role?: string | undefined;
}): {
    width: number;
    height: number;
    viewBox: string;
    title?: string | undefined;
    role?: string | undefined;
    focusable: string;
    preserveAspectRatio: string;
};

export function toString(descriptor: any): string;
export function formatAttributes(attrs: any): string;
export function toSVG(descriptor: any): SVGSVGElement;
