import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CPASParentCatalogSettings
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CPASParentCatalogSettings extends AbstractCrudObject {
    static get Fields(): Readonly<{
        attribution_windows: "attribution_windows";
        default_currency: "default_currency";
        disable_use_as_parent_catalog: "disable_use_as_parent_catalog";
        id: "id";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<CPASParentCatalogSettings>;
}
