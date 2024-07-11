import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * McomInvoiceDetails
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class McomInvoiceDetails extends AbstractCrudObject {
    static get Fields(): Readonly<{
        additional_amounts: "additional_amounts";
        buyer_notes: "buyer_notes";
        currency_amount: "currency_amount";
        external_invoice_id: "external_invoice_id";
        features: "features";
        invoice_created: "invoice_created";
        invoice_id: "invoice_id";
        invoice_instructions: "invoice_instructions";
        invoice_instructions_image_url: "invoice_instructions_image_url";
        invoice_updated: "invoice_updated";
        outstanding_amount: "outstanding_amount";
        paid_amount: "paid_amount";
        payments: "payments";
        platform_logo_url: "platform_logo_url";
        platform_name: "platform_name";
        product_items: "product_items";
        shipping_address: "shipping_address";
        status: "status";
        tracking_info: "tracking_info";
    }>;
}
