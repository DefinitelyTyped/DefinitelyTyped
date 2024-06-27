import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdLightAdgroup
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdLightAdgroup extends AbstractCrudObject {
    static get Fields(): Readonly<{
        adset_id: "adset_id";
        id: "id";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<AdLightAdgroup>;
}
