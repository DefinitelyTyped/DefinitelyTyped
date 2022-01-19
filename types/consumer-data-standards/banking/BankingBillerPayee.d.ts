/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingBillerPayee {
  /**
   * BPAY Biller Code of the Biller
   */
  billerCode: string;
  /**
   * BPAY CRN of the Biller (if available).<br/>Where the CRN contains sensitive information,
   * it should be masked in line with how the Data Holder currently displays account identifiers
   * in their existing online banking channels. If the contents of the CRN match the format of a 
   * Credit Card PAN they should be masked according to the rules applicable for MaskedPANString. 
   * If the contents are are otherwise sensitive, then it should be masked using the rules applicable 
   * for the MaskedAccountString common type.
   */
  crn?: string | null;
  /**
   * Name of the Biller
   */
  billerName: string;
  [k: string]: unknown;
}
