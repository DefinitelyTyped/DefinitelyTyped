import BaseEvent from '../events/Event';
import { FrameState } from '../PluggableMap';
import { Transform } from '../transform';
import EventType from './EventType';

export default class RenderEvent extends BaseEvent {
    constructor(
        type: EventType,
        opt_inversePixelTransform?: Transform,
        opt_frameState?: FrameState,
        opt_context?: CanvasRenderingContext2D,
    );
    /**
     * Canvas context. Not available when the event is dispatched by the map. Only available
     * when a Canvas renderer is used, null otherwise.
     */
    context: CanvasRenderingContext2D;
    /**
     * An object representing the current render frame state.
     */
    frameState: FrameState;
    /**
     * Transform from CSS pixels (relative to the top-left corner of the map viewport)
     * to rendered pixels on this event's context. Only available when a Canvas renderer is used, null otherwise.
     */
    inversePixelTransform: Transform;
}
