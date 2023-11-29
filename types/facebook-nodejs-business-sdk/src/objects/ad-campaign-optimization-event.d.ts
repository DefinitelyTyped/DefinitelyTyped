import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdCampaignOptimizationEvent
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCampaignOptimizationEvent extends AbstractCrudObject {
    static get Fields(): Readonly<{
        custom_conversion_id: "custom_conversion_id";
        event_sequence: "event_sequence";
        event_type: "event_type";
    }>;
}
