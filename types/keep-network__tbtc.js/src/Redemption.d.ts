/// <reference types="node" />
import { EventEmitter } from "events";
import type { DepositBaseClass, RedemptionDetails } from './CommonTypes';
export interface AutoSubmitState {
    broadcastTransactionID: Promise<string>;
    confirmations: Promise<{
        transactionID: string;
        requiredConfirmations: number;
    }>;
    proofTransaction: Promise<void>;
}
export interface UnsignedTransactionDetails {
    hex: string;
    digest: string;
}
export default class Redemption {
    deposit: DepositBaseClass;
    redemptionDetails: Promise<RedemptionDetails>;
    unsignedTransactionDetails: Promise<UnsignedTransactionDetails>;
    signedTransaction: Promise<string>;
    withdrawnEmitter: EventEmitter;
    receivedConfirmationEmitter: EventEmitter;
    constructor(deposit: DepositBaseClass, redemptionDetails?: RedemptionDetails);
    autoSubmittingState?: AutoSubmitState;
    autoSubmit(): AutoSubmitState;
    proveWithdrawal(transactionID: string, confirmations: number): Promise<void>;
    onBitcoinTransactionSigned(transactionHandler: (transaction: string) => void): void;
    onWithdrawn(withdrawalHandler: (txHash: string) => void): void;
    onReceivedConfirmation(onReceivedConfirmationHandler: (transactionID: string, confirmations: number) => void): void;
    getLatestRedemptionDetails(existingRedemptionDetails: RedemptionDetails | undefined): Promise<RedemptionDetails>;
}
