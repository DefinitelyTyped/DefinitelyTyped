import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * CommerceOrderTransactionDetail
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CommerceOrderTransactionDetail extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getItems(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getTaxDetails(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
}
