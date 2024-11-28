"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ZtxChainSDK = require("zetrix-sdk-nodejs");
// Test instantiation of ZtxChainSDK
var sdk = new ZtxChainSDK({
    host: "https://test-node.zetrix.com",
    secure: true,
});
// Test Account interface
var account = sdk.account;
var accountResponse = account.create();
var isValid = account.checkValid("address");
var accountInfo = account.getInfo("address");
var balance = account.getBalance("address");
var nonce = account.getNonce("address");
var assets = account.getAssets("address");
var metadata = account.getMetadata({});
var isActivated = account.isActivated("address");
// Test Transaction interface
var transaction = sdk.transaction;
var transactionBlob = transaction.buildBlob({});
var signedTransaction = transaction.sign({});
var submittedTransaction = transaction.submit({});
var fee = transaction.evaluateFee({});
var transactionInfo = transaction.getInfo("hash");
// Test Token interface
var token = sdk.token;
var tokenInfo = token.getInfo({});
// Test Block interface
var block = sdk.block;
var blockNumber = block.getNumber();
var blockStatus = block.checkStatus();
var blockTransactions = block.getTransactions(1);
var blockInfo = block.getInfo(1);
var latestBlockInfo = block.getLatestInfo();
var validators = block.getValidators(1);
var latestValidators = block.getLatestValidators();
var latestReward = block.getLatestReward();
var fees = block.getFees(1);
var latestFees = block.getLatestFees();
// Test Operation interface
var operation = sdk.operation;
var accountActivate = operation.accountActivateOperation({});
var accountSetMetadata = operation.accountSetMetadataOperation({});
var accountSetPrivilege = operation.accountSetPrivilegeOperation({});
var assetIssue = operation.assetIssueOperation({});
var assetSend = operation.assetSendOperation({});
var contractCreate = operation.contractCreateOperation({});
var contractInvokeByAsset = operation.contractInvokeByAssetOperation({});
var contractInvokeByGas = operation.contractInvokeByGasOperation({});
var gasSend = operation.gasSendOperation({});
var logCreate = operation.logCreateOperation({});
// Test Contract interface
var contract = sdk.contract;
var contractInfo = contract.getInfo("contractAddress");
var contractValid = contract.checkValid("contractAddress");
var contractCall = contract.call({});
var contractAddress = contract.getAddress("hash");
