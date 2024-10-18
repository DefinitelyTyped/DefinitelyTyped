import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * Organization
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Organization extends AbstractCrudObject {
    static get Fields(): Readonly<{
        hq_country: "hq_country";
        id: "id";
        legal_entity_name: "legal_entity_name";
        master_bm_id: "master_bm_id";
        owner_business: "owner_business";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<Organization>;
}
