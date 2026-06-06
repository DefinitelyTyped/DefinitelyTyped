import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AppOptimizedCustomEvents
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AppOptimizedCustomEvents extends AbstractCrudObject {
    static get Fields(): Readonly<{
        app_id: "app_id";
        app_name: "app_name";
        event_names: "event_names";
    }>;
}
