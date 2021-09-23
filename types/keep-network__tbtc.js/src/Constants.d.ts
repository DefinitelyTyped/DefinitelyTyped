import BN = require("bn.js");
import type { TBTCConfig, Contract } from './CommonTypes';
declare class Constants {
    contract: Contract;
    static withConfig(config: TBTCConfig): Promise<Constants>;
    BENEFICIARY_REWARD_DIVISOR: BN;
    SATOSHI_MULTIPLIER: BN;
    DEPOSIT_TERM: BN;
    TX_PROOF_DIFFICULTY_FACTOR: BN;
    REDEMPTION_SIGNATURE_TIMEOUT: BN;
    INCREASE_FEE_TIMER: BN;
    REDEMPTION_PROOF_TIMEOUT: BN;
    MINIMUM_REDEMPTION_FEE: BN;
    FUNDING_PROOF_TIMEOUT: BN;
    SIGNING_GROUP_FORMATION_TIMEOUT: BN;
    COURTESY_CALL_DURATION: BN;
    AUCTION_DURATION: BN;
    PERMITTED_FEE_BUMPS: BN;
    constructor(constants: any, contract: Contract);
}
export { Constants };
