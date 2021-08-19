import { BankingScheduledPaymentFrom } from "./BankingScheduledPaymentFrom";
import { BankingScheduledPaymentRecurrence } from "./BankingScheduledPaymentRecurrence";
import { BankingScheduledPaymentSet } from "./BankingScheduledPaymentSet";
import { ScheduledPaymentStatusType } from "./enums";

export interface BankingScheduledPayment {
  scheduledPaymentId: string;
  nickname?: string;
  payerReference: string;
  payeeReference?: string;
  status: ScheduledPaymentStatusType;
  from: BankingScheduledPaymentFrom;
  paymentSet: BankingScheduledPaymentSet[] | null;
  recurrence: BankingScheduledPaymentRecurrence;
}
