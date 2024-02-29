import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AttributionSpec
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AttributionSpec extends AbstractCrudObject {
    static get Fields(): Readonly<{
        event_type: "event_type";
        window_days: "window_days";
    }>;
}
