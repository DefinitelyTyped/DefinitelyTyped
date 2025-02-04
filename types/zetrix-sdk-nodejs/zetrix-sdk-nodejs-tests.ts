import ZtxChainSDK = require("zetrix-sdk-nodejs");

// Test instantiation of ZtxChainSDK
const sdk = new ZtxChainSDK({
    host: "https://test-node.zetrix.com",
    secure: true,
});

// Test Account interface
const account: ZtxChainSDK.Account = sdk.account;
const accountResponse: ZtxChainSDK.Response = account.create();
const isValid: ZtxChainSDK.Response = account.checkValid("address");
const accountInfo: ZtxChainSDK.Response = account.getInfo("address");
const balance: ZtxChainSDK.Response = account.getBalance("address");
const nonce: ZtxChainSDK.Response = account.getNonce("address");
const assets: ZtxChainSDK.Response = account.getAssets("address");
const metadata: ZtxChainSDK.Response = account.getMetadata({});
const isActivated: ZtxChainSDK.Response = account.isActivated("address");

// Test Transaction interface
const transaction: ZtxChainSDK.Transaction = sdk.transaction;
const transactionBlob: ZtxChainSDK.Response = transaction.buildBlob({});
const signedTransaction: ZtxChainSDK.Response = transaction.sign({});
const submittedTransaction: ZtxChainSDK.Response = transaction.submit({});
const fee: ZtxChainSDK.Response = transaction.evaluateFee({});
const transactionInfo: ZtxChainSDK.Response = transaction.getInfo("hash");

// Test Token interface
const token: ZtxChainSDK.Token = sdk.token;
const tokenInfo: ZtxChainSDK.Response = token.getInfo({});

// Test Block interface
const block: ZtxChainSDK.Block = sdk.block;
const blockNumber: ZtxChainSDK.Response = block.getNumber();
const blockStatus: ZtxChainSDK.Response = block.checkStatus();
const blockTransactions: ZtxChainSDK.Response = block.getTransactions("1");
const blockInfo: ZtxChainSDK.Response = block.getInfo("1");
const latestBlockInfo: ZtxChainSDK.Response = block.getLatestInfo();
const validators: ZtxChainSDK.Response = block.getValidators("1");
const latestValidators: ZtxChainSDK.Response = block.getLatestValidators();
const latestReward: ZtxChainSDK.Response = block.getLatestReward();
const fees: ZtxChainSDK.Response = block.getFees("1");
const latestFees: ZtxChainSDK.Response = block.getLatestFees();

// Test Operation interface
const operation: ZtxChainSDK.Operation = sdk.operation;
const accountActivate: ZtxChainSDK.Response = operation.accountActivateOperation({});
const accountSetMetadata: ZtxChainSDK.Response = operation.accountSetMetadataOperation({});
const accountSetPrivilege: ZtxChainSDK.Response = operation.accountSetPrivilegeOperation({});
const assetIssue: ZtxChainSDK.Response = operation.assetIssueOperation({});
const assetSend: ZtxChainSDK.Response = operation.assetSendOperation({});
const contractCreate: ZtxChainSDK.Response = operation.contractCreateOperation({});
const contractInvokeByAsset: ZtxChainSDK.Response = operation.contractInvokeByAssetOperation({});
const contractInvokeByGas: ZtxChainSDK.Response = operation.contractInvokeByGasOperation({});
const gasSend: ZtxChainSDK.Response = operation.gasSendOperation({});
const logCreate: ZtxChainSDK.Response = operation.logCreateOperation({});

// Test Contract interface
const contract: ZtxChainSDK.Contract = sdk.contract;
const contractInfo: ZtxChainSDK.Response = contract.getInfo("contractAddress");
const contractValid: ZtxChainSDK.Response = contract.checkValid("contractAddress");
const contractCall: ZtxChainSDK.Response = contract.call({});
const contractAddress: ZtxChainSDK.Response = contract.getAddress("hash");
