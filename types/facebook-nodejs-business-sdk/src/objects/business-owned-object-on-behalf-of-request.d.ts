import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessOwnedObjectOnBehalfOfRequest
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessOwnedObjectOnBehalfOfRequest extends AbstractCrudObject {
    static get Fields(): Readonly<{
        business_owned_object: "business_owned_object";
        id: "id";
        receiving_business: "receiving_business";
        requesting_business: "requesting_business";
        status: "status";
    }>;
    static get Status(): Readonly<{
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
    get(fields: string[], params?: Record<string, any>): Promise<BusinessOwnedObjectOnBehalfOfRequest>;
}
