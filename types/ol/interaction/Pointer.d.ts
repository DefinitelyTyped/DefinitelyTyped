import { EventsKey } from '../events';
import Event from '../events/Event';
import MapBrowserEvent from '../MapBrowserEvent';
import MapBrowserPointerEvent from '../MapBrowserPointerEvent';
import { ObjectEvent } from '../Object';
import { Pixel } from '../pixel';
import PointerEvent from '../pointer/PointerEvent';
import Interaction from './Interaction';

export interface Options {
    handleDownEvent?: (p0: MapBrowserPointerEvent) => boolean;
    handleDragEvent?: (p0: MapBrowserPointerEvent) => void;
    handleEvent?: (p0: MapBrowserEvent) => boolean;
    handleMoveEvent?: (p0: MapBrowserPointerEvent) => void;
    handleUpEvent?: (p0: MapBrowserPointerEvent) => boolean;
    stopDown?: (p0: boolean) => boolean;
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
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
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
export function centroid(pointerEvents: PointerEvent[]): Pixel;
