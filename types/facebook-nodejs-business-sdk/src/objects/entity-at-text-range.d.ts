import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * EntityAtTextRange
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class EntityAtTextRange extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        length: "length";
        name: "name";
        object: "object";
        offset: "offset";
        type: "type";
    }>;
    static get Type(): Readonly<{
        application: "application";
        event: "event";
        group: "group";
        page: "page";
        user: "user";
    }>;
}
