/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export type BankingTransactionDetail = {
  /**
   * ID of the account for which transactions are provided
   */
  accountId: string;
  /**
   * A unique ID of the transaction adhering to the standards for ID permanence.  This is mandatory (through hashing if necessary) unless there are specific and justifiable technical reasons why a transaction cannot be uniquely identified for a particular account type. It is mandatory if `isDetailAvailable` is set to true.
   */
  transactionId?: string | null;
  /**
   * True if extended information is available using the transaction detail end point. False if extended data is not available
   */
  isDetailAvailable: boolean;
  /**
   * The type of the transaction
   */
  type:
    | "DIRECT_DEBIT"
    | "FEE"
    | "INTEREST_CHARGED"
    | "INTEREST_PAID"
    | "OTHER"
    | "PAYMENT"
    | "TRANSFER_INCOMING"
    | "TRANSFER_OUTGOING";
  /**
   * Status of the transaction whether pending or posted. Note that there is currently no provision in the standards to guarantee the ability to correlate a pending transaction with an associated posted transaction
   */
  status: "PENDING" | "POSTED";
  /**
   * The transaction description as applied by the financial institution
   */
  description: string;
  /**
   * The time the transaction was posted. This field is Mandatory if the transaction has status POSTED.  This is the time that appears on a standard statement
   */
  postingDateTime?: string;
  /**
   * Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry
   */
  valueDateTime?: string | null;
  /**
   * The time the transaction was executed by the originating customer, if available
   */
  executionDateTime?: string | null;
  /**
   * The value of the transaction. Negative values mean money was outgoing from the account
   */
  amount: string;
  /**
   * The currency for the transaction amount. AUD assumed if not present
   */
  currency?: string | null;
  /**
   * The reference for the transaction provided by the originating institution. Empty string if no data provided
   */
  reference: string;
  /**
   * Name of the merchant for an outgoing payment to a merchant
   */
  merchantName?: string | null;
  /**
   * The merchant category code (or MCC) for an outgoing payment to a merchant
   */
  merchantCategoryCode?: string | null;
  /**
   * BPAY Biller Code for the transaction (if available)
   */
  billerCode?: string | null;
  /**
   * Name of the BPAY biller for the transaction (if available)
   */
  billerName?: string;
  /**
   * BPAY CRN for the transaction (if available).<br/>Where the CRN contains sensitive information, it should be masked in line with how the Data Holder currently displays account identifiers in their existing online banking channels. If the contents of the CRN match the format of a Credit Card PAN they should be masked according to the rules applicable for MaskedPANString. If the contents are are otherwise sensitive, then it should be masked using the rules applicable for the MaskedAccountString common type.
   */
  crn?: string | null;
  /**
   * 6 Digit APCA number for the initiating institution. The field is fixed-width and padded with leading zeros if applicable.
   */
  apcaNumber?: string;
  [k: string]: unknown;
} & {
  extendedData: {
    /**
     * Label of the originating payer. Mandatory for inbound payment
     */
    payer?: string | null;
    /**
     * Label of the target PayID.  Mandatory for an outbound payment. The name assigned to the BSB/Account Number or PayID (by the owner of the PayID)
     */
    payee?: string | null;
    /**
     * Optional extended data provided specific to transaction originated via NPP
     */
    extensionUType?: "x2p101Payload" | null;
    x2p101Payload?: {
      /**
       * An extended string description. Only present if specified by the extensionUType field
       */
      extendedDescription: string;
      /**
       * An end to end ID for the payment created at initiation
       */
      endToEndId?: string | null;
      /**
       * Purpose of the payment.  Format is defined by NPP standards for the x2p1.01 overlay service
       */
      purposeCode?: string | null;
      [k: string]: unknown;
    } | null;
    /**
     * Identifier of the applicable overlay service. Valid values are: X2P1.01
     */
    service: "X2P1.01";
    [k: string]: unknown;
  };
  [k: string]: unknown;
};
