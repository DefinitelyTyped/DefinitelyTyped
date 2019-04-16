// Type definitions for intrinsic-scale 3.0
// Project: https://github.com/bfred-it/intrinsic-scale#readme
// Definitions by: shalomdotnet <https://github.com/shalomdotnet>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function contain(parentWidth: number, parentHeight: number, childWidth: number, childHeight: number): IntrinsicScale;
export function cover(parentWidth: number, parentHeight: number, childWidth: number, childHeight: number): IntrinsicScale;

export interface IntrinsicScale {
    width: number;
    height: number;
    x: number;
    y: number;
}
