import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class RTBDynamicPost extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getComments(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getComments(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getComments(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getLikes(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getLikes(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getLikes(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<RTBDynamicPost>;
}
