import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * CPASBusinessSetupConfig

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CPASBusinessSetupConfig extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<CPASBusinessSetupConfig>;
}
