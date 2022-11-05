import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
export default class InstantArticle extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getInsights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<InstantArticle>;
}
