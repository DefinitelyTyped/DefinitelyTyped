import { Coordinate } from 'ol/coordinate';
import { Extent } from 'ol/extent';
export function createExtent(extent: Extent): Type;
export function none(center?: Coordinate): Coordinate;
export type Type = ((param0: Coordinate) => Coordinate);
