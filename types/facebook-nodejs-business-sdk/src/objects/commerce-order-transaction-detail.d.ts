import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class CommerceOrderTransactionDetail extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getItems(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getTaxDetails(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
}
