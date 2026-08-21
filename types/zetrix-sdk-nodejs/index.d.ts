export = ZtxChainSDK;

declare class ZtxChainSDK {
    constructor(options: ZtxChainSDK.Options);

    account: ZtxChainSDK.Account;
    transaction: ZtxChainSDK.Transaction;
    token: ZtxChainSDK.Token;
    block: ZtxChainSDK.Block;
    operation: ZtxChainSDK.Operation;
    contract: ZtxChainSDK.Contract;
}

declare namespace ZtxChainSDK {
    interface Options {
        inited?: boolean;
        host: string;
        chainId?: number | bigint;
        timeout?: number;
        secure: boolean;
    }

    interface Account {
        create(): Response;

        checkValid(address: string): Response;

        getInfo(address: string): Response;

        getBalance(address: string): Response;

        getNonce(address: string): Response;

        getAssets(address: string): Response;

        getMetadata(args: any): Response;

        isActivated(address: string): Response;
    }

    interface Transaction {
        buildBlob(args: any): Response;

        sign(args: any): Response;

        submit(args: any): Response;

        evaluateFee(args: any): Response;

        getInfo(hash: string): Response;
    }

    interface Token {
        getInfo(args: any): Response;
    }

    interface Block {
        getNumber(): Response;

        checkStatus(): Response;

        getTransactions(blockNumber: string): Response;

        getInfo(blockNumber: string): Response;

        getLatestInfo(): Response;

        getValidators(blockNumber: string): Response;

        getLatestValidators(): Response;

        getLatestReward(): Response;

        getFees(blockNumber: string): Response;

        getLatestFees(): Response;
    }

    interface Operation {
        // Account
        accountActivateOperation(args: any): Response;

        accountSetMetadataOperation(args: any): Response;

        accountSetPrivilegeOperation(args: any): Response;

        // Asset
        assetIssueOperation(args: any): Response;

        assetSendOperation(args: any): Response;

        // Contract
        contractCreateOperation(args: any): Response;

        contractInvokeByAssetOperation(args: any): Response;

        contractInvokeByGasOperation(args: any): Response;

        // Gas
        gasSendOperation(args: any): Response;

        // Logs
        logCreateOperation(args: any): Response;
    }

    interface Contract {
        getInfo(contractAddress: string): Response;

        checkValid(contractAddress: string): Response;

        call(args: any): Response;

        getAddress(hash: string): Response;
    }

    interface Response {
        result: any;
        errorCode: any;
        errorDesc: any;
    }
}
