import { ethers } from "ethers";

export = CPK;

declare namespace CPK {
    interface NetworkConfigEntry {
        masterCopyAddress: string;
        proxyFactoryAddress: string;
        multiSendAddress: string;
        fallbackHandlerAddress: string;
    }

    interface CommonConfig {
        networks?: {
            [id: string]: NetworkConfigEntry;
        } | undefined;
    }

    interface Web3SpecificConfig extends CommonConfig {
        web3: object;
        ownerAccount?: string | undefined;
    }

    interface EthersSpecificConfig extends CommonConfig {
        ethers: typeof ethers;
        signer: ethers.Signer;
    }

    type CPKConfig = Web3SpecificConfig | EthersSpecificConfig;

    interface Transaction {
        operation: number | string | object;
        to: string;
        value: number | string | object;
        data: string;
    }

    type TransactionOptions = object;

    interface TransactionResult {
        hash: string;
        promiEvent?: object | undefined;
        transactionResponse?: ethers.providers.TransactionResponse | undefined;
    }
}

declare class CPK {
    static CALL: 0;
    static DELEGATECALL: 1;

    static create(opts: CPK.CPKConfig): Promise<CPK>;

    getOwnerAccount(): Promise<string>;
    get address(): string;
    execTransactions(
        transactions: ReadonlyArray<CPK.Transaction>,
        options?: CPK.TransactionOptions,
    ): Promise<CPK.TransactionResult>;
}
