import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
export default class CustomConversion extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get CustomEventType(): Record<string, any>;
    getStats(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getStats(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getStats(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<CustomConversion>;
    update(fields: string[], params?: Record<string, any>): Promise<CustomConversion>;
}
