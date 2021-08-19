import { MaturityInstructionType } from "./enums";

export interface BankingTermDepositAccount {
  lodgementDate: string;
  maturityDate: string;
  maturityAmount?: string;
  maturityCurrency?: string;
  maturityInstructions: MaturityInstructionType;
}
