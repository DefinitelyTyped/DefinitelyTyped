import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * OfflineConversionDataSetActivities
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OfflineConversionDataSetActivities extends AbstractCrudObject {
    static get Fields(): Readonly<{
        actor_id: "actor_id";
        actor_name: "actor_name";
        adaccount_id: "adaccount_id";
        adaccount_name: "adaccount_name";
        event_time: "event_time";
        event_type: "event_type";
        extra_data: "extra_data";
        object_id: "object_id";
        object_name: "object_name";
    }>;
}
