import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import BaseObject, { ObjectEvent } from '../Object';
import { FrameState } from '../PluggableMap';
import { ProjectionLike } from '../proj';
import Projection from '../proj/Projection';
import State from './State';

/**
 * A function that returns a string or an array of strings representing source
 * attributions.
 */
export type Attribution = (p0: FrameState) => string | string[];
/**
 * A type that can be used to provide attribution information for data sources.
 * It represents either
 *
 * a simple string (e.g. '© Acme Inc.')
 * an array of simple strings (e.g. ['© Acme Inc.', '© Bacme Inc.'])
 * a function that returns a string or array of strings ({@link module:ol/source/Source~Attribution})
 *
 */
export type AttributionLike = string | string[] | Attribution;
export interface Options {
    attributions?: AttributionLike;
    attributionsCollapsible?: boolean;
    projection?: ProjectionLike;
    state?: State;
    wrapX?: boolean;
}
export default abstract class Source extends BaseObject {
    constructor(options: Options);
    /**
     * Get the attribution function for the source.
     */
    getAttributions(): Attribution;
    getAttributionsCollapsible(): boolean;
    getContextOptions(): object | undefined;
    /**
     * Get the projection of the source.
     */
    getProjection(): Projection;
    abstract getResolutions(): number[] | undefined;
    /**
     * Get the state of the source, see {@link module:ol/source/State~State} for possible states.
     */
    getState(): State;
    getWrapX(): boolean | undefined;
    /**
     * Refreshes the source. The source will be cleared, and data from the server will be reloaded.
     */
    refresh(): void;
    /**
     * Set the attributions of the source.
     */
    setAttributions(attributions: AttributionLike | undefined): void;
    /**
     * Set the state of the source.
     */
    setState(state: State): void;
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
