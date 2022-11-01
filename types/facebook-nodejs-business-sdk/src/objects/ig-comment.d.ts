import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
export default class IGComment extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getReplies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createReply(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null): Promise<IGComment>;
    delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<IGComment>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<IGComment>;
}
