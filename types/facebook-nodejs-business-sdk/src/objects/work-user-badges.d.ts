import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WorkUserBadges
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WorkUserBadges extends AbstractCrudObject {
    static get Fields(): Readonly<{
        category: "category";
        description: "description";
        icon: "icon";
        id: "id";
        name: "name";
    }>;
}
