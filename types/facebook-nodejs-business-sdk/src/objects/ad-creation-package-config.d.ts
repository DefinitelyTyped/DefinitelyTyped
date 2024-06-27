import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreationPackageConfig
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreationPackageConfig extends AbstractCrudObject {
    static get Fields(): Readonly<{
        api_version: "api_version";
        id: "id";
        is_eligible_for_default_opt_in: "is_eligible_for_default_opt_in";
        objective: "objective";
        package_id: "package_id";
        status: "status";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<AdCreationPackageConfig>;
}
