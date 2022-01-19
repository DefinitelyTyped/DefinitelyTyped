/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingPayeeV2 {
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
}
