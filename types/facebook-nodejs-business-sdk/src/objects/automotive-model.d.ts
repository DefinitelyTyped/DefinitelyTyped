import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * AutomotiveModel
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AutomotiveModel extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get ImageFetchStatus(): Record<string, any>;
    static get Visibility(): Record<string, any>;
    getAugmentedRealitiesMetadata(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getChannelsToIntegrityStatus(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getVideosMetadata(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: Array<string>, params?: Record<string, any>): AutomotiveModel;
}
