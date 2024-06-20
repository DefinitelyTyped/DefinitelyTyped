import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CatalogSmartPixelSettings

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CatalogSmartPixelSettings extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<CatalogSmartPixelSettings>;
}
