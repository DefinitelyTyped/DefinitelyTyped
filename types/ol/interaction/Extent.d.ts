import { Coordinate } from '../coordinate';
import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import { Extent as Extent_1 } from '../extent';
import { ObjectEvent } from '../Object';
import { StyleFunction, StyleLike } from '../style/Style';
import PointerInteraction from './Pointer';

export interface Options {
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
    setExtent(extent: Extent_1): void;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
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
export class ExtentEvent extends BaseEvent {
    constructor(extent: Extent_1);
    extent: Extent_1;
}
