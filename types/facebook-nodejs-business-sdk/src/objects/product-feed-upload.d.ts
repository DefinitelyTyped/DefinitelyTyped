import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class ProductFeedUpload extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get InputMethod(): Record<string, any>;
    createErrorReport(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<ProductFeedUpload>;
    getErrors(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    get(fields: Array<string>, params?: Record<string, any>): Promise<ProductFeedUpload>;
}
