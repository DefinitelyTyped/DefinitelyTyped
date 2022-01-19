/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingInternationalPayee {
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
}
