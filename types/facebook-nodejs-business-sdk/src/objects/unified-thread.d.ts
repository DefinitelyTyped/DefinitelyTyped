import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class UnifiedThread extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Platform(): Record<string, any>;
    getMessages(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    get(fields: Array<string>, params?: Record<string, any>): Promise<UnifiedThread>;
}
