import { BankingScheduledPaymentRecurrenceIntervalSchedule } from "./BankingScheduledPaymentRecurrenceIntervalSchedule";
import { BankingScheduledPaymentRecurrenceOnceOff } from "./BankingScheduledPaymentRecurrenceOnceOff";
import { BankingScheduledPaymentRecurrenceEventBasedType } from "./enums";

export interface BankingScheduledPaymentRecurrence {
  nextPaymentDate?: string;
  recurrenceUType: BankingScheduledPaymentRecurrenceEventBasedType;
  onceOff?: BankingScheduledPaymentRecurrenceOnceOff;
  intervalSchedule?: BankingScheduledPaymentRecurrenceIntervalSchedule;
  lastWeekDay?: BankingScheduledPaymentRecurrenceLastWeekday;
  eventBased: BankingScheduledPaymentRecurrenceEventBased;
}

export interface BankingScheduledPaymentRecurrenceLastWeekday {
  finalPaymentDate: string;
  paymentsRemaining: number;
  interval: string;
  lastWeekDay: string;
  nonBusinessDayTreatment: string;
}

export interface BankingScheduledPaymentRecurrenceEventBased {
  description: string;
}
