import { EventsKey } from 'ol/events';
import Event from 'ol/events/Event';
import Interaction from 'ol/interaction/Interaction';
import MapBrowserEvent from 'ol/MapBrowserEvent';
import MapBrowserPointerEvent from 'ol/MapBrowserPointerEvent';
import { ObjectEvent } from 'ol/Object';
import { Pixel } from 'ol/pixel';
import PointerEvent from 'ol/pointer/PointerEvent';
export function centroid(pointerEvents: PointerEvent[]): Pixel;
export interface Options {
    handleDownEvent?: ((param0: MapBrowserPointerEvent) => boolean);
    handleDragEvent?: ((param0: MapBrowserPointerEvent) => void);
    handleEvent?: ((param0: MapBrowserEvent) => boolean);
    handleMoveEvent?: ((param0: MapBrowserPointerEvent) => void);
    handleUpEvent?: ((param0: MapBrowserPointerEvent) => boolean);
    stopDown?: ((param0: boolean) => boolean);
}
export default class PointerInteraction extends Interaction {
    constructor(opt_options?: Options);
    protected handlingDownUpSequence: boolean;
    protected targetPointers: PointerEvent[];
    protected handleDownEvent(mapBrowserEvent: MapBrowserPointerEvent): boolean;
    protected handleDragEvent(mapBrowserEvent: MapBrowserPointerEvent): void;
    protected handleMoveEvent(mapBrowserEvent: MapBrowserPointerEvent): void;
    protected handleUpEvent(mapBrowserEvent: MapBrowserPointerEvent): boolean;
    stopDown(handled: boolean): boolean;
    on(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    once(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    un(type: string | string[], listener: ((param0: any) => void)): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'change:active', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:active', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:active', listener: (evt: ObjectEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
