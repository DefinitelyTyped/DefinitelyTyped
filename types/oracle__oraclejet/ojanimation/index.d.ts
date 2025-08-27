export function collapse(element: Element, options?: {
    delay?: string | undefined;
    duration?: string | undefined;
    timingFunction?: string | undefined;
    persist?: string | undefined;
    direction?: string | undefined;
    startMaxHeight?: string | undefined;
    endMaxHeight?: string | undefined;
    startMaxWidth?: string | undefined;
    endMaxWidth?: string | undefined;
}): Promise<boolean>;
export function expand(element: Element, options?: {
    delay?: string | undefined;
    duration?: string | undefined;
    timingFunction?: string | undefined;
    persist?: string | undefined;
    direction?: string | undefined;
    startMaxHeight?: string | undefined;
    endMaxHeight?: string | undefined;
    startMaxWidth?: string | undefined;
    endMaxWidth?: string | undefined;
}): Promise<boolean>;
export function fadeIn(element: Element, options?: {
    delay?: string | undefined;
    duration?: string | undefined;
    timingFunction?: string | undefined;
    persist?: string | undefined;
    startOpacity?: number | undefined;
    endOpacity?: number | undefined;
}): Promise<boolean>;
export function fadeOut(element: Element, options?: {
    delay?: string | undefined;
    duration?: string | undefined;
    timingFunction?: string | undefined;
    persist?: string | undefined;
    startOpacity?: number | undefined;
    endOpacity?: number | undefined;
}): Promise<boolean>;
export function flipIn(element: Element, options?: {
    delay?: string | undefined;
    duration?: string | undefined;
    timingFunction?: string | undefined;
    persist?: string | undefined;
    axis?: string | undefined;
    startAngle?: string | undefined;
    endAngle?: string | undefined;
    backfaceVisibility?: string | undefined;
    perspective?: string | undefined;
    transformOrigin?: string | undefined;
    flipTarget?: string | undefined;
}): Promise<boolean>;
export function flipOut(element: Element, options?: {
    delay?: string | undefined;
    duration?: string | undefined;
    timingFunction?: string | undefined;
    persist?: string | undefined;
    axis?: string | undefined;
    startAngle?: string | undefined;
    endAngle?: string | undefined;
    backfaceVisibility?: string | undefined;
    perspective?: string | undefined;
    transformOrigin?: string | undefined;
    flipTarget?: string | undefined;
}): Promise<boolean>;
export function ripple(element: Element, options?: {
    delay?: string | undefined;
    duration?: string | undefined;
    timingFunction?: string | undefined;
    offsetX?: string | undefined;
    offsetY?: string | undefined;
    color?: string | undefined;
    diameter?: string | undefined;
    startOpacity?: number | undefined;
    endOpacity?: number | undefined;
}): Promise<boolean>;
export function slideIn(element: Element, options?: {
    delay?: string | undefined;
    duration?: string | undefined;
    timingFunction?: string | undefined;
    persist?: string | undefined;
    direction?: string | undefined;
    offsetX?: string | undefined;
    offsetY?: string | undefined;
}): Promise<boolean>;
export function slideOut(element: Element, options?: {
    delay?: string | undefined;
    duration?: string | undefined;
    timingFunction?: string | undefined;
    persist?: string | undefined;
    direction?: string | undefined;
    offsetX?: string | undefined;
    offsetY?: string | undefined;
}): Promise<boolean>;
export function zoomIn(element: Element, options?: {
    delay?: string | undefined;
    duration?: string | undefined;
    timingFunction?: string | undefined;
    persist?: string | undefined;
    axis?: string | undefined;
    transformOrigin?: string | undefined;
}): Promise<boolean>;
export function zoomOut(element: Element, options?: {
    delay?: string | undefined;
    duration?: string | undefined;
    timingFunction?: string | undefined;
    persist?: string | undefined;
    axis?: string | undefined;
    transformOrigin?: string | undefined;
}): Promise<boolean>;
export type AnimationMethods =
    | "collapse"
    | "expand"
    | "fadeIn"
    | "fadeOut"
    | "flipIn"
    | "flipOut"
    | "ripple"
    | "slideIn"
    | "slideOut"
    | "zoomIn"
    | "zoomOut";
