import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdRuleSchedule
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRuleSchedule extends AbstractCrudObject {
    static get Fields(): Readonly<{
        days: "days";
        end_minute: "end_minute";
        start_minute: "start_minute";
    }>;
}
