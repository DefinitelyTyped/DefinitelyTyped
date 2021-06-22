// Type definitions for react-swipeable-views-core 0.13
// Project: https://github.com/oliviertassinari/react-swipeable-views#readme
// Definitions by: kodai3 <https://github.com/kodai3>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { SwipeableViewsProps } from 'react-swipeable-views';

export interface ComputeIndexParams {
    children: SwipeableViewsProps['children'];
    resistance: SwipeableViewsProps['resistance'];
    startIndex: number;
    startX: number;
    pageX: number;
    viewLength: number;
}

export const constant: {
    RESISTANCE_COEF: number;
    UNCERTAINTY_THRESHOLD: number;
};
export function mod(n: number, m: number): number;
export function getDisplaySameSlide(props: SwipeableViewsProps, nextProps: SwipeableViewsProps): boolean;
export function checkIndexBounds(props: SwipeableViewsProps): void;
export function computeIndex(
    params: ComputeIndexParams,
): {
    index: number;
    startX: number;
};
