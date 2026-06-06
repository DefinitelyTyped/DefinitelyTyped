import { AbstractCrudObject } from "./../abstract-crud-object";
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
        canceled: "CANCELED";
        decline: "DECLINE";
        expired: "EXPIRED";
        in_progress: "IN_PROGRESS";
        mma_direct_assets_approved: "MMA_DIRECT_ASSETS_APPROVED";
        mma_direct_assets_declined: "MMA_DIRECT_ASSETS_DECLINED";
        mma_direct_assets_expired: "MMA_DIRECT_ASSETS_EXPIRED";
        mma_direct_assets_pending: "MMA_DIRECT_ASSETS_PENDING";
        pending: "PENDING";
        pending_email_verification: "PENDING_EMAIL_VERIFICATION";
        pending_integrity_review: "PENDING_INTEGRITY_REVIEW";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<BusinessAssetSharingAgreement>;
    update(fields: string[], params?: Record<string, any>): Promise<BusinessAssetSharingAgreement>;
}
