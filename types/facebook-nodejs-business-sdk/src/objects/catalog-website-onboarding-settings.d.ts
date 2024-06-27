import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CatalogWebsiteOnboardingSettings
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CatalogWebsiteOnboardingSettings extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        status: "status";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<CatalogWebsiteOnboardingSettings>;
}
