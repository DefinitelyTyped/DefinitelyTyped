import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class VehicleOffer extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get ImageFetchStatus(): Record<string, any>;
    getAugmentedRealitiesMetadata(
        fields: Array<string>,
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor;
    getChannelsToIntegrityStatus(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getVideosMetadata(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    get(fields: Array<string>, params?: Record<string, any>): Promise<VehicleOffer>;
}
