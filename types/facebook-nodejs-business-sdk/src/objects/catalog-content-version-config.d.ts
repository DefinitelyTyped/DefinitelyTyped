import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CatalogContentVersionConfig
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CatalogContentVersionConfig extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        name: "name";
        version: "version";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<CatalogContentVersionConfig>;
}
