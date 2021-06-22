import { Coordinate } from '../../coordinate';
import { EventsKey } from '../../events';
import Event from '../../events/Event';
import { Extent } from '../../extent';
import Layer, { State } from '../../layer/Layer';
import { FrameState } from '../../PluggableMap';
import { Transform } from '../../transform';
import LayerRenderer from '../Layer';

export default class CanvasLayerRenderer extends LayerRenderer {
    constructor(layer: Layer);
    protected renderedResolution: number;
    protected clip(context: CanvasRenderingContext2D, frameState: FrameState, extent: Extent): void;
    protected dispatchRenderEvent(context: CanvasRenderingContext2D, frameState: FrameState, opt_transform?: Transform): void;
    protected getTransform(frameState: FrameState, offsetX: number): Transform;
    protected postCompose(context: CanvasRenderingContext2D, frameState: FrameState, layerState: State, opt_transform?: Transform): void;
    protected preCompose(context: CanvasRenderingContext2D, frameState: FrameState, opt_transform?: Transform): void;
    composeFrame(frameState: FrameState, layerState: State, context: CanvasRenderingContext2D): void;
    forEachLayerAtCoordinate<S, T, U>(
        coordinate: Coordinate,
        frameState: FrameState,
        hitTolerance: number,
        callback: (this: S, p0: Layer, p1: Uint8ClampedArray | Uint8Array) => T,
        thisArg: S
    ): T | undefined;
    prepareFrame(frameState: FrameState, layerState: State): boolean;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
}
