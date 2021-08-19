export interface BankingLoanAccount {
  originalStartDate?: string;
  originalLoanAmount?: string;
  originalLoanCurrency?: string;
  loanEndDate: string;
  nextInstalmentDate: string;
  minInstalmentAmount?: string;
  minInstalmentCurrency?: string;
  maxRedraw?: string;
  maxRedrawCurrency?: string;
  minRedraw?: string;
  minRedrawCurrency?: string;
  offsetAccountEnabled?: boolean;
  offsetAccountIds?: string[] | null;
  repaymentType?: string;
  repaymentFrequency?: string;
}
