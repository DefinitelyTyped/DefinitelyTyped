import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * CPASBusinessSetupConfig
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CPASBusinessSetupConfig extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: Array<string>, params?: Record<string, any>): CPASBusinessSetupConfig;
}
