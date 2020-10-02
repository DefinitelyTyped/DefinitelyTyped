import { Coordinate } from '../coordinate';
import { EventsKey } from '../events';
import { Condition } from '../events/condition';
import BaseEvent from '../events/Event';
import { Extent as Extent_1 } from '../extent';
import MapBrowserEvent from '../MapBrowserEvent';
import { ObjectEvent } from '../Object';
import PluggableMap from '../PluggableMap';
import { StyleFunction, StyleLike } from '../style/Style';
import PointerInteraction from './Pointer';

export interface Options {
    condition?: Condition;
    extent?: Extent_1;
    boxStyle?: StyleLike;
    pixelTolerance?: number;
    pointerStyle?: StyleLike;
    wrapX?: boolean;
}
export default class Extent extends PointerInteraction {
    constructor(opt_options?: Options);
    getExtent(): Extent_1;
    getExtentInternal(): Extent_1;
    handleDownEvent(mapBrowserEvent: MapBrowserEvent<UIEvent>): boolean;
    handleDragEvent(mapBrowserEvent: MapBrowserEvent<UIEvent>): void;
    handleEvent(mapBrowserEvent: MapBrowserEvent<UIEvent>): boolean;
    handleUpEvent(mapBrowserEvent: MapBrowserEvent<UIEvent>): boolean;
    setExtent(extent: Extent_1): void;
    setMap(map: PluggableMap): void;
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
    on(type: 'extentchanged', listener: (evt: ExtentEvent) => void): EventsKey;
    once(type: 'extentchanged', listener: (evt: ExtentEvent) => void): EventsKey;
    un(type: 'extentchanged', listener: (evt: ExtentEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
declare class ExtentEvent extends BaseEvent {
    constructor(extent: Extent_1);
    extent: Extent_1;
}
