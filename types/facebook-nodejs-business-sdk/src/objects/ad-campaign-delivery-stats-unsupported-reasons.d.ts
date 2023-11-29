import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdCampaignDeliveryStatsUnsupportedReasons
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCampaignDeliveryStatsUnsupportedReasons extends AbstractCrudObject {
    static get Fields(): Readonly<{
        reason_data: "reason_data";
        reason_type: "reason_type";
    }>;
}
