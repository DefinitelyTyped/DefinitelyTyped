import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
import Comment from './comment';
export default class Link extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    createComment(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Comment>;
    getLikes(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    get(fields: Array<string>, params?: Record<string, any>): Promise<Link>;
}
