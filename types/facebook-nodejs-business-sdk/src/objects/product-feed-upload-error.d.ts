import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * ProductFeedUploadError
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeedUploadError extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get AffectedSurfaces(): Record<string, any>;
    static get Severity(): Record<string, any>;
    static get ErrorPriority(): Record<string, any>;
    getSamples(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getSuggestedRules(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: Array<string>, params?: Record<string, any>): ProductFeedUploadError;
}
