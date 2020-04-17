// Type definitions for @carbon/icon-helpers 10.6
// Project: https://github.com/carbon-design-system/carbon/blob/master/packages/icon-helpers
// Definitions by: Eric Liu <https://github.com/metonym>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

export interface Path {
    elem: 'path';
    attrs: { d: string };
}

export interface Circle {
    elem: 'circle';
    attrs: { cx: string; cy: string; r: string };
}

export interface Rect {
    elem: 'rect';
    attrs: { width: string; height: string; x: string; y: string; rx: string };
}

export type IconSize = 16 | 20 | 24 | 32;

export type IconContent = Array<Path | Circle | Rect>;

export interface IconAttributes extends Record<string, any> {
    'aria-hidden'?: boolean;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    class?: string;
    focusable?: 'true' | 'false';
    height: IconSize;
    id?: string;
    preserveAspectRatio?: string | 'xMidYMid meet';
    role?: 'img';
    style?: string;
    tabindex?: string;
    title?: string;
    viewBox?: string;
    width: IconSize;
}

export interface Descriptor {
    elem?: string | 'svg';
    attrs?: IconAttributes | {};
    content?: IconContent | [];
}

export const defaultAttributes: {
    focusable: 'false';
    preserveAspectRatio: 'xMidYMid meet';
};
export function getAttributes(attributes: IconAttributes): IconAttributes;
export function formatAttributes(attributes: IconAttributes): string;
export function toString(descriptor?: Descriptor): string;
export function toSvg(descriptor?: Descriptor): SVGSVGElement;
