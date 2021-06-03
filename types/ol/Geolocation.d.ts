import { Coordinate } from './coordinate';
import { EventsKey } from './events';
import BaseEvent from './events/Event';
import Polygon from './geom/Polygon';
import BaseObject, { ObjectEvent } from './Object';
import { ProjectionLike } from './proj';
import Projection from './proj/Projection';

export interface Options {
    tracking?: boolean;
    trackingOptions?: PositionOptions;
    projection?: ProjectionLike;
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
     * See http://www.w3.org/TR/geolocation-API/#position-options.
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
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'change:accuracy', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:accuracy', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:accuracy', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:accuracyGeometry', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:accuracyGeometry', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:accuracyGeometry', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:altitude', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:altitude', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:altitude', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:altitudeAccuracy', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:altitudeAccuracy', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:altitudeAccuracy', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:heading', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:heading', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:heading', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:position', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:position', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:position', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:projection', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:projection', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:projection', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:speed', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:speed', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:speed', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:tracking', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:tracking', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:tracking', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:trackingOptions', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:trackingOptions', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:trackingOptions', listener: (evt: ObjectEvent) => void): void;
    on(type: 'error', listener: (evt: GeolocationError) => void): EventsKey;
    once(type: 'error', listener: (evt: GeolocationError) => void): EventsKey;
    un(type: 'error', listener: (evt: GeolocationError) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
declare class GeolocationError extends BaseEvent {
    constructor(error: any);
    code: number;
    message: string;
}
