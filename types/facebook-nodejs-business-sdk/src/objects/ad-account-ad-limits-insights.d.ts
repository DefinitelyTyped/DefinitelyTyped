import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountAdLimitsInsights
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountAdLimitsInsights extends AbstractCrudObject {
    static get Fields(): Readonly<{
        date_start: "date_start";
        date_stop: "date_stop";
    }>;
}
