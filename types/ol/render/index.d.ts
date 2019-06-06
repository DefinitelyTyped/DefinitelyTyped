import { FeatureLike } from 'ol/Feature';
import SimpleGeometry from 'ol/geom/SimpleGeometry';
import CanvasImmediateRenderer from 'ol/render/canvas/Immediate';
import { Size } from 'ol/size';
export function toContext(context: CanvasRenderingContext2D, opt_options?: ToContextOptions): CanvasImmediateRenderer;
export type OrderFunction = ((param0: FeatureLike, param1: FeatureLike) => number);
export interface State {
    context: CanvasRenderingContext2D;
    feature: FeatureLike;
    geometry: SimpleGeometry;
    pixelRatio: number;
    resolution: number;
    rotation: number;
}
export interface ToContextOptions {
    size?: Size;
    pixelRatio?: number;
}
