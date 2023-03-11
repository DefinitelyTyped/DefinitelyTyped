import { DiffFn } from './difference';
import { Color } from './common';

type PositiveNumber = number;

declare function nearest<T>(
    colors: T[],
    metric: DiffFn,
    accessor?: (c: T) => Color | string,
): (color: Color | string, n?: number, τ?: PositiveNumber) => T[];

export default nearest;
