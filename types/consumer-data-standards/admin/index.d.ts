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
   * Rejection counts for all uauthenticated end points
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
  errors: {
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
  }[];
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
       * Rejection counts for all uauthenticated end points
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
