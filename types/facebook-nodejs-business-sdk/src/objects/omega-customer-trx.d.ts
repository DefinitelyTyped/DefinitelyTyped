import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
/**
 * OmegaCustomerTrx
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OmegaCustomerTrx extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_account_ids: "ad_account_ids";
        advertiser_name: "advertiser_name";
        amount: "amount";
        amount_due: "amount_due";
        billed_amount_details: "billed_amount_details";
        billing_period: "billing_period";
        cdn_download_uri: "cdn_download_uri";
        currency: "currency";
        download_uri: "download_uri";
        due_date: "due_date";
        entity: "entity";
        id: "id";
        invoice_date: "invoice_date";
        invoice_id: "invoice_id";
        invoice_type: "invoice_type";
        liability_type: "liability_type";
        payment_status: "payment_status";
        payment_term: "payment_term";
        type: "type";
    }>;
    static get Type(): Readonly<{
        cm: "CM";
        dm: "DM";
        inv: "INV";
        pro_forma: "PRO_FORMA";
    }>;
    getCampaigns(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getCampaigns(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getCampaigns(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<any, any>): Promise<OmegaCustomerTrx>;
}
