import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdExportPreset

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdExportPreset extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdExportPreset>;
}
