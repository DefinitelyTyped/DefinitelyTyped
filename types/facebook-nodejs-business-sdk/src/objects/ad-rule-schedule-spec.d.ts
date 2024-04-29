import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdRuleScheduleSpec
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRuleScheduleSpec extends AbstractCrudObject {
    static get Fields(): Readonly<{
        schedule: "schedule";
        schedule_type: "schedule_type";
    }>;
}
