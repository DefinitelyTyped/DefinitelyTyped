import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * ProductFeedUploadError

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeedUploadError extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get AffectedSurfaces(): Record<string, any>;
    static get Severity(): Record<string, any>;
    static get ErrorPriority(): Record<string, any>;
    getSamples(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getSuggestedRules(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: string[], params?: Record<string, any>): Promise<ProductFeedUploadError>;
}
