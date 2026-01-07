import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ShadowIGUserPartnershipAdsMediaErrors
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ShadowIGUserPartnershipAdsMediaErrors extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_code: "ad_code";
        error_codes: "error_codes";
        errors: "errors";
        permalink: "permalink";
    }>;
}
