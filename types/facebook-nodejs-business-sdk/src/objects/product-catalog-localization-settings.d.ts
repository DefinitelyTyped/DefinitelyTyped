import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductCatalogLocalizationSettings
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalogLocalizationSettings extends AbstractCrudObject {
    static get Fields(): Readonly<{
        default_country: "default_country";
        default_language: "default_language";
        id: "id";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<ProductCatalogLocalizationSettings>;
}
