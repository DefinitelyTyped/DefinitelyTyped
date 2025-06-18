import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PublisherWhiteList
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PublisherWhiteList extends AbstractCrudObject {
    static get Fields(): Readonly<{
        business_owner_id: "business_owner_id";
        id: "id";
        last_updated_time: "last_updated_time";
        last_updated_user: "last_updated_user";
        name: "name";
        placement_type: "placement_type";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<PublisherWhiteList>;
}
