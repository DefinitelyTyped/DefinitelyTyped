import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessSettingLogsData
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessSettingLogsData extends AbstractCrudObject {
    static get Fields(): Readonly<{
        actor: "actor";
        event_object: "event_object";
        event_time: "event_time";
        event_type: "event_type";
        extra_data: "extra_data";
    }>;
}
