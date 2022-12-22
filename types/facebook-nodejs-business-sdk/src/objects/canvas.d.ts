import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class Canvas extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getPreViews(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getPreViews(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getPreViews(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<Canvas>;
    update(fields: string[], params?: Record<string, any>): Promise<Canvas>;
}
