import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * UnifiedThread
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class UnifiedThread extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Platform(): Record<string, any>;
    getMessages(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: string[], params?: Record<string, any>): Promise<UnifiedThread>;
}
