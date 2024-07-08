import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CustomConversionActivities
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomConversionActivities extends AbstractCrudObject {
    static get Fields(): Readonly<{
        app_id: "app_id";
        data: "data";
        event_type: "event_type";
        timestamp: "timestamp";
    }>;
}
