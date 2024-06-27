import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessTag
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessTag extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        name: "name";
    }>;
    get(fields: Array<string>, params?: Record<string, any>): BusinessTag;
}
