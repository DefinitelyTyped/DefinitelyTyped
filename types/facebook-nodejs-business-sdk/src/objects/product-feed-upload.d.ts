import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * ProductFeedUpload
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeedUpload extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get InputMethod(): Record<string, any>;
    createErrorReport(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<ProductFeedUpload>;
    getErrors(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: Array<string>, params?: Record<string, any>): ProductFeedUpload;
}
