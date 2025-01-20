import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WhatsAppBusinessPartnerClientVerificationSubmission
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WhatsAppBusinessPartnerClientVerificationSubmission extends AbstractCrudObject {
    static get Fields(): Readonly<{
        client_business_id: "client_business_id";
        id: "id";
        rejection_reasons: "rejection_reasons";
        submitted_info: "submitted_info";
        submitted_time: "submitted_time";
        update_time: "update_time";
        verification_status: "verification_status";
    }>;
    static get RejectionReasons(): Readonly<{
        address_not_matching: "ADDRESS_NOT_MATCHING";
        legal_name_not_matching: "LEGAL_NAME_NOT_MATCHING";
        none: "NONE";
        website_not_matching: "WEBSITE_NOT_MATCHING";
    }>;
    static get VerificationStatus(): Readonly<{
        approved: "APPROVED";
        failed: "FAILED";
        pending: "PENDING";
        revoked: "REVOKED";
    }>;
}
