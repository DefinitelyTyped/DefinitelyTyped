import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ExtendedCreditApplication
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ExtendedCreditApplication extends AbstractCrudObject {
    static get Fields(): Readonly<{
        billing_country: "billing_country";
        city: "city";
        cnpj: "cnpj";
        country: "country";
        display_currency: "display_currency";
        duns_number: "duns_number";
        id: "id";
        invoice_email_address: "invoice_email_address";
        is_umi: "is_umi";
        legal_entity_name: "legal_entity_name";
        original_online_limit: "original_online_limit";
        phone_number: "phone_number";
        postal_code: "postal_code";
        product_types: "product_types";
        proposed_credit_limit: "proposed_credit_limit";
        registration_number: "registration_number";
        run_id: "run_id";
        state: "state";
        status: "status";
        street1: "street1";
        street2: "street2";
        submitter: "submitter";
        tax_exempt_status: "tax_exempt_status";
        tax_id: "tax_id";
        terms: "terms";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<ExtendedCreditApplication>;
}
