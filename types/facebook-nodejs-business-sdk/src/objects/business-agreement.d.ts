import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessAgreement
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessAgreement extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        request_status: "request_status";
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
    get(fields: string[], params?: Record<string, any>): Promise<BusinessAgreement>;
    update(fields: string[], params?: Record<string, any>): Promise<BusinessAgreement>;
}
