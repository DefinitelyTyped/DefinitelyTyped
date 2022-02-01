import MapBrowserEvent from '../MapBrowserEvent';
import { ObjectEvent } from '../Object';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Pixel } from '../pixel';
import Interaction from './Interaction';

export type TPointerInteractionBaseEventTypes = 'change' | 'error';
export type TPointerInteractionObjectEventTypes = 'change:active' | 'propertychange';
export interface Options {
    handleDownEvent?: ((p0: MapBrowserEvent<UIEvent>) => boolean) | undefined;
    handleDragEvent?: ((p0: MapBrowserEvent<UIEvent>) => void) | undefined;
    handleEvent?: ((p0: MapBrowserEvent<UIEvent>) => boolean) | undefined;
    handleMoveEvent?: ((p0: MapBrowserEvent<UIEvent>) => void) | undefined;
    handleUpEvent?: ((p0: MapBrowserEvent<UIEvent>) => boolean) | undefined;
    stopDown?: ((p0: boolean) => boolean) | undefined;
}
export default class PointerInteraction extends Interaction {
    constructor(opt_options?: Options);
    protected handlingDownUpSequence: boolean;
    protected targetPointers: PointerEvent[];
    /**
     * Handle pointer down events.
     */
    protected handleDownEvent(mapBrowserEvent: MapBrowserEvent<UIEvent>): boolean;
    /**
     * Handle pointer drag events.
     */
    protected handleDragEvent(mapBrowserEvent: MapBrowserEvent<UIEvent>): void;
    /**
     * Handle pointer move events.
     */
    protected handleMoveEvent(mapBrowserEvent: MapBrowserEvent<UIEvent>): void;
    /**
     * Handle pointer up events.
     */
    protected handleUpEvent(mapBrowserEvent: MapBrowserEvent<UIEvent>): boolean;
    /**
     * Returns the current number of pointers involved in the interaction,
     * e.g. 2 when two fingers are used.
     */
    getPointerCount(): number;
    /**
     * Handles the {@link module:ol/MapBrowserEvent map browser event} and may call into
     * other functions, if event sequences like e.g. 'drag' or 'down-up' etc. are
     * detected.
     */
    handleEvent(mapBrowserEvent: MapBrowserEvent<UIEvent>): boolean;
    /**
     * This function is used to determine if "down" events should be propagated
     * to other interactions or should be stopped.
     */
    stopDown(handled: boolean): boolean;
    on(type: TPointerInteractionBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TPointerInteractionBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TPointerInteractionBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TPointerInteractionBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(
        type: TPointerInteractionBaseEventTypes | TPointerInteractionBaseEventTypes[],
        listener: ListenerFunction<BaseEvent>,
    ): void;
    on(type: TPointerInteractionObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TPointerInteractionObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TPointerInteractionObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TPointerInteractionObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(
        type: TPointerInteractionObjectEventTypes | TPointerInteractionObjectEventTypes[],
        listener: ListenerFunction<ObjectEvent>,
    ): void;
}
export function centroid(pointerEvents: PointerEvent[]): Pixel;
