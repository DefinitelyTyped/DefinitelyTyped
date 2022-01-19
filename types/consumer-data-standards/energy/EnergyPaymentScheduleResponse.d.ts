/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyPaymentScheduleResponse {
  data: {
    /**
     * Optional payment amount indicating that a constant payment amount is scheduled to be paid (used in bill smooting scenarios)
     */
    amount?: string;
    /**
     * The type of object present in this response
     */
    paymentScheduleUType: "cardDebit" | "directDebit" | "manualPayment";
    /**
     * Represents a regular credit card payment schedule. Mandatory if paymentScheduleUType is set to cardDebit
     */
    cardDebit?: {
      /**
       * The type of credit card held on file
       */
      cardScheme: "VISA" | "MASTERCARD" | "AMEX" | "DINERS" | "OTHER" | "UNKNOWN";
      /**
       * The frequency that payments will occur.  Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
       */
      paymentFrequency: string;
      /**
       * The mechanism by which the payment amount is calculated.  Explanation of values are as follows:<br/><ul><li>**STATIC** - Indicates a consistent, static amount, per payment</li><li>**BALANCE** - Indicates that the outstanding balance for the account is paid per period</li><li>**CALCULATED** - Indicates that the payment amount is variable and calculated using a pre-defined algorithm</li></ul>
       */
      calculationType: "STATIC" | "BALANCE" | "CALCULATED";
      [k: string]: unknown;
    } | null;
    /**
     * Represents a regular direct debit from a specified bank account. Mandatory if paymentScheduleUType is set to directDebit
     */
    directDebit?: {
      /**
       * Flag indicating that the account details are tokenised and cannot be shared.  False if absent.  If false then bsb and accountNumber should not be expected to be included
       */
      isTokenised?: string | null;
      /**
       * The unmasked BSB for the account to be debited. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces.  Is required if isTokenised is absent or false
       */
      bsb?: string | null;
      /**
       * The unmasked account number for the account to be debited. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces.  Is required if isTokenised is absent or false
       */
      accountNumber?: string | null;
      /**
       * The frequency that payments will occur.  Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
       */
      paymentFrequency: string;
      /**
       * The mechanism by which the payment amount is calculated.  Explanation of values are as follows:<br/><ul><li>**STATIC** - Indicates a consistent, static amount, per payment</li><li>**BALANCE** - Indicates that the outstanding balance for the account is paid per period</li><li>**CALCULATED** - Indicates that the payment amount is variable and calculated using a pre-defined algorithm</li></ul>
       */
      calculationType: "STATIC" | "BALANCE" | "CALCULATED";
      [k: string]: unknown;
    } | null;
    /**
     * Represents a manual payment schedule where the customer pays in response to a delivered statement. Mandatory if paymentScheduleUType is set to manualPayment
     */
    manualPayment?: {
      /**
       * The frequency with which a bill will be issued.  Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
       */
      billFrequency: string;
      [k: string]: unknown;
    } | null;
    [k: string]: unknown;
  };
  links: {
    /**
     * Fully qualified link that generated the current response document
     */
    self: string;
    [k: string]: unknown;
  };
  meta: {
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
