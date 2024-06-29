import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * McomInvoiceLists
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class McomInvoiceLists extends AbstractCrudObject {
    static get Fields(): Readonly<{
        invoice_details: "invoice_details";
        invoice_ids: "invoice_ids";
        page_id: "page_id";
    }>;
}
