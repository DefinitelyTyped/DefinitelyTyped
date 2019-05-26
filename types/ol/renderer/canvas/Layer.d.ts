import { Coordinate } from 'ol/coordinate';
import { EventsKey } from 'ol/events';
import Event from 'ol/events/Event';
import { Extent } from 'ol/extent';
import Layer, { State } from 'ol/layer/Layer';
import { FrameState } from 'ol/PluggableMap';
import LayerRenderer from 'ol/renderer/Layer';
import { Transform } from 'ol/transform';
export default class CanvasLayerRenderer extends LayerRenderer {
    constructor(layer: Layer);
    protected renderedResolution: number;
    protected clip(context: CanvasRenderingContext2D, frameState: FrameState, extent: Extent): void;
    protected dispatchRenderEvent(context: CanvasRenderingContext2D, frameState: FrameState, opt_transform?: Transform): void;
    protected getTransform(frameState: FrameState, offsetX: number): Transform;
    protected postCompose(context: CanvasRenderingContext2D, frameState: FrameState, layerState: State, opt_transform?: Transform): void;
    protected preCompose(context: CanvasRenderingContext2D, frameState: FrameState, opt_transform?: Transform): void;
    composeFrame(frameState: FrameState, layerState: State, context: CanvasRenderingContext2D): void;
    forEachLayerAtCoordinate<S, T, U>(coordinate: Coordinate, frameState: FrameState, hitTolerance: number, callback: ((this: S, param1: Layer, param2: Uint8ClampedArray | Uint8Array) => T), thisArg: S): T;
    prepareFrame(frameState: FrameState, layerState: State): boolean;
    on(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    once(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    un(type: string | string[], listener: ((param0: any) => void)): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
}
