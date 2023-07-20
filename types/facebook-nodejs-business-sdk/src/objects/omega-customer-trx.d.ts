import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class OmegaCustomerTrx extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Type(): Record<string, any>;
    getCampaigns(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCampaigns(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCampaigns(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<OmegaCustomerTrx>;
}
