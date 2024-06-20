import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreationPackageConfig

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreationPackageConfig extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdCreationPackageConfig>;
}
