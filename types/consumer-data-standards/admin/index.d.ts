/* tslint:disable: array-type max-line-length no-trailing-whitespace */
export interface AvailabilityMetrics {
    /**
     * Percentage availability of the CDR platform so far for the current calendar month. 0.0 means 0%. 1.0 means 100%.
     */
    currentMonth?: number;
    /**
     * Percentage availability of the CDR platform for previous calendar months. The first element indicates the last month and so on. A maximum of twelve entries is required if available. 0.0 means 0%. 1.0 means 100%.
     */
    previousMonths?: number[];
    [k: string]: unknown;
  }
  
/**
 * Average response time in seconds, at millisecond resolution, within each performance tier
 */
 export interface AverageResponseMetricsV2 {
    /**
     * Average response time for the unauthenticated tier
     */
    unauthenticated: {
      /**
       * Average response time for current day
       */
      currentDay?: number;
      /**
       * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
       */
      previousDays?: number[];
      [k: string]: unknown;
    };
    /**
     * Average response time for the high priority tier
     */
    highPriority: {
      /**
       * Average response time for current day
       */
      currentDay?: number;
      /**
       * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
       */
      previousDays?: number[];
      [k: string]: unknown;
    };
    /**
     * Average response time for the low priority tier
     */
    lowPriority: {
      /**
       * Average response time for current day
       */
      currentDay?: number;
      /**
       * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
       */
      previousDays?: number[];
      [k: string]: unknown;
    };
    /**
     * Average response time for the unattended tier
     */
    unattended: {
      /**
       * Average response time for current day
       */
      currentDay?: number;
      /**
       * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
       */
      previousDays?: number[];
      [k: string]: unknown;
    };
    /**
     * Average response time for the large payload tier
     */
    largePayload: {
      /**
       * Average response time for current day
       */
      currentDay?: number;
      /**
       * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
       */
      previousDays?: number[];
      [k: string]: unknown;
    };
    /**
     * Average response time for the secondary tier.  Mandatory for data holders designated for a secondary responsibility request data cluster
     */
    secondary?: {
      /**
       * Average response time as measured for the primary data holder
       */
      primary: {
        /**
         * Average response time for current day
         */
        currentDay?: number;
        /**
         * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
         */
        previousDays?: number[];
        [k: string]: unknown;
      };
      /**
       * Average response time as measured for the secondary data holder
       */
      secondary: {
        /**
         * Average response time for current day
         */
        currentDay?: number;
        /**
         * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
         */
        previousDays?: number[];
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    /**
     * Average response time for the large payload tier.  Mandatory for data holders designated for a secondary responsibility request data cluster
     */
    largeSecondary?: {
      /**
       * Average response time as measured for the primary data holder
       */
      primary: {
        /**
         * Average response time for current day
         */
        currentDay?: number;
        /**
         * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
         */
        previousDays?: number[];
        [k: string]: unknown;
      };
      /**
       * Average response time as measured for the secondary data holder
       */
      secondary: {
        /**
         * Average response time for current day
         */
        currentDay?: number;
        /**
         * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
         */
        previousDays?: number[];
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }

/**
 * Transactions per second over time
 */
export interface AverageTPSMetrics {
    /**
     * Average TPS for current day
     */
    currentDay?: number;
    /**
     * Average TPS for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
     */
    previousDays?: number[];
    [k: string]: unknown;
  }
  
/**
 * Number of calls resulting in error due to server execution over time
 */
export interface ErrorMetrics {
    /**
     * Number of errors for current day
     */
    currentDay?: number;
    /**
     * Number of errors for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
     */
    previousDays?: number[];
    [k: string]: unknown;
  }
/**
 * Number of API calls in each performance tier over time
 */
 export interface InvocationMetricsV2 {
    /**
     * API call counts for the unauthenticated tier
     */
    unauthenticated: {
      /**
       * API call counts for current day
       */
      currentDay?: number;
      /**
       * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
       */
      previousDays?: number[];
      [k: string]: unknown;
    };
    /**
     * API call counts for the high priority tier
     */
    highPriority: {
      /**
       * API call counts for current day
       */
      currentDay?: number;
      /**
       * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
       */
      previousDays?: number[];
      [k: string]: unknown;
    };
    /**
     * API call counts for the low priority tier
     */
    lowPriority: {
      /**
       * API call counts for current day
       */
      currentDay?: number;
      /**
       * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
       */
      previousDays?: number[];
      [k: string]: unknown;
    };
    /**
     * API call counts for the unattended tier
     */
    unattended: {
      /**
       * API call counts for current day
       */
      currentDay?: number;
      /**
       * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
       */
      previousDays?: number[];
      [k: string]: unknown;
    };
    /**
     * API call counts for the large payload tier
     */
    largePayload: {
      /**
       * API call counts for current day
       */
      currentDay?: number;
      /**
       * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
       */
      previousDays?: number[];
      [k: string]: unknown;
    };
    /**
     * API call counts for the secondary responsibility requests tier.  Mandatory for data holders designated for a secondary responsibility request data cluster
     */
    secondary?: {
      /**
       * API call counts for current day
       */
      currentDay?: number;
      /**
       * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
       */
      previousDays?: number[];
      [k: string]: unknown;
    };
    /**
     * API call counts for the large secondary responsibility requests tier.  Mandatory for data holders designated for a secondary responsibility request data cluster
     */
    largeSecondary?: {
      /**
       * API call counts for current day
       */
      currentDay?: number;
      /**
       * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
       */
      previousDays?: number[];
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }
/**
 * Maximum record transactions per second over time
 */
 export interface PeakTPSMetrics {
    /**
     * Peak TPS for current day
     */
    currentDay?: number;
    /**
     * Peak TPS for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
     */
    previousDays?: number[];
    [k: string]: unknown;
  }

/**
 * Percentage of calls within the performance thresholds
 */
 export interface PerformanceMetrics {
    /**
     * Percentage of calls within the performance threshold for the current day. 0.0 means 0%. 1.0 means 100%
     */
    currentDay?: number;
    /**
     * Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%
     */
    previousDays?: number[];
    [k: string]: unknown;
  }
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
      currentDay?: number;
      /**
       * Number of calls rejected for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
       */
      previousDays?: number[];
      [k: string]: unknown;
    };
    /**
     * Rejection counts for all unauthenticated end points
     */
    unauthenticated: {
      /**
       * Number of calls rejected for current day
       */
      currentDay?: number;
      /**
       * Number of calls rejected for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
       */
      previousDays?: number[];
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }
  export interface ResponseMetricsListV3 {
    data: {
      /**
       * The date and time that the metrics in this payload were requested.
       */
      requestTime: string;
      /**
       * Percentage availability of the CDR platform over time
       */
      availability: {
        /**
         * Percentage availability of the CDR platform so far for the current calendar month. 0.0 means 0%. 1.0 means 100%.
         */
        currentMonth?: number;
        /**
         * Percentage availability of the CDR platform for previous calendar months. The first element indicates the last month and so on. A maximum of twelve entries is required if available. 0.0 means 0%. 1.0 means 100%.
         */
        previousMonths?: number[];
        [k: string]: unknown;
      };
      /**
       * Percentage of calls within the performance thresholds
       */
      performance: {
        /**
         * Percentage of calls within the performance threshold for the current day. 0.0 means 0%. 1.0 means 100%
         */
        currentDay?: number;
        /**
         * Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%
         */
        previousDays?: number[];
        [k: string]: unknown;
      };
      /**
       * Number of API calls in each performance tier over time
       */
      invocations: {
        /**
         * API call counts for the unauthenticated tier
         */
        unauthenticated: {
          /**
           * API call counts for current day
           */
          currentDay?: number;
          /**
           * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
           */
          previousDays?: number[];
          [k: string]: unknown;
        };
        /**
         * API call counts for the high priority tier
         */
        highPriority: {
          /**
           * API call counts for current day
           */
          currentDay?: number;
          /**
           * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
           */
          previousDays?: number[];
          [k: string]: unknown;
        };
        /**
         * API call counts for the low priority tier
         */
        lowPriority: {
          /**
           * API call counts for current day
           */
          currentDay?: number;
          /**
           * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
           */
          previousDays?: number[];
          [k: string]: unknown;
        };
        /**
         * API call counts for the unattended tier
         */
        unattended: {
          /**
           * API call counts for current day
           */
          currentDay?: number;
          /**
           * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
           */
          previousDays?: number[];
          [k: string]: unknown;
        };
        /**
         * API call counts for the large payload tier
         */
        largePayload: {
          /**
           * API call counts for current day
           */
          currentDay?: number;
          /**
           * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
           */
          previousDays?: number[];
          [k: string]: unknown;
        };
        /**
         * API call counts for the secondary responsibility requests tier.  Mandatory for data holders designated for a secondary responsibility request data cluster
         */
        secondary?: {
          /**
           * API call counts for current day
           */
          currentDay?: number;
          /**
           * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
           */
          previousDays?: number[];
          [k: string]: unknown;
        };
        /**
         * API call counts for the large secondary responsibility requests tier.  Mandatory for data holders designated for a secondary responsibility request data cluster
         */
        largeSecondary?: {
          /**
           * API call counts for current day
           */
          currentDay?: number;
          /**
           * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
           */
          previousDays?: number[];
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      /**
       * Average response time in seconds, at millisecond resolution, within each performance tier
       */
      averageResponse: {
        /**
         * Average response time for the unauthenticated tier
         */
        unauthenticated: {
          /**
           * Average response time for current day
           */
          currentDay?: number;
          /**
           * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
           */
          previousDays?: number[];
          [k: string]: unknown;
        };
        /**
         * Average response time for the high priority tier
         */
        highPriority: {
          /**
           * Average response time for current day
           */
          currentDay?: number;
          /**
           * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
           */
          previousDays?: number[];
          [k: string]: unknown;
        };
        /**
         * Average response time for the low priority tier
         */
        lowPriority: {
          /**
           * Average response time for current day
           */
          currentDay?: number;
          /**
           * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
           */
          previousDays?: number[];
          [k: string]: unknown;
        };
        /**
         * Average response time for the unattended tier
         */
        unattended: {
          /**
           * Average response time for current day
           */
          currentDay?: number;
          /**
           * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
           */
          previousDays?: number[];
          [k: string]: unknown;
        };
        /**
         * Average response time for the large payload tier
         */
        largePayload: {
          /**
           * Average response time for current day
           */
          currentDay?: number;
          /**
           * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
           */
          previousDays?: number[];
          [k: string]: unknown;
        };
        /**
         * Average response time for the secondary tier.  Mandatory for data holders designated for a secondary responsibility request data cluster
         */
        secondary?: {
          /**
           * Average response time as measured for the primary data holder
           */
          primary: {
            /**
             * Average response time for current day
             */
            currentDay?: number;
            /**
             * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
             */
            previousDays?: number[];
            [k: string]: unknown;
          };
          /**
           * Average response time as measured for the secondary data holder
           */
          secondary: {
            /**
             * Average response time for current day
             */
            currentDay?: number;
            /**
             * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
             */
            previousDays?: number[];
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        /**
         * Average response time for the large payload tier.  Mandatory for data holders designated for a secondary responsibility request data cluster
         */
        largeSecondary?: {
          /**
           * Average response time as measured for the primary data holder
           */
          primary: {
            /**
             * Average response time for current day
             */
            currentDay?: number;
            /**
             * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
             */
            previousDays?: number[];
            [k: string]: unknown;
          };
          /**
           * Average response time as measured for the secondary data holder
           */
          secondary: {
            /**
             * Average response time for current day
             */
            currentDay?: number;
            /**
             * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
             */
            previousDays?: number[];
            [k: string]: unknown;
          };
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
        currentDay?: number;
        /**
         * Session count for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
         */
        previousDays?: number[];
        [k: string]: unknown;
      };
      /**
       * Transactions per second over time
       */
      averageTps: {
        /**
         * Average TPS for current day
         */
        currentDay?: number;
        /**
         * Average TPS for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
         */
        previousDays?: number[];
        [k: string]: unknown;
      };
      /**
       * Maximum record transactions per second over time
       */
      peakTps: {
        /**
         * Peak TPS for current day
         */
        currentDay?: number;
        /**
         * Peak TPS for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
         */
        previousDays?: number[];
        [k: string]: unknown;
      };
      /**
       * Number of calls resulting in error due to server execution over time
       */
      errors: {
        /**
         * Number of errors for current day
         */
        currentDay?: number;
        /**
         * Number of errors for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
         */
        previousDays?: number[];
        [k: string]: unknown;
      };
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
          currentDay?: number;
          /**
           * Number of calls rejected for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
           */
          previousDays?: number[];
          [k: string]: unknown;
        };
        /**
         * Rejection counts for all unauthenticated end points
         */
        unauthenticated: {
          /**
           * Number of calls rejected for current day
           */
          currentDay?: number;
          /**
           * Number of calls rejected for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
           */
          previousDays?: number[];
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      /**
       * Number of customers with active authorisations at the time of the call
       */
      customerCount: number;
      /**
       * Number of Data Recipient Software Products with active authorisations at the time of the call
       */
      recipientCount: number;
      /**
       * Errors and rejections received by the primary data holder from the secondary data holder.  Mandatory for data holders designated for a secondary responsibility request data cluster
       */
      secondaryHolder?: {
        /**
         * Number of calls resulting in error due to server execution over time
         */
        errors: {
          /**
           * Number of errors for current day
           */
          currentDay?: number;
          /**
           * Number of errors for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
           */
          previousDays?: number[];
          [k: string]: unknown;
        };
        /**
         * Number of calls resulting in a rejection due to server execution over time
         */
        rejections: {
          /**
           * Number of rejections for current day
           */
          currentDay?: number;
          /**
           * Number of rejections for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
           */
          previousDays?: number[];
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    links: {
      /**
       * Fully qualified link that generated the current response document
       */
      self: string;
      [k: string]: unknown;
    };
    meta?: {
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }
/**
 * Errors and rejections received by the primary data holder from the secondary data holder.  Mandatory for data holders designated for a secondary responsibility request data cluster
 */
 export interface SecondaryHolderMetrics {
    /**
     * Number of calls resulting in error due to server execution over time
     */
    errors: {
      /**
       * Number of errors for current day
       */
      currentDay?: number;
      /**
       * Number of errors for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
       */
      previousDays?: number[];
      [k: string]: unknown;
    };
    /**
     * Number of calls resulting in a rejection due to server execution over time
     */
    rejections: {
      /**
       * Number of rejections for current day
       */
      currentDay?: number;
      /**
       * Number of rejections for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
       */
      previousDays?: number[];
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }
/**
 * Session counts over time. Note that a session is defined as the provisioning of an Access Token.
 */
 export interface SessionCountMetrics {
    /**
     * Session count for current day
     */
    currentDay?: number;
    /**
     * Session count for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
     */
    previousDays?: number[];
    [k: string]: unknown;
  }
