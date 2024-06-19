import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessAssetSharingAgreement
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessAssetSharingAgreement extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get RequestStatus(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): BusinessAssetSharingAgreement;
    update(fields: Array<string>, params?: Record<string, any>): BusinessAssetSharingAgreement;
}
