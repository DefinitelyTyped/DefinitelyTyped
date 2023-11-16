import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * LeadGenPostSubmissionCheckResult
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenPostSubmissionCheckResult extends AbstractCrudObject {
    static get Fields(): Readonly<{
        api_call_result: "api_call_result";
        api_error_message: "api_error_message";
        shown_thank_you_page: "shown_thank_you_page";
    }>;
}
