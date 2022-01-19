/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingDomesticPayee {
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
}
