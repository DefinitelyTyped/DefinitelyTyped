import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * MCExperienceConfigForApi
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MCExperienceConfigForApi extends AbstractCrudObject {
    static get Fields(): Readonly<{
        is_campaign_enabled: "is_campaign_enabled";
        is_terms_signed: "is_terms_signed";
        merchant_type: "merchant_type";
    }>;
}
