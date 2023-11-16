import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AgencyClientDeclaration
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AgencyClientDeclaration extends AbstractCrudObject {
    static get Fields(): Readonly<{
        agency_representing_client: "agency_representing_client";
        client_based_in_france: "client_based_in_france";
        client_city: "client_city";
        client_country_code: "client_country_code";
        client_email_address: "client_email_address";
        client_name: "client_name";
        client_postal_code: "client_postal_code";
        client_province: "client_province";
        client_street: "client_street";
        client_street2: "client_street2";
        has_written_mandate_from_advertiser: "has_written_mandate_from_advertiser";
        is_client_paying_invoices: "is_client_paying_invoices";
    }>;
}
