import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CatalogWebsiteOnboardingSettings
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CatalogWebsiteOnboardingSettings extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        quality_band: "quality_band";
        status: "status";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<CatalogWebsiteOnboardingSettings>;
}
