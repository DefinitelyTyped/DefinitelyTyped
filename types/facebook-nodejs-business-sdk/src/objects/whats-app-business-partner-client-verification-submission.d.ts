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
        business_not_eligible: "BUSINESS_NOT_ELIGIBLE";
        legal_name_not_found_in_documents: "LEGAL_NAME_NOT_FOUND_IN_DOCUMENTS";
        legal_name_not_matching: "LEGAL_NAME_NOT_MATCHING";
        malformed_documents: "MALFORMED_DOCUMENTS";
        none: "NONE";
        website_not_matching: "WEBSITE_NOT_MATCHING";
    }>;
    static get VerificationStatus(): Readonly<{
        approved: "APPROVED";
        discarded: "DISCARDED";
        failed: "FAILED";
        pending: "PENDING";
        revoked: "REVOKED";
    }>;
}
