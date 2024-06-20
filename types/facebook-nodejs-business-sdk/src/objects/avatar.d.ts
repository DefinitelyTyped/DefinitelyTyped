import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * Avatar

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Avatar extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getModels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: string[], params?: Record<string, any>): Promise<Avatar>;
}
