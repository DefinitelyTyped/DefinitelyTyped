import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * LeadGenThankYouPage
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenThankYouPage extends AbstractCrudObject {
    static get Fields(): Readonly<{
        body: "body";
        business_phone_number: "business_phone_number";
        button_text: "button_text";
        button_type: "button_type";
        country_code: "country_code";
        enable_messenger: "enable_messenger";
        id: "id";
        lead_gen_use_case: "lead_gen_use_case";
        status: "status";
        title: "title";
        website_url: "website_url";
    }>;
}
