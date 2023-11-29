import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * CreditCard
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CreditCard extends AbstractCrudObject {
    static get Fields(): Readonly<{
        billing_address: "billing_address";
        card_cobadging: "card_cobadging";
        card_holder_name: "card_holder_name";
        card_type: "card_type";
        credential_id: "credential_id";
        default_receiving_method_products: "default_receiving_method_products";
        expiry_month: "expiry_month";
        expiry_year: "expiry_year";
        id: "id";
        is_cvv_tricky_bin: "is_cvv_tricky_bin";
        is_enabled: "is_enabled";
        is_last_used: "is_last_used";
        is_network_tokenized_in_india: "is_network_tokenized_in_india";
        is_soft_disabled: "is_soft_disabled";
        is_user_verified: "is_user_verified";
        is_zip_verified: "is_zip_verified";
        last4: "last4";
        readable_card_type: "readable_card_type";
        time_created: "time_created";
        time_created_ts: "time_created_ts";
        type: "type";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<CreditCard>;
}
