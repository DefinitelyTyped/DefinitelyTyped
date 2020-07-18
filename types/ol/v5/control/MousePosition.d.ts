import { CoordinateFormat } from '../coordinate';
import { EventsKey } from '../events';
import Event from '../events/Event';
import MapEvent from '../MapEvent';
import { ObjectEvent } from '../Object';
import { ProjectionLike } from '../proj';
import Projection from '../proj/Projection';
import Control from './Control';

export interface Options {
    className?: string;
    coordinateFormat?: CoordinateFormat;
    projection?: ProjectionLike;
    render?: (p0: MapEvent) => void;
    target?: HTMLElement | string;
    undefinedHTML?: string;
}
export default class MousePosition extends Control {
    constructor(opt_options?: Options);
    protected handleMouseMove(event: Event): void;
    protected handleMouseOut(event: Event): void;
    getCoordinateFormat(): CoordinateFormat | undefined;
    getProjection(): Projection | undefined;
    setCoordinateFormat(format: CoordinateFormat): void;
    setProjection(projection: ProjectionLike): void;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'change:coordinateFormat', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:coordinateFormat', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:coordinateFormat', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:projection', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:projection', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:projection', listener: (evt: ObjectEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
export function render(mapEvent: MapEvent): void;
