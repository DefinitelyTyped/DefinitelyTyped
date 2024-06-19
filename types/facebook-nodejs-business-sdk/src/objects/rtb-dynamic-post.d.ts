import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * RTBDynamicPost
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class RTBDynamicPost extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getComments(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getLikes(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: Array<string>, params?: Record<string, any>): RTBDynamicPost;
}
