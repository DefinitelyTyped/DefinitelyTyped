import { NonBusinessDayTreatmentType } from "./enums";

export interface BankingScheduledPaymentRecurrenceIntervalSchedule {
  finalPaymentDate?: string;
  paymentsRemaining?: number;
  nonBusinessDayTreatment?: NonBusinessDayTreatmentType;
  intervals?: BankingScheduledPaymentInterval[] | null;
}

export interface BankingScheduledPaymentInterval {
  interval: string;
  dayInInterval?: string;
}