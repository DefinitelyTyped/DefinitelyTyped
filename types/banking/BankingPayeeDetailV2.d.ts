/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export type BankingPayeeDetailV2 = {
  /**
   * ID of the payee adhering to the rules of ID permanence
   */
  payeeId: string;
  /**
   * The short display name of the payee as provided by the customer. Where a customer has not provided a nickname, a display name derived by the bank for the payee consistent with existing digital banking channels
   */
  nickname: string;
  /**
   * A description of the payee provided by the customer
   */
  description?: string;
  /**
   * The type of payee. DOMESTIC means a registered payee for domestic payments including NPP. INTERNATIONAL means a registered payee for international payments. BILLER means a registered payee for BPAY. DIGITAL_WALLET means a registered payee for a bank's digital wallet
   */
  type: ("BILLER" | "DIGITAL_WALLET" | "DOMESTIC" | "INTERNATIONAL") | null;
  /**
   * The date the payee was created by the customer
   */
  creationDate?: string | null;
  [k: string]: unknown;
} & {
  /**
   * Type of object included that describes the payee in detail
   */
  payeeUType: "biller" | "domestic" | "digitalWallet" | "international";
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
  digitalWallet?: {
    /**
     * The name assigned to the digital wallet by the owner of the wallet, else the display name provided by the digital wallet provider
     */
    name: string;
    /**
     * The identifier of the digital wallet (dependent on type)
     */
    identifier: string;
    /**
     * The type of the digital wallet identifier
     */
    type: "EMAIL" | "CONTACT_NAME" | "TELEPHONE";
    /**
     * The provider of the digital wallet
     */
    provider: "PAYPAL_AU" | "OTHER";
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
