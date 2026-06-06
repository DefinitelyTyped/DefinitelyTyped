import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BrandSafetyCampaignConfig
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BrandSafetyCampaignConfig extends AbstractCrudObject {
    static get Fields(): Readonly<{
        comment_moderation_filter: "comment_moderation_filter";
    }>;
}
