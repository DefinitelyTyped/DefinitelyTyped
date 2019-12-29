export function collapse(element: Element, options?: {
    delay?: string;
    duration?: string;
    timingFunction?: string;
    persist?: string;
    direction?: string;
    startMaxHeight?: string;
    endMaxHeight?: string;
    startMaxWidth?: string;
    endMaxWidth?: string;
}): Promise<boolean>;
export function expand(element: Element, options?: {
    delay?: string;
    duration?: string;
    timingFunction?: string;
    persist?: string;
    direction?: string;
    startMaxHeight?: string;
    endMaxHeight?: string;
    startMaxWidth?: string;
    endMaxWidth?: string;
}): Promise<boolean>;
export function fadeIn(element: Element, options?: {
    delay?: string;
    duration?: string;
    timingFunction?: string;
    persist?: string;
    startOpacity?: number;
    endOpacity?: number;
}): Promise<boolean>;
export function fadeOut(element: Element, options?: {
    delay?: string;
    duration?: string;
    timingFunction?: string;
    persist?: string;
    startOpacity?: number;
    endOpacity?: number;
}): Promise<boolean>;
export function flipIn(element: Element, options?: {
    delay?: string;
    duration?: string;
    timingFunction?: string;
    persist?: string;
    axis?: string;
    startAngle?: string;
    endAngle?: string;
    backfaceVisibility?: string;
    perspective?: string;
    transformOrigin?: string;
    flipTarget?: string;
}): Promise<boolean>;
export function flipOut(element: Element, options?: {
    delay?: string;
    duration?: string;
    timingFunction?: string;
    persist?: string;
    axis?: string;
    startAngle?: string;
    endAngle?: string;
    backfaceVisibility?: string;
    perspective?: string;
    transformOrigin?: string;
    flipTarget?: string;
}): Promise<boolean>;
export function ripple(element: Element, options?: {
    delay?: string;
    duration?: string;
    timingFunction?: string;
    offsetX?: string;
    offsetY?: string;
    color?: string;
    diameter?: string;
    startOpacity?: number;
    endOpacity?: number;
}): Promise<boolean>;
export function slideIn(element: Element, options?: {
    delay?: string;
    duration?: string;
    timingFunction?: string;
    persist?: string;
    direction?: string;
    offsetX?: string;
    offsetY?: string;
}): Promise<boolean>;
export function slideOut(element: Element, options?: {
    delay?: string;
    duration?: string;
    timingFunction?: string;
    persist?: string;
    direction?: string;
    offsetX?: string;
    offsetY?: string;
}): Promise<boolean>;
export function zoomIn(element: Element, options?: {
    delay?: string;
    duration?: string;
    timingFunction?: string;
    persist?: string;
    axis?: string;
    transformOrigin?: string;
}): Promise<boolean>;
export function zoomOut(element: Element, options?: {
    delay?: string;
    duration?: string;
    timingFunction?: string;
    persist?: string;
    axis?: string;
    transformOrigin?: string;
}): Promise<boolean>;
// tslint:disable-next-line interface-over-type-literal
export type AnimationMethods = 'collapse' | 'expand' | 'fadeIn' | 'fadeOut' | 'flipIn' | 'flipOut' | 'ripple' | 'slideIn' | 'slideOut' | 'zoomIn' | 'zoomOut';
