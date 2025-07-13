import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * P2MInvoicePayments
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class P2MInvoicePayments extends AbstractCrudObject {
    static get Fields(): Readonly<{
        page_id: "page_id";
        payments: "payments";
    }>;
}
