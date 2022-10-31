import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class OfflineConversionDataSetUpload extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Order(): Record<string, any>;
    static get SortBy(): Record<string, any>;
    getProgress(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPullSessions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    get(fields: Array<string>, params?: Record<string, any>): Promise<OfflineConversionDataSetUpload>;
}
