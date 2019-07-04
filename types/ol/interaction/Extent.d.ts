import { Coordinate } from 'ol/coordinate';
import { EventsKey } from 'ol/events';
import Event from 'ol/events/Event';
import { Extent } from 'ol/extent';
import PointerInteraction from 'ol/interaction/Pointer';
import { ObjectEvent } from 'ol/Object';
import { StyleFunction, StyleLike } from 'ol/style/Style';
export default class ExtentInteraction extends PointerInteraction {
    constructor(opt_options?: Options);
    getExtent(): Extent;
    setExtent(extent: Extent): void;
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
export interface Options {
    extent?: Extent;
    boxStyle?: StyleLike;
    pixelTolerance?: number;
    pointerStyle?: StyleLike;
    wrapX?: boolean;
}
