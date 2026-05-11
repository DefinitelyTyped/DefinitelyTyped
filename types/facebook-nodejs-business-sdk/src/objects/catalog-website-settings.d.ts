import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CatalogWebsiteSettings
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CatalogWebsiteSettings extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        is_allowed_to_crawl: "is_allowed_to_crawl";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<CatalogWebsiteSettings>;
}
