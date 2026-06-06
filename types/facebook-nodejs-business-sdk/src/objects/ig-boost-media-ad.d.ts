import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * IGBoostMediaAd
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGBoostMediaAd extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_id: "ad_id";
        ad_status: "ad_status";
        id: "id";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<IGBoostMediaAd>;
}
