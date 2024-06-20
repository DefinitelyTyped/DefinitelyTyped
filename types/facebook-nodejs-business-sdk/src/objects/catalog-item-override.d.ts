import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CatalogItemOverride

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CatalogItemOverride extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<CatalogItemOverride>;
}
