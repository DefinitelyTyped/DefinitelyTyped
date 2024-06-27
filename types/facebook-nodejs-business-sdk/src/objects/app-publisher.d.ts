import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AppPublisher
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AppPublisher extends AbstractCrudObject {
    static get Fields(): Readonly<{
        content_id: "content_id";
        icon_url: "icon_url";
        id: "id";
        name: "name";
        platform: "platform";
        store_name: "store_name";
        store_url: "store_url";
    }>;
}
