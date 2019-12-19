import { EventsKey } from '../events';
import Event from '../events/Event';
import MapEvent from '../MapEvent';
import { ObjectEvent } from '../Object';
import Control from './Control';

export interface Options {
    className?: string;
    minWidth?: number;
    render?: (p0: MapEvent) => void;
    target?: HTMLElement | string;
    units?: Units | string;
}
export enum Units {
    DEGREES = 'degrees',
    IMPERIAL = 'imperial',
    NAUTICAL = 'nautical',
    METRIC = 'metric',
    US = 'us',
}
export default class ScaleLine extends Control {
    constructor(opt_options?: Options);
    getUnits(): Units;
    setUnits(units: Units): void;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'change:units', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:units', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:units', listener: (evt: ObjectEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
export function render(mapEvent: MapEvent): void;
