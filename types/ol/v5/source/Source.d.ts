import { EventsKey } from '../events';
import Event from '../events/Event';
import BaseObject, { ObjectEvent } from '../Object';
import { FrameState } from '../PluggableMap';
import { ProjectionLike } from '../proj';
import Projection from '../proj/Projection';
import State from './State';

export type Attribution = (p0: FrameState) => string | string[];
export type AttributionLike = string | string[] | Attribution;
export interface Options {
    attributions?: AttributionLike;
    attributionsCollapsible?: boolean;
    projection?: ProjectionLike;
    state?: State;
    wrapX?: boolean;
}
export default class Source extends BaseObject {
    constructor(options: Options);
    protected setState(state: State): void;
    getAttributions(): Attribution;
    getAttributionsCollapsible(): boolean;
    getProjection(): Projection;
    getResolutions(): number[] | undefined;
    getState(): State;
    getWrapX(): boolean | undefined;
    refresh(): void;
    setAttributions(attributions: AttributionLike | undefined): void;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
