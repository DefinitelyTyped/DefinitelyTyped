import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * DynamicContentSet
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DynamicContentSet extends AbstractCrudObject {
    static get Fields(): Readonly<{
        business_id: "business_id";
        id: "id";
        name: "name";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<DynamicContentSet>;
}
