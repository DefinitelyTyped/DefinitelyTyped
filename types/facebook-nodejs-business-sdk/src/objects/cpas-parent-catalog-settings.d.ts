import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CPASParentCatalogSettings

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CPASParentCatalogSettings extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<CPASParentCatalogSettings>;
}
