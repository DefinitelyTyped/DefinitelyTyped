/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

/**
 * An array of fees applicable to the plan
 */
export type EnergyPlanFees = {
  /**
   * The type of the fee
   */
  type:
    | "EXIT"
    | "ESTABLISHMENT"
    | "LATE_PAYMENT"
    | "DISCONNECTION"
    | "DISCONNECT_MOVE_OUT"
    | "DISCONNECT_NON_PAY"
    | "RECONNECTION"
    | "CONNECTION"
    | "PAYMENT_PROCESSING"
    | "CC_PROCESSING"
    | "CHEQUE_DISHONOUR"
    | "DD_DISHONOUR"
    | "MEMBERSHIP"
    | "CONTRIBUTION"
    | "PAPER_BILL"
    | "OTHER";
  /**
   * The term of the fee
   */
  term:
    | "FIXED"
    | "1_YEAR"
    | "2_YEAR"
    | "3_YEAR"
    | "4_YEAR"
    | "5_YEAR"
    | "PERCENT_OF_BILL"
    | "ANNUAL"
    | "DAILY"
    | "WEEKLY"
    | "MONTHLY"
    | "BIANNUAL"
    | "VARIABLE";
  /**
   * The fee amount. Required if term is not PERCENT_OF_BILL
   */
  amount?: string | null;
  /**
   * The fee rate. Required if term is PERCENT_OF_BILL
   */
  rate?: string | null;
  /**
   * A description of the fee
   */
  description?: string | null;
  [k: string]: unknown;
}[];
