/// <reference types="node" />
import { EventEmitter } from "events";
import { FoundTransaction as BitcoinTransaction } from "./BitcoinHelpers.js";
import Redemption from "./Redemption.js";
import BN = require('bn.js');
import type { TBTCConfig, DepositBaseClass, KeyPoint, RedemptionDetails, Contract } from './CommonTypes';
export const DepositStates: {
    START: number;
    AWAITING_SIGNER_SETUP: number;
    AWAITING_BTC_FUNDING_PROOF: number;
    FAILED_SETUP: number;
    ACTIVE: number;
    AWAITING_WITHDRAWAL_SIGNATURE: number;
    AWAITING_WITHDRAWAL_PROOF: number;
    REDEEMED: number;
    COURTESY_CALL: number;
    FRAUD_LIQUIDATION_IN_PROGRESS: number;
    LIQUIDATION_IN_PROGRESS: number;
    LIQUIDATED: number;
};
export class DepositFactory {
    config: TBTCConfig;
    static withConfig(config: TBTCConfig): Promise<DepositFactory>;
    State: typeof DepositStates;
    constructor(config: TBTCConfig);
    availableSatoshiLotSizes(): Promise<any>;
    withSatoshiLotSize(satoshiLotSize: BN): Promise<Deposit>;
    withAddress(depositAddress: string): Promise<Deposit>;
    constantsContract: Contract;
    systemContract: Contract;
    tokenContract: Contract;
    depositTokenContract: Contract;
    feeRebateTokenContract: Contract;
    depositContract: Contract;
    depositLogContract: Contract;
    depositFactoryContract: Contract;
    vendingMachineContract: Contract;
    fundingScriptContract: Contract;
    resolveContracts(): Promise<void>;
    createNewDepositContract(lotSize: BN): Promise<{
        depositAddress: string;
        keepAddress: string;
    }>;
}
export interface AutoSubmitState {
    fundingTransaction: Promise<BitcoinTransaction>;
    fundingConfirmations: Promise<{
        transaction: BitcoinTransaction;
        requiredConfirmations: number;
    }>;
    proofTransaction: Promise<any>;
    mintedTBTC: Promise<BN>;
}
export interface FundingConfirmations {
    transaction: BitcoinTransaction;
    requiredConfirmations: number;
}
export default class Deposit implements DepositBaseClass {
    factory: DepositFactory;
    address: string;
    keepContract: Contract;
    static forLotSize(factory: DepositFactory, satoshiLotSize: BN): Promise<Deposit>;
    static forAddress(factory: DepositFactory, address: string): Promise<Deposit>;
    contract: Contract;
    activeStatePromise: Promise<boolean>;
    publicKeyPoint: Promise<KeyPoint>;
    bitcoinAddress: Promise<string>;
    receivedFundingConfirmationEmitter: EventEmitter;
    constructor(factory: DepositFactory, depositContract: Contract, keepContract: Contract);
    _fundingTransaction?: Promise<BitcoinTransaction>;
    get fundingTransaction(): Promise<BitcoinTransaction>;
    _fundingConfirmations?: Promise<FundingConfirmations>;
    get fundingConfirmations(): Promise<FundingConfirmations>;
    getLotSizeSatoshis(): Promise<BN>;
    getLotSizeTBTC(): Promise<BN>;
    getSignerFeeTBTC(): Promise<BN>;
    getBitcoinAddress(): Promise<string>;
    getCurrentState(): Promise<number>;
    getTDT(): Promise<{}>;
    getFRT(): Promise<{}>;
    getOwner(): Promise<any>;
    inVendingMachine(): Promise<boolean>;
    onBitcoinAddressAvailable(bitcoinAddressHandler: (address: string) => void): void;
    onActive(activeHandler: (deposit: Deposit) => void): void;
    onReceivedFundingConfirmation(onReceivedFundingConfirmationHandler: (fundingConfirmation: {
        transactionID: string;
        confirmations: number;
    }) => void): void;
    mintTBTC(): Promise<string>;
    qualifyAndMintTBTC(): Promise<BN>;
    getRedemptionCost(): Promise<BN>;
    getCurrentRedemption(): Promise<Redemption | null>;
    requestRedemption(redeemerAddress: string): Promise<Redemption>;
    getLatestRedemptionDetails(): Promise<RedemptionDetails | null>;
    autoSubmittingState?: AutoSubmitState;
    autoSubmit(): AutoSubmitState;
    autoMint(): AutoSubmitState;
    findOrWaitForPublicKeyPoint(): Promise<KeyPoint>;
    waitForActiveState(): Promise<boolean>;
    readPublishedPubkeyEvent(): Promise<any>;
    publicKeyPointToBitcoinAddress(publicKeyPoint: KeyPoint): Promise<string>;
    constructFundingProof(bitcoinTransaction: Omit<BitcoinTransaction, 'value'>, confirmations: number): Promise<[Buffer, Buffer, Buffer, Buffer, number, Buffer, string, Buffer]>;
    redemptionDetailsFromEvent(redemptionRequestedEventArgs: {
        _utxoValue: string;
        _redeemerOutputScript: string;
        _requestedFee: string;
        _outpoint: string;
        _digest: string;
    }): RedemptionDetails;
    getCollateralizationPercentage(): Promise<BN>;
    getInitialCollateralizedPercentage(): Promise<BN>;
    getUndercollateralizedThresholdPercent(): Promise<BN>;
    getSeverelyUndercollateralizedThresholdPercent(): Promise<BN>;
    notifyCourtesyCall(): Promise<void>;
    exitCourtesyCall(): Promise<void>;
    notifyCourtesyCallExpired(): Promise<void>;
    notifyUndercollateralizedLiquidation(): Promise<void>;
    purchaseSignerBondsAtAuction(): Promise<void>;
    auctionValue(): Promise<BN>;
    notifySignerSetupFailed(): Promise<void>;
    notifyFundingTimedOut(): Promise<void>;
    notifyCourtesyTimedOut(): Promise<void>;
    notifyRedemptionSignatureTimedOut(): Promise<void>;
    notifyRedemptionProofTimeout(): Promise<void>;
    wasSignatureApproved(digest: string): Promise<boolean>;
    provideFundingECDSAFraudProof(v: number, r: string, s: string, signedDigest: string, preimage: string): Promise<void>;
    provideECDSAFraudProof(v: number, r: string, s: string, signedDigest: string, preimage: string): Promise<void>;
}
