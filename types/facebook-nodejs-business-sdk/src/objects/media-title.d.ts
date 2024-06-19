import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * MediaTitle
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MediaTitle extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get ImageFetchStatus(): Record<string, any>;
    static get Visibility(): Record<string, any>;
    static get ContentCategory(): Record<string, any>;
    getAugmentedRealitiesMetadata(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getChannelsToIntegrityStatus(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getVideosMetadata(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    delete(fields: Array<string>, params?: Record<string, any>): AbstractObject;
    get(fields: Array<string>, params?: Record<string, any>): MediaTitle;
    update(fields: Array<string>, params?: Record<string, any>): MediaTitle;
}
