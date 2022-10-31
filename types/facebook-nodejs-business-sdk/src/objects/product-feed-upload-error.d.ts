import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class ProductFeedUploadError extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get AffectedSurfaces(): Record<string, any>;
    static get Severity(): Record<string, any>;
    static get ErrorPriority(): Record<string, any>;
    getSamples(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getSuggestedRules(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    get(fields: Array<string>, params?: Record<string, any>): Promise<ProductFeedUploadError>;
}
