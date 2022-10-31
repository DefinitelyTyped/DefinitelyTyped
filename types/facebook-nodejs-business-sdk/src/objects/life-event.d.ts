import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class LifeEvent extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getLikes(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    get(fields: Array<string>, params?: Record<string, any>): Promise<LifeEvent>;
}
