import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * PlaceTopic
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PlaceTopic extends AbstractCrudObject {
    static get Fields(): Readonly<{
        count: "count";
        has_children: "has_children";
        icon_url: "icon_url";
        id: "id";
        name: "name";
        parent_ids: "parent_ids";
        plural_name: "plural_name";
        top_subtopic_names: "top_subtopic_names";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<PlaceTopic>;
}
