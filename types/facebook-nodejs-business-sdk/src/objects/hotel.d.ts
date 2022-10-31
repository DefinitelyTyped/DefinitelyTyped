import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
export default class Hotel extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get ImageFetchStatus(): Record<string, any>;
    getAugmentedRealitiesMetadata(
        fields: Array<string>,
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor;
    getChannelsToIntegrityStatus(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getHotelRooms(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getVideosMetadata(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<Hotel>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<Hotel>;
}
