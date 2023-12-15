import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * JobOpening
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class JobOpening extends AbstractCrudObject {
    static get Fields(): Readonly<{
        address: "address";
        application_callback_url: "application_callback_url";
        created_time: "created_time";
        description: "description";
        errors: "errors";
        external_company_facebook_url: "external_company_facebook_url";
        external_company_full_address: "external_company_full_address";
        external_company_id: "external_company_id";
        external_company_name: "external_company_name";
        external_id: "external_id";
        id: "id";
        job_status: "job_status";
        latitude: "latitude";
        longitude: "longitude";
        offsite_application_url: "offsite_application_url";
        page: "page";
        photo: "photo";
        platform_review_status: "platform_review_status";
        post: "post";
        remote_type: "remote_type";
        review_rejection_reasons: "review_rejection_reasons";
        title: "title";
        type: "type";
    }>;
    static get JobStatus(): Readonly<{
        closed: "CLOSED";
        draft: "DRAFT";
        open: "OPEN";
        provisional: "PROVISIONAL";
    }>;
    static get PlatformReviewStatus(): Readonly<{
        approved: "APPROVED";
        pending: "PENDING";
        rejected: "REJECTED";
    }>;
    static get ReviewRejectionReasons(): Readonly<{
        adult_content: "ADULT_CONTENT";
        discrimination: "DISCRIMINATION";
        drugs: "DRUGS";
        generic_default: "GENERIC_DEFAULT";
        illegal: "ILLEGAL";
        impersonation: "IMPERSONATION";
        misleading: "MISLEADING";
        multilevel_marketing: "MULTILEVEL_MARKETING";
        personal_info: "PERSONAL_INFO";
        sexual: "SEXUAL";
    }>;
    static get Type(): Readonly<{
        contract: "CONTRACT";
        full_time: "FULL_TIME";
        internship: "INTERNSHIP";
        part_time: "PART_TIME";
        volunteer: "VOLUNTEER";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<JobOpening>;
}
