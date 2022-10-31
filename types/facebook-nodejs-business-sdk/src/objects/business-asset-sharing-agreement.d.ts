import { AbstractCrudObject } from './../abstract-crud-object';
export default class BusinessAssetSharingAgreement extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get RequestStatus(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<BusinessAssetSharingAgreement>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<BusinessAssetSharingAgreement>;
}
