// Type definitions for TronWeb 1.0
// Project: https://www.npmjs.com/package/tronweb
// Definitions by: Shamsudin Serderov <https://github.com/iexbase>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export class TronWeb {
    trx: Trx;
    transactionBuilder: TransactionBuilder;

    constructor(fullNode: any, solidityNode: any, eventServer?: any, privateKey?: string);
    contract(...args: any[]): any;
    currentProvider(): any;
    currentProviders(): any;
    getEventByTransactionID(transactionID: string, callback?: any): any;
    getEventResult(...args: any[]): any;
    isConnected(callback?: any): any;
    isValidProvider(provider: any): any;
    setAddress(address: string): void;
    setDefaultBlock(blockID: any): any;
    setEventServer(eventServer: any): any;
    setFullNode(fullNode: any): void;
    setPrivateKey(privateKey: any): void;
    setSolidityNode(solidityNode: any): void;
    createAccount(callback?: any): Promise<any>;
    fromAscii(string: any, padding: any): any;
    fromDecimal(value: any): any;
    fromSun(sun: number): any;
    fromUtf8(string: any): any;
    isAddress(address: string): any;
    sha3(string: any, prefix?: boolean): any;
    toAscii(hex: any): any;
    toBigNumber(amount: number): any;
    toDecimal(value: any): any;
    toHex(val: any): any;
    toSun(trx: number): any;
    toUtf8(hex: any): any;
}

export class TransactionBuilder {
    sendTrx(to: any, amount: any, from: any, callback?: any): Promise<any>;
    sendToken(to: any, amount: any, tokenID: any, from: any, callback?: any): Promise<any>;
    purchaseToken(issuerAddress: any, tokenID: any, amount: any, buyer: any, callback?: any): Promise<any>;
    freezeBalance(amount: any, duration: number, resource: string, address: any, callback?: any): Promise<any>;
    unfreezeBalance(resource: string, address: any, callback?: any): Promise<any>;
    withdrawBlockRewards(address: any, callback?: any): Promise<any>;
    applyForSR(address: any, url: any, callback?: any): Promise<any>;
    vote(votes: any, voterAddress: any, callback?: any): Promise<any>;
    createToken(options: any, issuerAddress: any, callback?: any): Promise<any>;
    updateAccount(accountName: any, address: any, callback?: any): Promise<any>;
    updateToken(options: any, issuerAddress: any, callback?: any): Promise<any>;
    sendAsset(...args: any[]): Promise<any>;
    purchaseAsset(...args: any[]): Promise<any>;
    createAsset(...args: any[]): Promise<any>;
    updateAsset(...args: any[]): Promise<any>;
    createProposal(parameters: any, issuerAddress: any, callback?: any): Promise<any>;
    deleteProposal(proposalID: any, issuerAddress: any, callback?: any): Promise<any>;
    voteProposal(proposalID: any, isApproval: any, voterAddress: any, callback?: any): Promise<any>;
    createTRXExchange(tokenName: any, tokenBalance: any, trxBalance: any, ownerAddress: any): Promise<any>;
    createTokenExchange(firstTokenName: any, firstTokenBalance: any, secondTokenName: any, secondTokenBalance: any, ownerAddress: any, callback?: any): Promise<any>;
    injectExchangeTokens(exchangeID: any, tokenName: any, tokenAmount: any, ownerAddress: any, callback?: any): Promise<any>;
    withdrawExchangeTokens(exchangeID: any, tokenName: any, tokenAmount: any, ownerAddress: any, callback?: any): Promise<any>;
    tradeExchangeTokens(exchangeID: any, tokenName: any, tokenAmountSold: any, tokenAmountExpected: any, ownerAddress: any, callback?: any): Promise<any>;
}
export class Trx {
    parseToken(token: any): any;
    getCurrentBlock(callback?: any): Promise<any>;
    getBlock(block: any, callback?: any): Promise<any>;
    getBlockByHash(blockHash: any, callback?: any): Promise<any>;
    getBlockByNumber(blockID: any, callback?: any): Promise<any>;
    getBlockTransactionCount(block: any, callback?: any): Promise<any>;
    getTransactionFromBlock(block: any, index: number, callback?: any): Promise<any>;
    getTransaction(transactionID: any, callback?: any): Promise<any>;
    getConfirmedTransaction(transactionID: any, callback?: any): Promise<any>;
    getTransactionInfo(transactionID: any, callback?: any): Promise<any>;
    getTransactionsToAddress(address: any, limit: number, offset: number, callback?: any): Promise<any>;
    getTransactionsFromAddress(address: any, limit: number, offset: number, callback?: any): Promise<any>;
    getTransactionsRelated(address: any, direction: any, limit: number, offset: number, callback?: any): Promise<any>;
    getAccount(address: any, callback?: any): Promise<any>;
    getBalance(address: any, callback?: any): Promise<any>;
    getUnconfirmedAccount(address: any, callback?: any): Promise<any>;
    getUnconfirmedBalance(address: any, callback?: any): Promise<any>;
    getBandwidth(address: any, callback?: any): Promise<any>;
    getTokensIssuedByAddress(address: any, callback?: any): Promise<any>;
    getTokenFromID(tokenID: any, callback?: any): Promise<any>;
    listNodes(callback?: any): Promise<any>;
    getBlockRange(start: number, end: number, callback?: any): Promise<any>;
    listSuperRepresentatives(callback?: any): Promise<any>;
    listTokens(limit?: number, offset?: number, callback?: any): Promise<any>;
    timeUntilNextVoteCycle(callback?: any): Promise<any>;
    getContract(contractAddress: any, callback?: any): Promise<any>;
    verifyMessage(message: any, signature: any, address: any, useTronHeader: any, callback?: any): Promise<any>;
    sign(transaction: any, privateKey: any, useTronHeader: boolean, callback?: any): Promise<any>;
    sendRawTransaction(signedTransaction: any, options: any, callback?: any): Promise<any>;
    sendTransaction(to: any, amount: any, options: any, callback?: any): Promise<any>;
    sendToken(to: any, amount: any, tokenID: any, options: any, callback?: any): Promise<any>;
    freezeBalance(amount: any, duration: number, resource: string, options: any, callback?: any): Promise<any>;
    unfreezeBalance(resource: string, options: any, callback?: any): Promise<any>;
    updateAccount(accountName: string, options: any,  callback?: any): Promise<any>;
    signMessage(...args: any[]): Promise<any>;
    sendAsset(...args: any[]): Promise<any>;
    send(...args: any[]): Promise<any>;
    sendTrx(...args: any[]): Promise<any>;
    broadcast(...args: any[]): Promise<any>;
    signTransaction(...args: any[]): Promise<any>;
    getProposal(proposalID: any, callback?: any): Promise<any>;
    listProposals(callback: any): Promise<any>;
    getChainParameters(callback: any): Promise<any>;
    getAccountResources(address: any, callback?: any): Promise<any>;
    getExchangeByID(exchangeID: any, callback?: any): Promise<any>;
    listExchanges(callback?: any): Promise<any>;
    listExchangesPaginated(limit: number, offset: number, callback?: any): Promise<any>;
}

