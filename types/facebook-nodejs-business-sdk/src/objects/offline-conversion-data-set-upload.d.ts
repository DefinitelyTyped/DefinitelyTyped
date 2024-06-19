import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * OfflineConversionDataSetUpload
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OfflineConversionDataSetUpload extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Order(): Record<string, any>;
    static get SortBy(): Record<string, any>;
    getProgress(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getPullSessions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: Array<string>, params?: Record<string, any>): OfflineConversionDataSetUpload;
}
