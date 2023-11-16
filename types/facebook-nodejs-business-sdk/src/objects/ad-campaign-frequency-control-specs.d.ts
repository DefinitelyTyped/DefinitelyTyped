import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdCampaignFrequencyControlSpecs
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCampaignFrequencyControlSpecs extends AbstractCrudObject {
    static get Fields(): Readonly<{
        event: "event";
        interval_days: "interval_days";
        max_frequency: "max_frequency";
    }>;
}
