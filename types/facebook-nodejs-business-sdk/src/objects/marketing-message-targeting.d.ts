import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * MarketingMessageTargeting
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MarketingMessageTargeting extends AbstractCrudObject {
    static get Fields(): Readonly<{
        automation_type: "automation_type";
        delay_send_time_second: "delay_send_time_second";
        delay_send_time_unit: "delay_send_time_unit";
        subscriber_lists: "subscriber_lists";
        targeting_rules: "targeting_rules";
    }>;
}
