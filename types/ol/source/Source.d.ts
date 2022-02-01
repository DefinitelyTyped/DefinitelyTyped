import BaseObject, { ObjectEvent } from '../Object';
import { FrameState } from '../PluggableMap';
import { ViewOptions } from '../View';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { ProjectionLike } from '../proj';
import Projection from '../proj/Projection';
import State from './State';

export type TSourceBaseEventTypes = 'change' | 'error';
export type TSourceObjectEventTypes = 'propertychange';
/**
 * A function that takes a {@link module:ol/PluggableMap~FrameState} and returns a string or
 * an array of strings representing source attributions.
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
    attributions?: AttributionLike | undefined;
    attributionsCollapsible?: boolean | undefined;
    projection?: ProjectionLike | undefined;
    state?: State | undefined;
    wrapX?: boolean | undefined;
    interpolate?: boolean | undefined;
}
export default abstract class Source extends BaseObject {
    constructor(options: Options);
    protected projection: Projection;
    protected viewRejector: () => void;
    protected viewResolver: () => void;
    /**
     * Get the attribution function for the source.
     */
    getAttributions(): Attribution;
    getAttributionsCollapsible(): boolean;
    getInterpolate(): boolean;
    /**
     * Get the projection of the source.
     */
    getProjection(): Projection;
    abstract getResolutions(): number[] | undefined;
    /**
     * Get the state of the source, see {@link module:ol/source/State~State} for possible states.
     */
    getState(): State;
    getView(): Promise<ViewOptions>;
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
    on(type: TSourceBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TSourceBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TSourceBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TSourceBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TSourceBaseEventTypes | TSourceBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TSourceObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TSourceObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TSourceObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TSourceObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(type: TSourceObjectEventTypes | TSourceObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): void;
}
