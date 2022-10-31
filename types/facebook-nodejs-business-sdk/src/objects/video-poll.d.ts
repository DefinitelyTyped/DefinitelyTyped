import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class VideoPoll extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Status(): Record<string, any>;
    static get Action(): Record<string, any>;
    getPollOptions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    get(fields: Array<string>, params?: Record<string, any>): Promise<VideoPoll>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<VideoPoll>;
}
