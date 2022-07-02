import { Coordinate } from './coordinate';
import { Extent } from './extent';
import { Size } from './size';

export type Type = (
    p0: Coordinate | undefined,
    p1: number,
    p2: Size,
    p3?: boolean,
    p4?: number[],
) => Coordinate | undefined;
export function createExtent(extent: Extent, onlyCenter: boolean, smooth: boolean): Type;
export function none(center?: Coordinate): Coordinate | undefined;
