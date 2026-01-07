import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountLiveVideoAdvertiser
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountLiveVideoAdvertiser extends AbstractCrudObject {
    static get Fields(): Readonly<{
        is_lva_toggle_on: "is_lva_toggle_on";
        lva_default_budget: "lva_default_budget";
        should_default_current_live: "should_default_current_live";
        should_default_scheduled_live: "should_default_scheduled_live";
        should_show_lva_toggle: "should_show_lva_toggle";
    }>;
}
