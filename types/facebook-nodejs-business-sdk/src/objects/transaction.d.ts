import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * Transaction
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Transaction extends AbstractCrudObject {
    static get Fields(): Readonly<{
        account_id: "account_id";
        app_amount: "app_amount";
        billing_end_time: "billing_end_time";
        billing_reason: "billing_reason";
        billing_start_time: "billing_start_time";
        card_charge_mode: "card_charge_mode";
        charge_type: "charge_type";
        checkout_campaign_group_id: "checkout_campaign_group_id";
        credential_id: "credential_id";
        fatura_id: "fatura_id";
        id: "id";
        is_business_ec_charge: "is_business_ec_charge";
        is_funding_event: "is_funding_event";
        payment_option: "payment_option";
        product_type: "product_type";
        provider_amount: "provider_amount";
        status: "status";
        time: "time";
        tracking_id: "tracking_id";
        transaction_type: "transaction_type";
        tx_type: "tx_type";
        vat_invoice_id: "vat_invoice_id";
    }>;
    static get ProductType(): Readonly<{
        cp_return_label: "cp_return_label";
        facebook_ad: "facebook_ad";
        ig_ad: "ig_ad";
        whatsapp: "whatsapp";
        workplace: "workplace";
    }>;
}
