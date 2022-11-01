import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
export default class HomeListing extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get ImageFetchStatus(): Record<string, any>;
    getAugmentedRealitiesMetadata(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getChannelsToIntegrityStatus(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getVideosMetadata(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<HomeListing>;
    update(fields: string[], params?: Record<string, any>): Promise<HomeListing>;
}
