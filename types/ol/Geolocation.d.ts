import BaseObject, { ObjectEvent } from './Object';
import Types from './ObjectEventType';
import { Coordinate } from './coordinate';
import { EventsKey, ListenerFunction } from './events';
import BaseEvent from './events/Event';
import Polygon from './geom/Polygon';
import { ProjectionLike } from './proj';
import Projection from './proj/Projection';

export type TGeolocationBaseEventTypes = 'change' | 'error';
export type TGeolocationObjectEventTypes =
    | 'change:accuracy'
    | 'change:accuracyGeometry'
    | 'change:altitude'
    | 'change:altitudeAccuracy'
    | 'change:heading'
    | 'change:position'
    | 'change:projection'
    | 'change:speed'
    | 'change:tracking'
    | 'change:trackingOptions'
    | 'propertychange';
export type TGeolocationGeolocationErrorTypes = 'error';
export type GeolocationObjectEventTypes =
    | Types
    | 'change:accuracy'
    | 'change:accuracyGeometry'
    | 'change:altitude'
    | 'change:altitudeAccuracy'
    | 'change:heading'
    | 'change:position'
    | 'change:projection'
    | 'change:speed'
    | 'change:tracking'
    | 'change:trackingOptions';
export interface Options {
    tracking?: boolean | undefined;
    trackingOptions?: PositionOptions | undefined;
    projection?: ProjectionLike | undefined;
}
export default class Geolocation extends BaseObject {
    constructor(opt_options?: Options);
    /**
     * Clean up.
     */
    disposeInternal(): void;
    /**
     * Get the accuracy of the position in meters.
     */
    getAccuracy(): number | undefined;
    /**
     * Get a geometry of the position accuracy.
     */
    getAccuracyGeometry(): Polygon;
    /**
     * Get the altitude associated with the position.
     */
    getAltitude(): number | undefined;
    /**
     * Get the altitude accuracy of the position.
     */
    getAltitudeAccuracy(): number | undefined;
    /**
     * Get the heading as radians clockwise from North.
     * Note: depending on the browser, the heading is only defined if the enableHighAccuracy
     * is set to true in the tracking options.
     */
    getHeading(): number | undefined;
    /**
     * Get the position of the device.
     */
    getPosition(): Coordinate | undefined;
    /**
     * Get the projection associated with the position.
     */
    getProjection(): Projection | undefined;
    /**
     * Get the speed in meters per second.
     */
    getSpeed(): number | undefined;
    /**
     * Determine if the device location is being tracked.
     */
    getTracking(): boolean;
    /**
     * Get the tracking options.
     * See https://www.w3.org/TR/geolocation-API/#position-options.
     */
    getTrackingOptions(): PositionOptions | undefined;
    /**
     * Set the projection to use for transforming the coordinates.
     */
    setProjection(projection: ProjectionLike): void;
    /**
     * Enable or disable tracking.
     */
    setTracking(tracking: boolean): void;
    /**
     * Set the tracking options.
     * See http://www.w3.org/TR/geolocation-API/#position-options.
     */
    setTrackingOptions(options: PositionOptions): void;
    on(type: TGeolocationBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TGeolocationBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TGeolocationBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TGeolocationBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TGeolocationBaseEventTypes | TGeolocationBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TGeolocationObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TGeolocationObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TGeolocationObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TGeolocationObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(
        type: TGeolocationObjectEventTypes | TGeolocationObjectEventTypes[],
        listener: ListenerFunction<ObjectEvent>,
    ): void;
    on(type: TGeolocationGeolocationErrorTypes, listener: ListenerFunction<GeolocationError>): EventsKey;
    on(type: TGeolocationGeolocationErrorTypes[], listener: ListenerFunction<GeolocationError>): EventsKey[];
    once(type: TGeolocationGeolocationErrorTypes, listener: ListenerFunction<GeolocationError>): EventsKey;
    once(type: TGeolocationGeolocationErrorTypes[], listener: ListenerFunction<GeolocationError>): EventsKey[];
    un(
        type: TGeolocationGeolocationErrorTypes | TGeolocationGeolocationErrorTypes[],
        listener: ListenerFunction<GeolocationError>,
    ): void;
}
declare class GeolocationError extends BaseEvent {
    constructor(error: any);
    code: number;
    message: string;
}
