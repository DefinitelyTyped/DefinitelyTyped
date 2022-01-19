/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseBankingPayeeListV2 {
  data: {
    /**
     * The list of payees returned
     */
    payees: {
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
