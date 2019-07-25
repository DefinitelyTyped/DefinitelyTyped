import { Coordinate } from './coordinate';
import Geometry from './geom/Geometry';
import { ProjectionLike } from './proj';

export interface SphereMetricOptions {
    projection?: ProjectionLike;
    radius?: number;
}
export function getArea(geometry: Geometry, opt_options?: SphereMetricOptions): number;
export function getDistance(c1: any[], c2: any[], opt_radius?: number): number;
export function getLength(geometry: Geometry, opt_options?: SphereMetricOptions): number;
export function offset(c1: Coordinate, distance: number, bearing: number, opt_radius?: number): Coordinate;
