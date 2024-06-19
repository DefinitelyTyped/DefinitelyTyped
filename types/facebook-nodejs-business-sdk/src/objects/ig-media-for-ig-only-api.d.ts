import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * IGMediaForIGOnlyAPI
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGMediaForIGOnlyAPI extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getChildren(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: Array<string>, params?: Record<string, any>): IGMediaForIGOnlyAPI;
}
