/* These are the schema definitions stipulated by the Data Standards Body for the admin api. */

/**
 * Percentage availability of the CDR platform over time
 */
export interface AvailabilityMetrics {
    /**
     * Percentage availability of the CDR platform so far for the current calendar month. 0.0 means 0%. 1.0 means 100%.
     */
    currentMonth?: number | null;
    /**
     * Percentage availability of the CDR platform for previous calendar months. The first element indicates the last month and so on. A maximum of twelve entries is required if available. 0.0 means 0%. 1.0 means 100%.
     */
    previousMonths?: number[] | null;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the admin api. */

/**
 * Average response time in seconds, at millisecond resolution, within each performance tier
 */
export interface AverageResponseMetricsV2 {
    /**
     * Average response time for the high priority tier
     */
    highPriority: {
        /**
         * Average response time for current day
         */
        currentDay?: number | null;
        /**
         * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
         */
        previousDays?: number[] | null;
        [k: string]: unknown;
    };
    /**
     * Average response time for the large payload tier
     */
    largePayload: {
        /**
         * Average response time for current day
         */
        currentDay?: number | null;
        /**
         * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
         */
        previousDays?: number[] | null;
        [k: string]: unknown;
    };
    /**
     * Average response time for the large payload tier.  Mandatory for data holders designated for a Shared Responsibility Data Request data cluster
     */
    largeSecondary?: {
        /**
         * Average response time as measured for the primary data holder
         */
        primary: {
            /**
             * Average response time for current day
             */
            currentDay?: number | null;
            /**
             * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
             */
            previousDays?: number[] | null;
            [k: string]: unknown;
        };
        /**
         * Average response time as measured for the secondary data holder
         */
        secondary: {
            /**
             * Average response time for current day
             */
            currentDay?: number | null;
            /**
             * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
             */
            previousDays?: number[] | null;
            [k: string]: unknown;
        };
        [k: string]: unknown;
    } | null;
    /**
     * Average response time for the low priority tier
     */
    lowPriority: {
        /**
         * Average response time for current day
         */
        currentDay?: number | null;
        /**
         * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
         */
        previousDays?: number[] | null;
        [k: string]: unknown;
    };
    /**
     * Average response time for the secondary tier.  Mandatory for data holders designated for a Shared Responsibility Data Request data cluster
     */
    secondary?: {
        /**
         * Average response time as measured for the primary data holder
         */
        primary: {
            /**
             * Average response time for current day
             */
            currentDay?: number | null;
            /**
             * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
             */
            previousDays?: number[] | null;
            [k: string]: unknown;
        };
        /**
         * Average response time as measured for the secondary data holder
         */
        secondary: {
            /**
             * Average response time for current day
             */
            currentDay?: number | null;
            /**
             * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
             */
            previousDays?: number[] | null;
            [k: string]: unknown;
        };
        [k: string]: unknown;
    } | null;
    /**
     * Average response time for the unattended tier
     */
    unattended: {
        /**
         * Average response time for current day
         */
        currentDay?: number | null;
        /**
         * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
         */
        previousDays?: number[] | null;
        [k: string]: unknown;
    };
    /**
     * Average response time for the unauthenticated tier
     */
    unauthenticated: {
        /**
         * Average response time for current day
         */
        currentDay?: number | null;
        /**
         * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
         */
        previousDays?: number[] | null;
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the admin api. */

/**
 * Transactions per second over time
 */
export interface AverageTPSMetrics {
    /**
     * Average TPS for current day
     */
    currentDay?: number | null;
    /**
     * Average TPS for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
     */
    previousDays?: number[] | null;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the admin api. */

/**
 * Average transactions per second over time
 */
export interface AverageTPSMetricsV2 {
    /**
     * Aggregate average transactions per second over time for all endpoints
     */
    aggregate: {
        /**
         * Average TPS for current day. Must be a positive value or zero
         */
        currentDay?: number | null;
        /**
         * Average TPS for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. Values must be a positive or zero
         */
        previousDays?: number[] | null;
        [k: string]: unknown;
    };
    /**
     * Average transactions per second over time for authenticated endpoints
     */
    authenticated: {
        /**
         * Average TPS for current day. Must be a positive value or zero
         */
        currentDay?: number | null;
        /**
         * Average TPS for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. Values must be a positive or zero
         */
        previousDays?: number[] | null;
        [k: string]: unknown;
    };
    /**
     * Average transactions per second over time for unauthenticated endpoints
     */
    unauthenticated: {
        /**
         * Average TPS for current day. Must be a positive value or zero
         */
        currentDay?: number | null;
        /**
         * Average TPS for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. Values must be a positive or zero
         */
        previousDays?: number[] | null;
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the admin api. */

/**
 * Authorisation counts for the data holder
 */
export interface AuthorisationMetricsV2 {
    /**
     * The number of consents flows that were not successfully authorised
     */
    abandonedConsentFlowCount: {
        /**
         * Number of consents flows that were not successfully authorised for the current day
         */
        currentDay?: number | null;
        /**
         * Number of consents flows that were not successfully authorised for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
         */
        previousDays?: number[] | null;
        [k: string]: unknown;
    };
    /**
     * Customer abandonment count per stage of the consent flow.  Note that the aggregated abandonment count for all stages for a period should equal the count in `abandonedConsentFlowCount` for the same period (ie. each abandoned consent should assigned to one, and only one, stage)
     */
    abandonmentsByStage: {
        /**
         * The number of authorisations that completed the interactive flow with the consumer authorising the consent, but the ADR failed to - or was unable to - obtain a refresh or access token using the authorisation code
         */
        failedTokenExchange: {
            /**
             * Number of abandoned consent flows for this stage for the current day
             */
            currentDay?: number | null;
            /**
             * Number of abandoned consent flows for this stage for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
             */
            previousDays?: number[] | null;
            [k: string]: unknown;
        };
        /**
         * The number of authorisations where the customer successfully authenticated with a valid OTP or equivalent but abandoned the process before selecting accounts
         */
        preAccountSelection: {
            /**
             * Number of abandoned consent flows for this stage for the current day
             */
            currentDay?: number | null;
            /**
             * Number of abandoned consent flows for this stage for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
             */
            previousDays?: number[] | null;
            [k: string]: unknown;
        };
        /**
         * The number of authorisations where the customer identified themselves (ie. they successfully identify the customer profile to use for the authorisation) but failed to provide a valid OTP or equivalent
         */
        preAuthentication: {
            /**
             * Number of abandoned consent flows for this stage for the current day
             */
            currentDay?: number | null;
            /**
             * Number of abandoned consent flows for this stage for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
             */
            previousDays?: number[] | null;
            [k: string]: unknown;
        };
        /**
         * The number of authorisations where the customer has passed the account selection step but abandoned the process before approving or rejecting the consent being requested
         */
        preAuthorisation: {
            /**
             * Number of abandoned consent flows for this stage for the current day
             */
            currentDay?: number | null;
            /**
             * Number of abandoned consent flows for this stage for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
             */
            previousDays?: number[] | null;
            [k: string]: unknown;
        };
        /**
         * The number of authorisations that commenced with the data holder but the customer did not successfully identify their profile or user ID
         */
        preIdentification: {
            /**
             * Number of abandoned consent flows for this stage for the current day
             */
            currentDay?: number | null;
            /**
             * Number of abandoned consent flows for this stage for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
             */
            previousDays?: number[] | null;
            [k: string]: unknown;
        };
        /**
         * The number of authorisations where the customer actively rejected the authorisation rather than abandoning the process
         */
        rejected: {
            /**
             * Number of abandoned consent flows for this stage for the current day
             */
            currentDay?: number | null;
            /**
             * Number of abandoned consent flows for this stage for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
             */
            previousDays?: number[] | null;
            [k: string]: unknown;
        };
        [k: string]: unknown;
    };
    /**
     * The number of active ongoing authorisations
     */
    activeAuthorisationCount: {
        /**
         * Active ongoing authorisation count for individual customers
         */
        individual: number;
        /**
         * Active ongoing authorisation count for non-individual customers
         */
        nonIndividual: number;
        [k: string]: unknown;
    };
    /**
     * The number of amended ongoing authorisations
     */
    amendedAuthorisationCount: {
        /**
         * Number of amended authorisations for the current day
         */
        currentDay?: {
            /**
             * Amended authorisation count for individual customers
             */
            individual: number;
            /**
             * Amended authorisation count for non-individual customers
             */
            nonIndividual: number;
            [k: string]: unknown;
        } | null;
        /**
         * Number of amended authorisations for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
         */
        previousDays?:
            | Array<{
                /**
                 * Amended authorisation count for individual customers
                 */
                individual: number;
                /**
                 * Amended authorisation count for non-individual customers
                 */
                nonIndividual: number;
                [k: string]: unknown;
            }>
            | null;
        [k: string]: unknown;
    };
    /**
     * The number of expired ongoing authorisations
     */
    expiredAuthorisationCount: {
        /**
         * Number of expired authorisations for the current day
         */
        currentDay?: {
            /**
             * Expired authorisation count for individual customers
             */
            individual: number;
            /**
             * Expired authorisation count for non-individual customers
             */
            nonIndividual: number;
            [k: string]: unknown;
        } | null;
        /**
         * Number of expired authorisations for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
         */
        previousDays?:
            | Array<{
                /**
                 * Expired authorisation count for individual customers
                 */
                individual: number;
                /**
                 * Expired authorisation count for non-individual customers
                 */
                nonIndividual: number;
                [k: string]: unknown;
            }>
            | null;
        [k: string]: unknown;
    };
    /**
     * The number of new authorisations
     */
    newAuthorisationCount: {
        /**
         * Number of new authorisations for the current day
         */
        currentDay?: {
            /**
             * New authorisation count for once-off authorisations
             */
            onceOff: {
                /**
                 * New authorisation count for individual customers
                 */
                individual: number;
                /**
                 * New authorisation count for non-individual customers
                 */
                nonIndividual: number;
                [k: string]: unknown;
            };
            /**
             * New authorisation count for ongoing authorisations
             */
            ongoing: {
                /**
                 * New authorisation count for individual customers
                 */
                individual: number;
                /**
                 * New authorisation count for non-individual customers
                 */
                nonIndividual: number;
                [k: string]: unknown;
            };
            [k: string]: unknown;
        } | null;
        /**
         * Number of new authorisations for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
         */
        previousDays?:
            | Array<{
                /**
                 * New authorisation count for once-off authorisations
                 */
                onceOff: {
                    /**
                     * New authorisation count for individual customers
                     */
                    individual: number;
                    /**
                     * New authorisation count for non-individual customers
                     */
                    nonIndividual: number;
                    [k: string]: unknown;
                };
                /**
                 * New authorisation count for ongoing authorisations
                 */
                ongoing: {
                    /**
                     * New authorisation count for individual customers
                     */
                    individual: number;
                    /**
                     * New authorisation count for non-individual customers
                     */
                    nonIndividual: number;
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            }>
            | null;
        [k: string]: unknown;
    };
    /**
     * The number of revoked authorisations
     */
    revokedAuthorisationCount: {
        /**
         * Number of revoked authorisations for the current day
         */
        currentDay?: {
            /**
             * Revoked authorisation count for individual customers
             */
            individual: number;
            /**
             * Revoked authorisation count for non-individual customers
             */
            nonIndividual: number;
            [k: string]: unknown;
        } | null;
        /**
         * Number of revoked authorisations for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
         */
        previousDays?:
            | Array<{
                /**
                 * Revoked authorisation count for individual customers
                 */
                individual: number;
                /**
                 * Revoked authorisation count for non-individual customers
                 */
                nonIndividual: number;
                [k: string]: unknown;
            }>
            | null;
        [k: string]: unknown;
    };
    [k: string]: unknown;
}

/**
 * Number of calls resulting in error due to server execution over time
 */
export interface ErrorMetrics {
    /**
     * Number of errors for current day
     */
    currentDay?: number | null;
    /**
     * Number of errors for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
     */
    previousDays?: number[] | null;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the admin api. */

/**
 * Number of calls resulting in error due to server execution over time
 */
export interface ErrorMetricsV2 {
    /**
     * Aggregate number of calls resulting in error due to server execution over time for all endpoints
     */
    aggregate: {
        /**
         * Error counts for current day
         */
        currentDay?: number | null;
        /**
         * Error counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
         */
        previousDays?: number[] | null;
        [k: string]: unknown;
    } | null;
    /**
     * Number of calls resulting in error due to server execution over time for authenticated endpoints
     */
    authenticated: {
        /**
         * Error counts, by HTTP error code, for current day
         */
        currentDay?: {
            /**
             * Number of errors for HTTP error code 500.  Note that this field is an example of a single entry due to the lack of OAS support for the JSON Schema `patternProperties` syntax.  See the `additionalProperties` field in this schema for the generic property structure for error code counts
             */
            "500"?: number | null;
            /**
             * Number of errors for a specific HTTP error code.  Note that the property name must be 3 digits represent the HTTP error code the error is for
             */
            [k: string]: unknown;
        } | null;
        /**
         * Error counts, by HTTP error code, for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
         */
        previousDays?:
            | Array<{
                /**
                 * Number of errors for HTTP error code 500.  Note that this field is an example of a single entry due to the lack of OAS support JSON Schema `patternProperties` syntax.  See the `additionalProperties` field in this schema for the generic property structure for error code counts
                 */
                "500"?: number;
                /**
                 * Number of errors for a specific HTTP error code.  Note that the property name must be 3 digits represent the HTTP error code the error is for
                 */
                [k: string]: unknown;
            }>
            | null;
        [k: string]: unknown;
    };
    /**
     * Number of calls resulting in error due to server execution over time for unauthenticated endpoints
     */
    unauthenticated: {
        /**
         * Error counts, by HTTP error code, for current day
         */
        currentDay?: {
            /**
             * Number of errors for HTTP error code 500.  Note that this field is an example of a single entry due to the lack of OAS support for the JSON Schema `patternProperties` syntax.  See the `additionalProperties` field in this schema for the generic property structure for error code counts
             */
            "500"?: number | null;
            /**
             * Number of errors for a specific HTTP error code.  Note that the property name must be 3 digits represent the HTTP error code the error is for
             */
            [k: string]: unknown;
        } | null;
        /**
         * Error counts, by HTTP error code, for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
         */
        previousDays?:
            | Array<{
                /**
                 * Number of errors for HTTP error code 500.  Note that this field is an example of a single entry due to the lack of OAS support JSON Schema `patternProperties` syntax.  See the `additionalProperties` field in this schema for the generic property structure for error code counts
                 */
                "500"?: number;
                /**
                 * Number of errors for a specific HTTP error code.  Note that the property name must be 3 digits represent the HTTP error code the error is for
                 */
                [k: string]: unknown;
            }>
            | null;
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/**
 * Number of API calls in each performance tier over time
 */
export interface InvocationMetricsV2 {
    /**
     * API call counts for the high priority tier
     */
    highPriority: {
        /**
         * API call counts for current day
         */
        currentDay?: number | null;
        /**
         * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
         */
        previousDays?: number[] | null;
        [k: string]: unknown;
    };
    /**
     * API call counts for the large payload tier
     */
    largePayload: {
        /**
         * API call counts for current day
         */
        currentDay?: number | null;
        /**
         * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
         */
        previousDays?: number[] | null;
        [k: string]: unknown;
    };
    /**
     * API call counts for the large Shared Responsibility Data Requests tier.  Mandatory for data holders designated for a Shared Responsibility Data Request data cluster
     */
    largeSecondary?: {
        /**
         * API call counts for current day
         */
        currentDay?: number | null;
        /**
         * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
         */
        previousDays?: number[] | null;
        [k: string]: unknown;
    } | null;
    /**
     * API call counts for the low priority tier
     */
    lowPriority: {
        /**
         * API call counts for current day
         */
        currentDay?: number | null;
        /**
         * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
         */
        previousDays?: number[] | null;
        [k: string]: unknown;
    };
    /**
     * API call counts for the Shared Responsibility Data Requests tier.  Mandatory for data holders designated for a Shared Responsibility Data Request data cluster
     */
    secondary?: {
        /**
         * API call counts for current day
         */
        currentDay?: number | null;
        /**
         * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
         */
        previousDays?: number[] | null;
        [k: string]: unknown;
    } | null;
    /**
     * API call counts for the unattended tier
     */
    unattended: {
        /**
         * API call counts for current day
         */
        currentDay?: number | null;
        /**
         * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
         */
        previousDays?: number[] | null;
        [k: string]: unknown;
    };
    /**
     * API call counts for the unauthenticated tier
     */
    unauthenticated: {
        /**
         * API call counts for current day
         */
        currentDay?: number | null;
        /**
         * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
         */
        previousDays?: number[] | null;
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the admin api. */

/**
 * Number of API calls in each performance tier over time
 */
export interface InvocationMetricsV3 {
    /**
     * API call counts for the high priority tier
     */
    highPriority: {
        /**
         * API call counts for current day
         */
        currentDay?: number | null;
        /**
         * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
         */
        previousDays?: number[] | null;
        [k: string]: unknown;
    };
    /**
     * API call counts for the large payload tier
     */
    largePayload: {
        /**
         * API call counts for current day
         */
        currentDay?: number | null;
        /**
         * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
         */
        previousDays?: number[] | null;
        [k: string]: unknown;
    };
    /**
     * API call counts for the large Shared Responsibility Data Requests tier.  Mandatory for data holders designated for a Shared Responsibility Data Request data cluster
     */
    largeSecondary?: {
        /**
         * API call counts for current day
         */
        currentDay?: number | null;
        /**
         * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
         */
        previousDays?: number[] | null;
        [k: string]: unknown;
    } | null;
    /**
     * API call counts for the low priority tier
     */
    lowPriority: {
        /**
         * API call counts for current day
         */
        currentDay?: number | null;
        /**
         * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
         */
        previousDays?: number[] | null;
        [k: string]: unknown;
    };
    /**
     * API call counts for the Shared Responsibility Data Requests tier.  Mandatory for data holders designated for a Shared Responsibility Data Request data cluster
     */
    secondary?: {
        /**
         * API call counts for current day
         */
        currentDay?: number | null;
        /**
         * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
         */
        previousDays?: number[] | null;
        [k: string]: unknown;
    } | null;
    /**
     * API call counts for the unattended tier
     */
    unattended: {
        /**
         * API call counts for current day
         */
        currentDay?: number | null;
        /**
         * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
         */
        previousDays?: number[] | null;
        [k: string]: unknown;
    };
    /**
     * API call counts for the unauthenticated tier
     */
    unauthenticated: {
        /**
         * API call counts for current day
         */
        currentDay?: number | null;
        /**
         * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
         */
        previousDays?: number[] | null;
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the admin api. */

export interface Links {
    /**
     * Fully qualified link to this API call
     */
    self: string;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the admin api. */

export interface Meta {
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the admin api. */

/**
 * Additional data for customised error codes
 */
export interface MetaError {
    /**
     * The CDR error code URN which the application-specific error code extends. Mandatory if the error `code` is an application-specific error rather than a standardised error code.
     */
    urn?: string | null;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the admin api. */

/**
 * Maximum record transactions per second over time
 */
export interface PeakTPSMetrics {
    /**
     * Peak TPS for current day
     */
    currentDay?: number | null;
    /**
     * Peak TPS for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
     */
    previousDays?: number[] | null;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the admin api. */

/**
 * Peak transactions per second over time
 */
export interface PeakTPSMetricsV2 {
    /**
     * Aggregate peak transactions per second over time for all endpoints
     */
    aggregate: {
        /**
         * Peak TPS for current day. Must be a positive value or zero
         */
        currentDay?: number | null;
        /**
         * Peak TPS for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. Values must be a positive or zero
         */
        previousDays?: number[] | null;
        [k: string]: unknown;
    };
    /**
     * Peak transactions per second over time for authenticated endpoints
     */
    authenticated: {
        /**
         * Peak TPS for current day. Must be a positive value or zero
         */
        currentDay?: number | null;
        /**
         * Peak TPS for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. Values must be a positive or zero
         */
        previousDays?: number[] | null;
        [k: string]: unknown;
    };
    /**
     * Peak transactions per second over time for unauthenticated endpoints
     */
    unauthenticated: {
        /**
         * Peak TPS for current day. Must be a positive value or zero
         */
        currentDay?: number | null;
        /**
         * Peak TPS for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. Values must be a positive or zero
         */
        previousDays?: number[] | null;
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the admin api. */

/**
 * Percentage of calls within the performance thresholds
 */
export interface PerformanceMetrics {
    /**
     * Percentage of calls within the performance threshold for the current day. 0.0 means 0%. 1.0 means 100%
     */
    currentDay?: number | null;
    /**
     * Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%
     */
    previousDays?: number[] | null;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the admin api. */

/**
 * Percentage of calls within the performance thresholds in each performance tier over time
 */
export interface PerformanceMetricsV3 {
    /**
     * Percentage of calls within the performance thresholds
     */
    aggregate?: {
        /**
         * Percentage of calls within the performance threshold for the current day. 0.0 means 0%. 1.0 means 100%. Must be a positive value or zero
         */
        currentDay?: string | null;
        /**
         * Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero
         */
        previousDays?: string[] | null;
        [k: string]: unknown;
    } | null;
    /**
     * Percentage of high priority calls within the performance thresholds
     */
    highPriority: {
        /**
         * Array of contiguous hourly metrics for the current day.  Each element represents a 1 hour period starting from 12am-1am.  Timezone for determining 12am must be consistent but is at the discretion of the Data Holder
         */
        currentDay?: string[] | null;
        /**
         * Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero
         */
        previousDays?: string[][] | null;
        [k: string]: unknown;
    };
    /**
     * Percentage of large payload calls within the performance thresholds
     */
    largePayload: {
        /**
         * Array of contiguous hourly metrics for the current day.  Each element represents a 1 hour period starting from 12am-1am.  Timezone for determining 12am must be consistent but is at the discretion of the Data Holder
         */
        currentDay?: string[] | null;
        /**
         * Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero
         */
        previousDays?: string[][] | null;
        [k: string]: unknown;
    };
    /**
     * Percentage of large Shared Responsibility calls within the performance thresholds. Mandatory for data holders designated for a Shared Responsibility Data Request data cluster
     */
    largeSecondary?: {
        /**
         * Percentage of large Shared Responsibility calls within the performance thresholds for the secondary data holder
         */
        primary: {
            /**
             * Array of contiguous hourly metrics for the current day.  Each element represents a 1 hour period starting from 12am-1am.  Timezone for determining 12am must be consistent but is at the discretion of the Data Holder
             */
            currentDay?: string[] | null;
            /**
             * Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero
             */
            previousDays?: string[][] | null;
            [k: string]: unknown;
        };
        /**
         * Percentage of large Shared Responsibility calls within the performance thresholds for the secondary data holder
         */
        secondary: {
            /**
             * Array of contiguous hourly metrics for the current day.  Each element represents a 1 hour period starting from 12am-1am.  Timezone for determining 12am must be consistent but is at the discretion of the Data Holder
             */
            currentDay?: string[] | null;
            /**
             * Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero
             */
            previousDays?: string[][] | null;
            [k: string]: unknown;
        };
        [k: string]: unknown;
    } | null;
    /**
     * Percentage of low priority calls within the performance thresholds
     */
    lowPriority: {
        /**
         * Array of contiguous hourly metrics for the current day.  Each element represents a 1 hour period starting from 12am-1am.  Timezone for determining 12am must be consistent but is at the discretion of the Data Holder
         */
        currentDay?: string[] | null;
        /**
         * Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero
         */
        previousDays?: string[][] | null;
        [k: string]: unknown;
    };
    /**
     * Percentage of Shared Responsibility calls within the performance thresholds. Mandatory for data holders designated for a Shared Responsibility Data Request data cluster
     */
    secondary?: {
        /**
         * Percentage of Shared Responsibility calls within the performance thresholds for the primary data holder
         */
        primary: {
            /**
             * Array of contiguous hourly metrics for the current day.  Each element represents a 1 hour period starting from 12am-1am.  Timezone for determining 12am must be consistent but is at the discretion of the Data Holder
             */
            currentDay?: string[] | null;
            /**
             * Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero
             */
            previousDays?: string[][] | null;
            [k: string]: unknown;
        };
        /**
         * Percentage of Shared Responsibility calls within the performance thresholds for the secondary data holder
         */
        secondary: {
            /**
             * Array of contiguous hourly metrics for the current day.  Each element represents a 1 hour period starting from 12am-1am.  Timezone for determining 12am must be consistent but is at the discretion of the Data Holder
             */
            currentDay?: string[] | null;
            /**
             * Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero
             */
            previousDays?: string[][] | null;
            [k: string]: unknown;
        };
        [k: string]: unknown;
    } | null;
    /**
     * Percentage of unattended calls within the performance thresholds
     */
    unattended: {
        /**
         * Array of contiguous hourly metrics for the current day.  Each element represents a 1 hour period starting from 12am-1am.  Timezone for determining 12am must be consistent but is at the discretion of the Data Holder
         */
        currentDay?: string[] | null;
        /**
         * Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero
         */
        previousDays?: string[][] | null;
        [k: string]: unknown;
    };
    /**
     * Percentage of unauthenticated calls within the performance thresholds
     */
    unauthenticated: {
        /**
         * Array of contiguous hourly metrics for the current day.  Each element represents a 1 hour period starting from 12am-1am.  Timezone for determining 12am must be consistent but is at the discretion of the Data Holder
         */
        currentDay?: string[] | null;
        /**
         * Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero
         */
        previousDays?: string[][] | null;
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the admin api. */

/**
 * Number of calls rejected due to traffic thresholds over time
 */
export interface RejectionMetricsV2 {
    /**
     * Rejection counts for all authenticated end points
     */
    authenticated: {
        /**
         * Number of calls rejected for current day
         */
        currentDay?: number | null;
        /**
         * Number of calls rejected for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
         */
        previousDays?: number[] | null;
        [k: string]: unknown;
    };
    /**
     * Rejection counts for all unauthenticated end points
     */
    unauthenticated: {
        /**
         * Number of calls rejected for current day
         */
        currentDay?: number | null;
        /**
         * Number of calls rejected for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
         */
        previousDays?: number[] | null;
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the admin api. */

/**
 * Number of calls rejected due to traffic thresholds over time
 */
export interface RejectionMetricsV3 {
    /**
     * Rejection counts for all authenticated end points
     */
    authenticated: {
        /**
         * Number of calls rejected for current day
         */
        currentDay?: number | null;
        /**
         * Number of calls rejected for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
         */
        previousDays?: number[] | null;
        [k: string]: unknown;
    };
    /**
     * Rejection counts for all unauthenticated end points
     */
    unauthenticated: {
        /**
         * Number of calls rejected for current day
         */
        currentDay?: number | null;
        /**
         * Number of calls rejected for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
         */
        previousDays?: number[] | null;
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the admin api. */

export interface RequestMetaDataUpdate {
    data: {
        /**
         * The action to take for the meta data. At the moment the only option is REFRESH which requires the data holder to call the ACCC to refresh meta data as soon as practicable
         */
        action: "REFRESH";
        [k: string]: unknown;
    };
    meta?: {
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the admin api. */

export interface ResponseErrorListV2 {
    errors: Array<{
        /**
         * The code of the error encountered. Where the error is specific to the respondent, an application-specific error code, expressed as a string value. If the error is application-specific, the URN code that the specific error extends must be provided in the meta object. Otherwise, the value is the error code URN.
         */
        code: string;
        /**
         * A human-readable explanation specific to this occurrence of the problem.
         */
        detail: string;
        /**
         * Additional data for customised error codes
         */
        meta?: {
            /**
             * The CDR error code URN which the application-specific error code extends. Mandatory if the error `code` is an application-specific error rather than a standardised error code.
             */
            urn?: string | null;
            [k: string]: unknown;
        };
        /**
         * A short, human-readable summary of the problem that MUST NOT change from occurrence to occurrence of the problem represented by the error code.
         */
        title: string;
        [k: string]: unknown;
    }>;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the admin api. */

export interface ResponseMetricsListV3 {
    data: {
        /**
         * Percentage availability of the CDR platform over time
         */
        availability: {
            /**
             * Percentage availability of the CDR platform so far for the current calendar month. 0.0 means 0%. 1.0 means 100%.
             */
            currentMonth?: number | null;
            /**
             * Percentage availability of the CDR platform for previous calendar months. The first element indicates the last month and so on. A maximum of twelve entries is required if available. 0.0 means 0%. 1.0 means 100%.
             */
            previousMonths?: number[] | null;
            [k: string]: unknown;
        };
        /**
         * Average response time in seconds, at millisecond resolution, within each performance tier
         */
        averageResponse: {
            /**
             * Average response time for the high priority tier
             */
            highPriority: {
                /**
                 * Average response time for current day
                 */
                currentDay?: number | null;
                /**
                 * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            };
            /**
             * Average response time for the large payload tier
             */
            largePayload: {
                /**
                 * Average response time for current day
                 */
                currentDay?: number | null;
                /**
                 * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            };
            /**
             * Average response time for the large payload tier.  Mandatory for data holders designated for a Shared Responsibility Data Request data cluster
             */
            largeSecondary?: {
                /**
                 * Average response time as measured for the primary data holder
                 */
                primary: {
                    /**
                     * Average response time for current day
                     */
                    currentDay?: number | null;
                    /**
                     * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
                     */
                    previousDays?: number[] | null;
                    [k: string]: unknown;
                };
                /**
                 * Average response time as measured for the secondary data holder
                 */
                secondary: {
                    /**
                     * Average response time for current day
                     */
                    currentDay?: number | null;
                    /**
                     * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
                     */
                    previousDays?: number[] | null;
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            } | null;
            /**
             * Average response time for the low priority tier
             */
            lowPriority: {
                /**
                 * Average response time for current day
                 */
                currentDay?: number | null;
                /**
                 * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            };
            /**
             * Average response time for the secondary tier.  Mandatory for data holders designated for a Shared Responsibility Data Request data cluster
             */
            secondary?: {
                /**
                 * Average response time as measured for the primary data holder
                 */
                primary: {
                    /**
                     * Average response time for current day
                     */
                    currentDay?: number | null;
                    /**
                     * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
                     */
                    previousDays?: number[] | null;
                    [k: string]: unknown;
                };
                /**
                 * Average response time as measured for the secondary data holder
                 */
                secondary: {
                    /**
                     * Average response time for current day
                     */
                    currentDay?: number | null;
                    /**
                     * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
                     */
                    previousDays?: number[] | null;
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            } | null;
            /**
             * Average response time for the unattended tier
             */
            unattended: {
                /**
                 * Average response time for current day
                 */
                currentDay?: number | null;
                /**
                 * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            };
            /**
             * Average response time for the unauthenticated tier
             */
            unauthenticated: {
                /**
                 * Average response time for current day
                 */
                currentDay?: number | null;
                /**
                 * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        /**
         * Transactions per second over time
         */
        averageTps: {
            /**
             * Average TPS for current day
             */
            currentDay?: number | null;
            /**
             * Average TPS for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
             */
            previousDays?: number[] | null;
            [k: string]: unknown;
        };
        /**
         * Number of customers with active authorisations at the time of the call
         */
        customerCount: number;
        /**
         * Number of calls resulting in error due to server execution over time
         */
        errors: {
            /**
             * Number of errors for current day
             */
            currentDay?: number | null;
            /**
             * Number of errors for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
             */
            previousDays?: number[] | null;
            [k: string]: unknown;
        };
        /**
         * Number of API calls in each performance tier over time
         */
        invocations: {
            /**
             * API call counts for the high priority tier
             */
            highPriority: {
                /**
                 * API call counts for current day
                 */
                currentDay?: number | null;
                /**
                 * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            };
            /**
             * API call counts for the large payload tier
             */
            largePayload: {
                /**
                 * API call counts for current day
                 */
                currentDay?: number | null;
                /**
                 * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            };
            /**
             * API call counts for the large Shared Responsibility Data Requests tier.  Mandatory for data holders designated for a Shared Responsibility Data Request data cluster
             */
            largeSecondary?: {
                /**
                 * API call counts for current day
                 */
                currentDay?: number | null;
                /**
                 * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            } | null;
            /**
             * API call counts for the low priority tier
             */
            lowPriority: {
                /**
                 * API call counts for current day
                 */
                currentDay?: number | null;
                /**
                 * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            };
            /**
             * API call counts for the Shared Responsibility Data Requests tier.  Mandatory for data holders designated for a Shared Responsibility Data Request data cluster
             */
            secondary?: {
                /**
                 * API call counts for current day
                 */
                currentDay?: number | null;
                /**
                 * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            } | null;
            /**
             * API call counts for the unattended tier
             */
            unattended: {
                /**
                 * API call counts for current day
                 */
                currentDay?: number | null;
                /**
                 * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            };
            /**
             * API call counts for the unauthenticated tier
             */
            unauthenticated: {
                /**
                 * API call counts for current day
                 */
                currentDay?: number | null;
                /**
                 * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        /**
         * Maximum record transactions per second over time
         */
        peakTps: {
            /**
             * Peak TPS for current day
             */
            currentDay?: number | null;
            /**
             * Peak TPS for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
             */
            previousDays?: number[] | null;
            [k: string]: unknown;
        };
        /**
         * Percentage of calls within the performance thresholds
         */
        performance: {
            /**
             * Percentage of calls within the performance threshold for the current day. 0.0 means 0%. 1.0 means 100%
             */
            currentDay?: number | null;
            /**
             * Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%
             */
            previousDays?: number[] | null;
            [k: string]: unknown;
        };
        /**
         * Number of Data Recipient Software Products with active authorisations at the time of the call
         */
        recipientCount: number;
        /**
         * Number of calls rejected due to traffic thresholds over time
         */
        rejections: {
            /**
             * Rejection counts for all authenticated end points
             */
            authenticated: {
                /**
                 * Number of calls rejected for current day
                 */
                currentDay?: number | null;
                /**
                 * Number of calls rejected for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            };
            /**
             * Rejection counts for all unauthenticated end points
             */
            unauthenticated: {
                /**
                 * Number of calls rejected for current day
                 */
                currentDay?: number | null;
                /**
                 * Number of calls rejected for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        /**
         * The date and time that the metrics in this payload were requested.
         */
        requestTime: string;
        /**
         * Errors and rejections received by the primary data holder from the secondary data holder.  Mandatory for data holders designated for a Shared Responsibility Data Request data cluster
         */
        secondaryHolder?: {
            /**
             * Number of calls resulting in error due to server execution over time
             */
            errors: {
                /**
                 * Number of errors for current day
                 */
                currentDay?: number | null;
                /**
                 * Number of errors for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            };
            /**
             * Number of calls rejected due to traffic thresholds over time
             */
            rejections: {
                /**
                 * Number of rejections for current day
                 */
                currentDay?: number | null;
                /**
                 * Number of rejections for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        /**
         * Session counts over time. Note that a session is defined as the provisioning of an Access Token.
         */
        sessionCount: {
            /**
             * Session count for current day
             */
            currentDay?: number | null;
            /**
             * Session count for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
             */
            previousDays?: number[] | null;
            [k: string]: unknown;
        };
        [k: string]: unknown;
    };
    links: {
        /**
         * Fully qualified link to this API call
         */
        self: string;
        [k: string]: unknown;
    };
    meta?: {
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the admin api. */

export interface ResponseMetricsListV5 {
    data: {
        /**
         * Authorisation counts for the data holder
         */
        authorisations?: {
            /**
             * The number of consents flows that were not successfully authorised
             */
            abandonedConsentFlowCount: {
                /**
                 * Number of consents flows that were not successfully authorised for the current day
                 */
                currentDay?: number | null;
                /**
                 * Number of consents flows that were not successfully authorised for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            };
            /**
             * Customer abandonment count per stage of the consent flow.  Note that the aggregated abandonment count for all stages for a period should equal the count in `abandonedConsentFlowCount` for the same period (ie. each abandoned consent should assigned to one, and only one, stage)
             */
            abandonmentsByStage: {
                /**
                 * The number of authorisations that completed the interactive flow with the consumer authorising the consent, but the ADR failed to - or was unable to - obtain a refresh or access token using the authorisation code
                 */
                failedTokenExchange: {
                    /**
                     * Number of abandoned consent flows for this stage for the current day
                     */
                    currentDay?: number | null;
                    /**
                     * Number of abandoned consent flows for this stage for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
                     */
                    previousDays?: number[] | null;
                    [k: string]: unknown;
                };
                /**
                 * The number of authorisations where the customer successfully authenticated with a valid OTP or equivalent but abandoned the process before selecting accounts
                 */
                preAccountSelection: {
                    /**
                     * Number of abandoned consent flows for this stage for the current day
                     */
                    currentDay?: number | null;
                    /**
                     * Number of abandoned consent flows for this stage for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
                     */
                    previousDays?: number[] | null;
                    [k: string]: unknown;
                };
                /**
                 * The number of authorisations where the customer identified themselves (ie. they successfully identify the customer profile to use for the authorisation) but failed to provide a valid OTP or equivalent
                 */
                preAuthentication: {
                    /**
                     * Number of abandoned consent flows for this stage for the current day
                     */
                    currentDay?: number | null;
                    /**
                     * Number of abandoned consent flows for this stage for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
                     */
                    previousDays?: number[] | null;
                    [k: string]: unknown;
                };
                /**
                 * The number of authorisations where the customer has passed the account selection step but abandoned the process before approving or rejecting the consent being requested
                 */
                preAuthorisation: {
                    /**
                     * Number of abandoned consent flows for this stage for the current day
                     */
                    currentDay?: number | null;
                    /**
                     * Number of abandoned consent flows for this stage for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
                     */
                    previousDays?: number[] | null;
                    [k: string]: unknown;
                };
                /**
                 * The number of authorisations that commenced with the data holder but the customer did not successfully identify their profile or user ID
                 */
                preIdentification: {
                    /**
                     * Number of abandoned consent flows for this stage for the current day
                     */
                    currentDay?: number | null;
                    /**
                     * Number of abandoned consent flows for this stage for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
                     */
                    previousDays?: number[] | null;
                    [k: string]: unknown;
                };
                /**
                 * The number of authorisations where the customer actively rejected the authorisation rather than abandoning the process
                 */
                rejected: {
                    /**
                     * Number of abandoned consent flows for this stage for the current day
                     */
                    currentDay?: number | null;
                    /**
                     * Number of abandoned consent flows for this stage for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
                     */
                    previousDays?: number[] | null;
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            /**
             * The number of active ongoing authorisations
             */
            activeAuthorisationCount: {
                /**
                 * Active ongoing authorisation count for individual customers
                 */
                individual: number;
                /**
                 * Active ongoing authorisation count for non-individual customers
                 */
                nonIndividual: number;
                [k: string]: unknown;
            };
            /**
             * The number of amended ongoing authorisations
             */
            amendedAuthorisationCount: {
                /**
                 * Number of amended authorisations for the current day
                 */
                currentDay?: {
                    /**
                     * Amended authorisation count for individual customers
                     */
                    individual: number;
                    /**
                     * Amended authorisation count for non-individual customers
                     */
                    nonIndividual: number;
                    [k: string]: unknown;
                } | null;
                /**
                 * Number of amended authorisations for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
                 */
                previousDays?:
                    | Array<{
                        /**
                         * Amended authorisation count for individual customers
                         */
                        individual: number;
                        /**
                         * Amended authorisation count for non-individual customers
                         */
                        nonIndividual: number;
                        [k: string]: unknown;
                    }>
                    | null;
                [k: string]: unknown;
            };
            /**
             * The number of expired ongoing authorisations
             */
            expiredAuthorisationCount: {
                /**
                 * Number of expired authorisations for the current day
                 */
                currentDay?: {
                    /**
                     * Expired authorisation count for individual customers
                     */
                    individual: number;
                    /**
                     * Expired authorisation count for non-individual customers
                     */
                    nonIndividual: number;
                    [k: string]: unknown;
                } | null;
                /**
                 * Number of expired authorisations for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
                 */
                previousDays?:
                    | Array<{
                        /**
                         * Expired authorisation count for individual customers
                         */
                        individual: number;
                        /**
                         * Expired authorisation count for non-individual customers
                         */
                        nonIndividual: number;
                        [k: string]: unknown;
                    }>
                    | null;
                [k: string]: unknown;
            };
            /**
             * The number of new authorisations
             */
            newAuthorisationCount: {
                /**
                 * Number of new authorisations for the current day
                 */
                currentDay?: {
                    /**
                     * New authorisation count for once-off authorisations
                     */
                    onceOff: {
                        /**
                         * New authorisation count for individual customers
                         */
                        individual: number;
                        /**
                         * New authorisation count for non-individual customers
                         */
                        nonIndividual: number;
                        [k: string]: unknown;
                    };
                    /**
                     * New authorisation count for ongoing authorisations
                     */
                    ongoing: {
                        /**
                         * New authorisation count for individual customers
                         */
                        individual: number;
                        /**
                         * New authorisation count for non-individual customers
                         */
                        nonIndividual: number;
                        [k: string]: unknown;
                    };
                    [k: string]: unknown;
                } | null;
                /**
                 * Number of new authorisations for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
                 */
                previousDays?:
                    | Array<{
                        /**
                         * New authorisation count for once-off authorisations
                         */
                        onceOff: {
                            /**
                             * New authorisation count for individual customers
                             */
                            individual: number;
                            /**
                             * New authorisation count for non-individual customers
                             */
                            nonIndividual: number;
                            [k: string]: unknown;
                        };
                        /**
                         * New authorisation count for ongoing authorisations
                         */
                        ongoing: {
                            /**
                             * New authorisation count for individual customers
                             */
                            individual: number;
                            /**
                             * New authorisation count for non-individual customers
                             */
                            nonIndividual: number;
                            [k: string]: unknown;
                        };
                        [k: string]: unknown;
                    }>
                    | null;
                [k: string]: unknown;
            };
            /**
             * The number of revoked authorisations
             */
            revokedAuthorisationCount: {
                /**
                 * Number of revoked authorisations for the current day
                 */
                currentDay?: {
                    /**
                     * Revoked authorisation count for individual customers
                     */
                    individual: number;
                    /**
                     * Revoked authorisation count for non-individual customers
                     */
                    nonIndividual: number;
                    [k: string]: unknown;
                } | null;
                /**
                 * Number of revoked authorisations for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
                 */
                previousDays?:
                    | Array<{
                        /**
                         * Revoked authorisation count for individual customers
                         */
                        individual: number;
                        /**
                         * Revoked authorisation count for non-individual customers
                         */
                        nonIndividual: number;
                        [k: string]: unknown;
                    }>
                    | null;
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        /**
         * Availability metrics
         */
        availability: {
            /**
             * Aggregated availability metrics
             */
            aggregate: {
                /**
                 * Percentage availability of the CDR platform so far for the current calendar month. 0.0 means 0%. 1.0 means 100%. Must be a positive value or zero
                 */
                currentMonth?: string | null;
                /**
                 * Percentage availability of the CDR platform for previous calendar months. The first element indicates the last month and so on. A maximum of twelve entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero
                 */
                previousMonths?: string[] | null;
                [k: string]: unknown;
            };
            /**
             * Availability metrics for the authenticated aspects of the CDR regime
             */
            authenticated: {
                /**
                 * Percentage availability of the CDR platform so far for the current calendar month. 0.0 means 0%. 1.0 means 100%. Must be a positive value or zero
                 */
                currentMonth?: string | null;
                /**
                 * Percentage availability of the CDR platform for previous calendar months. The first element indicates the last month and so on. A maximum of twelve entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero
                 */
                previousMonths?: string[] | null;
                [k: string]: unknown;
            };
            /**
             * Availability metrics for the unauthenticated aspects of the CDR regime
             */
            unauthenticated: {
                /**
                 * Percentage availability of the CDR platform so far for the current calendar month. 0.0 means 0%. 1.0 means 100%. Must be a positive value or zero
                 */
                currentMonth?: string | null;
                /**
                 * Percentage availability of the CDR platform for previous calendar months. The first element indicates the last month and so on. A maximum of twelve entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero
                 */
                previousMonths?: string[] | null;
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        /**
         * Average response time in seconds, at millisecond resolution, within each performance tier
         */
        averageResponse: {
            /**
             * Average response time for the high priority tier
             */
            highPriority: {
                /**
                 * Average response time for current day
                 */
                currentDay?: number | null;
                /**
                 * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            };
            /**
             * Average response time for the large payload tier
             */
            largePayload: {
                /**
                 * Average response time for current day
                 */
                currentDay?: number | null;
                /**
                 * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            };
            /**
             * Average response time for the large payload tier.  Mandatory for data holders designated for a Shared Responsibility Data Request data cluster
             */
            largeSecondary?: {
                /**
                 * Average response time as measured for the primary data holder
                 */
                primary: {
                    /**
                     * Average response time for current day
                     */
                    currentDay?: number | null;
                    /**
                     * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
                     */
                    previousDays?: number[] | null;
                    [k: string]: unknown;
                };
                /**
                 * Average response time as measured for the secondary data holder
                 */
                secondary: {
                    /**
                     * Average response time for current day
                     */
                    currentDay?: number | null;
                    /**
                     * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
                     */
                    previousDays?: number[] | null;
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            } | null;
            /**
             * Average response time for the low priority tier
             */
            lowPriority: {
                /**
                 * Average response time for current day
                 */
                currentDay?: number | null;
                /**
                 * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            };
            /**
             * Average response time for the secondary tier.  Mandatory for data holders designated for a Shared Responsibility Data Request data cluster
             */
            secondary?: {
                /**
                 * Average response time as measured for the primary data holder
                 */
                primary: {
                    /**
                     * Average response time for current day
                     */
                    currentDay?: number | null;
                    /**
                     * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
                     */
                    previousDays?: number[] | null;
                    [k: string]: unknown;
                };
                /**
                 * Average response time as measured for the secondary data holder
                 */
                secondary: {
                    /**
                     * Average response time for current day
                     */
                    currentDay?: number | null;
                    /**
                     * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
                     */
                    previousDays?: number[] | null;
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            } | null;
            /**
             * Average response time for the unattended tier
             */
            unattended: {
                /**
                 * Average response time for current day
                 */
                currentDay?: number | null;
                /**
                 * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            };
            /**
             * Average response time for the unauthenticated tier
             */
            unauthenticated: {
                /**
                 * Average response time for current day
                 */
                currentDay?: number | null;
                /**
                 * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        /**
         * Average transactions per second over time
         */
        averageTps: {
            /**
             * Aggregate average transactions per second over time for all endpoints
             */
            aggregate: {
                /**
                 * Average TPS for current day. Must be a positive value or zero
                 */
                currentDay?: number | null;
                /**
                 * Average TPS for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. Values must be a positive or zero
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            };
            /**
             * Average transactions per second over time for authenticated endpoints
             */
            authenticated: {
                /**
                 * Average TPS for current day. Must be a positive value or zero
                 */
                currentDay?: number | null;
                /**
                 * Average TPS for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. Values must be a positive or zero
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            };
            /**
             * Average transactions per second over time for unauthenticated endpoints
             */
            unauthenticated: {
                /**
                 * Average TPS for current day. Must be a positive value or zero
                 */
                currentDay?: number | null;
                /**
                 * Average TPS for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. Values must be a positive or zero
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        /**
         * Number of customers with active authorisations at the time of the call
         */
        customerCount: number;
        /**
         * Number of calls resulting in error due to server execution over time
         */
        errors: {
            /**
             * Aggregate number of calls resulting in error due to server execution over time for all endpoints
             */
            aggregate: {
                /**
                 * Error counts for current day
                 */
                currentDay?: number | null;
                /**
                 * Error counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            };
            /**
             * Number of calls resulting in error due to server execution over time for authenticated endpoints
             */
            authenticated: {
                /**
                 * Error counts, by HTTP error code, for current day
                 */
                currentDay?: {
                    /**
                     * Number of errors for HTTP error code 500.  Note that this field is an example of a single entry due to the lack of OAS support for the JSON Schema `patternProperties` syntax.  See the `additionalProperties` field in this schema for the generic property structure for error code counts
                     */
                    "500"?: number | null;
                    /**
                     * Number of errors for a specific HTTP error code.  Note that the property name must be 3 digits represent the HTTP error code the error is for
                     */
                    [k: string]: unknown;
                } | null;
                /**
                 * Error counts, by HTTP error code, for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
                 */
                previousDays?:
                    | Array<{
                        /**
                         * Number of errors for HTTP error code 500.  Note that this field is an example of a single entry due to the lack of OAS support JSON Schema `patternProperties` syntax.  See the `additionalProperties` field in this schema for the generic property structure for error code counts
                         */
                        "500"?: number;
                        /**
                         * Number of errors for a specific HTTP error code.  Note that the property name must be 3 digits represent the HTTP error code the error is for
                         */
                        [k: string]: unknown;
                    }>
                    | null;
                [k: string]: unknown;
            };
            /**
             * Number of calls resulting in error due to server execution over time for unauthenticated endpoints
             */
            unauthenticated: {
                /**
                 * Error counts, by HTTP error code, for current day
                 */
                currentDay?: {
                    /**
                     * Number of errors for HTTP error code 500.  Note that this field is an example of a single entry due to the lack of OAS support for the JSON Schema `patternProperties` syntax.  See the `additionalProperties` field in this schema for the generic property structure for error code counts
                     */
                    "500"?: number | null;
                    /**
                     * Number of errors for a specific HTTP error code.  Note that the property name must be 3 digits represent the HTTP error code the error is for
                     */
                    [k: string]: unknown;
                } | null;
                /**
                 * Error counts, by HTTP error code, for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
                 */
                previousDays?:
                    | Array<{
                        /**
                         * Number of errors for HTTP error code 500.  Note that this field is an example of a single entry due to the lack of OAS support JSON Schema `patternProperties` syntax.  See the `additionalProperties` field in this schema for the generic property structure for error code counts
                         */
                        "500"?: number;
                        /**
                         * Number of errors for a specific HTTP error code.  Note that the property name must be 3 digits represent the HTTP error code the error is for
                         */
                        [k: string]: unknown;
                    }>
                    | null;
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        /**
         * Number of API calls in each performance tier over time
         */
        invocations: {
            /**
             * API call counts for the high priority tier
             */
            highPriority: {
                /**
                 * API call counts for current day
                 */
                currentDay?: number | null;
                /**
                 * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            };
            /**
             * API call counts for the large payload tier
             */
            largePayload: {
                /**
                 * API call counts for current day
                 */
                currentDay?: number | null;
                /**
                 * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            };
            /**
             * API call counts for the large Shared Responsibility Data Requests tier.  Mandatory for data holders designated for a Shared Responsibility Data Request data cluster
             */
            largeSecondary?: {
                /**
                 * API call counts for current day
                 */
                currentDay?: number | null;
                /**
                 * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            } | null;
            /**
             * API call counts for the low priority tier
             */
            lowPriority: {
                /**
                 * API call counts for current day
                 */
                currentDay?: number | null;
                /**
                 * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            };
            /**
             * API call counts for the Shared Responsibility Data Requests tier.  Mandatory for data holders designated for a Shared Responsibility Data Request data cluster
             */
            secondary?: {
                /**
                 * API call counts for current day
                 */
                currentDay?: number | null;
                /**
                 * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            } | null;
            /**
             * API call counts for the unattended tier
             */
            unattended: {
                /**
                 * API call counts for current day
                 */
                currentDay?: number | null;
                /**
                 * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            };
            /**
             * API call counts for the unauthenticated tier
             */
            unauthenticated: {
                /**
                 * API call counts for current day
                 */
                currentDay?: number | null;
                /**
                 * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        /**
         * Peak transactions per second over time
         */
        peakTps: {
            /**
             * Aggregate peak transactions per second over time for all endpoints
             */
            aggregate: {
                /**
                 * Peak TPS for current day. Must be a positive value or zero
                 */
                currentDay?: number | null;
                /**
                 * Peak TPS for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. Values must be a positive or zero
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            };
            /**
             * Peak transactions per second over time for authenticated endpoints
             */
            authenticated: {
                /**
                 * Peak TPS for current day. Must be a positive value or zero
                 */
                currentDay?: number | null;
                /**
                 * Peak TPS for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. Values must be a positive or zero
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            };
            /**
             * Peak transactions per second over time for unauthenticated endpoints
             */
            unauthenticated: {
                /**
                 * Peak TPS for current day. Must be a positive value or zero
                 */
                currentDay?: number | null;
                /**
                 * Peak TPS for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. Values must be a positive or zero
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        /**
         * Percentage of calls within the performance thresholds in each performance tier over time
         */
        performance: {
            /**
             * Percentage of calls within the performance thresholds
             */
            aggregate?: {
                /**
                 * Percentage of calls within the performance threshold for the current day. 0.0 means 0%. 1.0 means 100%. Must be a positive value or zero
                 */
                currentDay?: string | null;
                /**
                 * Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero
                 */
                previousDays?: string[] | null;
                [k: string]: unknown;
            } | null;
            /**
             * Percentage of high priority calls within the performance thresholds
             */
            highPriority: {
                /**
                 * Array of contiguous hourly metrics for the current day.  Each element represents a 1 hour period starting from 12am-1am.  Timezone for determining 12am must be consistent but is at the discretion of the Data Holder
                 */
                currentDay?: string[] | null;
                /**
                 * Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero
                 */
                previousDays?: string[][] | null;
                [k: string]: unknown;
            };
            /**
             * Percentage of large payload calls within the performance thresholds
             */
            largePayload: {
                /**
                 * Array of contiguous hourly metrics for the current day.  Each element represents a 1 hour period starting from 12am-1am.  Timezone for determining 12am must be consistent but is at the discretion of the Data Holder
                 */
                currentDay?: string[] | null;
                /**
                 * Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero
                 */
                previousDays?: string[][] | null;
                [k: string]: unknown;
            };
            /**
             * Percentage of large Shared Responsibility calls within the performance thresholds. Mandatory for data holders designated for a Shared Responsibility Data Request data cluster
             */
            largeSecondary?: {
                /**
                 * Percentage of large Shared Responsibility calls within the performance thresholds for the secondary data holder
                 */
                primary: {
                    /**
                     * Array of contiguous hourly metrics for the current day.  Each element represents a 1 hour period starting from 12am-1am.  Timezone for determining 12am must be consistent but is at the discretion of the Data Holder
                     */
                    currentDay?: string[] | null;
                    /**
                     * Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero
                     */
                    previousDays?: string[][] | null;
                    [k: string]: unknown;
                };
                /**
                 * Percentage of large Shared Responsibility calls within the performance thresholds for the secondary data holder
                 */
                secondary: {
                    /**
                     * Array of contiguous hourly metrics for the current day.  Each element represents a 1 hour period starting from 12am-1am.  Timezone for determining 12am must be consistent but is at the discretion of the Data Holder
                     */
                    currentDay?: string[] | null;
                    /**
                     * Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero
                     */
                    previousDays?: string[][] | null;
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            } | null;
            /**
             * Percentage of low priority calls within the performance thresholds
             */
            lowPriority: {
                /**
                 * Array of contiguous hourly metrics for the current day.  Each element represents a 1 hour period starting from 12am-1am.  Timezone for determining 12am must be consistent but is at the discretion of the Data Holder
                 */
                currentDay?: string[] | null;
                /**
                 * Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero
                 */
                previousDays?: string[][] | null;
                [k: string]: unknown;
            };
            /**
             * Percentage of Shared Responsibility calls within the performance thresholds. Mandatory for data holders designated for a Shared Responsibility Data Request data cluster
             */
            secondary?: {
                /**
                 * Percentage of Shared Responsibility calls within the performance thresholds for the primary data holder
                 */
                primary: {
                    /**
                     * Array of contiguous hourly metrics for the current day.  Each element represents a 1 hour period starting from 12am-1am.  Timezone for determining 12am must be consistent but is at the discretion of the Data Holder
                     */
                    currentDay?: string[] | null;
                    /**
                     * Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero
                     */
                    previousDays?: string[][] | null;
                    [k: string]: unknown;
                };
                /**
                 * Percentage of Shared Responsibility calls within the performance thresholds for the secondary data holder
                 */
                secondary: {
                    /**
                     * Array of contiguous hourly metrics for the current day.  Each element represents a 1 hour period starting from 12am-1am.  Timezone for determining 12am must be consistent but is at the discretion of the Data Holder
                     */
                    currentDay?: string[] | null;
                    /**
                     * Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero
                     */
                    previousDays?: string[][] | null;
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            } | null;
            /**
             * Percentage of unattended calls within the performance thresholds
             */
            unattended: {
                /**
                 * Array of contiguous hourly metrics for the current day.  Each element represents a 1 hour period starting from 12am-1am.  Timezone for determining 12am must be consistent but is at the discretion of the Data Holder
                 */
                currentDay?: string[] | null;
                /**
                 * Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero
                 */
                previousDays?: string[][] | null;
                [k: string]: unknown;
            };
            /**
             * Percentage of unauthenticated calls within the performance thresholds
             */
            unauthenticated: {
                /**
                 * Array of contiguous hourly metrics for the current day.  Each element represents a 1 hour period starting from 12am-1am.  Timezone for determining 12am must be consistent but is at the discretion of the Data Holder
                 */
                currentDay?: string[] | null;
                /**
                 * Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%. Values must be a positive or zero
                 */
                previousDays?: string[][] | null;
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        /**
         * Number of Data Recipient Software Products with active authorisations at the time of the call
         */
        recipientCount: number;
        /**
         * Number of calls rejected due to traffic thresholds over time
         */
        rejections: {
            /**
             * Rejection counts for all authenticated end points
             */
            authenticated: {
                /**
                 * Number of calls rejected for current day
                 */
                currentDay?: number | null;
                /**
                 * Number of calls rejected for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            };
            /**
             * Rejection counts for all unauthenticated end points
             */
            unauthenticated: {
                /**
                 * Number of calls rejected for current day
                 */
                currentDay?: number | null;
                /**
                 * Number of calls rejected for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        /**
         * The date and time that the metrics in this payload were requested.
         */
        requestTime: string;
        /**
         * Errors and rejections received by the primary data holder from the secondary data holder.  Mandatory for data holders designated for a Shared Responsibility Data Request data cluster
         */
        secondaryHolder?: {
            /**
             * Number of calls resulting in error due to server execution over time
             */
            errors: {
                /**
                 * Number of errors for current day
                 */
                currentDay?: number | null;
                /**
                 * Number of errors for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            };
            /**
             * Number of calls rejected due to traffic thresholds over time
             */
            rejections: {
                /**
                 * Number of rejections for current day
                 */
                currentDay?: number | null;
                /**
                 * Number of rejections for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
                 */
                previousDays?: number[] | null;
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        /**
         * Session counts over time. Note that a session is defined as the provisioning of an Access Token.
         */
        sessionCount: {
            /**
             * Session count for current day
             */
            currentDay?: number | null;
            /**
             * Session count for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
             */
            previousDays?: number[] | null;
            [k: string]: unknown;
        };
        [k: string]: unknown;
    };
    links: {
        /**
         * Fully qualified link to this API call
         */
        self: string;
        [k: string]: unknown;
    };
    meta?: {
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the admin api. */

/**
 * Errors and rejections received by the primary data holder from the secondary data holder.  Mandatory for data holders designated for a Shared Responsibility Data Request data cluster
 */
export interface SecondaryHolderMetrics {
    /**
     * Number of calls resulting in error due to server execution over time
     */
    errors: {
        /**
         * Number of errors for current day
         */
        currentDay?: number | null;
        /**
         * Number of errors for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
         */
        previousDays?: number[] | null;
        [k: string]: unknown;
    };
    /**
     * Number of calls resulting in a rejection due to server execution over time
     */
    rejections: {
        /**
         * Number of rejections for current day
         */
        currentDay?: number | null;
        /**
         * Number of rejections for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
         */
        previousDays?: number[] | null;
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the admin api. */

/**
 * Errors and rejections received by the primary data holder from the secondary data holder.  Mandatory for data holders designated for a Shared Responsibility Data Request data cluster
 */
export interface SecondaryHolderMetricsV2 {
    /**
     * Number of calls resulting in error due to server execution over time
     */
    errors: {
        /**
         * Number of errors for current day
         */
        currentDay?: number | null;
        /**
         * Number of errors for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
         */
        previousDays?: number[] | null;
        [k: string]: unknown;
    };
    /**
     * Number of calls rejected due to traffic thresholds over time
     */
    rejections: {
        /**
         * Number of rejections for current day
         */
        currentDay?: number | null;
        /**
         * Number of rejections for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
         */
        previousDays?: number[] | null;
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the admin api. */

/**
 * Session counts over time. Note that a session is defined as the provisioning of an Access Token.
 */
export interface SessionCountMetrics {
    /**
     * Session count for current day
     */
    currentDay?: number | null;
    /**
     * Session count for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
     */
    previousDays?: number[] | null;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the admin api. */

/**
 * Session counts over time. Note that a session is defined as the provisioning of an Access Token.
 */
export interface SessionCountMetricsV2 {
    /**
     * Session count for current day
     */
    currentDay?: number | null;
    /**
     * Session count for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
     */
    previousDays?: number[] | null;
    [k: string]: unknown;
}
