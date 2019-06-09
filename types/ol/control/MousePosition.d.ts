import Control from 'ol/control/Control';
import { CoordinateFormat } from 'ol/coordinate';
import { EventsKey } from 'ol/events';
import Event from 'ol/events/Event';
import MapEvent from 'ol/MapEvent';
import { ObjectEvent } from 'ol/Object';
import { ProjectionLike } from 'ol/proj';
import Projection from 'ol/proj/Projection';
export function render(mapEvent: MapEvent): void;
export default class MousePosition extends Control {
    constructor(opt_options?: Options);
    protected handleMouseMove(event: Event): void;
    protected handleMouseOut(event: Event): void;
    getCoordinateFormat(): CoordinateFormat;
    getProjection(): Projection;
    setCoordinateFormat(format: CoordinateFormat): void;
    setProjection(projection: ProjectionLike): void;
    on(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    once(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    un(type: string | string[], listener: ((param0: any) => void)): void;
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
export interface Options {
    className?: string;
    coordinateFormat?: CoordinateFormat;
    projection?: ProjectionLike;
    render?: ((param0: MapEvent) => void);
    target?: HTMLElement | string;
    undefinedHTML?: string;
}
