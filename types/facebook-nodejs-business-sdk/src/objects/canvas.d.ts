import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class Canvas extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getPreViews(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    get(fields: string[], params?: Record<string, any>): Promise<Canvas>;
    update(fields: string[], params?: Record<string, any>): Promise<Canvas>;
}
