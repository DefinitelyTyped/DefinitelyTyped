/// <reference types="node" />
import type { Proof } from './lib/BitcoinSPV';
import ElectrumClient from "./lib/ElectrumClient.js";
import type { Config as ElectrumConfig } from "./lib/ElectrumClient";
import BN = require("bn.js");
export type BitcoinNetworkType = "testnet" | "main" | "simnet";

export interface FoundTransaction {
    transactionID: string;
    outputPosition: number;
    value: number;
}
export interface ParsedTransaction {
    version: string;
    txInVector: string;
    txOutVector: string;
    locktime: string;
}
export interface SPVProof extends Proof {
    parsedTransaction: ParsedTransaction;
}
export default interface BitcoinHelpers {
    satoshisPerBtc: BN;
    Network: {
        TESTNET: string;
        MAINNET: string;
        SIMNET: string;
    };
    electrumConfig: ElectrumConfig | null;
    setElectrumConfig: (newConfig: ElectrumConfig) => void;
    signatureDER: (r: string, s: string) => Buffer;
    publicKeyPointToPublicKeyString: (publicKeyX: string, publicKeyY: string) => string;
    Address: {
        pubKeyHashFrom: (address: string) => Buffer | null;
        publicKeyPointToP2WPKHAddress: (publicKeyX: string, publicKeyY: string, bitcoinNetwork: BitcoinNetworkType) => string;
        pubKeyHashToBech32: (pubKeyHash: string, network: BitcoinNetworkType) => string;
        publicKeyToP2WPKHAddress: (publicKeyString: string, network: BitcoinNetworkType) => string;
        toScript: (address: string) => string;
        toRawScript: (address: string) => Buffer;
    };
    withElectrumClient: <T>(block: (client: ElectrumClient) => Promise<T>) => Promise<T>;
    Transaction: {
        find: (bitcoinAddress: string, expectedValue: number) => Promise<FoundTransaction>;
        findScript: (outputScript: string, expectedValue: number) => Promise<FoundTransaction>;
        findOrWaitFor: (bitcoinAddress: string, expectedValue: number) => Promise<FoundTransaction>;
        checkForConfirmations: (transactionID: string, requiredConfirmations: number) => Promise<number>;
        waitForConfirmations: (transactionID: string, requiredConfirmations: number, onReceivedConfirmation: (tx: {
            transactionID: string;
            confirmations: number;
        }) => void) => Promise<number>;
        estimateFee: (tbtcConstantsContract: any) => Promise<number>;
        getSPVProof: (transactionID: string, confirmations: number) => Promise<SPVProof>;
        broadcast: (signedTransaction: string) => Promise<{
            transactionID: string;
        }>;
        addWitnessSignature: (unsignedTransaction: string, inputIndex: number, r: string, s: string, publicKey: string) => string;
        constructOneInputOneOutputWitnessTransaction(previousOutpoint: string, inputSequence: number, outputValue: number, outputScript: string): string;
        findAllUnspent: (bitcoinAddress: string) => Promise<FoundTransaction[]>;
        getBalance: (bitcoinAddress: string) => Promise<number>;
        findWithClient: (electrumClient: ElectrumClient, receiverScript: string, expectedValue: number) => Promise<FoundTransaction | undefined>;
        findAllUnspentWithClient: (electrumClient: ElectrumClient, receiverScript: string) => Promise<FoundTransaction[]>;
    };
}
