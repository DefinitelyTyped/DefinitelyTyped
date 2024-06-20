import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * IGMediaForIGOnlyAPI

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGMediaForIGOnlyAPI extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getChildren(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<IGMediaForIGOnlyAPI>;
}
