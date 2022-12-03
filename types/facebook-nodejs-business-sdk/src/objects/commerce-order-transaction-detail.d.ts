import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class CommerceOrderTransactionDetail extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getItems(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getItems(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getItems(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getTaxDetails(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getTaxDetails(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getTaxDetails(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
}
