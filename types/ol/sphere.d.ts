import { Coordinate } from 'ol/coordinate';
import Geometry from 'ol/geom/Geometry';
import { ProjectionLike } from 'ol/proj';
export function getArea(geometry: Geometry, opt_options?: SphereMetricOptions): number;
export function getDistance(c1: any[], c2: any[], opt_radius?: number): number;
export function getLength(geometry: Geometry, opt_options?: SphereMetricOptions): number;
export function offset(c1: Coordinate, distance: number, bearing: number, opt_radius?: number): Coordinate;
export interface SphereMetricOptions {
    projection?: ProjectionLike;
    radius?: number;
}
