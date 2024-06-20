import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessObjectTransferOwnershipAgreement

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessObjectTransferOwnershipAgreement extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<BusinessObjectTransferOwnershipAgreement>;
}
