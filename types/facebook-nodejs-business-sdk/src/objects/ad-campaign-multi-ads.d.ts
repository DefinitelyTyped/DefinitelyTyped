import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCampaignMultiAds
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCampaignMultiAds extends AbstractCrudObject {
    static get Fields(): Readonly<{
        enroll_status: "enroll_status";
        source_type: "source_type";
    }>;
}
