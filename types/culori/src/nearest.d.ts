import { Color } from "./common";
import { DiffFn } from "./difference";

type PositiveNumber = number;

declare function nearest<T>(
    colors: T[],
    metric: DiffFn,
    accessor?: (c: T) => Color | string,
): (color: Color | string, n?: number, τ?: PositiveNumber) => T[];

export default nearest;
