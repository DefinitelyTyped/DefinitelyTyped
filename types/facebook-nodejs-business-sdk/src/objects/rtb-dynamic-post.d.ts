import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class RTBDynamicPost extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getComments(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getLikes(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    get(fields: string[], params?: Record<string, any>): Promise<RTBDynamicPost>;
}
