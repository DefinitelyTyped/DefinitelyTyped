import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PageMessageResponsivenessMetrics
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageMessageResponsivenessMetrics extends AbstractCrudObject {
    static get Fields(): Readonly<{
        is_very_responsive: "is_very_responsive";
        response_rate: "response_rate";
        response_time: "response_time";
    }>;
}
