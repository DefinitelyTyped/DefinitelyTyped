import { FeatureLike } from './Feature';
import SimpleGeometry from './geom/SimpleGeometry';
import { Pixel } from './pixel';
import CanvasImmediateRenderer from './render/canvas/Immediate';
import RenderEvent from './render/Event';
import { Size } from './size';

/**
 * A function to be used when sorting features before rendering.
 * It takes two instances of {@link module:ol/Feature} or
 * {@link module:ol/render/Feature} and returns a {number}.
 */
export type OrderFunction = (p0: FeatureLike, p1: FeatureLike) => number;
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
/**
 * Gets the pixel of the event's canvas context from the map viewport's CSS pixel.
 */
export function getRenderPixel(event: RenderEvent, pixel: Pixel): Pixel;
/**
 * Gets a vector context for drawing to the event's canvas.
 */
export function getVectorContext(event: RenderEvent): CanvasImmediateRenderer;
/**
 * Binds a Canvas Immediate API to a canvas context, to allow drawing geometries
 * to the context's canvas.
 * The units for geometry coordinates are css pixels relative to the top left
 * corner of the canvas element.
 * <code>import {toContext} from 'ol/render';
 * import Fill from 'ol/style/Fill';
 * import Polygon from 'ol/geom/Polygon';
 *
 * var canvas = document.createElement('canvas');
 * var render = toContext(canvas.getContext('2d'),
 *     { size: [100, 100] });
 * render.setFillStrokeStyle(new Fill({ color: blue }));
 * render.drawPolygon(
 *     new Polygon([[[0, 0], [100, 100], [100, 0], [0, 0]]]));</code>
 */
export function toContext(context: CanvasRenderingContext2D, opt_options?: ToContextOptions): CanvasImmediateRenderer;
