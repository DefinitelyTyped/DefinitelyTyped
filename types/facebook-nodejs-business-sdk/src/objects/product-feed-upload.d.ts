import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class ProductFeedUpload extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get InputMethod(): Record<string, any>;
    createErrorReport(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<ProductFeedUpload>;
    getErrors(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getErrors(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getErrors(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<ProductFeedUpload>;
}
