import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
/**
 * CPASBusinessSetupConfig
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CPASBusinessSetupConfig extends AbstractCrudObject {
    static get Fields(): Readonly<{
        accepted_collab_ads_tos: "accepted_collab_ads_tos";
        business: "business";
        business_capabilities_status: "business_capabilities_status";
        capabilities_compliance_status: "capabilities_compliance_status";
        id: "id";
    }>;
    getAdAccounts(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getAdAccounts(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getAdAccounts(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<any, any>): Promise<CPASBusinessSetupConfig>;
}
