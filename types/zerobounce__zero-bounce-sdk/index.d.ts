declare namespace ZeroBounceSDK {
    interface EmailBatchItem {
        email_address: string;
    }

    interface SendFilePayload {
        /** csv or txt file. Byte array contents for the submitted file. The content's header is type of "text/csv". */
        file: File | Blob;

        /** The column index of the email address in the file. Index starts from 1 */
        email_address_column: number;

        /** The URL will be used to call back when the validation is completed */
        return_url?: string;

        /** The column index of the first name column */
        first_name_column?: number;

        /** The column index of the last name column */
        last_name_column?: number;

        /** The column index of the gender column */
        gender_column?: number;

        /** The column index of the IP address the email signed up from */
        ip_address_column?: number;

        /** Whether the first row from the submitted file is a header row */
        has_header_row?: boolean;

        /** Whether to remove duplicate emails (default: true). Returns 400 error if >50% duplicates removed */
        remove_duplicate?: boolean;
    }

    interface FileErrorResponse {
        /** Indicates the file upload failed */
        success: false;
        /** Error message describing the failure */
        error_message: string;
    }

    type SendFileResponse =
        | {
            /** Indicates the file was successfully accepted */
            success: true;
            /** Success message */
            message: string;
            /** Name of the uploaded file */
            file_name: string;
            /** Unique identifier for the uploaded file */
            file_id: string;
        }
        | FileErrorResponse;

    type FileStatusResponse =
        | {
            /** Indicates the request was successful */
            success: true;
            /** Unique identifier for the file */
            file_id: string;
            /** Name of the file */
            file_name: string;
            /** Upload date in ISO 8601 format */
            upload_date: string;
            /** Current status of the file processing */
            file_status: string;
            /** Percentage of file processing completed */
            complete_percentage: string;
            /** Return URL provided when calling sendfile API, if any */
            return_url?: string;
        }
        | FileErrorResponse;

    interface GuessFormatPayload {
        domain: string;
        first_name?: string;
        middle_name?: string;
        last_name?: string;
    }

    type GetFileResponse = Blob;

    /**
     * Response from the delete file endpoint
     */
    type DeleteFileResponse =
        | {
            /** Indicates the file was successfully deleted */
            success: true;
            /** Success message */
            message: string;
            /** Name of the deleted file */
            file_name: string;
            /** Unique identifier of the deleted file */
            file_id: string;
        }
        | FileErrorResponse;

    /**
     * Response from the ZeroBounce email validation API
     */
    interface ValidateEmailResponse {
        /** The email address being validated */
        address: string;

        /** Validation status: valid, invalid, catch-all, unknown, spamtrap, abuse, or do_not_mail */
        status:
            | "valid"
            | "invalid"
            | "catch-all"
            | "unknown"
            | "spamtrap"
            | "abuse"
            | "do_not_mail";

        /** Detailed sub-status providing additional context about the validation result */
        sub_status:
            | "alternate"
            | "antispam_system"
            | "greylisted"
            | "mail_server_temporary_error"
            | "forcible_disconnect"
            | "mail_server_did_not_respond"
            | "timeout_exceeded"
            | "failed_smtp_connection"
            | "mailbox_quota_exceeded"
            | "exception_occurred"
            | "possible_trap"
            | "role_based"
            | "global_suppression"
            | "mailbox_not_found"
            | "no_dns_entries"
            | "failed_syntax_check"
            | "possible_typo"
            | "unroutable_ip_address"
            | "leading_period_removed"
            | "does_not_accept_mail"
            | "alias_address"
            | "role_based_catch_all"
            | "disposable"
            | "toxic"
            | "accept_all";

        /** The portion of the email address before the "@" symbol */
        account: string;

        /** The portion of the email address after the "@" symbol */
        domain: string;

        /** Suggested correction for an email typo, if detected */
        did_you_mean: string | null;

        /** Age of the email domain in days, or null if unavailable */
        domain_age_days: number | null;

        /** Last activity date bucket: 30, 60, 90, 180, 365, or 365+ days */
        active_in_days: "30" | "60" | "90" | "180" | "365" | "365+" | null;

        /** Whether the email comes from a free provider */
        free_email: boolean;

        /** Whether the domain has an MX record */
        mx_found: boolean;

        /** The preferred MX record of the domain */
        mx_record: string;

        /** The SMTP provider of the email (BETA feature) */
        smtp_provider: string | null;

        /** First name of the email owner, if available */
        firstname: string | null;

        /** Last name of the email owner, if available */
        lastname: string | null;

        /** Gender of the email owner, if available */
        gender: string | null;

        /** City associated with the IP address passed in */
        city: string | null;

        /** Region/state associated with the IP address passed in */
        region: string | null;

        /** Zipcode associated with the IP address passed in */
        zipcode: string | null;

        /** Country associated with the IP address passed in */
        country: string | null;

        /** UTC timestamp when the email was validated */
        processed_at: string;
    }

    /**
     * Response from the ZeroBounce API usage endpoint
     */
    interface ApiUsageResponse {
        /** Total number of times the API has been called */
        total: number;

        /** Total valid email addresses returned by the API */
        status_valid: number;

        /** Total invalid email addresses returned by the API */
        status_invalid: number;

        /** Total catch-all email addresses returned by the API */
        status_catch_all: number;

        /** Total do not mail email addresses returned by the API */
        status_do_not_mail: number;

        /** Total spamtrap email addresses returned by the API */
        status_spamtrap: number;

        /** Total unknown email addresses returned by the API */
        status_unknown: number;

        /** Total number of times the API has a sub status of "toxic" */
        sub_status_toxic: number;

        /** Total number of times the API has a sub status of "disposable" */
        sub_status_disposable: number;

        /** Total number of times the API has a sub status of "role_based" */
        sub_status_role_based: number;

        /** Total number of times the API has a sub status of "possible_trap" */
        sub_status_possible_trap: number;

        /** Total number of times the API has a sub status of "global_suppression" */
        sub_status_global_suppression: number;

        /** Total number of times the API has a sub status of "timeout_exceeded" */
        sub_status_timeout_exceeded: number;

        /** Total number of times the API has a sub status of "mail_server_temporary_error" */
        sub_status_mail_server_temporary_error: number;

        /** Total number of times the API has a sub status of "mail_server_did_not_respond" */
        sub_status_mail_server_did_not_respond: number;

        /** Total number of times the API has a sub status of "greylisted" */
        sub_status_greylisted: number;

        /** Total number of times the API has a sub status of "antispam_system" */
        sub_status_antispam_system: number;

        /** Total number of times the API has a sub status of "does_not_accept_mail" */
        sub_status_does_not_accept_mail: number;

        /** Total number of times the API has a sub status of "exception_occurred" */
        sub_status_exception_occurred: number;

        /** Total number of times the API has a sub status of "failed_syntax_check" */
        sub_status_failed_syntax_check: number;

        /** Total number of times the API has a sub status of "mailbox_not_found" */
        sub_status_mailbox_not_found: number;

        /** Total number of times the API has a sub status of "unroutable_ip_address" */
        sub_status_unroutable_ip_address: number;

        /** Total number of times the API has a sub status of "possible_typo" */
        sub_status_possible_typo: number;

        /** Total number of times the API has a sub status of "no_dns_entries" */
        sub_status_no_dns_entries: number;

        /** Total role based catch alls the API has a sub status of "role_based_catch_all" */
        sub_status_role_based_catch_all: number;

        /** Total number of times the API has a sub status of "mailbox_quota_exceeded" */
        sub_status_mailbox_quota_exceeded: number;

        /** Total forcible disconnects the API has a sub status of "forcible_disconnect" */
        sub_status_forcible_disconnect: number;

        /** Total failed SMTP connections the API has a sub status of "failed_smtp_connection" */
        sub_status_failed_smtp_connection: number;

        /** Total number times the API has a sub status "mx_forward" */
        sub_status_mx_forward: number;

        /** Start date of query (format: yyyy/mm/dd) */
        start_date: string;

        /** End date of query (format: yyyy/mm/dd) */
        end_date: string;
    }

    interface EmailActivityResponse {
        found: boolean;
        active_in_days: string;
    }

    interface ValidateBatchResponse {
        email_batch: ReadonlyArray<ValidateEmailResponse>;
        errors: ReadonlyArray<{ error: string }>;
    }

    /**
     * Response from the guess format endpoint
     */
    interface GuessFormatResponse {
        /** The guessed email address format */
        email: string;

        /** Confidence level of the guessed email format */
        email_confidence: "high" | "medium" | "low";

        /** The domain used for the guess */
        domain: string;

        /** Company name associated with the domain, if available */
        company_name: string;

        /** Suggested correction if a typo was detected */
        did_you_mean: string;

        /** Reason for failure if the guess was unsuccessful */
        failure_reason: string;
    }
}

declare class ZeroBounceSDK {
    constructor();
    init(apiKey: string): void;
    getCredits(): Promise<{ Credits: string }>;
    validateEmail(
        email: string,
        ipAddress?: string,
    ): Promise<ZeroBounceSDK.ValidateEmailResponse>;
    getApiUsage(startDate: string, endDate: string): Promise<ZeroBounceSDK.ApiUsageResponse>;
    validateBatch(
        emailBatch: ReadonlyArray<ZeroBounceSDK.EmailBatchItem>,
    ): Promise<ZeroBounceSDK.ValidateBatchResponse>;
    getEmailActivity(email: string): Promise<ZeroBounceSDK.EmailActivityResponse>;
    sendFile(payload: ZeroBounceSDK.SendFilePayload): Promise<ZeroBounceSDK.SendFileResponse>;
    sendScoringFile(payload: ZeroBounceSDK.SendFilePayload): Promise<ZeroBounceSDK.SendFileResponse>;
    getFileStatus(fileId: string): Promise<ZeroBounceSDK.FileStatusResponse>;
    getScoringFileStatus(fileId: string): Promise<ZeroBounceSDK.FileStatusResponse>;
    getFile(fileId: string): Promise<ZeroBounceSDK.GetFileResponse>;
    getScoringFile(fileId: string): Promise<ZeroBounceSDK.GetFileResponse>;
    deleteFile(fileId: string): Promise<ZeroBounceSDK.DeleteFileResponse>;
    deleteScoringFile(fileId: string): Promise<ZeroBounceSDK.DeleteFileResponse>;
    guessFormat(payload: ZeroBounceSDK.GuessFormatPayload): Promise<ZeroBounceSDK.GuessFormatResponse>;
}

export = ZeroBounceSDK;
