/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Object containing details of the destination of the payment. Used to specify a variety of payment destination types
 */
export interface BankingScheduledPaymentTo {
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
}
