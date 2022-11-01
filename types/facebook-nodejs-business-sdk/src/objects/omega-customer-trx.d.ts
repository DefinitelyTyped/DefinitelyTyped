import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class OmegaCustomerTrx extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Type(): Record<string, any>;
    getCampaigns(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    get(fields: string[], params?: Record<string, any>): Promise<OmegaCustomerTrx>;
}
