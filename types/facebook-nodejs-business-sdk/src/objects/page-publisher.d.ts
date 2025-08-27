import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PagePublisher
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PagePublisher extends AbstractCrudObject {
    static get Fields(): Readonly<{
        global_parent_id: "global_parent_id";
        icon: "icon";
        id: "id";
        name: "name";
        url: "url";
    }>;
}
