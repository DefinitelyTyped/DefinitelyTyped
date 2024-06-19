import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * OmegaCustomerTrx
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OmegaCustomerTrx extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Type(): Record<string, any>;
    getCampaigns(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: Array<string>, params?: Record<string, any>): OmegaCustomerTrx;
}
