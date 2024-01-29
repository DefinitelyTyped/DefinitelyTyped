export function contain(
    parentWidth: number,
    parentHeight: number,
    childWidth: number,
    childHeight: number,
): IntrinsicScale;
export function cover(
    parentWidth: number,
    parentHeight: number,
    childWidth: number,
    childHeight: number,
): IntrinsicScale;

export interface IntrinsicScale {
    width: number;
    height: number;
    x: number;
    y: number;
}
