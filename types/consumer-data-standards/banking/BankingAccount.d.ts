/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingAccount {
  /**
   * A unique ID of the account adhering to the standards for ID permanence
   */
  accountId: string;
  /**
   * Date that the account was created (if known)
   */
  creationDate?: string | null;
  /**
   * The display name of the account as defined by the bank. This should not incorporate account numbers
   * or PANs. If it does the values should be masked according to the rules of the MaskedAccountString 
   * common type.
   */
  displayName: string;
  /**
   * A customer supplied nick name for the account
   */
  nickname?: string | null;
  /**
   * Open or closed status for the account. If not present then OPEN is assumed
   */
  openStatus?: ("CLOSED" | "OPEN") | null;
  /**
   * Flag indicating that the customer associated with the authorisation is an owner of the account. Does not indicate sole ownership, however. If not present then 'true' is assumed
   */
  isOwned?: boolean | null;
  /**
   * A masked version of the account. Whether BSB/Account Number, Credit Card PAN or another number
   */
  maskedNumber: string;
  /**
   * The category to which a product or account belongs. See [here](#product-categories) for more details
   */
  productCategory:
    | "BUSINESS_LOANS"
    | "CRED_AND_CHRG_CARDS"
    | "LEASES"
    | "MARGIN_LOANS"
    | "OVERDRAFTS"
    | "PERS_LOANS"
    | "REGULATED_TRUST_ACCOUNTS"
    | "RESIDENTIAL_MORTGAGES"
    | "TERM_DEPOSITS"
    | "TRADE_FINANCE"
    | "TRANS_AND_SAVINGS_ACCOUNTS"
    | "TRAVEL_CARDS";
  /**
   * The unique identifier of the account as defined by the data holder (akin to model number for the account)
   */
  productName: string;
  [k: string]: unknown;
}
