import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import Comment from "./comment";
/**
 * Link

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Link extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    createComment(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Comment>;
    getLikes(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: string[], params?: Record<string, any>): Promise<Link>;
}
