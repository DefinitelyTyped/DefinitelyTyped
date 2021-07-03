import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import Feature from '../Feature';
import Geometry from '../geom/Geometry';
import { ObjectEvent } from '../Object';
import RenderEvent from '../render/Event';
import WebGLPointsLayerRenderer from '../renderer/webgl/PointsLayer';
import VectorSource from '../source/Vector';
import VectorLayer from './Vector';

export interface Options {
    className?: string;
    opacity?: number;
    visible?: boolean;
    extent?: Extent;
    zIndex?: number;
    minResolution?: number;
    maxResolution?: number;
    minZoom?: number;
    maxZoom?: number;
    gradient?: string[];
    radius?: number;
    blur?: number;
    weight?: string | ((p0: Feature<Geometry>) => number);
    source?: VectorSource<Geometry>;
}
export default class Heatmap extends VectorLayer {
    constructor(opt_options?: Options);
    /**
     * Create a renderer for this layer.
     */
    createRenderer(): WebGLPointsLayerRenderer;
    /**
     * Return the blur size in pixels.
     */
    getBlur(): number;
    /**
     * Return the gradient colors as array of strings.
     */
    getGradient(): string[];
    /**
     * Return the size of the radius in pixels.
     */
    getRadius(): number;
    /**
     * Set the blur size in pixels.
     */
    setBlur(blur: number): void;
    /**
     * Set the gradient colors as array of strings.
     */
    setGradient(colors: string[]): void;
    /**
     * Set the size of the radius in pixels.
     */
    setRadius(radius: number): void;
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'change:blur', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:blur', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:blur', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:extent', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:extent', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:extent', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:gradient', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:gradient', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:gradient', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:maxResolution', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:maxResolution', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:maxResolution', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:maxZoom', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:maxZoom', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:maxZoom', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:minResolution', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:minResolution', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:minResolution', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:minZoom', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:minZoom', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:minZoom', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:opacity', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:opacity', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:opacity', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:radius', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:radius', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:radius', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:source', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:source', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:source', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:visible', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:visible', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:visible', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:zIndex', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:zIndex', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:zIndex', listener: (evt: ObjectEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'postcompose', listener: (evt: RenderEvent) => void): EventsKey;
    once(type: 'postcompose', listener: (evt: RenderEvent) => void): EventsKey;
    un(type: 'postcompose', listener: (evt: RenderEvent) => void): void;
    on(type: 'postrender', listener: (evt: RenderEvent) => void): EventsKey;
    once(type: 'postrender', listener: (evt: RenderEvent) => void): EventsKey;
    un(type: 'postrender', listener: (evt: RenderEvent) => void): void;
    on(type: 'precompose', listener: (evt: RenderEvent) => void): EventsKey;
    once(type: 'precompose', listener: (evt: RenderEvent) => void): EventsKey;
    un(type: 'precompose', listener: (evt: RenderEvent) => void): void;
    on(type: 'prerender', listener: (evt: RenderEvent) => void): EventsKey;
    once(type: 'prerender', listener: (evt: RenderEvent) => void): EventsKey;
    un(type: 'prerender', listener: (evt: RenderEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
    on(type: 'rendercomplete', listener: (evt: RenderEvent) => void): EventsKey;
    once(type: 'rendercomplete', listener: (evt: RenderEvent) => void): EventsKey;
    un(type: 'rendercomplete', listener: (evt: RenderEvent) => void): void;
}
