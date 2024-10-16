import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdExportPreset
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdExportPreset extends AbstractCrudObject {
    static get Fields(): Readonly<{
        created_time: "created_time";
        fields: "fields";
        id: "id";
        name: "name";
        owner: "owner";
        updated_time: "updated_time";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<AdExportPreset>;
}
