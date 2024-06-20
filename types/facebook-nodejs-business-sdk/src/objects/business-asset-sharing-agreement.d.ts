import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessAssetSharingAgreement

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessAssetSharingAgreement extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get RequestStatus(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<BusinessAssetSharingAgreement>;    get(fields: string[], params?: Record<string, any>): Promise<BusinessAssetSharingAgreement>;
}
