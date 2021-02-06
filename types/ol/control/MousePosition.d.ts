import { CoordinateFormat } from '../coordinate';
import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import MapEvent from '../MapEvent';
import { ObjectEvent } from '../Object';
import PluggableMap from '../PluggableMap';
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
    protected handleMouseMove(event: MouseEvent): void;
    protected handleMouseOut(event: Event): void;
    /**
     * Return the coordinate format type used to render the current position or
     * undefined.
     */
    getCoordinateFormat(): CoordinateFormat | undefined;
    /**
     * Return the projection that is used to report the mouse position.
     */
    getProjection(): Projection | undefined;
    /**
     * Set the coordinate format type used to render the current position.
     */
    setCoordinateFormat(format: CoordinateFormat): void;
    /**
     * Remove the control from its current map and attach it to the new map.
     * Subclasses may set up event handlers to get notified about changes to
     * the map here.
     */
    setMap(map: PluggableMap): void;
    /**
     * Set the projection that is used to report the mouse position.
     */
    setProjection(projection: ProjectionLike): void;
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'change:coordinateFormat', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:coordinateFormat', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:coordinateFormat', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:projection', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:projection', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:projection', listener: (evt: ObjectEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
