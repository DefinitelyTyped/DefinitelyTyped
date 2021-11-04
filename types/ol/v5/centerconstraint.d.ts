import { Coordinate } from './coordinate';
import { Extent } from './extent';

export type Type = (p0: Coordinate | undefined) => Coordinate | undefined;
export function createExtent(extent: Extent): Type;
export function none(center?: Coordinate): Coordinate | undefined;
