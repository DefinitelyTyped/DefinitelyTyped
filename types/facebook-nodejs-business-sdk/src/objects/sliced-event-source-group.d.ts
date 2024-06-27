import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * SlicedEventSourceGroup
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class SlicedEventSourceGroup extends AbstractCrudObject {
    static get Fields(): Readonly<{
        event_source_group: "event_source_group";
        filter: "filter";
        id: "id";
        name: "name";
    }>;
    get(fields: Array<string>, params?: Record<string, any>): SlicedEventSourceGroup;
}
