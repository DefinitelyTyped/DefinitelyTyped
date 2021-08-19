import { BankingProductBundle } from "./BankingProductBundle";
import { BankingProductConstraint } from "./BankingProductConstraint";
import { BankingProductDepositRate } from "./BankingProductDepositRate";
import { BankingProductEligibility } from "./BankingProductEligibility";
import { BankingProductFeature } from "./BankingProductFeature";
import { BankingProductFee } from "./BankingProductFee";
import { BankingProductLendingRateV2 } from "./BankingProductLendingRateV2";
import { BankingProductV3 } from "./BankingProductV3";

export interface BankingProductDetailV3 extends BankingProductV3 {
  bundles?: BankingProductBundle[] | null;
  features?: BankingProductFeature[] | null;
  constraints?: BankingProductConstraint[] | null;
  eligibility?: BankingProductEligibility[] | null;
  fees?: BankingProductFee[] | null;
  depositRates?: BankingProductDepositRate[] | null;
  lendingRates?: BankingProductLendingRateV2[] | null;
}

