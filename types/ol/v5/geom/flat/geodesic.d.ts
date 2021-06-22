import { Coordinate } from '../../coordinate';
import { TransformFunction } from '../../proj';
import Projection from '../../proj/Projection';

export function greatCircleArc(lon1: number, lat1: number, lon2: number, lat2: number, projection: Projection, squaredTolerance: number): number[];
export function meridian(lon: number, lat1: number, lat2: number, projection: Projection, squaredTolerance: number): number[];
export function parallel(lat: number, lon1: number, lon2: number, projection: Projection, squaredTolerance: number): number[];
