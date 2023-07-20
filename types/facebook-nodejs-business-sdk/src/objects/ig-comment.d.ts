import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
export default class IGComment extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getReplies(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getReplies(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getReplies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createReply(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<IGComment>;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<IGComment>;
    update(fields: string[], params?: Record<string, any>): Promise<IGComment>;
}
