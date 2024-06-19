import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * Vehicle
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Vehicle extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get ImageFetchStatus(): Record<string, any>;
    static get Visibility(): Record<string, any>;
    static get Availability(): Record<string, any>;
    static get BodyStyle(): Record<string, any>;
    static get Condition(): Record<string, any>;
    static get Drivetrain(): Record<string, any>;
    static get FuelType(): Record<string, any>;
    static get StateOfVehicle(): Record<string, any>;
    static get Transmission(): Record<string, any>;
    static get VehicleType(): Record<string, any>;
    getAugmentedRealitiesMetadata(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getChannelsToIntegrityStatus(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getVideosMetadata(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: Array<string>, params?: Record<string, any>): Vehicle;
    update(fields: Array<string>, params?: Record<string, any>): Vehicle;
}
