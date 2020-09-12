import { FeatureLike } from './Feature';
import SimpleGeometry from './geom/SimpleGeometry';
import { Pixel } from './pixel';
import { FrameState } from './PluggableMap';
import CanvasImmediateRenderer from './render/canvas/Immediate';
import RenderEvent from './render/Event';
import { Size } from './size';

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
export function getRenderPixel(event: RenderEvent, pixel: Pixel): Pixel;
export function getVectorContext(event: RenderEvent): CanvasImmediateRenderer;
export function renderDeclutterItems(frameState: FrameState, declutterTree: any): any;
export function toContext(context: CanvasRenderingContext2D, opt_options?: ToContextOptions): CanvasImmediateRenderer;
