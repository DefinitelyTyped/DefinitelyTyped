import { Coordinate } from 'ol/coordinate';
import { TransformFunction } from 'ol/proj';
import Projection from 'ol/proj/Projection';
export function greatCircleArc(lon1: number, lat1: number, lon2: number, lat2: number, projection: Projection, squaredTolerance: number): number[];
export function meridian(lon: number, lat1: number, lat2: number, projection: Projection, squaredTolerance: number): number[];
export function parallel(lat: number, lon1: number, lon2: number, projection: Projection, squaredTolerance: number): number[];
