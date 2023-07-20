import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
export default class Hotel extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get ImageFetchStatus(): Record<string, any>;
    getAugmentedRealitiesMetadata(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAugmentedRealitiesMetadata(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAugmentedRealitiesMetadata(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getChannelsToIntegrityStatus(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getChannelsToIntegrityStatus(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getChannelsToIntegrityStatus(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getHotelRooms(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getHotelRooms(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getHotelRooms(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getVideosMetadata(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getVideosMetadata(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getVideosMetadata(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<Hotel>;
    update(fields: string[], params?: Record<string, any>): Promise<Hotel>;
}
