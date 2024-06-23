import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ReachFrequencyActivity
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ReachFrequencyActivity extends AbstractCrudObject {
    static get Fields(): Readonly<{
        account_id: "account_id";
        campaign_active: "campaign_active";
        campaign_started: "campaign_started";
        creative_uploaded: "creative_uploaded";
        io_approved: "io_approved";
        sf_link: "sf_link";
    }>;
}
