import { BankingScheduledPaymentTo } from "./BankingScheduledPaymentTo";

export interface BankingScheduledPaymentSet {
  to: BankingScheduledPaymentTo;
  isAmountCalculated?: boolean;
  amount?: string;
  currency?: string;
}
