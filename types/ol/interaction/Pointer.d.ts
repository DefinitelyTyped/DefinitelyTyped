import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import MapBrowserEvent from '../MapBrowserEvent';
import { ObjectEvent } from '../Object';
import { Pixel } from '../pixel';
import Interaction from './Interaction';

export interface Options {
    handleDownEvent?: (p0: MapBrowserEvent<UIEvent>) => boolean;
    handleDragEvent?: (p0: MapBrowserEvent<UIEvent>) => void;
    handleEvent?: (p0: MapBrowserEvent<UIEvent>) => boolean;
    handleMoveEvent?: (p0: MapBrowserEvent<UIEvent>) => void;
    handleUpEvent?: (p0: MapBrowserEvent<UIEvent>) => boolean;
    stopDown?: (p0: boolean) => boolean;
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
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'change:active', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:active', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:active', listener: (evt: ObjectEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
export function centroid(pointerEvents: PointerEvent[]): Pixel;
