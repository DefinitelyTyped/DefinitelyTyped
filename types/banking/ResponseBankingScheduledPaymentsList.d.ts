/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseBankingScheduledPaymentsList {
  data: {
    /**
     * The list of scheduled payments to return
     */
    scheduledPayments: {
      /**
       * A unique ID of the scheduled payment adhering to the standards for ID permanence
       */
      scheduledPaymentId: string;
      /**
       * The short display name of the scheduled payment as provided by the customer if provided. Where a customer has not provided a nickname, a display name derived by the bank for the scheduled payment should be provided that is consistent with existing digital banking channels
       */
      nickname?: string | null;
      /**
       * The reference for the transaction that will be used by the originating institution for the purposes of constructing a statement narrative on the payer’s account. Empty string if no data provided
       */
      payerReference: string;
      /**
       * The reference for the transaction, if applicable, that will be provided by the originating institution for all payments in the payment set. Empty string if no data provided
       */
      payeeReference?: string;
      /**
       * Indicates whether the schedule is currently active. The value SKIP is equivalent to ACTIVE except that the customer has requested the next normal occurrence to be skipped.
       */
      status: "ACTIVE" | "INACTIVE" | "SKIP";
      /**
       * Object containing details of the source of the payment. Currently only specifies an account ID but provided as an object to facilitate future extensibility and consistency with the to object
       */
      from: {
        /**
         * ID of the account that is the source of funds for the payment
         */
        accountId: string;
        [k: string]: unknown;
      };
      paymentSet: {
        /**
         * Object containing details of the destination of the payment. Used to specify a variety of payment destination types
         */
        to: {
          /**
           * The type of object provided that specifies the destination of the funds for the payment.
           */
          toUType: "accountId" | "biller" | "domestic" | "international" | "payeeId";
          /**
           * Present if toUType is set to accountId. Indicates that the payment is to another account that is accessible under the current consent
           */
          accountId?: string;
          /**
           * Present if toUType is set to payeeId. Indicates that the payment is to registered payee that can be accessed using the payee end point. If the Bank Payees scope has not been consented to then a payeeId should not be provided and the full payee details should be provided instead
           */
          payeeId?: string;
          /**
           * The short display name of the payee as provided by the customer unless toUType is set to payeeId. Where a customer has not provided a nickname, a display name derived by the bank for payee should be provided that is consistent with existing digital banking channels
           */
          nickname?: string;
          /**
           * The reference for the transaction, if applicable, that will be provided by the originating institution for the specific payment. If not empty, it overrides the value provided at the BankingScheduledPayment level.
           */
          payeeReference?: string;
          domestic?: {
            /**
             * Type of account object included. Valid values are: **account** A standard Australian account defined by BSB/Account Number. **card** A credit or charge card to pay to (note that PANs are masked). **payId** A PayID recognised by NPP
             */
            payeeAccountUType: "account" | "card" | "payId";
            account?: {
              /**
               * Name of the account to pay to
               */
              accountName?: string | null;
              /**
               * BSB of the account to pay to
               */
              bsb: string;
              /**
               * Number of the account to pay to
               */
              accountNumber: string;
              [k: string]: unknown;
            };
            card?: {
              /**
               * Name of the account to pay to
               */
              cardNumber: string;
              [k: string]: unknown;
            };
            payId?: {
              /**
               * The name assigned to the PayID by the owner of the PayID
               */
              name?: string | null;
              /**
               * The identifier of the PayID (dependent on type)
               */
              identifier: string;
              /**
               * The type of the PayID
               */
              type: "ABN" | "EMAIL" | "ORG_IDENTIFIER" | "TELEPHONE";
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          biller?: {
            /**
             * BPAY Biller Code of the Biller
             */
            billerCode: string;
            /**
             * BPAY CRN of the Biller (if available).<br/>Where the CRN contains sensitive information, it should be masked in line with how the Data Holder currently displays account identifiers in their existing online banking channels. If the contents of the CRN match the format of a Credit Card PAN they should be masked according to the rules applicable for MaskedPANString. If the contents are are otherwise sensitive, then it should be masked using the rules applicable for the MaskedAccountString common type.
             */
            crn?: string | null;
            /**
             * Name of the Biller
             */
            billerName: string;
            [k: string]: unknown;
          };
          international?: {
            beneficiaryDetails: {
              /**
               * Name of the beneficiary
               */
              name?: string | null;
              /**
               * Country where the beneficiary resides. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code
               */
              country: string;
              /**
               * Response message for the payment
               */
              message?: string | null;
              [k: string]: unknown;
            };
            bankDetails: {
              /**
               * Country of the recipient institution. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code
               */
              country: string;
              /**
               * Account Targeted for payment
               */
              accountNumber: string;
              bankAddress?: {
                /**
                 * Name of the recipient Bank
                 */
                name: string;
                /**
                 * Address of the recipient Bank
                 */
                address: string;
                [k: string]: unknown;
              } | null;
              /**
               * Swift bank code.  Aligns with standard [ISO 9362](https://www.iso.org/standard/60390.html)
               */
              beneficiaryBankBIC?: string | null;
              /**
               * Number for Fedwire payment (Federal Reserve Wire Network)
               */
              fedWireNumber?: string | null;
              /**
               * Sort code used for account identification in some jurisdictions
               */
              sortCode?: string | null;
              /**
               * Number for the Clearing House Interbank Payments System
               */
              chipNumber?: string | null;
              /**
               * International bank routing number
               */
              routingNumber?: string | null;
              /**
               * The legal entity identifier (LEI) for the beneficiary.  Aligns with [ISO 17442](https://www.iso.org/standard/59771.html)
               */
              legalEntityIdentifier?: string | null;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        /**
         * Flag indicating whether the amount of the payment is calculated based on the context of the event. For instance a payment to reduce the balance of a credit card to zero. If absent then false is assumed
         */
        isAmountCalculated?: boolean | null;
        /**
         * The amount of the next payment if known. Mandatory unless the isAmountCalculated field is set to true. Must be zero or positive if present
         */
        amount?: string;
        /**
         * The currency for the payment. AUD assumed if not present
         */
        currency?: string | null;
        [k: string]: unknown;
      }[];
      /**
       * Object containing the detail of the schedule for the payment
       */
      recurrence: {
        /**
         * The date of the next payment under the recurrence schedule
         */
        nextPaymentDate?: string | null;
        /**
         * The type of recurrence used to define the schedule
         */
        recurrenceUType: "eventBased" | "intervalSchedule" | "lastWeekDay" | "onceOff";
        /**
         * Indicates that the payment is a once off payment on a specific future date. Mandatory if recurrenceUType is set to onceOff
         */
        onceOff?: {
          /**
           * The scheduled date for the once off payment
           */
          paymentDate: string;
          [k: string]: unknown;
        };
        /**
         * Indicates that the schedule of payments is defined by a series of intervals. Mandatory if recurrenceUType is set to intervalSchedule
         */
        intervalSchedule?: {
          /**
           * The limit date after which no more payments should be made using this schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely
           */
          finalPaymentDate?: string | null;
          /**
           * Indicates the number of payments remaining in the schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value, If neither field is present the payments will continue indefinitely
           */
          paymentsRemaining?: number | null;
          /**
           * Enumerated field giving the treatment where a scheduled payment date is not a business day. If absent assumed to be ON.<br/>**AFTER** - If a scheduled payment date is a non-business day the payment will be made on the first business day after the scheduled payment date.<br/>**BEFORE** - If a scheduled payment date is a non-business day the payment will be made on the first business day before the scheduled payment date.<br/>**ON** - If a scheduled payment date is a non-business day the payment will be made on that day regardless.<br/>**ONLY** - Payments only occur on business days. If a scheduled payment date is a non-business day the payment will be ignored
           */
          nonBusinessDayTreatment?: ("AFTER" | "BEFORE" | "ON" | "ONLY") | null;
          /**
           * An array of interval objects defining the payment schedule.  Each entry in the array is additive, in that it adds payments to the overall payment schedule.  If multiple intervals result in a payment on the same day then only one payment will be made. Must have at least one entry
           */
          intervals: {
            /**
             * An interval for the payment. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)  (excludes recurrence syntax) with components less than a day in length ignored. This duration defines the period between payments starting with nextPaymentDate
             */
            interval: string;
            /**
             * Uses an interval to define the ordinal day within the interval defined by the interval field on which the payment occurs. If the resulting duration is 0 days in length or larger than the number of days in the interval then the payment will occur on the last day of the interval. A duration of 1 day indicates the first day of the interval. If absent the assumed value is P1D. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) with components less than a day in length ignored. The first day of a week is considered to be Monday.
             */
            dayInInterval?: string | null;
            [k: string]: unknown;
          }[];
          [k: string]: unknown;
        };
        /**
         * Indicates that the schedule of payments is defined according to the last occurrence of a specific weekday in an interval. Mandatory if recurrenceUType is set to lastWeekDay
         */
        lastWeekDay?: {
          /**
           * The limit date after which no more payments should be made using this schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely
           */
          finalPaymentDate?: string | null;
          /**
           * Indicates the number of payments remaining in the schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely
           */
          paymentsRemaining?: number | null;
          /**
           * The interval for the payment. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) with components less than a day in length ignored. This duration defines the period between payments starting with nextPaymentDate
           */
          interval: string;
          /**
           * The weekDay specified. The payment will occur on the last occurrence of this weekday in the interval.
           */
          lastWeekDay: "FRI" | "MON" | "SAT" | "SUN" | "THU" | "TUE" | "WED";
          /**
           * Enumerated field giving the treatment where a scheduled payment date is not a business day. If absent assumed to be ON.<br/>**AFTER** - If a scheduled payment date is a non-business day the payment will be made on the first business day after the scheduled payment date.<br/>**BEFORE** - If a scheduled payment date is a non-business day the payment will be made on the first business day before the scheduled payment date.<br/>**ON** - If a scheduled payment date is a non-business day the payment will be made on that day regardless.<br/>**ONLY** - Payments only occur on business days. If a scheduled payment date is a non-business day the payment will be ignored
           */
          nonBusinessDayTreatment?: ("AFTER" | "BEFORE" | "ON" | "ONLY") | null;
          [k: string]: unknown;
        };
        /**
         * Indicates that the schedule of payments is defined according to an external event that cannot be predetermined. Mandatory if recurrenceUType is set to eventBased
         */
        eventBased?: {
          /**
           * Description of the event and conditions that will result in the payment. Expected to be formatted for display to a customer
           */
          description: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  links: {
    /**
     * Fully qualified link that generated the current response document
     */
    self: string;
    /**
     * URI to the first page of this set. Mandatory if this response is not the first page
     */
    first?: string | null;
    /**
     * URI to the previous page of this set. Mandatory if this response is not the first page
     */
    prev?: string | null;
    /**
     * URI to the next page of this set. Mandatory if this response is not the last page
     */
    next?: string | null;
    /**
     * URI to the last page of this set. Mandatory if this response is not the last page
     */
    last?: string | null;
    [k: string]: unknown;
  };
  meta: {
    /**
     * The total number of records in the full set. See [pagination](#pagination).
     */
    totalRecords: number;
    /**
     * The total number of pages in the full set. See [pagination](#pagination).
     */
    totalPages: number;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
