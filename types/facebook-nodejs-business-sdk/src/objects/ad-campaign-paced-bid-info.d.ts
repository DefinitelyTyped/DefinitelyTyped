import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdCampaignPacedBidInfo
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCampaignPacedBidInfo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        bidding_status: "bidding_status";
    }>;
}
