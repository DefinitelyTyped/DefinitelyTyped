import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeMarketingMessageStructuredSpec
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeMarketingMessageStructuredSpec extends AbstractCrudObject {
    static get Fields(): Readonly<{
        buttons: "buttons";
        footer: "footer";
        greeting: "greeting";
        language: "language";
        referenced_adgroup_id: "referenced_adgroup_id";
        whats_app_business_phone_number_id: "whats_app_business_phone_number_id";
    }>;
}
