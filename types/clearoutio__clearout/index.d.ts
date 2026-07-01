/**
 * Clearout Node.js client — a wrapper over the Clearout REST API
 * (https://docs.clearout.io) for real-time and bulk email verification and
 * email discovery.
 *
 * The module export is both callable and constructable:
 *
 * ```js
 * const clearout = require("@clearoutio/clearout")("api-token", { timeout: 5000 });
 * // or
 * import Clearout from "@clearoutio/clearout";
 * const clearout = new Clearout("api-token", { timeout: 5000 });
 * ```
 */
declare const Clearout: Clearout.ClearoutStatic;

declare namespace Clearout {
    /** Optimization strategy for a bulk email verification request. */
    type Optimize = "highest_accuracy" | "fastest_turnaround";

    /**
     * Stringified boolean used by the API for the `ignore_duplicate_file`
     * option (note: this is a string, not a boolean).
     */
    type BooleanString = "true" | "false";

    /** A `"yes"` / `"no"` flag as returned by the verification endpoints. */
    type YesNo = "yes" | "no";

    /** Whether an email address is safe to send to. */
    type SafeToSend = "yes" | "no" | "risky";

    /**
     * Service-level configuration. Every option can be overridden per call when
     * invoking a specific service method.
     */
    interface ClearoutConfig {
        /**
         * Maximum time (in milliseconds) each request can take.
         * @default 130000 // email verifier
         * @default 30000 // email finder
         */
        timeout?: number | undefined;
        /**
         * Bulk email verification optimization strategy.
         * @default "highest_accuracy"
         */
        optimize?: Optimize | undefined;
        /**
         * Ignore the result file even if it has not been downloaded. Used when
         * removing a bulk list.
         * @default false
         */
        ignore_result?: boolean | undefined;
        /**
         * Whether to allow uploading a file whose name and size match a recent
         * upload.
         * @default "false"
         */
        ignore_duplicate_file?: BooleanString | undefined;
        /**
         * For the email finder: whether discovery may continue in the
         * background after the request times out.
         * @default true
         */
        queue?: boolean | undefined;
    }

    /** Parameters for an instant verification / attribute-check request. */
    interface VerifyEmailParams {
        /** Email address to verify. */
        email: string;
        /** Overridable request timeout in milliseconds. */
        timeout?: number | undefined;
    }

    /** Parameters for a bulk email verification request. */
    interface BulkVerifyParams {
        /** Absolute path to the file containing the email addresses to upload. */
        file: string;
        /** Optimization strategy. Defaults to the service-level config. */
        optimize?: Optimize | undefined;
        /** Whether to allow a duplicate file upload. Defaults to the service-level config. */
        ignore_duplicate_file?: BooleanString | undefined;
    }

    /** Parameters for an instant email finder request. */
    interface FindEmailParams {
        /** Name of the person, e.g. `"Tony Stark"`. */
        name: string;
        /** Domain or company name, e.g. `"marvel.com"` or `"Marvel Entertainment"`. */
        domain: string;
        /** Overridable request timeout in milliseconds. */
        timeout?: number | undefined;
        /**
         * Whether email discovery may continue in the background after the
         * request times out. Defaults to the service-level config.
         */
        queue?: boolean | undefined;
    }

    /** Parameters for a bulk email finder request. */
    interface BulkFindParams {
        /** Absolute path to the file containing the people/domains to upload. */
        file: string;
        /** Whether to allow a duplicate file upload. Defaults to the service-level config. */
        ignore_duplicate_file?: BooleanString | undefined;
    }

    /** Parameters that reference a bulk list by id. */
    interface ListIdParams {
        /** Id of the bulk list. */
        list_id: string;
    }

    /** Parameters for removing a bulk list. */
    interface RemoveListParams {
        /** Id of the bulk list to remove. */
        list_id: string;
        /**
         * Ignore the result file even if it has not been downloaded. Defaults
         * to the service-level config.
         */
        ignore_result?: boolean | undefined;
    }

    /** Parameters for querying an instant email finder queue. */
    interface QueueStatusParams {
        /** Queue id received from an instant email finder response. */
        qid: string;
    }

    /** Additional details about an instant verification result. */
    interface VerifySubStatus {
        /** Numeric sub-status code. */
        code: number;
        /** Human-readable sub-status description. */
        desc: string;
    }

    /** Parsed components of the verified email address. */
    interface VerifyDetailInfo {
        /** Local part (account) of the email address. */
        account: string;
        /** Domain part of the email address. */
        domain: string;
    }

    /** Result of an instant email verification. */
    interface InstantVerifyResult {
        /** The verified email address. */
        email_address: string;
        /** Whether the address is safe to send to. */
        safe_to_send: SafeToSend;
        /** Deliverability status, e.g. `"valid"`, `"invalid"`, `"unknown"`. */
        status: string;
        /** ISO timestamp of when the address was verified. */
        verified_on: string;
        /** Time taken to verify, in milliseconds. */
        time_taken: number;
        /** Additional status detail. */
        sub_status: VerifySubStatus;
        /** Parsed components of the email address. */
        detail_info: VerifyDetailInfo;
        /** Blacklists the address or its domain was found on, if any. */
        blacklist_info?: string[] | undefined;
        /** Whether the address is disposable/temporary. */
        disposable: YesNo;
        /** Whether the address belongs to a free email provider. */
        free: YesNo;
        /** Whether the address is a role/group account. */
        role: YesNo;
        /** Whether the address looks gibberish. */
        gibberish: YesNo;
        /** A corrected address when a typo is detected. */
        suggested_email_address?: string | undefined;
        /** Reserved for profile information. */
        profile?: string | null | undefined;
        /** Confidence score. */
        score?: number | undefined;
        /** Bounce classification, when available. */
        bounce_type?: string | undefined;
    }

    /** Result of a catch-all check. */
    interface CatchAllResult {
        email_address: string;
        catchall: YesNo;
        verified_on: string;
        time_taken: number;
    }

    /** Result of a disposable-address check. */
    interface DisposableResult {
        email_address: string;
        disposable: YesNo;
        verified_on: string;
        time_taken: number;
    }

    /** Result of a business-account check. */
    interface BusinessResult {
        email_address: string;
        business_account: YesNo;
        verified_on: string;
        time_taken: number;
    }

    /** Result of a free-account check. */
    interface FreeResult {
        email_address: string;
        free_account: YesNo;
        verified_on: string;
        time_taken: number;
    }

    /** Result of a role-account check. */
    interface RoleResult {
        email_address: string;
        role_account: YesNo;
        verified_on: string;
        time_taken: number;
    }

    /** Result of a gibberish-account check. */
    interface GibberishResult {
        email_address: string;
        gibberish: YesNo;
        verified_on: string;
        time_taken: number;
    }

    /** Result of a bulk verify/find submission. */
    interface BulkListResult {
        /** Id of the created bulk list. */
        list_id: string;
    }

    /** Progress status of a running bulk list. */
    interface ProgressStatusResult {
        /** Progress stage, e.g. `"running"` or `"completed"`. */
        progress_status: string;
        /** Completion percentage for a bulk verify list. */
        percentile?: number | undefined;
        /** Completion percentage for a bulk finder list. */
        percentage?: number | undefined;
    }

    /** Result of a bulk result-download request. */
    interface DownloadResult {
        /** Signed URL to download the result file. */
        url: string;
    }

    /** Result of a bulk list removal / cancellation. */
    interface ListActionResult {
        /** Id of the affected list, when returned. */
        list_id?: string | undefined;
        /** Name of the uploaded file. */
        name: string;
        /** Source of the list, e.g. `"upload"`. */
        source?: string | undefined;
        /** ISO timestamp of when the list was created. */
        created_on?: string | undefined;
    }

    /** A single email discovered by the email finder. */
    interface FoundEmail {
        /** The discovered email address. */
        email_address: string;
        /** Whether the address is a role/group account. */
        role: string;
        /** Whether the address is a business address. */
        business: string;
    }

    /** Company details attached to an email finder result. */
    interface FinderCompany {
        /** Company name. */
        name: string;
    }

    /** Result of an instant email finder or its queue status. */
    interface EmailFinderResult {
        /** Discovered email addresses, ordered by confidence. */
        emails: FoundEmail[];
        /** First name of the person. */
        first_name: string;
        /** Last name of the person. */
        last_name: string;
        /** Full name of the person. */
        full_name: string;
        /** Domain searched. */
        domain: string;
        /** Confidence score of the top match (0-100). */
        confidence_score: number;
        /** Number of addresses discovered. */
        total: number;
        /** Company details. */
        company: FinderCompany;
        /** ISO timestamp of when the address was found. */
        found_on: string;
        /** Queue status, when the result is fetched via `getStatus`. */
        query_status?: string | undefined;
    }

    /** Available credits and quota details for the account. */
    interface CreditsResult {
        /** Total available credits. */
        available_credits: number;
        /** Detailed credit breakdown. */
        credits: {
            /** Currently available credits. */
            available: number;
            /** Subscription details, if any. */
            subs: string | null;
            /** Remaining daily verify limit, if any. */
            available_daily_verify_limit: string | null;
            /** When the daily verify limit resets, if any. */
            reset_daily_verify_limit_date: string | null;
            /** Total credits. */
            total: number;
        };
        /** Threshold at which a low-credit balance is flagged. */
        low_credit_balance_min_threshold: number;
    }

    /** Email verification service, exposed as `clearout.emailVerifier`. */
    interface EmailVerifier {
        /** Instantly verify a single email address. */
        verify(params: VerifyEmailParams): Promise<InstantVerifyResult>;
        /** Verify email addresses in bulk by uploading a file. */
        bulkVerify(params: BulkVerifyParams): Promise<BulkListResult>;
        /** Get the progress status of a bulk verify request. */
        getBulkVerifyProgressStatus(params: ListIdParams): Promise<ProgressStatusResult>;
        /** Get the signed download URL for a completed bulk verify result. */
        downloadBulkVerifyResult(params: ListIdParams): Promise<DownloadResult>;
        /** Remove a bulk verify list. */
        removeBulkVerifyList(params: RemoveListParams): Promise<ListActionResult>;
        /** Cancel a running bulk verify list. */
        cancelBulkVerifyList(params: ListIdParams): Promise<ListActionResult>;
        /** Check whether an address belongs to a catch-all domain. */
        isCatchAllEmail(params: VerifyEmailParams): Promise<CatchAllResult>;
        /** Check whether an address is disposable/temporary. */
        isDisposableEmail(params: VerifyEmailParams): Promise<DisposableResult>;
        /** Check whether an address belongs to a business account. */
        isBusinessEmail(params: VerifyEmailParams): Promise<BusinessResult>;
        /** Check whether an address belongs to a free email provider. */
        isFreeEmail(params: VerifyEmailParams): Promise<FreeResult>;
        /** Check whether an address is a role/group account. */
        isRoleEmail(params: VerifyEmailParams): Promise<RoleResult>;
        /** Check whether an address looks gibberish. */
        isGibberishEmail(params: VerifyEmailParams): Promise<GibberishResult>;
    }

    /** Email finder service, exposed as `clearout.emailFinder`. */
    interface EmailFinder {
        /** Instantly discover a person's email address. */
        find(params: FindEmailParams): Promise<EmailFinderResult>;
        /** Get the status of a queued instant email finder request. */
        getStatus(params: QueueStatusParams): Promise<EmailFinderResult>;
        /** Discover email addresses in bulk by uploading a file. */
        bulkFind(params: BulkFindParams): Promise<BulkListResult>;
        /** Get the progress status of a bulk find request. */
        getBulkFindProgressStatus(params: ListIdParams): Promise<ProgressStatusResult>;
        /** Get the signed download URL for a completed bulk find result. */
        downloadBulkFindResult(params: ListIdParams): Promise<DownloadResult>;
        /** Remove a bulk find list. */
        removeBulkFindList(params: RemoveListParams): Promise<ListActionResult>;
        /** Cancel a running bulk find list. */
        cancelBulkFinderList(params: ListIdParams): Promise<ListActionResult>;
    }

    /** A configured Clearout client instance. */
    interface ClearoutClient {
        /** Email verification service. */
        emailVerifier: EmailVerifier;
        /** Email finder service. */
        emailFinder: EmailFinder;
        /** Get the account's available credits. */
        getCredits(): Promise<CreditsResult>;
    }

    /**
     * The module export. Call it as a function or with `new` to create a
     * {@link ClearoutClient}.
     */
    interface ClearoutStatic {
        /**
         * Create a client instance.
         * @param token Clearout server-app API token.
         * @param config Optional service-level configuration.
         */
        (token: string, config?: ClearoutConfig): ClearoutClient;
        /**
         * Create a client instance.
         * @param token Clearout server-app API token.
         * @param config Optional service-level configuration.
         */
        new(token: string, config?: ClearoutConfig): ClearoutClient;
        /** Self-reference exposed for interop with ES-module default imports. */
        default: ClearoutStatic;
    }
}

export = Clearout;
