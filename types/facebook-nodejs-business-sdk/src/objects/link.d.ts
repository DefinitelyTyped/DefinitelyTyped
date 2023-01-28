import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
import Comment from './comment';
export default class Link extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    createComment(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Comment>;
    getLikes(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getLikes(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getLikes(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<Link>;
}
