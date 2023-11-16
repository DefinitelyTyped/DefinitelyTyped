import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdCampaignLearningStageInfo
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCampaignLearningStageInfo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        attribution_windows: "attribution_windows";
        conversions: "conversions";
        last_sig_edit_ts: "last_sig_edit_ts";
        status: "status";
    }>;
}
