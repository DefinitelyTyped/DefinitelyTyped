import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * OwnedDomain
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OwnedDomain extends AbstractCrudObject {
    static get Fields(): Readonly<{
        domain_name: "domain_name";
        id: "id";
        owner_business: "owner_business";
        status: "status";
        verification_code: "verification_code";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<OwnedDomain>;
}
