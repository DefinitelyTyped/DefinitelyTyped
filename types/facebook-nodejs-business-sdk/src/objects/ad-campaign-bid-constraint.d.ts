import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdCampaignBidConstraint
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCampaignBidConstraint extends AbstractCrudObject {
    static get Fields(): Readonly<{
        roas_average_floor: "roas_average_floor";
    }>;
}
