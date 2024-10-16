import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessObjectTransferOwnershipAgreement
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessObjectTransferOwnershipAgreement extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        receiving_business: "receiving_business";
        requesting_business: "requesting_business";
        status: "status";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<BusinessObjectTransferOwnershipAgreement>;
}
