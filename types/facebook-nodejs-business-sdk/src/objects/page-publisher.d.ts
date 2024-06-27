import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PagePublisher
 * @extends AbstractCrudObject
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
