import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CatalogItemOverride
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CatalogItemOverride extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        local_info: "local_info";
        override_type: "override_type";
        override_value: "override_value";
    }>;
    get(fields: Array<string>, params?: Record<string, any>): CatalogItemOverride;
}
