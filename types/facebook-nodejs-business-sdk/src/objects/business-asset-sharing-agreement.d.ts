import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * BusinessAssetSharingAgreement
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessAssetSharingAgreement extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        initiator: "initiator";
        recipient: "recipient";
        relationship_type: "relationship_type";
        request_status: "request_status";
        request_type: "request_type";
    }>;
    static get RequestStatus(): Readonly<{
        approve: "APPROVE";
        decline: "DECLINE";
        expired: "EXPIRED";
        in_progress: "IN_PROGRESS";
        pending: "PENDING";
        pending_email_verification: "PENDING_EMAIL_VERIFICATION";
        pending_integrity_review: "PENDING_INTEGRITY_REVIEW";
    }>;
    get(fields: Array<string>, params?: Record<any, any>): BusinessAssetSharingAgreement;
    update(fields: Array<string>, params?: Record<any, any>): BusinessAssetSharingAgreement;
}
