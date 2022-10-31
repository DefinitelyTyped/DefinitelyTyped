import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
export default class CustomConversion extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get CustomEventType(): Record<string, any>;
    getStats(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<CustomConversion>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<CustomConversion>;
}
