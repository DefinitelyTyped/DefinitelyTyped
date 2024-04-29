import { AbstractCrudObject } from './../abstract-crud-object';
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
        decline: "DECLINE";
        expired: "EXPIRED";
        in_progress: "IN_PROGRESS";
        pending: "PENDING";
        pending_email_verification: "PENDING_EMAIL_VERIFICATION";
        pending_integrity_review: "PENDING_INTEGRITY_REVIEW";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<BusinessOwnedObjectOnBehalfOfRequest>;
}
