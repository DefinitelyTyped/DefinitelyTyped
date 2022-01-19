/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * The category to which a product or account belongs. See [here](#product-categories) for more details
 */
export type BankingProductCategory =
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
